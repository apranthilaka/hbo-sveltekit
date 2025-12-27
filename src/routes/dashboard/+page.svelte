<script lang="ts">
    import { base } from '$app/paths';
    import { page } from '$app/stores';

    // 1. TYPES & INTERFACES
    interface GeneralData {
        name: string;
        confirmed: boolean;
    }

    // 2. REACTIVE STATE (Svelte 5 Runes)
    // We add explicit types to the states to prevent 'any' errors
    let activeTab = $state<string>('General');
    let currentStep = $state<number>(1);
    let generalData = $state<GeneralData>({
        name: '',
        confirmed: false,
    });

    const tabs: string[] = ['General', 'Analytics', 'Settings'];
    const totalSteps: number = 3;

    // 3. DERIVED VALUES
    // Safely access the page store. We use the '$' prefix for stores in Svelte.
    let entityName = $derived(
        $page?.url?.searchParams?.get('name') || 'GP Details'
    );

    // 4. FUNCTIONS
    // Added return type ': void' and parameter type ': string'
    function handleTabChange(tab: string): void {
        activeTab = tab;
        if (tab !== 'General') {
            currentStep = 1;
        }
    }

    // Navigation function with SSR safety check
    function goBack(): void {
        if (typeof window !== 'undefined' && window.history) {
            window.history.back();
        }
    }

    function incrementStep(): void {
        if (currentStep < totalSteps) currentStep++;
    }

    function decrementStep(): void {
        if (currentStep > 1) currentStep--;
    }
</script>

<div class="gp-heading">
    <button
        onclick={goBack}
        class="btn-back"
        aria-label="Go back"
        type="button"
    >
        <i class="ph ph-arrow-left"></i>
    </button>

    <nav class="breadcrumb">
        <ol>
            <li>
                <a href="{base}/dashboard">Dashboard</a>
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
                <span class="step-text">Step {currentStep} of {totalSteps}</span
                >
                <div class="progress-bar">
                    <div
                        class="progress-fill"
                        style="width: {(currentStep / totalSteps) * 100}%"
                    ></div>
                </div>
            </div>

            <div class="step-body">
                {#if currentStep === 1}
                    <div class="form-group">
                        <h2>Setup</h2>
                        <input
                            type="text"
                            bind:value={generalData.name}
                            placeholder="Entity Name"
                            class="input-field"
                        />
                    </div>
                {:else if currentStep === 2}
                    <div class="form-group">
                        <h2>Configuration</h2>
                        <p>
                            Adjusting settings for <strong>{entityName}</strong
                            >...
                        </p>
                    </div>
                {:else if currentStep === 3}
                    <div class="form-group">
                        <h2>Review</h2>
                        <label class="checkbox-label">
                            <input
                                type="checkbox"
                                bind:checked={generalData.confirmed}
                            />
                            <span>Finalize and confirm details</span>
                        </label>
                    </div>
                {/if}
            </div>

            <div class="footer-actions">
                <button
                    type="button"
                    class="btn-secondary"
                    disabled={currentStep === 1}
                    onclick={decrementStep}
                >
                    Back
                </button>

                {#if currentStep < totalSteps}
                    <button
                        type="button"
                        class="btn-primary"
                        onclick={incrementStep}
                    >
                        Next
                    </button>
                {:else}
                    <button
                        type="submit"
                        class="submit-btn"
                        disabled={!generalData.confirmed || !generalData.name}
                    >
                        Submit Flow
                    </button>
                {/if}
            </div>
        {:else}
            <div class="tab-content">
                <h2>{activeTab} Content</h2>
                <p>
                    Displaying information for {entityName} within the {activeTab}
                    module.
                </p>
            </div>
        {/if}
    </div>
</main>

<style>
    /* Essential layout styles */
    .gp-heading {
        display: flex;
        align-items: center;
        padding: 0 24px;
        background: #fff;
        border-bottom: 1px solid #e5e7eb;
        height: 70px;
        gap: 16px;
    }

    .btn-back {
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        border: 1px solid #d1d5db;
        cursor: pointer;
    }

    .breadcrumb ol {
        display: flex;
        list-style: none;
        gap: 8px;
        margin: 0;
        padding: 0;
        font-size: 0.875rem;
    }

    .tab-bar {
        display: flex;
        border-bottom: 2px solid #f3f4f6;
        margin-bottom: 24px;
    }

    .tab-bar button {
        padding: 12px 20px;
        border: none;
        background: none;
        cursor: pointer;
        color: #6b7280;
        font-weight: 500;
    }

    .tab-bar button.active {
        border-bottom: 2px solid #3b82f6;
        color: #3b82f6;
    }

    .content-card {
        background: white;
        border: 1px solid #e5e7eb;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    }

    .progress-bar {
        height: 8px;
        background: #f3f4f6;
        border-radius: 4px;
        margin: 12px 0 24px;
        overflow: hidden;
    }

    .progress-fill {
        height: 100%;
        background: #3b82f6;
        transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .input-field {
        width: 100%;
        max-width: 400px;
        padding: 10px 12px;
        border: 1px solid #d1d5db;
        border-radius: 6px;
        margin-top: 8px;
    }

    .footer-actions {
        display: flex;
        justify-content: space-between;
        margin-top: 32px;
        padding-top: 24px;
        border-top: 1px solid #f3f4f6;
    }

    .btn-secondary {
        padding: 8px 16px;
        border: 1px solid #d1d5db;
        background: white;
        border-radius: 6px;
        cursor: pointer;
    }

    .btn-primary {
        padding: 8px 16px;
        background: #3b82f6;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
    }

    .submit-btn {
        padding: 8px 20px;
        background: #10b981;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
    }

    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .checkbox-label {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
    }
</style>
