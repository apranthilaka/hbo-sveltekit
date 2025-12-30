<script>
    import { page } from '$app/state';
    import { base } from '$app/paths';

    // Derived state: automatically updates when the URL changes
    // let activeTab = $derived(page.url.searchParams.get('tab') || '1');
    let activeTab = $derived(page.url?.searchParams?.get('tab') ?? '1');
</script>

<div>
    <a href="{base}/dashboardtwo">👈 Back to dashboard</a>
</div>
<nav>
    <a href="?tab=1">Tab 1</a>
    <a href="?tab=2">Tab 2</a>
    <a href="?tab=3">Tab 3</a>
</nav>

{#if activeTab === '1'}
    <div>Tab 1 Content</div>
{:else if activeTab === '2'}
    <div>Tab 2 Details</div>
{:else if activeTab === '3'}
    <div>Tab 3 Details</div>
{/if}
