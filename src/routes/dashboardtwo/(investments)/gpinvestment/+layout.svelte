<script>
    import { page } from '$app/state';
    import { base } from '$app/paths';

    let { children } = $props();

    // 1. Derive current URL info
    let entityName = $derived(page.url.searchParams.get('entityName') || 'gp');
    let pathname = $derived(page.url.pathname);

    // 2. Define absolute paths to prevent "broken" links
    // This points to: /dashboardtwo/gpinvestment/
    const rootPath = `${base}/dashboardtwo/gpinvestment`;

    // This points to the parent view: /dashboardtwo/entitygp/tabtwo/
    const gpHome = `${base}/dashboardtwo/entitygp/tabtwo/`;

    // 3. Helper to preserve the query parameter
    function getUrl(path) {
        // Ensure we don't end up with double slashes //
        const cleanPath = path.endsWith('/') ? path : `${path}/`;
        return `${cleanPath}?name=${encodeURIComponent(entityName)}`;
    }

    function goBack(path) {
        // Ensure we don't end up with double slashes //
        const cleanPath = path.endsWith('/') ? path : `${path}/`;
        return `${cleanPath}?entityName=${encodeURIComponent(entityName)}`;
    }

    let activeTabStyles =
        'text-neutral-900 pl-6 pr-6 border-emerald-200 rounded-t-sm h-[40px] flex items-center justify-center bg-emerald-50 bg-neutral-900 text-white';
    let defaultTabStyle =
        'text-neutral-700 pl-6 pr-6 border border-neutral-300 rounded-t-sm h-[40px] flex items-center justify-center hover:bg-gray-100 transition-all duration-400';
</script>

<div
    class="border-b border-neutral-300 w-full bg-white flex items-start justify-center h-auto"
>
    <div
        class="responsive-wrapper w-full max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl gap-6 flex-col h-auto"
    >
        <div class="flex items-center justify-start gap-2 w-full min-h-20">
            <a
                href={goBack(gpHome)}
                class="text-gray-500 hover:underline text-sm"
            >
                Back to GP
            </a>
            <span>/</span>
            <span class="font-medium text-sm">ABC investment </span>
        </div>

        <nav class="flex items-center w-full text-sm">
            <a
                href={getUrl(rootPath)}
                class={pathname === rootPath || pathname === `${rootPath}/`
                    ? activeTabStyles
                    : defaultTabStyle}>Investment Details</a
            >

            <a
                href={getUrl(`${rootPath}/tabtwo`)}
                class={pathname.includes('/tabtwo')
                    ? activeTabStyles
                    : defaultTabStyle}>Data Requests</a
            >
            <a
                href={getUrl(`${rootPath}/tabthree`)}
                class={pathname.includes('/tabthree')
                    ? activeTabStyles
                    : defaultTabStyle}>Document</a
            >
            <a
                href={getUrl(`${rootPath}/tabfour`)}
                class={pathname.includes('/tabfour')
                    ? activeTabStyles
                    : defaultTabStyle}>Notes</a
            >

            <a
                href={getUrl(`${rootPath}/tabfive`)}
                class={pathname.includes('/tabfive')
                    ? activeTabStyles
                    : defaultTabStyle}>Settings</a
            >
        </nav>
    </div>
</div>

{@render children()}
