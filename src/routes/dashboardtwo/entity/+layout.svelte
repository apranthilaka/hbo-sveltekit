<script>
    import { page } from '$app/state';
    import { base } from '$app/paths';

    let { children } = $props();

    // 1. Logic for Breadcrumb and Active State
    let entityName = $derived(page.url.searchParams.get('name') || 'Entity');
    let pathname = $derived(page.url.pathname.replace(/\/$/, ''));

    // Ensure this matches your ACTUAL folder name (dashboardtwo)
    const rootPath = `${base}/dashboardtwo/entity`;

    // 2. Styles
    let activeTabStyles =
        'text-neutral-900 pl-6 pr-6 border-t border-l border-r border-emerald-200 rounded-t-sm h-[40px] flex items-center justify-center bg-emerald-50';
    let defaultTabStyle =
        'text-neutral-500 pl-6 pr-6 border border-neutral-300 rounded-t-sm h-[40px] flex items-center justify-center hover:bg-red-100 transition-all duration-400';
</script>

<div
    class="group h-17.5 pl-6 pr-6 flex flex-row items-center justify-start gap-2 border-b border-neutral-300"
>
    <a
        class="group-hover:text-neutral-900 group-hover:underline text-neutral-400 transition duration-200"
        href="{base}/dashboardtwo"
    >
        Back to dashboard
    </a>
    <span>/</span>
    <span style="font-weight: bold;">{entityName}</span>
</div>

<nav class="flex items-start border-b pl-6 pr-6 pt-6 border-emerald-600">
    <a
        href="{rootPath}?name={entityName}"
        class={pathname === rootPath ? activeTabStyles : defaultTabStyle}
    >
        Tab 1
    </a>

    <a
        href="{rootPath}/tabtwo?name={entityName}"
        class={pathname === `${rootPath}/tabtwo`
            ? activeTabStyles
            : defaultTabStyle}
    >
        Tab 2
    </a>

    <a
        href="{rootPath}/tabthree?name={entityName}"
        class={pathname === `${rootPath}/tabthree`
            ? activeTabStyles
            : defaultTabStyle}
    >
        Tab 3
    </a>
</nav>

<main class="p-6">
    {@render children()}
</main>
