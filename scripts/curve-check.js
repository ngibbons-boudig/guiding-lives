/**
 * Curve clearance check — paste into the browser console on the dev site, or
 * run via the preview tooling. For every element with a large border-radius,
 * measures how close each line of text inside it gets to the curved corners,
 * on each page at several widths. Reports anything closer than MIN px.
 *
 *   await window.curveCheck()          // defaults below
 */
window.curveCheck = async function ({
	pages = ['/', '/our-model/', '/about/', '/policies/', '/thank-you/'],
	widths = [1440, 1280, 1024, 768, 390],
	MIN = 28,
	MIN_RADIUS = 30,
} = {}) {
	const px = (v, size) => (v.endsWith('%') ? (parseFloat(v) / 100) * size : parseFloat(v) || 0);
	const results = [];

	for (const width of widths) {
		for (const page of pages) {
			const f = document.createElement('iframe');
			f.style.cssText = `position:fixed;left:-20000px;top:0;width:${width}px;height:900px;border:0`;
			f.src = page;
			document.body.appendChild(f);
			await new Promise((r) => (f.onload = r));
			await new Promise((r) => setTimeout(r, 300));
			const doc = f.contentDocument;
			const win = f.contentWindow;
			// Measure expandable cards in their open state, as readers will see them.
			doc.querySelectorAll('details').forEach((d) => (d.open = true));
			await new Promise((r) => setTimeout(r, 600));

			for (const el of doc.querySelectorAll('body *')) {
				const cs = win.getComputedStyle(el);
				const b = el.getBoundingClientRect();
				if (!b.width || !b.height) continue;
				const raw = {
					tl: [cs.borderTopLeftRadius, b.width, b.height],
					tr: [cs.borderTopRightRadius, b.width, b.height],
					br: [cs.borderBottomRightRadius, b.width, b.height],
					bl: [cs.borderBottomLeftRadius, b.width, b.height],
				};
				const r = {};
				for (const k in raw) {
					const [v, w, h] = raw[k];
					const parts = v.split(' ');
					r[k] = { x: px(parts[0], w), y: px(parts[1] ?? parts[0], h) };
				}
				// CSS scales radii down when adjacent ones overlap.
				const s = Math.min(
					1,
					b.width / (r.tl.x + r.tr.x || 1),
					b.width / (r.bl.x + r.br.x || 1),
					b.height / (r.tl.y + r.bl.y || 1),
					b.height / (r.tr.y + r.br.y || 1),
				);
				for (const k in r) (r[k].x *= s), (r[k].y *= s);
				if (Math.max(...Object.values(r).map((c) => Math.min(c.x, c.y))) < MIN_RADIUS) continue;

				const corners = {
					tl: { cx: b.left + r.tl.x, cy: b.top + r.tl.y, ...r.tl, sx: -1, sy: -1 },
					tr: { cx: b.right - r.tr.x, cy: b.top + r.tr.y, ...r.tr, sx: 1, sy: -1 },
					br: { cx: b.right - r.br.x, cy: b.bottom - r.br.y, ...r.br, sx: 1, sy: 1 },
					bl: { cx: b.left + r.bl.x, cy: b.bottom - r.bl.y, ...r.bl, sx: -1, sy: 1 },
				};

				const walker = doc.createTreeWalker(el, NodeFilter.SHOW_TEXT);
				let worst = null;
				for (let t; (t = walker.nextNode()); ) {
					if (!t.textContent.trim()) continue;
					const host = t.parentElement;
					if (win.getComputedStyle(host).visibility === 'hidden') continue;
					if (host.closest('.sr-only, [aria-hidden="true"]')) continue;
					const range = doc.createRange();
					range.selectNodeContents(t);
					for (const lr of range.getClientRects()) {
						for (const [name, c] of Object.entries(corners)) {
							if (c.x < MIN_RADIUS || c.y < MIN_RADIUS) continue;
							// The text-box corner that faces this curved corner.
							const qx = c.sx < 0 ? lr.left : lr.right;
							const qy = c.sy < 0 ? lr.top : lr.bottom;
							const dx = (qx - c.cx) * c.sx;
							const dy = (qy - c.cy) * c.sy;
							if (dx <= 0 || dy <= 0) continue; // not in the corner's curved zone
							const norm = Math.sqrt((dx / c.x) ** 2 + (dy / c.y) ** 2);
							const clearance = (1 - norm) * Math.min(c.x, c.y);
							if (!worst || clearance < worst.clearance)
								worst = { clearance, corner: name, text: t.textContent.trim().slice(0, 40) };
						}
					}
				}
				if (worst && worst.clearance < MIN) {
					const id = el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/)[0] : el.tagName.toLowerCase();
					results.push({ width, page, el: id, corner: worst.corner, clearance: Math.round(worst.clearance), text: worst.text });
				}
			}
			f.remove();
		}
	}
	return results;
};
