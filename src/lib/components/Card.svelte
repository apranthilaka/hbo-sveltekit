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
    <div class="card_heading">
        <a href={titleLink}>
            <div class="card_heading_icon">{iconText}</div>
            <div>
                <h6>{title}</h6>
            </div>
        </a>
    </div>

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

<style lang="scss">
    .card {
        border: 1px solid gray;
        border-radius: 8px;
        transition:
            box-shadow 0.3s ease,
            transform 0.2s ease-in-out;
        height: min-content;
        overflow: hidden;
        background-color: white;

        &_heading {
            h6 {
                margin: 0;
            }
            a {
                border: 1px solid blue;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                padding: 16px 24px;
                gap: 8px;
            }
        }
        &:hover {
            border-color: blue;
        }
    }

    .card_links {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
        border: 1px solid red;
    }
</style>
