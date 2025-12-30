// export const prerender = true;
// export const trailingSlash = 'always';
// src/routes/+layout.js

// 1. Keep this true to generate static HTML for SEO/Speed
export const prerender = true;

// 2. Enable 'always' to help GitHub Pages handle sub-folders correctly
export const trailingSlash = 'always';

// 3. Add this if you want to use browser-only globals (like localStorage or window)
// If you set this to false, your app becomes a "pure" SPA.
// export const ssr = false;
