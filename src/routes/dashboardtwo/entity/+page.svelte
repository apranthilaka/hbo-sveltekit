<script>
    let activeStep = $state(1);
    function next() {
        activeStep += 1;
    }
</script>

<h3>Tab 1 Content</h3>
<div class="flex items-center justify-center flex-col p-6">
    {#if activeStep === 1}
        <div
            class="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] grid-rows-[min-content] gap-6 w-fill md:w-1/3 lg:w-1/2 shadow-md p-6 rounded-b-md"
        >
            <div>
                <label
                    for="location"
                    class="block text-sm font-medium text-gray-700"
                    >Location</label
                >
                <select
                    id="location"
                    name="location"
                    class=" mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                    <option>United States</option>
                    <option selected>Canada</option>
                    <option>Mexico</option>
                </select>
            </div>
            <div>
                <label
                    for="location"
                    class="block text-sm font-medium text-gray-700"
                    >Location</label
                >
                <select
                    id="location"
                    name="location"
                    class=" mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                    <option>United States</option>
                    <option selected>Canada</option>
                    <option>Mexico</option>
                </select>
            </div>
            <div>
                <label
                    for="location"
                    class="block text-sm font-medium text-gray-700"
                    >Location</label
                >
                <select
                    id="location"
                    name="location"
                    class=" mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                    <option>United States</option>
                    <option selected>Canada</option>
                    <option>Mexico</option>
                </select>
            </div>
            <div>
                <label
                    for="location"
                    class="block text-sm font-medium text-gray-700"
                    >Location</label
                >
                <select
                    id="location"
                    name="location"
                    class="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                    <option>United States</option>
                    <option selected>Canada</option>
                    <option>Mexico</option>
                </select>
            </div>
        </div>
    {:else if activeStep === 2}
        <div>Step 2: Please configure your settings.</div>
    {/if}

    {#if activeStep < 3}
        <div class="w-fill md:w-1/3 lg:w-1/2">
            <button onclick={next} class="mt-4 border p-2">Next Step</button>
        </div>
    {/if}
</div>
