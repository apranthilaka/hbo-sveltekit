<script>
    import { base } from '$app/paths';
    import { page } from '$app/stores';

    // 1. Define your navigation structure in one place
    const menuItems = [
        { name: 'Home', path: '/' },
        // { name: 'Dashboard', path: '/dashboard' },
        { name: 'Dashboard two', path: '/dashboardtwo' },
        { name: 'Settings', path: '/settings' },
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

<div class="left-menu">
    <nav>
        {#each menuItems as item}
            <a
                href="{base}{item.path}"
                class:active={isActive(item.path, $page.url.pathname)}
            >
                {item.name}
            </a>
        {/each}
    </nav>
</div>

<style>
    .left-menu {
        width: 250px;
        grid-column: 1/2;
        grid-row: 1/3;
        height: 100%;
        transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        background-color: hsla(158, 23%, 91%, 1);

        nav {
            display: flex;
            flex-direction: column;
            padding: 1rem;
            gap: 0.5rem;
        }

        a {
            text-decoration: none;
            color: #333;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            transition: background 0.2s;
        }

        /* 2. Style your active link here */
        a.active {
            background-color: white;
            color: hsla(158, 50%, 40%, 1);
            font-weight: bold;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
    }
</style>
