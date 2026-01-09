<script>
    import { base } from '$app/paths';
</script>

<!-- Card Section -->
<div class="w-full shadow-md border border-gray-200 rounded-md">
    <!-- Card -->
    <div class="bg-white rounded-xl shadow-xs p-4 sm:p-7">
        <div class="mb-8">
            <h2 class="text-2xl md:text-2xl font-bold text-gray-800">
                Create New entity
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
                    class="mt-2 space-y-3 gap-3 overflow-hidden grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))]"
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
                type="button"
                class="py-1.5 sm:py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            >
                Cancel
            </button>
            <a
                href="{base}/dashboardtwo/newentity/formfour?step=stepfour"
                type="button"
                class="py-1.5 sm:py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-900 text-white hover:bg-gray-950 focus:outline-hidden focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
            >
                Step 4
            </a>
        </div>
    </div>
    <!-- End Card -->
</div>
<!-- End Card Section -->
