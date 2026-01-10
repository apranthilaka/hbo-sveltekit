<script>
    let activeStep = $state(1);
    function next() {
        if (activeStep === 2) {
            return;
        }
        activeStep += 1;
    }

    function back() {
        if (activeStep === 1) {
            return;
        }
        activeStep -= 1;
    }
</script>

<div>Entity ME</div>

<div
    class=" responsive-wrapper w-full max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl gap-6 flex flex-col h-screen mb-6 mt-6 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden rounded-lg"
>
    <!-- stepper  -->
    <!-- stepper  -->
    <div class="flex items-start justify-start flex-col w-full">
        {#if activeStep === 1}
            <div class="w-full shadow-md border border-gray-200 rounded-md">
                <!-- Card -->
                <div class="bg-white rounded-xl shadow-xs p-4 sm:p-7">
                    <div class="mb-8">
                        <h2 class="text-2xl md:text-xl font-bold text-gray-800">
                            Entity Details
                        </h2>
                        <p class="text-sm text-gray-600">
                            Create new entity form description goes here
                        </p>
                    </div>

                    <form>
                        <!-- Section -->
                        <div
                            class="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200"
                        >
                            <label
                                for="af-payment-billing-contact"
                                class="inline-block text-sm font-medium"
                            >
                                Billing contact
                            </label>

                            <div
                                class="mt-2 space-y-3 gap-3 overflow-hidden p-1 grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))]"
                            >
                                <input
                                    id="af-payment-billing-contact"
                                    type="text"
                                    class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    placeholder="First Name"
                                />
                                <input
                                    type="text"
                                    class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    placeholder="Last Name"
                                />
                                <input
                                    type="text"
                                    class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    placeholder="Phone Number"
                                />
                            </div>
                        </div>
                        <!-- End Section -->

                        <!-- Section -->
                        <div
                            class="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200"
                        >
                            <label
                                for="af-payment-billing-address"
                                class="inline-block text-sm font-medium"
                            >
                                Billing address
                            </label>

                            <div
                                class="mt-2 space-y-3 gap-3 overflow-hidden grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))]"
                            >
                                <input
                                    id="af-payment-billing-address"
                                    type="text"
                                    class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    placeholder="Street Address"
                                />
                                <input
                                    type="text"
                                    class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    placeholder="Apt, Syuite, Building (Optional)"
                                />
                                <div class="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="text"
                                        class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder="Zip Code"
                                    />
                                    <select
                                        class="py-1.5 sm:py-2 px-3 pe-9 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    >
                                        <option selected>City</option>
                                        <option>City 1</option>
                                        <option>City 2</option>
                                        <option>City 3</option>
                                    </select>
                                    <select
                                        class="py-1.5 sm:py-2 px-3 pe-9 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    >
                                        <option selected>State</option>
                                        <option>State 1</option>
                                        <option>State 2</option>
                                        <option>State 3</option>
                                    </select>
                                </div>
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
                                Payment method
                            </label>

                            <div
                                class="mt-2 space-y-3 gap-3 overflow-hidden grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))]"
                            >
                                <input
                                    id="af-payment-payment-method"
                                    type="text"
                                    class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-gray-400 focus:ring-gray-400 disabled:opacity-50 disabled:pointer-events-none"
                                    placeholder="Name on Card"
                                />
                                <input
                                    type="text"
                                    class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-gray-400 focus:ring-gray-400 disabled:opacity-50 disabled:pointer-events-none"
                                    placeholder="Card Number"
                                />
                                <div class="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="text"
                                        class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-gray-400 focus:ring-gray-400 disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder="Expiration Date"
                                    />
                                    <input
                                        type="text"
                                        class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-gray-400 focus:ring-gray-400 disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder="CVV Code"
                                    />
                                </div>
                            </div>
                        </div>
                        <!-- End Section -->
                    </form>

                    <!-- <div
                        class="mt-5 flex justify-between gap-x-2 border-t border-gray-200 pt-6"
                    >
                        <button
                            onclick={back}
                            type="button"
                            class=" cursor-pointer py-1.5 sm:py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                        >
                            Cancel
                        </button>
                        <a
                            onclick={next}
                            type="button"
                            class="cursor-pointer py-1.5 sm:py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-900 text-white hover:bg-gray-950 focus:outline-hidden focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
                        >
                            Step 2
                        </a>
                    </div> -->
                </div>
                <!-- End Card -->
            </div>
        {:else if activeStep === 2}
            <div class="w-full shadow-md border border-gray-200 rounded-md">
                <!-- Card -->
                <div class="bg-white rounded-xl shadow-xs p-4 sm:p-7">
                    <div class="mb-8">
                        <h2 class="text-2xl md:text-xl font-bold text-gray-800">
                            Entity Status
                        </h2>
                        <p class="text-sm text-gray-600">
                            Create new entity form description goes here
                        </p>
                    </div>

                    <form>
                        <!-- Section -->
                        <div
                            class="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200"
                        >
                            <label
                                for="af-payment-billing-contact"
                                class="inline-block text-sm font-medium"
                            >
                                Billing contact
                            </label>

                            <div
                                class="mt-2 space-y-3 gap-3 overflow-hidden p-1 grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))]"
                            >
                                <input
                                    id="af-payment-billing-contact"
                                    type="text"
                                    class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    placeholder="First Name"
                                />
                                <input
                                    type="text"
                                    class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    placeholder="Last Name"
                                />
                                <input
                                    type="text"
                                    class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    placeholder="Phone Number"
                                />
                            </div>
                        </div>
                        <!-- End Section -->

                        <!-- Section -->
                        <div
                            class="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200"
                        >
                            <label
                                for="af-payment-billing-address"
                                class="inline-block text-sm font-medium"
                            >
                                Billing address
                            </label>

                            <div
                                class="mt-2 space-y-3 gap-3 overflow-hidden grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))]"
                            >
                                <input
                                    id="af-payment-billing-address"
                                    type="text"
                                    class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    placeholder="Street Address"
                                />
                                <input
                                    type="text"
                                    class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    placeholder="Apt, Syuite, Building (Optional)"
                                />
                                <div class="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="text"
                                        class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder="Zip Code"
                                    />
                                    <select
                                        class="py-1.5 sm:py-2 px-3 pe-9 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    >
                                        <option selected>City</option>
                                        <option>City 1</option>
                                        <option>City 2</option>
                                        <option>City 3</option>
                                    </select>
                                    <select
                                        class="py-1.5 sm:py-2 px-3 pe-9 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    >
                                        <option selected>State</option>
                                        <option>State 1</option>
                                        <option>State 2</option>
                                        <option>State 3</option>
                                    </select>
                                </div>
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
                                Payment method
                            </label>

                            <div
                                class="mt-2 space-y-3 gap-3 overflow-hidden grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))]"
                            >
                                <input
                                    id="af-payment-payment-method"
                                    type="text"
                                    class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-gray-400 focus:ring-gray-400 disabled:opacity-50 disabled:pointer-events-none"
                                    placeholder="Name on Card"
                                />
                                <input
                                    type="text"
                                    class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-gray-400 focus:ring-gray-400 disabled:opacity-50 disabled:pointer-events-none"
                                    placeholder="Card Number"
                                />
                                <div class="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="text"
                                        class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-gray-400 focus:ring-gray-400 disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder="Expiration Date"
                                    />
                                    <input
                                        type="text"
                                        class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-gray-400 focus:ring-gray-400 disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder="CVV Code"
                                    />
                                </div>
                            </div>
                        </div>
                        <!-- End Section -->
                    </form>

                    <div
                        class="mt-5 flex justify-between gap-x-2 border-t border-gray-200 pt-6"
                    >
                        <button
                            onclick={back}
                            type="button"
                            class=" cursor-pointer py-1.5 sm:py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                        >
                            Cancel
                        </button>
                        <a
                            onclick={next}
                            type="button"
                            class="cursor-pointer py-1.5 sm:py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-900 text-white hover:bg-gray-950 focus:outline-hidden focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
                        >
                            Done
                        </a>
                    </div>
                </div>
                <!-- End Card -->
            </div>
        {/if}

        <!-- {#if activeStep < 3}
            <div class="w-fill md:w-1/3 lg:w-1/2">
                <button onclick={next} class="mt-4 border p-2">Next Step</button
                >
            </div>
        {/if} -->

        <!-- <div class="w-full flex justify-between items-center">
            <button onclick={back} class="mt-4 border p-2">Cancel</button>
            <button onclick={next} class="mt-4 border p-2">Next Step</button>
        </div> -->
    </div>
</div>
