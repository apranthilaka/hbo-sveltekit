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

    let isExpand = $state(true);

    function expandDiv() {
        isExpand = !isExpand;
    }
</script>

<!-- responsive wrapper  -->
<div
    class="  flex flex-col responsive-wrapper w-full h-screen mb-6 overflow-hidden transition-all duration-500 ease-in-out
    {isExpand
        ? 'max-w-full px-6'
        : 'max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl px-0'}"
>
    <!-- heading  -->
    <div
        class="text-lg font-medium flex items-center min-h-20 flex justify-between"
    >
        <div>Sitemap</div>

        <div>
            {#if isExpand === false}
                <button
                    title="asda"
                    class="border rounded-md w-[36px] h-[36px] flex items-center justify-center hover:cursor-pointer"
                    onclick={expandDiv}
                >
                    <i class="ph ph-arrows-out-line-horizontal"></i>
                </button>
            {:else}
                <button
                    title="asda"
                    class="border rounded-md w-[36px] h-[36px] flex items-center justify-center hover:cursor-pointer"
                    onclick={expandDiv}
                >
                    <i class="ph ph-arrows-in-line-horizontal"></i>
                </button>
            {/if}
        </div>
    </div>
    <!-- heading  -->

    <div
        class=" flex flex-col grow overflow-auto h-full overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
        <!-- Card Section -->
        <div class=" py-10 pt-0">
            <!-- Grid -->
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <!-- Card -->
                <div
                    class="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl"
                >
                    <div class="p-4 md:p-5">
                        <div class="flex items-center gap-x-2">
                            <p class="text-xs uppercase text-gray-500">
                                Total Entities
                            </p>
                            <div class="hs-tooltip">
                                <div class="hs-tooltip-toggle">
                                    <svg
                                        class="shrink-0 size-4 text-gray-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        ><circle cx="12" cy="12" r="10" /><path
                                            d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                                        /><path d="M12 17h.01" /></svg
                                    >
                                    <span
                                        class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-2xs"
                                        role="tooltip"
                                    >
                                        The number of daily users
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="mt-1 flex items-center gap-x-2">
                            <h3
                                class="text-xl sm:text-2xl font-medium text-gray-800"
                            >
                                72,540
                            </h3>
                            <span
                                class="flex items-center gap-x-1 text-green-600"
                            >
                                <svg
                                    class="inline-block size-4 self-center"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    ><polyline
                                        points="22 7 13.5 15.5 8.5 10.5 2 17"
                                    /><polyline points="16 7 22 7 22 13" /></svg
                                >
                                <span class="inline-block text-sm"> 1.7% </span>
                            </span>
                        </div>
                    </div>
                </div>
                <!-- End Card -->

                <!-- Card -->
                <div
                    class="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl"
                >
                    <div class="p-4 md:p-5">
                        <div class="flex items-center gap-x-2">
                            <p class="text-xs uppercase text-gray-500">
                                Active Users
                            </p>
                        </div>

                        <div class="mt-1 flex items-center gap-x-2">
                            <h3
                                class="text-xl sm:text-2xl font-medium text-gray-800"
                            >
                                29.4%
                            </h3>
                        </div>
                    </div>
                </div>
                <!-- End Card -->

                <!-- Card -->
                <div
                    class="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl"
                >
                    <div class="p-4 md:p-5">
                        <div class="flex items-center gap-x-2">
                            <p class="text-xs uppercase text-gray-500">
                                Portfolio Management
                            </p>
                        </div>

                        <div class="mt-1 flex items-center gap-x-2">
                            <h3
                                class="text-xl sm:text-2xl font-medium text-gray-800"
                            >
                                56.8%
                            </h3>
                            <span
                                class="flex items-center gap-x-1 text-red-600"
                            >
                                <svg
                                    class="inline-block size-4 self-center"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    ><polyline
                                        points="22 17 13.5 8.5 8.5 13.5 2 7"
                                    /><polyline
                                        points="16 17 22 17 22 11"
                                    /></svg
                                >
                                <span class="inline-block text-sm"> 1.7% </span>
                            </span>
                        </div>
                    </div>
                </div>
                <!-- End Card -->

                <!-- Card -->
                <div
                    class="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl"
                >
                    <div class="p-4 md:p-5">
                        <div class="flex items-center gap-x-2">
                            <p class="text-xs uppercase text-gray-500">
                                Documents
                            </p>
                        </div>

                        <div class="mt-1 flex items-center gap-x-2">
                            <h3
                                class="text-xl sm:text-2xl font-medium text-gray-800"
                            >
                                92,913
                            </h3>
                        </div>
                    </div>
                </div>
                <!-- End Card -->
            </div>
            <!-- End Grid -->
        </div>
        <!-- End Card Section -->

        <!-- cards  -->
        <div
            class=" {isExpand
                ? ' gap-6 grid grid-cols-[repeat(auto-fit,minmax(600px,1fr))]'
                : ' gap-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]'}"
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
