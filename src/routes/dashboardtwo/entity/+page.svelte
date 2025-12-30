<script>
    import { page } from '$app/state';

    // Derived state: automatically updates when the URL changes
    let activeTab = $derived(page.url.searchParams.get('tab') || '1');
</script>

<div>
    <a href="/dashboardtwo">Entity Page</a>
</div>

{#if activeTab === '1'}
    <div>Tab 1 Content</div>
{:else if activeTab === '2'}
    <div>Tab 2 Details</div>
{:else if activeTab === '3'}
    <div>Tab 3 Details</div>
{/if}
