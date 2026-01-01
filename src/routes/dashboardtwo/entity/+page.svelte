<script>
    import { page } from '$app/state';
    import { base } from '$app/paths';

    // 1. Extract the 'name' from the URL query parameters
    // This is reactive; if the URL changes, the name updates automatically.
    let entityName = $derived(page.url.searchParams.get('name') || 'Entity');

    // Tab logic
    let activeTab = $derived(page.url.searchParams.get('tab') || '1');
    let activeStep = $state(1);

    function next() {
        activeStep += 1;
    }

    // 2. Helper function to keep the 'name' in the URL when changing tabs
    // Without this, clicking <a href="?tab=2"> would delete the entity name.
    function getTabUrl(tabValue) {
        const newUrl = new URL(page.url);
        newUrl.searchParams.set('tab', tabValue);
        return newUrl.search;
    }

    let acriveTabStyles =
        'text-neutral-900 pl-6 pr-6 border-t border-l border-r border-emerald-200 rounded-t-sm h-[40px] flex items-center justify-center bg-emerald-50';
    let defaultTabStyle =
        'text-neutral-500 pl-6 pr-6 border border-neutral-300 rounded-t-sm h-[40px] flex items-center justify-center hover:bg-red-100 transition-all duration-400';
</script>

<!-- title  -->
<div
    class=" group h-17.5 pl-24px flex flex-row items-center justify-start pl-6 pr-6 gap-2 border-b border-neutral-300"
>
    <a
        class="group-hover:text-neutral-900 group-hover:underline transi duration-200 text-neutral-400"
        href="{base}/dashboardtwo">Back to dashboard</a
    >
    <span>/</span>
    <span style="font-weight: bold;">{entityName}</span>
</div>
<!-- title  -->

<!-- tabs  -->
<nav class="flex items-start border-b pl-6 pr-6 pt-6 border-emerald-600">
    <a
        href={getTabUrl('1')}
        class={activeTab === '1' ? acriveTabStyles : defaultTabStyle}>Tab 1</a
    >
    <a
        href={getTabUrl('2')}
        class={activeTab === '2' ? acriveTabStyles : defaultTabStyle}>Tab 2</a
    >
    <a
        href={getTabUrl('3')}
        class={activeTab === '3' ? acriveTabStyles : defaultTabStyle}>Tab 3</a
    >
</nav>
<!-- tabs  -->

{#if activeTab === '1'}
    <h3>Viewing Details for {entityName}</h3>
    {#if activeStep === 1}
        <div>Tab 1 Content (Step 1)</div>
    {:else if activeStep === 2}
        <div>Tab 1 Details (Step 2)</div>
    {:else if activeStep === 3}
        <div>Tab 1 Final (Step 3)</div>
    {/if}

    {#if activeStep < 3}
        <button onclick={next}>Next</button>
    {/if}
{:else if activeTab === '2'}
    <div>Tab 2 Details for {entityName}</div>
{:else if activeTab === '3'}
    <div>Tab 3 Details for {entityName}</div>
{/if}
