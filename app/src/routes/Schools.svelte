<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { schools } from './schools';

	let elements: HTMLElement[] = [];
</script>

<div class="material">
	<h1>Participating schools</h1>

	<div class="school-grid flex gap-4 p-2 flex-wrap justify-center">
		{#each schools as [name, logo, website, type], i}
		<div class="{type}">
			<a
				href={website}
				target="_blank"
				rel="noreferrer"
				bind:this={elements[i]}
				>
				<img src={logo} class="school-grid-item h-auto max-h-40 rounded-md" title={name} alt={name} />
			</a>
		</div>
		{/each}
	</div>
</div>

<style>
	.school-grid {
		display: grid;
  		grid-template-columns: auto auto auto auto;
	}
	.school-grid-item{
		padding: 16px;
		border: 1px solid #ddd;
		border-radius: 2px;
        @apply gap-20 p-2 shadow shadow-gray-200;
  		background-color: rgba(255, 255, 255, 0.8);
	}
	.item1{
		grid-column-start: 1;
		grid-column-end: 5;
	}
</style>
