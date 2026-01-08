<script lang="ts">
    import { base } from '$app/paths';
    const cardsData = [
        {
            id: 1,
            title: 'Quick Links',
            icon: '<i class="ph ph-airplay"></i>',
        },
        {
            id: 2,
            title: 'Entities',
            icon: '<i class="ph ph-airplay"></i>',
        },
        {
            id: 3,
            title: 'Company List',
            icon: '<i class="ph ph-airplay"></i>',
        },

        {
            id: 1,
            title: 'Finance Reports',
            icon: '<i class="ph ph-airplay"></i>',
        },
        {
            id: 3,
            title: 'Company List',
            icon: '<i class="ph ph-airplay"></i>',
        },

        {
            id: 1,
            title: 'Finance Reports',
            icon: '<i class="ph ph-airplay"></i>',
        },
        {
            id: 1,
            title: 'Finance Reports',
            icon: '<i class="ph ph-airplay"></i>',
        },
        {
            id: 3,
            title: 'Company List',
            icon: '<i class="ph ph-airplay"></i>',
        },

        {
            id: 1,
            title: 'Finance Reports',
            icon: '<i class="ph ph-airplay"></i>',
        },
    ];

    const cardIcons = [
        { icon: '<i class="ph ph-broadcast"></i>', label: 'Broadcast' },
        { icon: '<i class="ph ph-bank"></i>', label: 'Bank' },
        { icon: '<i class="ph ph-beach-ball"></i>', label: 'Bail' },
        { icon: '<i class="ph ph-book-open-text"></i>', label: 'Open Text' },
        { icon: '<i class="ph ph-calendar-plus"></i>', label: 'Calender Plus' },
        { icon: '<i class="ph ph-car"></i>', label: 'Car Drive' },
    ];

    let isExpand = $state(false);

    function expandDiv() {
        isExpand = !isExpand;
    }
</script>

<!-- responsive wrapper  -->
<div
    class="responsive-wrapper w-full flex flex-col h-screen mb-6 overflow-hidden transition-all duration-500 ease-in-out
    {isExpand
        ? 'max-w-full px-6'
        : 'max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl px-0'}"
>
    <!-- heading  -->
    <div
        class="text-lg font-medium flex items-center h-20 flex justify-between"
    >
        <div>Sitemap</div>

        <div>
            {#if isExpand === false}
                <button
                    class="border rounded-md w-[36px] h-[36px] flex items-center justify-center hover:cursor-pointer"
                    onclick={expandDiv}
                >
                    <i class="ph ph-arrows-out-line-horizontal"></i>
                </button>
            {:else}
                <button
                    class="border rounded-md w-[36px] h-[36px] flex items-center justify-center hover:cursor-pointer"
                    onclick={expandDiv}
                >
                    <i class="ph ph-arrows-in-line-horizontal"></i>
                </button>
            {/if}
        </div>
    </div>
    <!-- heading  -->

    <!-- cards  -->
    <div
        class=" sitemap-cards overflow-y-auto {isExpand
            ? ' gap-6 grid grid-cols-[repeat(auto-fit,minmax(600px,1fr))]'
            : ' gap-6 overflow-hidden grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]'}"
    >
        {#each cardsData as card}
            <div
                class="border border-neutral-300 w-full rounded-lg bg-white flex flex-col"
            >
                <div
                    class="card_title h-12 border-b border-neutral-300 flex items-center justify-start px-6 gap-2 shrink-0"
                >
                    <div class="pt-1.25">{@html card.icon}</div>
                    <div class="font-medium text-sm">{card.title}</div>
                </div>

                <div class="h-auto p-6 text-neutral-500">
                    <div
                        class="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-3"
                    >
                        {#each cardIcons as icon}
                            <div
                                class="border border-gray-300 rounded-lg shadow-sm hover:shadow-lg cursor-pointer flex items-center justify-center flex-col pt-4 pb-4 transition-all delay-75"
                            >
                                <div
                                    class="text-4xl font-normal text-gray-900 mb-1"
                                >
                                    {@html icon.icon}
                                </div>
                                <div class="text-sm">
                                    {icon.label}
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        {/each}
    </div>
    <!-- cards  -->
</div>

<!-- responsive wrapper  -->

<style lang="scss">
    // .sitemap-container {
    //     grid-column: 2/3;
    //     grid-row: 2/3;
    //     overflow: hidden;
    // }

    // .data-wrapper {
    //     display: flex;
    //     flex-direction: column;
    //     height: 100%; /* Ensure the wrapper fills the parent container's height */
    // }

    .sitemap-cards {
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }
        -ms-overflow-style: none;
    }
    // .card {
    //     &_title {
    //         display: flex;
    //         justify-content: flex-start;
    //         align-items: center;
    //     }
    // }
</style>
