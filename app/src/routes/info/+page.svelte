<script lang="ts">
	import type { PageData } from './$types';
	import Document from '$lib/Document/Document.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Current Information: {import.meta.env.VITE_TITLE_PREFIX}</title>
</svelte:head>

{#if data.infos[0]}
	<div class="material max-w-screen-md mx-auto">
		<Document data={data.infos[0].content.document} />
	</div>
{/if}
