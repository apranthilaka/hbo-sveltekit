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
</script>

<div
    class=" responsive-wrapper w-full max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl flex overflow-hidden flex-col h-screen mb-6"
>
    <!-- breadcrumb  -->
    <div class="  flex items-center justify-start gap-2 w-full h-20 min-h-20">
        <a class="text-neutral-400 hover:underline" href="{base}/dashboardtwo/"
            >Back to dashboard</a
        >
        <span>/</span>
        <span class="font-bold">{'Create New ' + entityName} </span>
    </div>
    <!-- breadcrumb  -->
    {@render children()}
</div>
