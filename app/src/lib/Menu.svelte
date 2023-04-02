<script lang="ts">
	import { page, navigating } from '$app/stores';
	import MENU_ICON from '$lib/assets/menu.svg';

	type MenuItems = [path: string, label: string][];

	const menuItems: MenuItems = [
		['/', 'About the project'],
		['/info', 'Current information'],
		['/posts', 'Posts']
	];

	let menuToggleWidth: number;
	let menuShown = false;

	
	const toggleMenu = () => (menuShown = !menuShown);
	
	$: {
		if (menuToggleWidth === 0) menuShown = true;
		else menuShown = false;
	}

	navigating.subscribe(() => {
		if (menuToggleWidth !== 0) menuShown = false;
	});
</script>

<nav>
	<div class="menu-toggle" on:click={toggleMenu} bind:clientWidth={menuToggleWidth}>
		<img src={MENU_ICON} alt="Menu toggle" />
	</div>

	{#if menuShown}
		{#each menuItems as [path, label]}
			<a class="menu-item" class:menu-item__active={$page.url.pathname === path} href={path}
				>{label}</a
			>
		{/each}
	{/if}
</nav>

<style>
	nav {
		@apply flex flex-wrap justify-center gap-4 p-2 bg-blue-700 shadow shadow-gray-200 rounded-md select-none;
		@apply <sm:(flex-col items-center text-center);
	}

	.menu-toggle {
		@apply w-0; /* Hide on larger screens, value is used to track wether the toggle is shown */
		@apply <sm:(flex justify-center w-full p-4 bg-indigo-900 rounded-md);
		@apply active:(filter brightness-120);
	}

	.menu-item {
		@apply text-light-100 text-lg px-4 py-2 whitespace-nowrap no-underline rounded-md;
		@apply hover:(bg-blue-500 text-light-50 underline underline-current);
		@apply <sm:(w-full);
	}

	.menu-item__active {
		@apply bg-blue-600;
	}
</style>
