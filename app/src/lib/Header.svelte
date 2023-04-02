<script lang="ts">
	import { page, navigating } from '$app/stores';
	import MENU_ICON from '$lib/assets/menu.svg';
    import EU_LOGO from '$lib/assets/eu-logo.jpg';

</script>

<div class="page_top">
    <div style="float: left; width: 400px;">
        <a href="/">
            <img src={EU_LOGO} alt="EU logo"/>
        </a>
    </div>
    <div class="vl"></div>
    <div style="width: 70%">
        <div style="text-align: center; align-items: justify-center">
            <h1 style="font-size: 50px; color: white;">BE DIGI, BE ECO, BE IN</h1>
            <br>
            <h2>2021-1-CZ01-KA220-SCH-00027739</h2>
        </div>
    </div>

</div>

<style>

    .page_top{
        @apply flex flex-wrap justify-center gap-4 p-2 bg-blue-700 shadow shadow-gray-200 rounded-md select-none;
		@apply <sm:(flex-col text-center);
        align-items: center;
    }

    .vl{
        height: 100px;
        border-left: 4px solid black;
        float: left;
    }

</style>