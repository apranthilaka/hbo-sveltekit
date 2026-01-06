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
    ];
</script>

<!-- responsive wrapper  -->
<div
    class=" responsive-wrapper w-full max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl flex overflow-hidden flex-col h-screen mb-6"
>
    <!-- heading  -->
    <div class="text-lg font-medium flex justify-start items-center h-20">
        Sitemap
    </div>
    <!-- heading  -->

    <!-- cards  -->
    <div class="sitemap-cards flex-1 overflow-y-auto">
        {#each cardsData as card}
            <div
                class="border border-neutral-300 w-full shadow-sm hover:shadow-md rounded-lg transition-all bg-white flex flex-col"
            >
                <div
                    class="card_title h-12 border-b border-neutral-300 flex items-center justify-start px-6 gap-2 shrink-0"
                >
                    <div class="pt-1.25">{@html card.icon}</div>
                    <div class="font-medium text-sm">{card.title}</div>
                </div>

                <div class="min-h-[160px] p-6 text-neutral-500">
                    card container content
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
        display: grid;
        /* This makes sure columns are equal and wrap properly */
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        /* Remove min-content to allow rows to stretch items equally */
        grid-template-rows: auto;
        gap: 24px;
        padding-bottom: 2rem;

        /* Hide scrollbar logic remains the same... */
        overflow-y: auto;
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
