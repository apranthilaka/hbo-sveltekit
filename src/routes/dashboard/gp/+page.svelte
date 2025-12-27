<script>
    // Navigation State
    let activeTab = 'General';
    const tabs = ['General', 'Analytics', 'Settings'];

    // 1. ISOLATED DATA OBJECTS
    // Each tab has its own object so they don't interfere
    let generalData = { name: '', preference: 'low', confirmed: false };
    let analyticsData = { reportTitle: 'Monthly Overview', views: 1200 };
    let settingsData = { email: 'user@example.com', notifications: true };

    // Flow Logic (Only for "General" tab)
    let currentStep = 1;
    const totalSteps = 3;

    const nextStep = () => {
        if (currentStep < totalSteps) currentStep++;
    };
    const prevStep = () => {
        if (currentStep > 1) currentStep--;
    };

    const handleTabChange = (tab) => {
        activeTab = tab;
    };

    const submitGeneralFlow = () => {
        console.log('Submitting General:', generalData);
        alert('General Flow Submitted!');
    };
</script>

<div class="dashboard-container">
    <h1>Dashboard Page</h1>

    <nav class="tab-bar">
        {#each tabs as tab}
            <button
                class:active={activeTab === tab}
                on:click={() => handleTabChange(tab)}
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
                        <label>
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
                <button disabled={currentStep === 1} on:click={prevStep}
                    >Back</button
                >
                {#if currentStep < totalSteps}
                    <button on:click={nextStep}>Next Step</button>
                {:else}
                    <button
                        class="submit-btn"
                        disabled={!generalData.confirmed}
                        on:click={submitGeneralFlow}
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
                <label>
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
    }
    .active {
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

    input,
    select {
        display: block;
        margin: 10px 0;
        padding: 8px;
        width: 100%;
        max-width: 300px;
    }
    label {
        display: block;
        margin-top: 15px;
        font-weight: bold;
    }
    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
</style>
