<script lang="ts">
	import Menu from '$lib/MenuAlt.svelte';

	import type { PageData, RequestEvent } from './$types';

	export let data: PageData;
	const galleries = data.galleries;

</script>
<svelte:head>
	<title>Galleries: {import.meta.env.VITE_TITLE_PREFIX}</title>
</svelte:head>

<div class="flex flex-col gap-4">
	<Menu />

	{#each galleries as { images, name }}
		<h1>{ name }</h1>
		<div class="gallery">
			{#each images as {photo}}
				<div class="gallery-item">
					<img src={photo.url} class="h-auto max-h-60" alt="img"/>
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>
	.gallery {
		display: grid;
		grid: 4;
		gap: 32px;
  		grid-template-columns: auto auto auto;
	}
	.gallery-item{
		padding: 16px;
		border: 1px solid #ddd;
		border-radius: 2px;
        @apply gap-20 p-2 shadow shadow-gray-200;

	}
</style>
