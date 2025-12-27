<script>
    import { base } from '$app/paths';
</script>

<div class="left-menu">
    <nav>
        <a href="{base}/">Home</a>
        <a href="{base}/dashboard">Dashboard</a>
        <a href="{base}/settings">Settings</a>
    </nav>
</div>

<style>
    .left-menu {
        width: 200px;
        grid-column: 1/2;
        grid-row: 1/3;
        height: 100%;
        transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        background-color: hsla(158, 23%, 91%, 1);
        nav {
            display: flex;
            flex-direction: column;
        }
    }
</style>
