<script>
    import { page } from '$app/state';
    import { base } from '$app/paths';

    let { children } = $props();

    // Derive name for breadcrumb
    let entityName = $derived(page.url.searchParams.get('name') || 'Entity');

    // Standardize pathname for active link checking
    let pathname = $derived(page.url.pathname);

    const rootPath = `${base}/dashboardtwo/entityme/`;

    // Helper to keep the name in the URL when switching pages
    function getUrl(path) {
        return `${path}?name=${encodeURIComponent(entityName)}`;
    }

    let activeTabStyles =
        'text-neutral-900 pl-6 pr-6   border-emerald-200 rounded-t-sm h-[40px] flex items-center justify-center bg-emerald-50 bg-neutral-900 text-white';
    let defaultTabStyle =
        'text-neutral-700 pl-6 pr-6  border border-neutral-300 rounded-t-sm h-[40px] flex items-center justify-center hover:bg-gray-100 transition-all duration-400';
</script>

<div
    class="border-b border-neutral-300 w-full bg-white flex items-start justify-center h-auto"
>
    <div
        class="responsive-wrapper w-full max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl gap-6 flex-col h-auto"
    >
        <!-- breadcrumb  -->
        <div class="  flex items-center justify-start gap-2 w-full min-h-20">
            <a
                class="text-gray-500 hover:underline text-sm"
                href="{base}/dashboardtwo/">Back to dashboard</a
            >
            <span>/</span>
            <span class="font-medium text-sm">{entityName + ' Entity'} </span>
        </div>
        <!-- breadcrumb  -->

        <!-- tabs  -->

        <nav class="flex items-center w-full text-sm">
            <a
                href={getUrl(rootPath)}
                class={pathname === rootPath
                    ? activeTabStyles
                    : defaultTabStyle}>Entity Details</a
            >

            <a
                href={getUrl(`${rootPath}tabtwo/`)}
                class={pathname.includes('/tabtwo/')
                    ? activeTabStyles
                    : defaultTabStyle}>Portfolio Management</a
            >

            <a
                href={getUrl(`${rootPath}tabthree/`)}
                class={pathname.includes('/tabthree/')
                    ? activeTabStyles
                    : defaultTabStyle}>Blueprints</a
            >
            <a href="#" class={defaultTabStyle}>Data Requests</a>
            <a href="#" class={defaultTabStyle}>Settings</a>
            <a href="#" class={defaultTabStyle}>Documents</a>
            <a href="#" class={defaultTabStyle}>Notes</a>
        </nav>
        <!-- tabs  -->
    </div>
</div>

{@render children()}
