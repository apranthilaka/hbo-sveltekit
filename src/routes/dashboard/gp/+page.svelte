<script>
    import { base } from '$app/paths';
    import { page } from '$app/stores';

    // 1. URL & BREADCRUMB LOGIC
    let entityName = $derived(
        $page.url.searchParams.get('name') || 'GP Details'
    );

    const goBack = () => {
        window.history.back();
    };

    // 2. TAB STATE
    let activeTab = $state('General');
    const tabs = ['General', 'Analytics', 'Settings'];

    // 3. TAB-SPECIFIC DATA (Runes)
    let generalInfo = $state({
        description: 'Primary entity configuration',
        status: 'Active',
        tags: ['Nebula', 'Nexus'],
    });

    let analyticsData = $state({
        views: 1240,
        conversions: 85,
        growth: '+12%',
    });
</script>

<div class="gp-heading">
    <button onclick={goBack} class="btn-back" aria-label="Go back">
        <i class="ph ph-arrow-left"></i>
    </button>

    <nav class="breadcrumb">
        <ol>
            <li>
                <a href="/dashboard" data-sveltekit-noscroll>Dashboard</a>
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
                onclick={() => (activeTab = tab)}
            >
                {tab}
            </button>
        {/each}
    </nav>

    <div class="content-card">
        {#if activeTab === 'General'}
            <section class="tab-section">
                <h2>General Information</h2>
                <div class="info-grid">
                    <label>Description</label>
                    <textarea bind:value={generalInfo.description}></textarea>

                    <label>Status</label>
                    <select bind:value={generalInfo.status}>
                        <option>Active</option>
                        <option>Inactive</option>
                        <option>Pending</option>
                    </select>
                </div>
            </section>
        {:else if activeTab === 'Analytics'}
            <section class="tab-section">
                <h2>Performance Metrics</h2>
                <div class="stats-grid">
                    <div class="stat-box">
                        <span class="label">Total Views</span>
                        <span class="value">{analyticsData.views}</span>
                    </div>
                    <div class="stat-box">
                        <span class="label">Conversions</span>
                        <span class="value">{analyticsData.conversions}</span>
                    </div>
                    <div class="stat-box">
                        <span class="label">Growth</span>
                        <span class="value positive"
                            >{analyticsData.growth}</span
                        >
                    </div>
                </div>
            </section>
        {:else if activeTab === 'Settings'}
            <section class="tab-section">
                <h2>Entity Settings</h2>
                <p>Manage permissions and visibility for {entityName}.</p>
                <button class="danger-btn">Archive Entity</button>
            </section>
        {/if}
    </div>
</main>

<style>
    /* HEADING & BREADCRUMBS */
    .gp-heading {
        display: flex;
        align-items: center;
        padding: 0 24px;
        background: #ffffff;
        border-bottom: 1px solid #e0e0e0;
        height: 70px;
        gap: 16px;
    }

    .btn-back {
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        border: 1px solid #ccc;
        cursor: pointer;
    }

    .breadcrumb ol {
        display: flex;
        list-style: none;
        gap: 8px;
        font-size: 14px;
        margin: 0;
        padding: 0;
    }

    .breadcrumb a {
        color: #666;
        text-decoration: none;
    }
    .breadcrumb .current-page {
        font-weight: 600;
        color: #000;
    }

    /* TABS */
    .page-content {
        padding: 24px;
    }
    .tab-bar {
        display: flex;
        gap: 8px;
        border-bottom: 1px solid #ddd;
        margin-bottom: 20px;
    }

    .tab-bar button {
        padding: 12px 24px;
        border: none;
        background: none;
        cursor: pointer;
        color: #666;
        border-bottom: 2px solid transparent;
        transition: all 0.2s;
    }

    .tab-bar button.active {
        color: #007bff;
        border-bottom: 2px solid #007bff;
        font-weight: 600;
    }

    /* CONTENT CARD */
    .content-card {
        background: white;
        border: 1px solid #eee;
        border-radius: 12px;
        padding: 32px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }

    .tab-section h2 {
        margin-top: 0;
        margin-bottom: 20px;
        font-size: 1.25rem;
    }

    /* GRIDS & UI */
    .info-grid {
        display: flex;
        flex-direction: column;
        gap: 12px;
        max-width: 400px;
    }
    .stats-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
    }
    .stat-box {
        padding: 16px;
        border: 1px solid #eee;
        border-radius: 8px;
        text-align: center;
    }
    .stat-box .label {
        display: block;
        font-size: 12px;
        color: #666;
    }
    .stat-box .value {
        font-size: 20px;
        font-weight: bold;
    }
    .positive {
        color: green;
    }

    textarea,
    select {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    .danger-btn {
        background: #dc3545;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 6px;
        cursor: pointer;
    }
</style>
