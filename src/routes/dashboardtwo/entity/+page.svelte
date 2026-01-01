<script>
    let activeStep = $state(1);
    function next() {
        activeStep += 1;
    }
</script>

<h3>Tab 1 Content</h3>
{#if activeStep === 1}
    <div>Step 1: Welcome to the setup.</div>
{:else if activeStep === 2}
    <div>Step 2: Please configure your settings.</div>
{/if}

{#if activeStep < 3}
    <button onclick={next} class="mt-4 border p-2">Next Step</button>
{/if}
