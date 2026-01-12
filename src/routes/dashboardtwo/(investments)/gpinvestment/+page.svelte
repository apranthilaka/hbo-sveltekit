<script lang="ts">
    let {
        items = [
            { id: 1, name: 'Wade Cooper' },
            { id: 2, name: 'Arlene Mccoy' },
            { id: 3, name: 'Devon Webb' },
            { id: 4, name: 'Tom Cook' },
            { id: 5, name: 'Tanya Fox' },
        ],
    } = $props();

    let query = $state('');
    let isOpen = $state(false);
    let selectedId = $state(null);

    // Derived state for filtering
    let filteredItems = $derived(
        query === ''
            ? items
            : items.filter((item) =>
                  item.name.toLowerCase().includes(query.toLowerCase())
              )
    );

    function selectItem(item) {
        query = item.name;
        selectedId = item.id;
        isOpen = false;
    }

    // datepicker
    // Datepicker
</script>

<div
    class=" responsive-wrapper w-full max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl gap-6 flex flex-col h-screen mb-6 mt-6 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden rounded-lg"
>
    <div class=" rounded-xl">
        <form class="flex gap-6 flex-col">
            <!-- Section -->
            <div class="py-6 border border-gray-300 rounded-lg p-6 bg-white">
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
                            class="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
                        />
                    </label>
                    <label for="Headline">
                        <span class="text-sm font-medium text-gray-700">
                            Country of HQ
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

                    <label for="Email">
                        <span class="text-sm font-medium text-gray-700">
                            Master ntity
                        </span>

                        <div class="flex gap-4">
                            <input
                                type="email"
                                id="Email"
                                class="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
                            />
                            <a
                                class="mt-0.5 h-[42px] border border-gray-300 flex items-center justify-center px-6 rounded-sm bg-gray-100 text-gray-900 hover:bg-gray-200"
                                href="">Change</a
                            >
                        </div>
                    </label>

                    <label for="Headline">
                        <span class="text-sm font-medium text-gray-700">
                            Main Country of Operations
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
                            Investment type
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
                            Currency
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

                    <label for="Email">
                        <span class="text-sm font-medium text-gray-700">
                            External ID
                        </span>

                        <input
                            type="email"
                            id="Email"
                            class="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
                        />
                    </label>

                    <!-- combo  -->
                    <div class="w-full">
                        <label
                            for="combobox"
                            class="block text-sm font-medium text-gray-700"
                            >Parent</label
                        >
                        <div class="relative mt-[7px]">
                            <input
                                id="combobox"
                                type="text"
                                class="min-h-[36px] w-full rounded-sm border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                bind:value={query}
                                onfocus={() => (isOpen = true)}
                                onblur={() =>
                                    setTimeout(() => (isOpen = false), 200)}
                                placeholder="Search..."
                            />

                            <div
                                class="absolute inset-y-0 right-0 flex items-center pr-2 px-2"
                            >
                                <svg
                                    class="h-5 w-5 text-gray-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>

                            {#if isOpen && filteredItems.length > 0}
                                <ul
                                    class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                >
                                    {#each filteredItems as item}
                                        <li
                                            class="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-gray-600 hover:text-white transition-colors"
                                            role="option"
                                            aria-selected={selectedId ===
                                                item.id}
                                            onclick={() => selectItem(item)}
                                        >
                                            <span
                                                class="block truncate {selectedId ===
                                                item.id
                                                    ? 'font-semibold'
                                                    : 'font-normal'}"
                                            >
                                                {item.name}
                                            </span>

                                            {#if selectedId === item.id}
                                                <span
                                                    class="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-hover:text-white"
                                                >
                                                    <svg
                                                        class="h-5 w-5"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M16.704 4.176a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>
                                                </span>
                                            {/if}
                                        </li>
                                    {/each}
                                </ul>
                            {/if}
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
            <div class="py-6 border border-gray-300 rounded-lg p-6 bg-white">
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
            <div class="py-6 border border-gray-300 rounded-lg p-6 bg-white">
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
                        <div class="text-gray-800">Make Entity Active</div>
                        <label
                            for="AcceptConditions"
                            class="relative block h-6 w-12 rounded-full bg-gray-300 transition-colors [-webkit-tap-highlight-color:transparent] has-checked:bg-green-500"
                        >
                            <input
                                type="checkbox"
                                id="AcceptConditions"
                                class="peer sr-only"
                            />

                            <span
                                class="absolute inset-y-0 start-0 m-1 size-4 rounded-full bg-white transition-[inset-inline-start] peer-checked:start-6"
                            ></span>
                        </label>
                    </div>
                </div>
            </div>
            <!-- End Section -->
        </form>
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
