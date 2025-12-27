<script>
    import { base } from '$app/paths';
    import Card from '$lib/components/Card.svelte';

    // 1. DATA FOR THE CARDS
    const entities = [
        { title: 'Nebula Nexus', typeClass: 'card--gp' },
        { title: 'Solaris Systems', typeClass: 'card--lp' },
        { title: 'Luna Logistics', typeClass: 'card--cp' },
        { title: 'Meteor Media', typeClass: 'card--me' },
    ];
</script>

<div class="dashboard-wrapper">
    <header class="dashboard-header">
        <h1>Entity Dashboard</h1>
    </header>

    <main class="dashboard-content">
        <div class="card-grid">
            {#each entities as entity}
                <Card
                    title={entity.title}
                    entityTypeClass={entity.typeClass}
                    titleLink="{base}/dashboard/gp?name={encodeURIComponent(
                        entity.title
                    )}"
                />
            {/each}
        </div>
    </main>
</div>

<style>
    .dashboard-wrapper {
        padding: 2rem;
        max-width: 1200px;
        margin: 0 auto;
        font-family: sans-serif;
    }

    .dashboard-header {
        margin-bottom: 2rem;
    }

    h1 {
        font-size: 24px;
        font-weight: 700;
        margin: 0;
    }

    /* GRID FOR CARDS */
    .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1.5rem;
    }
</style>
