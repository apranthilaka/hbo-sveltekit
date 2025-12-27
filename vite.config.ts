

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

/** @type {import('@sveltejs/kit').Config} */

export default defineConfig({
	plugins: [sveltekit(),     tailwindcss(),
]
});
