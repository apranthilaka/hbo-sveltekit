<script>
    import { base } from '$app/paths';
    import { page } from '$app/stores';
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';

    // 1. STATE (Svelte 5 Runes)
    // Start with a safe default title so the build doesn't crash
    let entityName = $state('GP Details');
    let activeTab = $state('General');
    let currentStep = $state(1);
    const totalSteps = 3;

    let generalData = $state({ name: '', confirmed: false });

    // 2. THE FIX FOR GITHUB PAGES
    onMount(() => {
        if (browser) {
            // This code ONLY runs in the user's browser, not during the build
            const nameParam = $page.url.searchParams.get('name');
            if (nameParam) {
                entityName = nameParam;
                generalData.name = nameParam;
            }
        }
    });

    // 3. LOGIC FUNCTIONS
    function handleTabChange(tab) {
        activeTab = tab;
        if (tab !== 'General') currentStep = 1;
    }

    const goBack = () => {
        if (browser) window.history.back();
    };
</script>

<div class="gp-heading">
    <button onclick={goBack} class="btn-back" type="button"> ← </button>

    <nav class="breadcrumb">
        <ol>
            <li><a href="{base}/dashboard">Dashboard</a></li>
            <li class="separator">/</li>
            <li><span class="current-page font-medium">{entityName}</span></li>
        </ol>
    </nav>
</div>

<main class="content-card">
    <header>
        <h1>{entityName}</h1>
        <nav class="tab-bar">
            {#each ['General', 'Analytics', 'Settings'] as tab}
                <button
                    class:active={activeTab === tab}
                    onclick={() => handleTabChange(tab)}
                >
                    {tab}
                </button>
            {/each}
        </nav>
    </header>

    <section class="tab-content">
        {#if activeTab === 'General'}
            <div class="step-indicator">Step {currentStep} of {totalSteps}</div>

            {#if currentStep === 1}
                <div class="step">
                    <h2>Setup</h2>
                    <input type="text" bind:value={generalData.name} />
                </div>
            {/if}

            <div class="actions">
                <button
                    disabled={currentStep === 1}
                    onclick={() => currentStep--}>Back</button
                >
                <button onclick={() => currentStep++}>Next</button>
            </div>
        {:else}
            <p>Content for {activeTab} coming soon.</p>
        {/if}
    </section>
</main>

<style>
    .gp-heading {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 20px;
        border-bottom: 1px solid #ddd;
    }
    .breadcrumb ol {
        display: flex;
        list-style: none;
        gap: 10px;
        margin: 0;
        padding: 0;
    }
    .tab-bar {
        display: flex;
        gap: 20px;
        margin: 20px 0;
        border-bottom: 1px solid #eee;
    }
    .tab-bar button {
        background: none;
        border: none;
        padding: 10px;
        cursor: pointer;
    }
    .active {
        border-bottom: 2px solid #007bff;
        color: #007bff;
        font-weight: bold;
    }
    .content-card {
        padding: 2rem;
    }
    .step-indicator {
        margin-bottom: 20px;
        font-weight: bold;
    }
    .actions {
        margin-top: 30px;
        display: flex;
        gap: 10px;
    }
</style>
