<script lang="ts">
	import { onMount } from 'svelte';
	import { processDocument } from './document';
	import type { Entry } from './document';

	export let data: Entry[];
	let target: HTMLDivElement;

	onMount(() => {
		data.forEach((entry) => processDocument(target, entry));
	});
</script>

<div bind:this={target} />
