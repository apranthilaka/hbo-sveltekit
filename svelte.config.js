import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: '404.html',
        }),
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/hbo-sveltekit' : '',
            relative: false, // <--- ADD THIS LINE
        },
    },
};

export default config;
