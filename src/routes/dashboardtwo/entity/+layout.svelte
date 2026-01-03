<script>
    import { page } from '$app/state';
    import { base } from '$app/paths';

    let { children } = $props();

    // Derive name for breadcrumb
    let entityName = $derived(page.url.searchParams.get('name') || 'Entity');

    // Standardize pathname for active link checking
    let pathname = $derived(page.url.pathname);

    const rootPath = `${base}/dashboardtwo/entity/`;

    // Helper to keep the name in the URL when switching pages
    function getUrl(path) {
        return `${path}?name=${encodeURIComponent(entityName)}`;
    }

    let activeTabStyles =
        'text-neutral-900 pl-6 pr-6 border-t border-l border-r border-emerald-200 rounded-t-sm h-[40px] flex items-center justify-center bg-emerald-50';
    let defaultTabStyle =
        'text-neutral-500 pl-6 pr-6 border border-neutral-300 rounded-t-sm h-[40px] flex items-center justify-center hover:bg-red-100 transition-all duration-400';
</script>

<div class="h-17.5 px-6 flex items-center gap-2 border-b border-neutral-300">
    <a class="text-neutral-400 hover:underline" href="{base}/dashboardtwo/"
        >Back to dashboard</a
    >
    <span>/</span>
    <span class="font-bold">{entityName + ' Entity'} </span>
</div>

<nav class="flex items-start border-b px-6 pt-6 border-emerald-600">
    <a
        href={getUrl(rootPath)}
        class={pathname === rootPath ? activeTabStyles : defaultTabStyle}
        >Tab 1</a
    >

    <a
        href={getUrl(`${rootPath}tabtwo/`)}
        class={pathname.includes('/tabtwo/')
            ? activeTabStyles
            : defaultTabStyle}>Tab 2</a
    >

    <a
        href={getUrl(`${rootPath}tabthree/`)}
        class={pathname.includes('/tabthree/')
            ? activeTabStyles
            : defaultTabStyle}>Tab 3</a
    >
</nav>

<main class="p-6">
    {@render children()}
</main>
