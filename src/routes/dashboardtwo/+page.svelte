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

<div
    class="dashboard-title h-17.5 pb-0 flex items-center justify-between pr-6 pl-6"
>
    <div class="font-medium text-lg">Dashboard Title</div>

    <div class="w-50">
        <!-- <label
                for="location"
                class="block text-sm font-medium text-gray-700">Location</label
            > -->
        <select
            id="location"
            name="location"
            class=" block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
            <option>United States</option>
            <option selected>Canada</option>
            <option>Mexico</option>
        </select>
    </div>
</div>
<div>{console.log(entities)}</div>
<div class="card-container pl-6 pr-6 pb-6 bt-0">
    <div class="card-container_cards">
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
