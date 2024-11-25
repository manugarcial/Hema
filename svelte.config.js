import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex()],

	kit: {
		adapter: adapter({
			external: [] // External dependencies to bundle
		})
	},

	extensions: ['.svelte', '.svx']
};

export default config;

