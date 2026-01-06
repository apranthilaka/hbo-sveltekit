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

<div
    class="card {entityTypeClass} hover:border-neutral-300 transition-border -mr-px -mb-px hover:shadow-xl transition-shadow duration-300 shadow-sm border border-gray-300"
>
    <!-- card heading  -->
    <div class="group card_heading font-medium text-base pt-1 pb-1">
        <a
            class="group-hover:underline flex items-center justify-start pl-3 rp-6 pt-1 pb-1 gap-3"
            href={titleLink}
        >
            <div
                class="group-hover:no-underline card_heading_icon w-8 h-8 flex items-center justify-center rounded-full font-normal text-xs shadow-lg"
            >
                {iconText}
            </div>
            <div>
                {title}
            </div>
        </a>
    </div>
    <!-- card links  -->
    <div class="card_links">
        {#each menuItems as label}
            <div
                class="group card_links_item border border-neutral-200 -mr-px -mb-px border-l-0"
            >
                <div class="none card_links_left-icon group-hover:block">
                    <i class="ph ph-chat-centered-dots"></i>
                </div>
                <div
                    class="card_links_label text-base md:text-sm text-neutral-500 group-hover:text-neutral-800 cursor-pointer group-hover:font-medium transition-all duration-100"
                >
                    {label}
                </div>
                <!-- right icon  -->
                <div
                    class="invisible group-hover:visible mr-1 group-hover:translate-x-1.25 card_links_right-icon transition-transform duration-300 ease-in-out"
                >
                    <i class="ph ph-arrow-right right-icon"></i>
                </div>
                <!-- right icon  -->
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    .card {
        // border: 1px solid gray;
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
                // border: 1px solid blue;
                // display: flex;
                // flex-direction: row;
                // justify-content: flex-start;
                // align-items: center;
                // padding: 16px 24px;
                // gap: 8px;
            }
        }
    }

    .card_links {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));

        &_item {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            padding: 12px;
            gap: 8px;
        }
        &_label {
            white-space: nowrap; /* Prevents text from wrapping to a new line */
            overflow: hidden; /* Hides any text that overflows the container */
            text-overflow: ellipsis; /* Displays the ellipsis (...) for clipped text */

            /* Other necessary properties */
            width: 200px; /* or a percentage, max-width, or flex basis */
            display: block; /* or inline-block, flex item, etc. */
        }
    }

    .card--lp {
        .card_heading {
            background-color: white;
        }
        .card_heading_icon {
            background-color: #dffbe5;
        }
        transition: all 0.5s;

        &:hover {
            transition: all 0.5s;

            .card_heading {
                background-color: #dffbe5;
            }
            .card_heading_icon {
                background-color: #85f09c;
            }
        }
    }

    .card--gp {
        .card_heading {
            background-color: white;
        }
        .card_heading_icon {
            background-color: #fbf5df;
        }
        transition: all 0.5s;

        &:hover {
            transition: all 0.5s;

            .card_heading {
                background-color: #fbf5df;
            }
            .card_heading_icon {
                background-color: #f1dc8e;
            }
        }
    }

    .card--cp {
        .card_heading {
            background-color: white;
        }
        .card_heading_icon {
            background-color: #f8edfd;
        }
        transition: all 0.5s;

        &:hover {
            transition: all 0.5s;

            .card_heading {
                background-color: #f8edfd;
            }
            .card_heading_icon {
                background-color: #dda8f5;
            }
        }
    }
    .card--me {
        .card_heading {
            background-color: white;
        }
        .card_heading_icon {
            background-color: #edfafd;
        }
        transition: all 0.5s;

        &:hover {
            transition: all 0.5s;

            .card_heading {
                background-color: #edfafd;
            }
            .card_heading_icon {
                background-color: #aee9f4;
            }
        }
    }
</style>
