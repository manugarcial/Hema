import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglide({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		})
	],

	resolve: {
    alias: {
      $stores: path.resolve('./src/stores'),
    },
  },

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},

	// kit: {
  //   vite: {
  //     build: {
  //       sourcemap: true
  //     }
  //   }
  // }
});
