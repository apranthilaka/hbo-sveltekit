<script>
    import { base } from '$app/paths';

    import { page } from '$app/state';
    let { children } = $props();
</script>

{@render children()}
