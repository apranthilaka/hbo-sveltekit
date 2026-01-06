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

    let isExpand = $state(false);

    function expandDiv() {
        isExpand = !isExpand;
    }
</script>

<div
    class="responsive-wrapper w-full flex flex-col h-screen mb-6 overflow-hidden transition-all duration-500 ease-in-out
    {isExpand
        ? 'max-w-full px-6'
        : 'max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl px-0'}"
>
    <!-- title wrapper  -->
    <div class="dashboard-title w-full flex items-center justify-between h-20">
        <div>
            <div class="font-medium text-lg w-full">Dashboard Title</div>
        </div>

        <div class="w-md flex flex-row items-center justify-end gap-4">
            <select
                id="location"
                name="location"
                class=" block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
                <option>United States</option>
                <option selected>Canada</option>
                <option>Mexico</option>
            </select>
            <a
                href="{base}/dashboardtwo/newentity"
                class="bg-neutral-900 hover:bg-neutral-600 hover:cursor-pointer transition duration-300 ease-in-out ... text-white py-2 px-4 rounded w-[220px] h-[36px] flex justify-center items-center text-sm"
            >
                New Entity
            </a>

            {#if isExpand === false}
                <button
                    class="border rounded-md w-[70px] h-[36px] flex items-center justify-center hover:cursor-pointer"
                    onclick={expandDiv}
                >
                    <i class="ph ph-arrows-out-line-horizontal"></i>
                </button>
            {:else}
                <button
                    class="border rounded-md w-[70px] h-[36px] flex items-center justify-center hover:cursor-pointer"
                    onclick={expandDiv}
                >
                    <i class="ph ph-arrows-in-line-horizontal"></i>
                </button>
            {/if}
        </div>
    </div>
    <!-- title wrapper  -->

    <div class="card-container card-container_cards w-full flex-1">
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
        /* This enables scrolling */
        overflow-y: auto;
        scroll-behavior: smooth;

        /* 1. Hide scrollbar for Chrome, Safari, and Opera */
        &::-webkit-scrollbar {
            display: none;
        }

        /* 2. Hide scrollbar for Firefox */
        scrollbar-width: none;

        /* 3. Hide scrollbar for IE, Edge */
        -ms-overflow-style: none;

        &_cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            grid-template-rows: min-content;
            gap: 16px;
        }
    }
</style>
