<script lang="ts">
    import { base } from '$app/paths';
    import { page } from '$app/stores';
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';

    // 1. STATE & TYPES
    // We initialize with a default to allow the static build to complete without errors
    let entityName = $state<string>('Dashboard');
    let activeTab = $state<string>('General');
    let currentStep = $state<number>(1);

    const tabs: string[] = ['General', 'Analytics', 'Settings'];
    const totalSteps: number = 3;

    interface GeneralData {
        name: string;
        preference: string;
        confirmed: boolean;
    }
    let generalData = $state<GeneralData>({
        name: '',
        preference: 'low',
        confirmed: false,
    });

    // 2. PRERENDER-SAFE LOGIC
    // onMount only runs in the browser, skipping the GitHub Pages build crash
    onMount(() => {
        if (browser) {
            const nameParam = $page.url.searchParams.get('name');
            if (nameParam) {
                entityName = nameParam;
                generalData.name = nameParam;
            }
        }
    });

    // 3. TYPED FUNCTIONS
    // Explicitly typing 'tab' as string to fix js(7006)
    const handleTabChange = (tab: string): void => {
        activeTab = tab;
        if (tab !== 'General') {
            currentStep = 1;
        }
    };

    const nextStep = (): void => {
        if (currentStep < totalSteps) currentStep++;
    };

    const prevStep = (): void => {
        if (currentStep > 1) currentStep--;
    };

    const goBack = (): void => {
        if (browser && window.history) {
            window.history.back();
        }
    };

    const submitFlow = (): void => {
        console.log('Submitted:', generalData);
        alert('Flow Submitted Successfully!');
    };
</script>

<div class="gp-heading">
    <button
        onclick={goBack}
        class="btn-back"
        type="button"
        aria-label="Go back"
    >
        <i class="ph ph-arrow-left"></i>
    </button>

    <nav class="breadcrumb">
        <ol>
            <li><a href="{base}/dashboard">Dashboard</a></li>
            <li class="separator">/</li>
            <li><span class="current-page">{entityName}</span></li>
        </ol>
    </nav>
</div>

<main class="page-content">
    <nav class="tab-bar">
        {#each tabs as tab}
            <button
                type="button"
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
                <p>Step {currentStep} of {totalSteps}</p>
                <div class="progress-bar">
                    <div
                        class="progress-fill"
                        style="width: {(currentStep / totalSteps) * 100}%"
                    ></div>
                </div>
            </div>

            <div class="step-body">
                {#if currentStep === 1}
                    <h2>General Setup</h2>
                    <input
                        type="text"
                        bind:value={generalData.name}
                        placeholder="Enter entity name..."
                        class="input-field"
                    />
                {:else if currentStep === 2}
                    <h2>Configuration</h2>
                    <select
                        bind:value={generalData.preference}
                        class="input-field"
                    >
                        <option value="high">High Priority</option>
                        <option value="low">Low Priority</option>
                    </select>
                {:else if currentStep === 3}
                    <h2>Review & Confirm</h2>
                    <p><strong>Name:</strong> {generalData.name}</p>
                    <label class="checkbox-label">
                        <input
                            type="checkbox"
                            bind:checked={generalData.confirmed}
                        />
                        I confirm these details are correct.
                    </label>
                {/if}
            </div>

            <div class="footer-actions">
                <button
                    type="button"
                    disabled={currentStep === 1}
                    onclick={prevStep}
                >
                    Back
                </button>

                {#if currentStep < totalSteps}
                    <button type="button" class="btn-primary" onclick={nextStep}
                        >Next</button
                    >
                {:else}
                    <button
                        type="button"
                        class="submit-btn"
                        disabled={!generalData.confirmed || !generalData.name}
                        onclick={submitFlow}
                    >
                        Submit Flow
                    </button>
                {/if}
            </div>
        {:else}
            <div class="other-tab">
                <h2>{activeTab}</h2>
                <p>Data visualization for {entityName} would go here.</p>
            </div>
        {/if}
    </div>
</main>

<style>
    .gp-heading {
        display: flex;
        align-items: center;
        padding: 0 24px;
        background: white;
        border-bottom: 1px solid #e0e0e0;
        height: 70px;
        gap: 16px;
    }

    .btn-back {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 1px solid #ccc;
        background: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .breadcrumb ol {
        display: flex;
        list-style: none;
        gap: 8px;
        margin: 0;
        padding: 0;
        font-size: 14px;
    }

    .tab-bar {
        display: flex;
        border-bottom: 2px solid #eee;
        margin: 20px 0;
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

    .page-content {
        padding: 24px;
    }

    .content-card {
        background: white;
        border: 1px solid #ddd;
        padding: 2rem;
        border-radius: 8px;
    }

    .progress-bar {
        height: 6px;
        background: #eee;
        border-radius: 3px;
        margin: 10px 0 20px;
        overflow: hidden;
    }

    .progress-fill {
        height: 100%;
        background: #007bff;
        transition: width 0.3s ease;
    }

    .input-field {
        width: 100%;
        max-width: 400px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-top: 10px;
    }

    .footer-actions {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
    }

    .btn-primary {
        background: #007bff;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
    }

    .submit-btn {
        background: #28a745;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
    }

    .checkbox-label {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 20px;
        cursor: pointer;
    }

    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
</style>
