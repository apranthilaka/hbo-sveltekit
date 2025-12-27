<script>
    import { base } from '$app/paths';
    import Card from '$lib/components/Card.svelte';

    // 1. DATA FOR THE CARDS
    const entities = [
        { title: 'Nebula Nexus', typeClass: 'card--gp' },
        { title: 'Solaris Systems', typeClass: 'card--lp' },
        { title: 'Luna Logistics', typeClass: 'card--cp' },
        { title: 'Meteor Media', typeClass: 'card--me' },
        { title: 'Nebula Nexus', typeClass: 'card--gp' },
        { title: 'Solaris Systems', typeClass: 'card--lp' },
        { title: 'Luna Logistics', typeClass: 'card--cp' },
        { title: 'Meteor Media', typeClass: 'card--me' },
        { title: 'Nebula Nexus', typeClass: 'card--gp' },
        { title: 'Solaris Systems', typeClass: 'card--lp' },
        { title: 'Luna Logistics', typeClass: 'card--cp' },
        { title: 'Meteor Media', typeClass: 'card--me' },
        { title: 'Nebula Nexus', typeClass: 'card--gp' },
        { title: 'Solaris Systems', typeClass: 'card--lp' },
        { title: 'Luna Logistics', typeClass: 'card--cp' },
        { title: 'Meteor Media', typeClass: 'card--me' },
        { title: 'Nebula Nexus', typeClass: 'card--gp' },
        { title: 'Solaris Systems', typeClass: 'card--lp' },
        { title: 'Luna Logistics', typeClass: 'card--cp' },
        { title: 'Meteor Media', typeClass: 'card--me' },
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
        width: 100%;
        height: 100%;
    }

    .dashboard-header {
        padding: 0 24px;
        height: 56px;
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
        padding: 0 24px;
        overflow: auto;
        height: 100%;
        border: 10px solid red;
    }
</style>
