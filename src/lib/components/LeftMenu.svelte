<script>
    let isMenuOpen = $state(true);

    function hideMenu() {
        isMenuOpen = !isMenuOpen;
    }
    import { base } from '$app/paths';
    import { page } from '$app/stores';

    // 1. Define your navigation structure in one place
    const menuItems = [
        { name: 'Home', path: '/', icon: '<i class="ph-fill ph-house"></i>' },
        {
            name: 'Dashboard',
            path: '/dashboardtwo',
            icon: '<i class="ph-fill ph-grid-four"></i>',
        },
        {
            name: 'Settings',
            path: '/settings',
            icon: '<i class="ph-fill ph-gear"></i>',
        },
    ];

    /** * Helper function to check if a link is active.
     * It checks for an exact match or a match with a trailing slash.
     */
    const isActive = (path, currentPath) => {
        const fullPath = `${base}${path}`;

        // 1. Handle the Home/Root path separately (it matches everything)
        if (path === '/') {
            return currentPath === fullPath || currentPath === fullPath + '/';
        }

        // 2. For other paths, check if the current URL starts with the menu path
        // This keeps 'Dashboard two' active when you are at '/dashboardtwo/entity'
        return currentPath.startsWith(fullPath);
    };
</script>

<div
    class="left-menu bg-white border-r border-neutral-300 {isMenuOpen
        ? 'w-64 translate-x-0 opacity-100'
        : 'w-18 '}"
>
    <div
        class=" flex items-center pl-4 pr-4 h-14 border-b border-neutral-300 {!isMenuOpen
            ? 'justify-center'
            : 'justify-between'}"
    >
        {#if isMenuOpen === true}
            <button onclick={hideMenu}>
                <img src="/Holtara Logo.svg" alt="logo" />
            </button>
        {:else}
            <button onclick={hideMenu}>
                <img
                    class="w-7.5 h-7.5"
                    src="/logo-globe.svg"
                    alt="small logo"
                />
            </button>
        {/if}

        {#if isMenuOpen === true}
            <button
                title="asdfsdf"
                class="border border-neutral-500 w-7.5 h-7.5 flex items-center justify-center rounded-sm hover:bg-neutral-900 hover:text-neutral-50 text-neutral-500 transition-all hover:text-[18px]"
                onclick={hideMenu}
            >
                <!-- <i class="ph-fill ph-caret-left hover:cursor-pointer"></i> -->
                <i class="ph ph-text-outdent hover:cursor-pointer"></i>
            </button>
        {/if}
    </div>
    <nav>
        {#each menuItems as item}
            <a
                class=" text-neutral-500 pl-3 pr-3 gap-3 hover:border border-neutral-500 transiti delay-75 rounded-sm {isMenuOpen
                    ? 'flex item-center justify-start  h-10  '
                    : ' pl-0 pr-0 flex item-center justify-center  w-10 h-10 font-bold'}"
                href="{base}{item.path}"
                class:active={isActive(item.path, $page.url.pathname)}
            >
                <div class="flex justify-center items-center">
                    {@html item.icon}
                </div>
                {#if isMenuOpen === true}
                    <div class="flex justify-center items-center">
                        {item.name}
                    </div>
                {/if}
            </a>
        {/each}
    </nav>
</div>

<style>
    .left-menu {
        grid-column: 1/2;
        grid-row: 1/3;
        height: 100%;
        transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        /* background-color: hsla(158, 23%, 91%, 1); */

        nav {
            display: flex;
            flex-direction: column;
            padding: 1rem;
            gap: 0.5rem;
        }

        a {
            /* text-decoration: none;
            color: #333;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            transition: background 0.2s; */
        }

        /* 2. Style your active link here */
        a.active {
            background-color: rgb(0, 0, 0);
            color: hsla(158, 50%, 40%, 1);
            font-weight: medium;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            color: white;
            border-radius: 4px;
        }
    }
</style>
