<script>
    import { base } from '$app/paths';
    import { page } from '$app/stores';

    console.log('Base path is:', base);

    // 1. HEADING & BREADCRUMB LOGIC
    // Grab the name from URL: /dashboard/gp?name=Nebula%20Nexus
    let entityName = $derived(
        $page.url.searchParams.get('name') || 'GP Details'
    );

    const goBack = () => {
        window.history.back();
    };

    // 2. TAB & FLOW STATE
    let activeTab = $state('General');
    const tabs = ['General', 'Analytics', 'Settings'];

    let currentStep = $state(1);
    const totalSteps = 3;

    // Isolated Data
    let generalData = $state({ name: '', confirmed: false });

    const handleTabChange = (tab) => {
        activeTab = tab;
        if (tab !== 'General') currentStep = 1;
    };
</script>

<div class="gp-heading">
    <button onclick={goBack} class="btn-back" aria-label="Go back">
        <i class="ph ph-arrow-left"></i>
    </button>

    <nav class="breadcrumb">
        <ol>
            <li>
                <a
                    href="/dashboard"
                    style="border: 2px solid red; position: relative; z-index: 9999;"
                    >Dashboard</a
                >
            </li>
            <li class="separator">/</li>
            <li>
                <span class="current-page">{entityName}</span>
            </li>
        </ol>
    </nav>
</div>

<main class="page-content">
    <nav class="tab-bar">
        {#each tabs as tab}
            <button
                class:active={activeTab === tab}
                onclick={() => handleTabChange(tab)}
            >
                {tab}
            </button>
        {/each}
    </nav>

    <div class="content-card">
        {#if activeTab === 'General'}
            <div class="step-indicator">
                Step {currentStep} of {totalSteps}
                <div class="progress-bar">
                    <div
                        class="progress-fill"
                        style="width: {(currentStep / totalSteps) * 100}%"
                    ></div>
                </div>
            </div>

            <div class="step-body">
                {#if currentStep === 1}
                    <h2>Setup</h2>
                    <input
                        type="text"
                        bind:value={generalData.name}
                        placeholder="Entity Name"
                    />
                {:else if currentStep === 2}
                    <h2>Configuration</h2>
                    <p>Settings for {entityName}...</p>
                {:else if currentStep === 3}
                    <h2>Review</h2>
                    <label>
                        <input
                            type="checkbox"
                            bind:checked={generalData.confirmed}
                        />
                        Finalize details
                    </label>
                {/if}
            </div>

            <div class="footer-actions">
                <button
                    disabled={currentStep === 1}
                    onclick={() => currentStep--}>Back</button
                >
                {#if currentStep < totalSteps}
                    <button onclick={() => currentStep++}>Next</button>
                {:else}
                    <button class="submit-btn" disabled={!generalData.confirmed}
                        >Submit Flow</button
                    >
                {/if}
            </div>
        {:else}
            <h2>{activeTab} Content</h2>
            <p>Showing data for {entityName} inside {activeTab}.</p>
        {/if}
    </div>
</main>

<style>
    /* HEADING STYLES */
    .gp-heading {
        display: flex;
        align-items: center;
        padding: 0 24px;
        background: #ffffff;
        border-bottom: 1px solid #e0e0e0;
        height: 70px;
        gap: 16px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .btn-back {
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        border: 1px solid gray;
        color: gray;
        cursor: pointer;
        transition: all 0.2s;
    }

    .btn-back:hover {
        background: #252525;
        color: white;
    }

    .breadcrumb ol {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
        font-size: 14px;
        gap: 8px;
    }

    .breadcrumb a {
        color: #666;
        text-decoration: none;
    }
    .breadcrumb a:hover {
        text-decoration: underline;
        color: #000;
    }
    .breadcrumb .current-page {
        color: #222;
        font-weight: 600;
    }

    /* TAB & CONTENT STYLES */
    .page-content {
        padding: 24px;
    }

    .tab-bar {
        display: flex;
        border-bottom: 2px solid #eee;
        margin-bottom: 20px;
    }

    .tab-bar button {
        padding: 10px 20px;
        border: none;
        background: none;
        cursor: pointer;
        color: #666;
    }

    .tab-bar button.active {
        border-bottom: 2px solid #007bff;
        color: #007bff;
        font-weight: bold;
    }

    .content-card {
        background: white;
        border: 1px solid #ddd;
        padding: 2rem;
        border-radius: 8px;
    }

    .progress-bar {
        height: 4px;
        background: #eee;
        width: 100%;
        margin: 10px 0;
    }
    .progress-fill {
        height: 100%;
        background: #007bff;
        transition: width 0.3s;
    }

    .footer-actions {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
    }

    .submit-btn {
        background: #28a745;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
    }
    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
</style>
