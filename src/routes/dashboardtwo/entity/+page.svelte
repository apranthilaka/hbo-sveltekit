<script>
    let activeStep = $state(1);
    function next() {
        activeStep += 1;
    }

    function back() {
        if (activeStep === 1) {
            return;
        }
        activeStep -= 1;
    }
</script>

<div
    class=" responsive-wrapper w-full max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl gap-6 flex overflow-hidden flex-col h-screen mb-6 mt-6"
>
    <div class="flex items-start justify-start flex-col w-full">
        {#if activeStep === 1}
            <div>Title</div>
            <div
                class="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] grid-rows-[min-content] gap-6 w-full shadow-sm p-6 rounded-lg border border-neutral-300 bg-white mb-6"
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
            <div>Title</div>
            <div
                class="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] grid-rows-[min-content] gap-6 w-full shadow-sm p-6 rounded-lg border border-neutral-300 bg-white"
            >
                <div>
                    <label
                        for="location"
                        class="block text-sm font-medium text-gray-700"
                        >Locations</label
                    >
                    <select
                        id="location"
                        name="location"
                        class=" pointer-events-none appearance-none bg-none mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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

        <!-- {#if activeStep < 3}
            <div class="w-fill md:w-1/3 lg:w-1/2">
                <button onclick={next} class="mt-4 border p-2">Next Step</button
                >
            </div>
        {/if} -->

        <div class="w-full flex justify-between items-center">
            <button onclick={back} class="mt-4 border p-2">Cancel</button>
            <button onclick={next} class="mt-4 border p-2">Next Step</button>
        </div>
    </div>
</div>
