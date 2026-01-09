<script>
    import { base } from '$app/paths';
</script>

<!-- Card Section -->
<div
    class=" w-full flex items-center justify-start flex-col h-[700px] rounded-lg pt-25"
>
    <!-- <div class="text-[80px]">
        <i class="ph ph-cloud-check"></i>
    </div> -->
    <div>
        <img class="w-fill h-50" src="{base}/check.gif" alt="" />
    </div>
    <div class="text-nd text-gray-800 font-medium mt-4">
        Entity sucessfully created
    </div>
    <a
        class="py-2 px-3 bg-white border border-gray-300 text-gray-800 rounded-md flex justify-center items-center mt-3 text-sm hover:bg-gray-100"
        href="{base}/dashboardtwo"
    >
        Back to Dashboard</a
    >
</div>
<!-- End Card Section -->
