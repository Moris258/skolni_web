<script lang="ts">
	import 'virtual:windi.css';

	import { navigating } from '$app/stores'

	import Menu from '$lib/Menu.svelte';
	import MenuAlt from '$lib/MenuAlt.svelte';
	import Header from '$lib/Header.svelte';
	import Loading from '$lib/Loading.svelte';
	import Footer from '$lib/Footer.svelte';
</script>


<div class="container mx-auto p-4 flex flex-col gap-8 min-h-screen">
	<Header />

	<main class="px-8 flex-1">
		{#if $navigating}
			<Loading />
		{:else}
			<slot />
		{/if}
	</main>

	<!--<Footer />-->
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

	:global(body) {
		font-family: 'Open Sans', sans-serif;
		font-size: 100%;
	}

	:global(h1) {
		@apply text-3xl font-semibold py-3;
	}

	:global(a) {
		@apply text-blue-600 underline underline-current;
		@apply hover:text-blue-800;
	}

	:global(hr) {
		@apply h-0.5 bg-gray-400 my-2;
	}

	:global(.material) {
		@apply bg-gray-100 p-6 rounded-md;
	}
</style>
