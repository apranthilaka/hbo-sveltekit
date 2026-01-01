<script lang="ts">
    import '../styles/global.css';
    import { base } from '$app/paths';
    import TopMenu from '$lib/components/TopMenu.svelte';
    import LeftMenu from '$lib/components/LeftMenu.svelte';

    let { children } = $props();

    import { onNavigate } from '$app/navigation';

    //     navigation animation
    onNavigate((navigation) => {
        if (!document.startViewTransition) return;

        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
    //     navigation animation
</script>

<div class="root-layout">
    <TopMenu />
    <LeftMenu />

    <main class="content-area">
        {@render children()}
    </main>
</div>

<style>
    .root-layout {
        height: 100vh;
        display: grid;
        grid-template-columns: max-content auto;
        grid-template-rows: 56px 1fr;
        /* border: 10px solid orange; */
        overflow: auto;
    }

    .content-area {
        grid-column: 2/3;
        grid-row: 2/3;
        /* border: 10px solid blue; */
        overflow: hidden;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    /* Keep layout elements static during transitions */
    :global(.app-container > Topbar),
    :global(.main-body > LeftMenu) {
        view-transition-name: main-nav;
    }

    /* Ensure the browser knows these are the same elements across pages */
    .content-area {
        view-transition-name: page-content;
    }
</style>
