<script lang="ts">
    import { base } from '$app/paths';
    import Topbar from '$lib/components/Topbar.svelte';
    import LeftMenu from '$lib/components/LeftMenu.svelte';

    let { children } = $props();
</script>

<div class="app-container">
    <Topbar />

    <div class="main-body">
        <LeftMenu />

        <main class="content-area">
            {@render children()}
        </main>
    </div>
</div>

<style>
    .app-container {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .main-body {
        display: flex;
        flex: 1; /* Takes up remaining height */
    }
    .content-area {
        flex: 1;
        overflow-y: auto;
        padding: 20px;
    }
</style>
