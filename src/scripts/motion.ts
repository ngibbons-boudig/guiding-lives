/**
 * Scroll motion: reveal-on-scroll, gentle photo parallax and the compact
 * header. Styles live in src/styles/motion.css.
 *
 *   data-reveal            fades/rises in when scrolled into view
 *   data-stagger           each direct child reveals in turn
 *   data-parallax="0.12"   drifts at that fraction of scroll speed
 */
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Stagger: children reveal one after another, capped so long lists don't drag.
document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((group) => {
	[...group.children].forEach((child, i) => {
		const el = child as HTMLElement;
		if (!el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', '');
		el.style.setProperty('--d', `${Math.min(i, 8) * 90}ms`);
	});
});

let pending = [...document.querySelectorAll<HTMLElement>('[data-reveal], .rule')];
const show = (el: Element) => el.classList.add('in');
let io: IntersectionObserver | null = null;
if (reduce || !('IntersectionObserver' in window)) {
	pending.forEach(show);
	pending = [];
} else {
	io = new IntersectionObserver(
		(entries) => {
			for (const e of entries) {
				if (!e.isIntersecting) continue;
				show(e.target);
				io!.unobserve(e.target);
			}
		},
		{ rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
	);
	pending.forEach((el) => io!.observe(el));
}

// A fast flick can carry an element past the viewport between observer
// callbacks; anything that has reached the fold is shown regardless.
function catchUp(vh: number) {
	if (!pending.length) return;
	pending = pending.filter((el) => {
		if (el.classList.contains('in')) return false;
		if (el.getBoundingClientRect().top < vh * 0.92) {
			show(el);
			io?.unobserve(el);
			return false;
		}
		return true;
	});
}

// Parallax + header state, batched into one frame per scroll.
const parallax = reduce ? [] : [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
const header = document.querySelector<HTMLElement>('.site-header');
let ticking = false;

function update() {
	ticking = false;
	const vh = window.innerHeight;
	for (const el of parallax) {
		const host = el.parentElement!;
		const r = host.getBoundingClientRect();
		if (r.bottom < -100 || r.top > vh + 100) continue;
		const speed = parseFloat(el.dataset.parallax || '0.1');
		const offset = (r.top + r.height / 2 - vh / 2) * -speed;
		el.style.translate = `0 ${offset.toFixed(1)}px`;
	}
	header?.classList.toggle('scrolled', window.scrollY > 24);
	catchUp(vh);
}

function onScroll() {
	if (!ticking) {
		ticking = true;
		requestAnimationFrame(update);
	}
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll, { passive: true });
update();
