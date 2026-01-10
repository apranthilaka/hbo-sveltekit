<script>
    import { base } from '$app/paths';
    import Card from '$lib/components/Card.svelte';
    import { supabase } from '$lib/supabaseClient'; // Import the client you created earlier

    // 1. REPLACING STATIC DATA WITH RUNES
    let entities = $state([]);
    let isLoading = $state(true);
    let errorMsg = $state(null);

    // 2. FETCH FUNCTION
    async function fetchEntities() {
        isLoading = true;
        const { data, error } = await supabase
            .from('entities') // Your Supabase table name
            .select('*');

        if (error) {
            errorMsg = error.message;
        } else {
            entities = data;
        }
        isLoading = false;
    }

    // 3. TRIGGER ON MOUNT
    $effect(() => {
        fetchEntities();
    });

    let isExpand = $state(true);
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

        <div class="w-auto flex flex-row items-center justify-end gap-4">
            <select
                id="location"
                name="location"
                class="min-w-[250px] block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
                <option selected>All Entities (Except Master Entities)</option>
                <option>All Master Entities</option>
                <option>All GPs</option>
                <option>All LPs</option>
                <option>My All (Entities + Master Entities)</option>
            </select>

            <!-- dropdown  -->
            <!-- Include this script tag or install `@tailwindplus/elements` via npm: -->
            <!-- <script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script> -->
            <el-dropdown class="inline-block">
                <button
                    class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-gray-50"
                >
                    Options
                    <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        data-slot="icon"
                        aria-hidden="true"
                        class="-mr-1 size-5 text-gray-400"
                    >
                        <path
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd"
                            fill-rule="evenodd"
                        />
                    </svg>
                </button>

                <el-menu
                    anchor="bottom end"
                    popover
                    class="w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg outline-1 outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                    <div class="py-1">
                        <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden"
                            >Entity Tags</a
                        >
                        <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden"
                            >Admin Templates</a
                        >
                        <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden"
                            >Users</a
                        >
                        <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden"
                        >
                            Report Server Index</a
                        >
                        <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden"
                        >
                            Entity Operations</a
                        >

                        <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden"
                        >
                            Admin Domains</a
                        >
                    </div>
                    <div class="py-1">
                        <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden"
                            >Archive</a
                        >
                        <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden"
                            >Move</a
                        >
                    </div>
                    <div class="py-1">
                        <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden"
                            >Share</a
                        >
                        <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden"
                            >Add to favorites</a
                        >
                    </div>
                    <div class="py-1">
                        <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden"
                            >Delete</a
                        >
                    </div>
                </el-menu>
            </el-dropdown>

            <!-- dropdown  -->

            <!-- new entity  -->
            <a
                href="{base}/dashboardtwo/newentity"
                class="bg-emerald-600 hover:bg-emerald-400 hover:cursor-pointer transition duration-300 ease-in-out ... text-white py-2 px-4 rounded min-w-[100px] h-[36px] flex justify-center items-center text-sm"
            >
                New Entity
            </a>
            <!-- new entity  -->
            {#if isExpand === false}
                <button
                    title="asd"
                    class="border rounded-md min-w-[36px] h-[36px] flex items-center justify-center hover:cursor-pointer"
                    onclick={expandDiv}
                >
                    <i class="ph ph-arrows-out-line-horizontal"></i>
                </button>
            {:else}
                <button
                    title="asd"
                    class="border rounded-md min-w-[36px] h-[36px] flex items-center justify-center hover:cursor-pointer"
                    onclick={expandDiv}
                >
                    <i class="ph ph-arrows-in-line-horizontal"></i>
                </button>
            {/if}
        </div>
    </div>
    <!-- title wrapper  -->

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
                            Total users
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
                        <span class="flex items-center gap-x-1 text-green-600">
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
                        <p class="text-xs uppercase text-gray-500">Sessions</p>
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
                            Avg. Click Rate
                        </p>
                    </div>

                    <div class="mt-1 flex items-center gap-x-2">
                        <h3
                            class="text-xl sm:text-2xl font-medium text-gray-800"
                        >
                            56.8%
                        </h3>
                        <span class="flex items-center gap-x-1 text-red-600">
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
                                /><polyline points="16 17 22 17 22 11" /></svg
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
                        <p class="text-xs uppercase text-gray-500">Pageviews</p>
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

    <div class="card-container card-container_cards w-full flex-1 p-1">
        {#if isLoading}
            {#each Array(30) as _}
                <div
                    class="animate-pulse bg-gray-200 border border-gray-200 rounded-xl h-32 w-full"
                >
                    <div class="p-5 space-y-3">
                        <div class="h-4 bg-gray-300 rounded w-1/4"></div>
                        <div class="h-6 bg-gray-300 rounded w-3/4"></div>
                    </div>
                </div>
            {/each}
        {:else if errorMsg}
            <div class="p-4 bg-red-50 text-red-700 rounded-lg">{errorMsg}</div>
        {:else}
            {#each entities as entity}
                <Card
                    entityTypeClass={entity.type_class}
                    title={entity.title}
                    titleLink="{base}/dashboardtwo/entity?name={encodeURIComponent(
                        entity.title
                    )}"
                />
            {/each}
        {/if}
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
