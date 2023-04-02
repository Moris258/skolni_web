<script lang="ts">
	import { timePassed } from './relativeTime';
	import Menu from '$lib/MenuAlt.svelte';
	import Document from '$lib/Document/Document.svelte';

	import type { PageData, RequestEvent } from './$types';

	export let data: PageData;

	const posts = data.posts
		.map((post) => ({ ...post, creation: new Date(post.creation) }))
		.sort((a, b) => Number(b.creation) - Number(a.creation));

</script>
<svelte:head>
	<title>Posts: {import.meta.env.VITE_TITLE_PREFIX}</title>
</svelte:head>

<div class="flex flex-col gap-4">
	<Menu />

	{#each posts as { author, title, content, creation }}
		<div class="material w-full max-w-screen-md mx-auto">
			<div class="flex justify-between items-center <sm:(flex-col items-start gap-1)">
				<div class="text-2xl font-semibold">{title}</div>
				<div>{author.name}, {timePassed(creation)}</div>
			</div>

			<hr />

			<Document data={content.document} />
		</div>
	{/each}
</div>
