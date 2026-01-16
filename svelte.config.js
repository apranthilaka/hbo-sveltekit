import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        // adapter-static is required for GitHub Pages
        adapter: adapter({
            // default output directory is 'build'
            pages: 'build',
            assets: 'build',
            fallback: '404.html', // Recommended for SPA behavior on GitHub Pages
            precompress: false,
            strict: true,
        }),

        paths: {
            // Set this to your repository name
            base: process.env.NODE_ENV === 'production' ? '/hbo-sveltekit' : '',
        },
    },
};

export default config;
