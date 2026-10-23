// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Where the site lives.
 *
 * Canonical links and the sitemap need an absolute address. The host is not
 * chosen yet, so read whatever the build platform provides. `SITE_URL` wins
 * so a real domain can be set once without touching this file.
 */
const deployUrl = () => {
	const { SITE_URL, CONTEXT, DEPLOY_PRIME_URL, URL, VERCEL_URL, CF_PAGES_URL } = process.env;
	if (SITE_URL) return SITE_URL;
	if (CONTEXT === 'production' && URL) return URL;
	if (DEPLOY_PRIME_URL) return DEPLOY_PRIME_URL;
	if (URL) return URL;
	if (VERCEL_URL) return `https://${VERCEL_URL}`;
	if (CF_PAGES_URL) return CF_PAGES_URL;
	return 'http://localhost:4350';
};

// https://astro.build/config
export default defineConfig({
	site: deployUrl(),
	trailingSlash: 'always',
	server: { port: 4350 },

	integrations: [
		sitemap({
			filter: (page) => !/\/thank-you\/?$/.test(page),
		}),
	],

	/**
	 * Stand-in fonts from the design handoff, self-hosted at build time so no
	 * visitor's IP goes to Google. Swap these once Shelley confirms the real
	 * typefaces (see docs/handoff/DESIGN-BRIEF.md, "Open questions").
	 */
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Playfair Display',
			cssVariable: '--font-display',
			weights: [400, 500],
			styles: ['normal', 'italic'],
			subsets: ['latin'],
			fallbacks: ['Georgia', 'serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Jost',
			cssVariable: '--font-sans',
			weights: [300, 400, 500],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['system-ui', 'sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Allura',
			cssVariable: '--font-script',
			weights: [400],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['cursive'],
		},
	],
});
