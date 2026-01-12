<script lang="ts">
    let {
        items = ['Parent fund 1', 'Parent fund 2', 'Parent fund 3'],
        placeholder = 'Search...',
    } = $props();
    let searchTerm = $state('');
    let isOpen = $state(false);
    let filteredItems = $derived(
        items.filter((i) => i.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    function selectItem(item: string) {
        searchTerm = item;
        isOpen = false;
    }
</script>

<div
    class=" responsive-wrapper w-full max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl gap-6 flex flex-col h-screen mb-6 mt-6 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden rounded-lg"
>
    <div class="w-full shadow-md border border-gray-200 rounded-md">
        <!-- Card -->
        <div class="bg-white rounded-xl shadow-xs p-4 sm:p-7">
            <div class="mb-8">
                <h2 class="text-md font-medium text-gray-800">
                    GP Investment Details
                </h2>
            </div>

            <form>
                <!-- Section -->
                <div
                    class="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200"
                >
                    <label
                        for="af-payment-billing-contact"
                        class="inline-block text-sm font-medium text-gray-600"
                    >
                        Details
                    </label>

                    <div
                        class="mt-2 space-y-3 gap-x-8 gap-y-2 p-1 grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))]"
                    >
                        <label for="Email">
                            <span class="text-sm font-medium text-gray-700">
                                Name
                            </span>

                            <input
                                type="email"
                                id="Email"
                                class="mt-0.5 w-full rounded border-gray-300 shadow-sm"
                            />
                        </label>
                        <label for="Headline">
                            <span class="text-sm font-medium text-gray-700">
                                Headliner
                            </span>

                            <select
                                name="Country Of HQ"
                                id="Headline"
                                class="mt-0.5 w-full rounded border-gray-300 shadow-sm"
                            >
                                <option value="">Canada</option>
                                <option value="JM">AMerica</option>
                                <option value="SRV">Sri Lanka</option>
                                <option value="JH">Jimi Hendrix</option>
                                <option value="BBK">B.B King</option>
                                <option value="AK">Albert King</option>
                                <option value="BG">Buddy Guy</option>
                                <option value="EC">Eric Clapton</option>
                            </select>
                        </label>
                        <label for="Email">
                            <span class="text-sm font-medium text-gray-700">
                                Master Entity
                            </span>

                            <div class="flex gap-4">
                                <input
                                    type="email"
                                    id="Email"
                                    class="mt-0.5 w-full rounded border-gray-300 shadow-sm"
                                />
                                <a
                                    class="border border-gray-300 flex items-center justify-center px-6 rounded-md bg-gray-200 text-gray-900 shadow-sm"
                                    href="">Change</a
                                >
                            </div>
                        </label>

                        <label for="Headline">
                            <span class="text-sm font-medium text-gray-700">
                                Main Country of Operations
                            </span>

                            <select
                                name="Country Of HQ"
                                id="Headline"
                                class="mt-0.5 w-full rounded border-gray-300 shadow-sm"
                            >
                                <option value="">Canada</option>
                                <option value="JM">AMerica</option>
                                <option value="SRV">Sri Lanka</option>
                                <option value="JH">Jimi Hendrix</option>
                                <option value="BBK">B.B King</option>
                                <option value="AK">Albert King</option>
                                <option value="BG">Buddy Guy</option>
                                <option value="EC">Eric Clapton</option>
                            </select>
                        </label>

                        <label for="Headline">
                            <span class="text-sm font-medium text-gray-700">
                                Investment type
                            </span>

                            <select
                                name="Country Of HQ"
                                id="Headline"
                                class="mt-0.5 w-full rounded border-gray-300 shadow-sm"
                            >
                                <option value="">Canada</option>
                                <option value="JM">AMerica</option>
                                <option value="SRV">Sri Lanka</option>
                                <option value="JH">Jimi Hendrix</option>
                                <option value="BBK">B.B King</option>
                                <option value="AK">Albert King</option>
                                <option value="BG">Buddy Guy</option>
                                <option value="EC">Eric Clapton</option>
                            </select>
                        </label>

                        <label for="Headline">
                            <span class="text-sm font-medium text-gray-700">
                                Currency
                            </span>

                            <select
                                name="Country Of HQ"
                                id="Headline"
                                class="mt-0.5 w-full rounded border-gray-300 shadow-sm"
                            >
                                <option value="">Canada</option>
                                <option value="JM">AMerica</option>
                                <option value="SRV">Sri Lanka</option>
                                <option value="JH">Jimi Hendrix</option>
                                <option value="BBK">B.B King</option>
                                <option value="AK">Albert King</option>
                                <option value="BG">Buddy Guy</option>
                                <option value="EC">Eric Clapton</option>
                            </select>
                        </label>

                        <label for="Email">
                            <span class="text-sm font-medium text-gray-700">
                                External ID
                            </span>

                            <input
                                type="email"
                                id="Email"
                                class="mt-0.5 w-full rounded border-gray-300 shadow-sm"
                            />
                        </label>

                        <!-- combo  -->
                        <div
                            class=" p-1 grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))]"
                        >
                            <div class="flex flex-col relative">
                                <span
                                    class="inline-block text-sm font-medium text-gray-600"
                                    >Parent</span
                                >

                                <div class="search-container h-[32px]">
                                    <input
                                        type="text"
                                        bind:value={searchTerm}
                                        onfocus={() => (isOpen = true)}
                                        onblur={() =>
                                            setTimeout(
                                                () => (isOpen = false),
                                                200
                                            )}
                                        class=" w-full rounded border-gray-300 shadow-sm"
                                    />

                                    {#if isOpen}
                                        <ul
                                            class="dropdown shadow-xl border border-gray-200"
                                        >
                                            {#each filteredItems as item}
                                                <li>
                                                    <button
                                                        type="button"
                                                        onclick={() =>
                                                            selectItem(item)}
                                                    >
                                                        {item}
                                                    </button>
                                                </li>
                                            {/each}
                                        </ul>
                                    {/if}
                                </div>
                            </div>
                        </div>
                        <!-- combo  -->

                        <label for="Headline">
                            <span class="text-sm font-medium text-gray-700">
                                Created On
                            </span>

                            <select
                                name="Headline"
                                id="Headline"
                                class="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
                            >
                                <option value="">Please select</option>
                                <option value="JM">John Mayer</option>
                                <option value="SRV">Stevie Ray Vaughn</option>
                                <option value="JH">Jimi Hendrix</option>
                                <option value="BBK">B.B King</option>
                                <option value="AK">Albert King</option>
                                <option value="BG">Buddy Guy</option>
                                <option value="EC">Eric Clapton</option>
                            </select>
                        </label>

                        <label for="Headline">
                            <span class="text-sm font-medium text-gray-700">
                                Created By
                            </span>

                            <select
                                name="Headline"
                                id="Headline"
                                class="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
                            >
                                <option value="">Please select</option>
                                <option value="JM">John Mayer</option>
                                <option value="SRV">Stevie Ray Vaughn</option>
                                <option value="JH">Jimi Hendrix</option>
                                <option value="BBK">B.B King</option>
                                <option value="AK">Albert King</option>
                                <option value="BG">Buddy Guy</option>
                                <option value="EC">Eric Clapton</option>
                            </select>
                        </label>
                    </div>
                    <label for="Notes">
                        <span class="text-sm font-medium text-gray-700">
                            Notes
                        </span>

                        <textarea
                            id="Notes"
                            class="mt-0.5 w-full resize-none rounded border-gray-300 shadow-sm sm:text-sm"
                            rows="4"
                        ></textarea>
                    </label>
                </div>
                <!-- End Section -->

                <!-- Section -->
                <div
                    class="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200"
                >
                    <label
                        for="af-payment-billing-address"
                        class="inline-block text-sm font-medium text-gray-600"
                    >
                        Industry classification
                    </label>

                    <div
                        class="mt-2 space-y-3 gap-3 overflow-hidden grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))]"
                    >
                        <label for="Headline">
                            <span class="text-sm font-medium text-gray-700">
                                Industry Classification type
                            </span>

                            <select
                                name="Headline"
                                id="Headline"
                                class="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
                            >
                                <option value="">Please select</option>
                                <option value="JM">John Mayer</option>
                                <option value="SRV">Stevie Ray Vaughn</option>
                                <option value="JH">Jimi Hendrix</option>
                                <option value="BBK">B.B King</option>
                                <option value="AK">Albert King</option>
                                <option value="BG">Buddy Guy</option>
                                <option value="EC">Eric Clapton</option>
                            </select>
                        </label>

                        <label for="Headline">
                            <span class="text-sm font-medium text-gray-700">
                                Industry Classification Code
                            </span>

                            <select
                                name="Headline"
                                id="Headline"
                                class="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
                            >
                                <option value="">Please select</option>
                                <option value="JM">John Mayer</option>
                                <option value="SRV">Stevie Ray Vaughn</option>
                                <option value="JH">Jimi Hendrix</option>
                                <option value="BBK">B.B King</option>
                                <option value="AK">Albert King</option>
                                <option value="BG">Buddy Guy</option>
                                <option value="EC">Eric Clapton</option>
                            </select>
                        </label>
                    </div>
                </div>
                <!-- End Section -->

                <!-- Section -->
                <div
                    class="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200"
                >
                    <label
                        for="af-payment-payment-method"
                        class="inline-block text-sm font-medium"
                    >
                        Settings
                    </label>

                    <div
                        class="mt-2 space-y-3 gap-3 overflow-hidden grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))]"
                    >
                        <div class=" flex flex-row gap-10 items-center">
                            <div class="text-gray-800">Is active</div>
                            <label
                                for="AcceptConditions"
                                class="relative block h-8 w-14 rounded-full bg-gray-300 transition-colors [-webkit-tap-highlight-color:transparent] has-checked:bg-green-500"
                            >
                                <input
                                    type="checkbox"
                                    id="AcceptConditions"
                                    class="peer sr-only"
                                />

                                <span
                                    class="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-[inset-inline-start] peer-checked:start-6"
                                ></span>
                            </label>
                        </div>
                    </div>
                </div>
                <!-- End Section -->
            </form>
        </div>
        <!-- End Card -->
    </div>
</div>

<style>
    .search-container {
        position: relative;
        width: 100%;
    }

    .dropdown {
        position: absolute;
        /* This ensures it starts right at the bottom of the input */
        top: 100%;
        left: 0;
        right: 0;
        background-color: white;
        /* This ensures it sits ON TOP of the 'Billing Address' section */
        z-index: 9999;
        max-height: 200px;
        overflow-y: auto;
        border-radius: 0.375rem;
        margin-top: 4px;
        list-style: none;
        padding: 0;
    }

    .dropdown button {
        width: 100%;
        text-align: left;
        padding: 8px 12px;
        background: white;
        border: none;
        cursor: pointer;
    }

    .dropdown button:hover {
        background-color: #f3f4f6;
    }
</style>
