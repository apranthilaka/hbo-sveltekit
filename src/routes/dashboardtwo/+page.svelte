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

<div class="dashboard-title font-medium text-lg h-17.5 pb-0">
    Dashboard Title
</div>
<div>{console.log(entities)}</div>
<div class="card-container pl-6 pr-6 pb-6 bt-0">
    <div class="card-container_cards pt-0">
        {#each entities as entity}
            <Card
                entityTypeClass={entity.typeClass}
                title={entity.title}
                titleLink="{base}/dashboardtwo/entity?name={encodeURIComponent(
                    entity.title
                )}"
            />
        {/each}
    </div>
</div>

<style lang="scss">
    .dashboard-title {
        flex-shrink: 0;
        // height: 56px;
        padding: 0 24px;
        // border: 1px solid red;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        // border: 1px solid blue;
    }
    .card-container {
        // border: 10px solid rgb(0, 167, 50);

        overflow-y: auto; /* Ensure scrolling is still enabled */
        // padding: 24px;

        /* 1. Hide scrollbar for Chrome, Safari, and newer Edge */
        &::-webkit-scrollbar {
            display: none;
        }

        /* 2. Hide scrollbar for Firefox */
        scrollbar-width: none;

        /* 3. Hide scrollbar for IE and older Edge */
        -ms-overflow-style: none;
        scroll-behavior: smooth;

        flex-grow: 1; /* This tells the green div: "Take up all the space left over after the title" */
        overflow-y: auto;
        // border: 10px solid rgb(0, 167, 50);
        /* Remove height: 100% - flex-grow handles it better here */

        &_cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            grid-template-rows: min-content;
            gap: 16px;
            // height: 100%;
        }
    }
</style>
