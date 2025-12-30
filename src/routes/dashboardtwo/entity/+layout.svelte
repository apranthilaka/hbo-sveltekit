<script>
    import { base } from '$app/paths';

    import { page } from '$app/state';
    let { children } = $props();
</script>

<nav>
    <a href="?tab=1">Tab 1</a>
    <a href="?tab=2">Tab 2</a>
    <a href="?tab=3">Tab 3</a>
</nav>

{@render children()}
