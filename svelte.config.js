import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        // adapter-static is required for GitHub Pages
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: '404.html', // Allows for SPA-like routing on GitHub
            precompress: false,
            strict: true,
        }),
        paths: {
            // Replace 'your-repo-name' with your actual repository name
            // If you are using a custom domain (e.g. www.example.com), set this to ''
            base: process.argv.includes('dev') ? '' : '/hbo-sveltekit',
        },
    },
};

export default config;
