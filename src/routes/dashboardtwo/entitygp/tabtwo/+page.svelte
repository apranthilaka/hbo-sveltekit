<script>
    import { base } from '$app/paths';
    import { page } from '$app/state';

    // Ensure we are pulling the param reactively
    let entityName = $derived(page.url.searchParams.get('entityName') ?? 'GP');
</script>

<div
    class="responsive-wrapper w-full max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl gap-6 flex flex-col mb-6 pt-6 overflow-y-auto h-full"
>
    <div
        class="w-full h-full flex items-center justify-center grow flex-col gap-4"
    >
        GP Portfolio Management

        <a
            class="border border-gray-300 h-10 px-6 flex items-center justify-center rounded-md hover:bg-gray-200"
            href="{base ||
                ''}/dashboardtwo/gpinvestment?entityName={entityName}"
        >
            GP Investment
        </a>
    </div>
</div>
