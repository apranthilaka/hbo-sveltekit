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

    import { page } from '$app/state';
    import { base } from '$app/paths';

    // Derive name for breadcrumb
    let entityName = $derived(page.url.searchParams.get('name') || 'Entity');

    let { children } = $props();

    const step = $derived(page.url.searchParams.get('step') || 'stepone');
</script>

<div
    class=" responsive-wrapper w-full max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl flex overflow-hidden flex-col h-screen mb-6"
>
    <!-- breadcrumb  -->
    <div
        class="  flex items-center justify-start gap-2 w-full min-h-20 text-sm"
    >
        <a class="text-gray-500 hover:underline" href="{base}/dashboardtwo/"
            >Back to dashboard</a
        >
        <span>/</span>
        <span class="font-medium">{'Create New ' + entityName} </span>
    </div>
    <!-- breadcrumb  -->

    <!-- stepper  -->
    <div class=" h-auto mb-6 flex items-start">
        <!-- <h2 class="sr-only">Steps</h2> -->

        <div
            class="  relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-200 w-full"
        >
            <ol
                class="relative z-10 flex justify-between text-sm font-medium text-gray-600"
            >
                <li class="flex items-center gap-2 bg-white p-2">
                    <span
                        class="size-6 rounded-full flex items-center justify-center {step ===
                        'stepone'
                            ? 'bg-blue-500 text-center text-white'
                            : 'bg-gray-200'} text-[10px]/6 font-bold text-gray-500"
                    >
                        1
                    </span>

                    <span class="hidden sm:block"> Details </span>
                </li>

                <li class="flex items-center gap-2 bg-white p-2">
                    <span
                        class="size-6 rounded-full flex items-center justify-center {step ===
                        'steptwo'
                            ? 'bg-blue-500 text-center text-white'
                            : 'bg-gray-200'} text-[10px]/6 font-bold text-gray-500"
                    >
                        2
                    </span>

                    <span class="hidden sm:block"> Address </span>
                </li>

                <li class="flex items-center gap-2 bg-white p-2">
                    <span
                        class="size-6 rounded-full flex items-center justify-center {step ===
                        'stepthree'
                            ? 'bg-blue-500 text-center text-white'
                            : 'bg-gray-200'} text-[10px]/6 font-bold text-gray-500"
                    >
                        3
                    </span>

                    <span class="hidden sm:block"> Payment </span>
                </li>

                <li class="flex items-center gap-2 bg-white p-2">
                    <span
                        class="size-6 rounded-full {step === 'stepfour'
                            ? 'bg-blue-500 text-center'
                            : 'bg-gray-200'} text-[10px]/6 font-bold text-white"
                    >
                        4
                    </span>

                    <span class="hidden sm:block"> Complete </span>
                </li>
            </ol>
        </div>
    </div>
    <!-- stepper  -->
    {@render children()}
</div>
