import { mdsvex } from 'mdsvex';
import path from 'path';
import adapter from '@sveltejs/adapter-auto'; // Or another adapter if needed
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Enable preprocessing of Svelte and MDX files
  preprocess: [
    vitePreprocess(),   // For using Vite with SvelteKit
    mdsvex(),           // To handle .svx files (Svelte + Markdown)
    sveltePreprocess(), // Additional preprocessor (e.g., SCSS, TypeScript)
  ],

  kit: {
    // Adapter settings to handle deployment to different environments
    // adapter: adapter({
    //   runtime: 'nodejs18.x', // Custom runtime (if using AWS Lambda or similar)
    // }),
		adapter: adapterStatic(),
		prerender: {
			entries: [
				'*', // Include all static pages
				'/product/tote-serena', // Manually add dynamic pages for prerendering
			],
		},

    // Configure path aliases for cleaner imports
    alias: {
      $lib: path.resolve('src/lib'),
      $components: path.resolve('src/components'),
      $routes: path.resolve('src/routes')
    },

    // Prerendering configuration (optional)
    // prerender: {
    //   default: true, // Automatically prerender pages if possible
    // },

    // Typescript configuration (optional)
    typescript: {
      configFile: './tsconfig.json', // Path to TypeScript config file
    },

    // Ensure .svelte and .svx extensions are handled by SvelteKit
    extensions: ['.svelte', '.svx'],
  },
};

export default config;

