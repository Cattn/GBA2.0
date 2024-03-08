import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess({})],

	kit: {
		adapter: adapter(),
	},
	paths: {
		"$lib": ["./src/lib"],
		"$lib/*": ["./src/lib/*"],
		base:`/gba-svelte-beta`,
	},
	alias: {
		lib: "src/lib",
	},
};

export default config;
