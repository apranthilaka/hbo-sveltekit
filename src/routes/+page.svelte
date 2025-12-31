<script lang="ts">
    import { base } from '$app/paths';
    const cardsData = [
        {
            id: 1,
            title: 'Quick Links',
            icon: '<i class="ph ph-airplay"></i>',
        },
        {
            id: 2,
            title: 'Entities',
            icon: '<i class="ph ph-airplay"></i>',
        },
        {
            id: 3,
            title: 'Company List',
            icon: '<i class="ph ph-airplay"></i>',
        },

        {
            id: 1,
            title: 'Finance Reports',
            icon: '<i class="ph ph-airplay"></i>',
        },
    ];
</script>

<div class="sitemap-container">
    <div class="data-wrapper">
        <div class="sitemap-title">
            <i class="ph-fill ph-squares-four"></i>
            <h4>SITEMAP</h4>
        </div>
        <div class="sitemap-cards">
            {#each cardsData as card}
                <div
                    class="card border border-neutral-300 shadow hover:shadow-lg rounded-md min-h-40"
                >
                    <div
                        class="card_title h-12 border-b border-neutral-300 flex items-center justify-start pl-6 pr-6 gap-2"
                    >
                        <div class="pt-1.25">{@html card.icon}</div>
                        <div>{card.title}</div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<style lang="scss">
    .sitemap-container {
        // border: 10px solid red;
        grid-column: 2/3;
        grid-row: 2/3;
        overflow: hidden;
        /* 2. Turn on Flexbox */
        // display: flex;
        // flex-direction: column;
        /* 3. Prevent the container itself from scrolling */
        // overflow: hidden;
        // box-sizing: border-box;
    }

    .data-wrapper {
        display: flex;
        flex-direction: column;
        height: 100%; /* Ensure the wrapper fills the parent container's height */
    }
    .sitemap-title {
        background-color: #ffffff;
        padding: 0 24px;
        gap: 8px;
        // border-bottom: 1px solid rgb(214, 214, 214);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        min-height: 70px;

        box-shadow:
            rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
            rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

        h4,
        i {
            margin: 0;
        }
        i {
            font-size: 24px;
            //padding-top: 3px;
        }
    }

    .sitemap-cards {
        // border: 10px solid rgb(0, 167, 50);
        height: 100%;
        overflow-y: auto;

        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
        grid-template-rows: min-content;
        gap: 16px;
        padding: 16px;

        overflow-y: auto; /* Ensure scrolling is still enabled */

        /* 1. Hide scrollbar for Chrome, Safari, and newer Edge */
        &::-webkit-scrollbar {
            display: none;
        }

        /* 2. Hide scrollbar for Firefox */
        scrollbar-width: none;

        /* 3. Hide scrollbar for IE and older Edge */
        -ms-overflow-style: none;
    }
    .card {
        &_title {
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
    }
</style>
