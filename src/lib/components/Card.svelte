<script>
    let { title, entityTypeClass = 'card--gp', titleLink = '' } = $props();

    const getIconText = (className) => {
        if (className.includes('gp')) return 'GP';
        if (className.includes('lp')) return 'LP';
        if (className.includes('cp')) return 'CP';
        if (className.includes('me')) return 'ME';
        return '??';
    };
</script>

<div class="card {entityTypeClass}">
    <a href={titleLink} class="card_heading_link">
        <div class="card_heading">
            <div class="card_icon">{getIconText(entityTypeClass)}</div>
            <h6>{title}</h6>
        </div>
    </a>

    <div class="card_links">
        {#each ['Details', 'Users', 'Mapped Entities', 'Data Requests', 'Add to My Entities'] as label}
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
    .card {
        --header-background-color: #ffffff;
        --header-border-color: rgb(224, 224, 224);
        --icon-border-color: rgb(224, 224, 224);
        --icon-background-color: #e3e3e3;
        border: 1px solid rgb(224, 224, 224);
        border-radius: 8px;
        transition:
            box-shadow 0.3s ease,
            transform 0.5s ease-in-out;
        height: min-content;
        overflow: hidden;
    }

    .card:hover {
        transition: transform 0.1s ease-in-out;
        box-shadow:
            rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
            rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        transform: scale(1.02);
    }

    .card_heading_link {
        text-decoration: none;
        color: inherit;
    }

    .card_heading {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 12px;
        padding: 8px 16px;
        border-bottom: 1px solid var(--header-border-color);
        background-color: var(--header-background-color);
        transition: background-color 0.5s ease;
    }

    .card_heading:hover h6 {
        text-decoration: underline;
    }

    .card_icon {
        border: 1px solid var(--icon-border-color);
        background-color: var(--icon-background-color);
        width: 32px;
        height: 32px;
        border-radius: 1000px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-color 0.5s ease;
        font-size: 13px;
    }

    .card_links {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(49%, 1fr));
        gap: 1px;
    }

    .card_link_item {
        gap: 8px;
        width: 100%;
        height: 40px;
        outline: 1px solid rgb(224, 224, 224);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0 16px;
        color: gray;
        transition:
            background-color 0.5s ease,
            color 0.5s ease;
    }

    .card_link_item:hover {
        text-decoration: underline;
        cursor: pointer;
        color: black;
    }

    .card_link_item:hover .card_links_right-icon {
        display: flex;
    }

    .card_links_label {
        width: 100%;
    }
    .card_links_label p {
        margin: 0;
    }

    .card_links_right-icon {
        display: none;
        justify-content: center;
        align-items: center;
    }

    /* Entity Variants */
    .card--gp {
        --icon-border-color: #f1dc8e;
        --icon-background-color: #fbf5df;
    }
    .card--gp:hover {
        --icon-background-color: #f1dc8e;
        --header-background-color: #fbf5df;
        --header-border-color: #fbf5df;
    }

    .card--lp {
        --icon-border-color: #85f09c;
        --icon-background-color: #dffbe5;
    }
    .card--lp:hover {
        --icon-background-color: #85f09c;
        --header-background-color: #dffbe5;
        --header-border-color: #dffbe5;
    }

    .card--cp {
        --icon-border-color: #dda8f5;
        --icon-background-color: #f8edfd;
    }
    .card--cp:hover {
        --icon-background-color: #dda8f5;
        --header-background-color: #f8edfd;
        --header-border-color: #f8edfd;
    }
</style>
