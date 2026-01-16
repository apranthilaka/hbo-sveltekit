import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        // Cloudflare adapter requires zero config for basic SSR
        adapter: adapter(),

        // Removed 'paths' because Cloudflare typically hosts
        // at the root of the domain/subdomain.
        paths: {
            base: '',
        },
    },
};

export default config;
