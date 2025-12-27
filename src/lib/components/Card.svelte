<script>
    // Svelte 5 Props
    let {
        title = 'Default Title',
        entityTypeClass = 'card--gp',
        titleLink = '#',
    } = $props();

    // Svelte 5 Derived State: Automatically updates if entityTypeClass changes
    let iconText = $derived.by(() => {
        const className = String(entityTypeClass || '').toLowerCase();
        if (className.includes('gp')) return 'GP';
        if (className.includes('lp')) return 'LP';
        if (className.includes('cp')) return 'CP';
        if (className.includes('me')) return 'ME';
        return '??';
    });

    const menuItems = [
        'Details',
        'Users',
        'Mapped Entities',
        'Data Requests',
        'Add to My Entities',
    ];
</script>

<div class="card {entityTypeClass}">
    <a href={titleLink} class="card_heading_link">
        <div class="card_heading">
            <div class="card_icon">{iconText}</div>
            <h6>{title}</h6>
        </div>
    </a>

    <div class="card_links">
        {#each menuItems as label}
            <div role="button" tabindex="0" class="card_link_item">
                <div class="card_links_left-icon">
                    <i class="ph ph-chat-centered-dots"></i>
                </div>
                <div class="card_links_label">
                    <p>{label}</p>
                </div>
                <div class="card_links_right-icon">
                    <i class="ph ph-arrow-right right-icon"></i>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    /* Base Variables */
    .card {
        --header-background-color: #ffffff;
        --header-border-color: #e0e0e0;
        --icon-border-color: #e0e0e0;
        --icon-background-color: #e3e3e3;
        --grid-border-color: #e0e0e0;

        border: 1px solid var(--grid-border-color);
        border-radius: 8px;
        transition:
            box-shadow 0.3s ease,
            transform 0.2s ease-in-out;
        height: min-content;
        overflow: hidden;
        background-color: white;
    }

    .card:hover {
        box-shadow: rgba(0, 0, 0, 0.1);
    }
</style>
