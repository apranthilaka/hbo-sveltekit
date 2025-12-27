<script lang="ts">
    // 1. REACTIVE STATE (Svelte 5 Runes)
    let activeTab = $state<string>('General');
    const tabs: string[] = ['General', 'Analytics', 'Settings'];

    // Isolated Data Objects with explicit types
    interface GeneralData {
        name: string;
        preference: string;
        confirmed: boolean;
    }
    interface AnalyticsData {
        reportTitle: string;
        views: number;
    }
    interface SettingsData {
        email: string;
        notifications: boolean;
    }

    let generalData = $state<GeneralData>({
        name: '',
        preference: 'low',
        confirmed: false,
    });
    let analyticsData = $state<AnalyticsData>({
        reportTitle: 'Monthly Overview',
        views: 1200,
    });
    let settingsData = $state<SettingsData>({
        email: 'user@example.com',
        notifications: true,
    });

    // Flow Logic
    let currentStep = $state<number>(1);
    const totalSteps: number = 3;

    // 2. TYPED FUNCTIONS
    const nextStep = (): void => {
        if (currentStep < totalSteps) currentStep++;
    };

    const prevStep = (): void => {
        if (currentStep > 1) currentStep--;
    };

    /**
     * FIX: Added ': string' to define the parameter type
     * Added ': void' to define the return type
     */
    const handleTabChange = (tab: string): void => {
        activeTab = tab;
        if (tab !== 'General') currentStep = 1;
    };

    const submitGeneralFlow = (): void => {
        console.log('Submitting General:', generalData);
        alert('General Flow Submitted!');
    };
</script>

<div class="dashboard-container">
    <h1>Dashboard Page</h1>

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

    <main class="content-card">
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

            <div class="step-content">
                {#if currentStep === 1}
                    <section>
                        <h2>General Setup</h2>
                        <input
                            type="text"
                            bind:value={generalData.name}
                            placeholder="Enter name..."
                        />
                    </section>
                {:else if currentStep === 2}
                    <section>
                        <h2>Configuration</h2>
                        <select bind:value={generalData.preference}>
                            <option value="high">High Priority</option>
                            <option value="low">Low Priority</option>
                        </select>
                    </section>
                {:else if currentStep === 3}
                    <section>
                        <h2>Review</h2>
                        <p>Name: {generalData.name}</p>
                        <label class="checkbox-container">
                            <input
                                type="checkbox"
                                bind:checked={generalData.confirmed}
                            />
                            Confirm details
                        </label>
                    </section>
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
                    <button type="button" onclick={nextStep}>Next Step</button>
                {:else}
                    <button
                        type="button"
                        class="submit-btn"
                        disabled={!generalData.confirmed}
                        onclick={submitGeneralFlow}
                    >
                        Submit Flow
                    </button>
                {/if}
            </div>
        {:else if activeTab === 'Analytics'}
            <div class="static-data">
                <h2>Analytics Editor</h2>
                <label>Report Title:</label>
                <input type="text" bind:value={analyticsData.reportTitle} />
                <p>Current Views: {analyticsData.views}</p>
            </div>
        {:else if activeTab === 'Settings'}
            <div class="static-data">
                <h2>User Settings</h2>
                <label>Email Address:</label>
                <input type="email" bind:value={settingsData.email} />
                <label class="checkbox-container">
                    <input
                        type="checkbox"
                        bind:checked={settingsData.notifications}
                    />
                    Enable Notifications
                </label>
            </div>
        {/if}
    </main>
</div>

<style>
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
    .active {
        border-bottom: 2px solid #007bff;
        color: #007bff !important;
        font-weight: bold;
    }

    .content-card {
        background: white;
        border: 1px solid #ddd;
        padding: 2rem;
        border-radius: 8px;
        min-height: 300px;
    }

    .progress-bar {
        height: 6px;
        background: #eee;
        width: 100%;
        margin: 10px 0;
        border-radius: 3px;
        overflow: hidden;
    }
    .progress-fill {
        height: 100%;
        background: #007bff;
        transition: width 0.3s ease;
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
        cursor: pointer;
    }

    input[type='text'],
    input[type='email'],
    select {
        display: block;
        margin: 10px 0;
        padding: 10px;
        width: 100%;
        max-width: 400px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    .checkbox-container {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 15px;
        cursor: pointer;
    }

    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
</style>
