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
</script>

<div>
    <a href="{base}/dashboardtwo">👈 Back to dashboard</a>
    <span>/</span>
    <span style="font-weight: bold;">{entityName}</span>
</div>

<nav style="margin-top: 10px; display: flex; gap: 15px;">
    <a
        href={getTabUrl('1')}
        style={activeTab === '1' ? 'text-decoration: underline' : ''}>Tab 1</a
    >
    <a
        href={getTabUrl('2')}
        style={activeTab === '2' ? 'text-decoration: underline' : ''}>Tab 2</a
    >
    <a
        href={getTabUrl('3')}
        style={activeTab === '3' ? 'text-decoration: underline' : ''}>Tab 3</a
    >
</nav>

<hr />

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
