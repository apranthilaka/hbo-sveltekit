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
    class="dashboard-title font-medium text-lg h-17.5 pb-0 border-b border-neutral-200 flex items-center justify-between pr-6 pl-6"
>
    <div>Dashboard Title</div>

    <div
        class="relative group w-55 font-normal text-base min-w-2xs text-gray-700"
    >
        <select
            class="  h-9 w-full appearance-none rounded-full border border-gray-300 bg-white px-4 pr-10 text-gray-700 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none cursor-pointer"
        >
            <option value="" disabled selected>Entity type</option>
            <option>Standard Delivery</option>
            <option>Express Shipping</option>
            <option>Overnight Pickup</option>
        </select>

        <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 group-focus-within:text-blue-500"
        >
            <i class="ph ph-caret-down"></i>
        </div>
    </div>
</div>
<div>{console.log(entities)}</div>
<div class="card-container pl-6 pr-6 pb-6 bt-0">
    <div class="card-container_cards pt-6">
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
