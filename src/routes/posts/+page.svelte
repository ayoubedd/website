<script lang="ts">
	import PostCard from '$lib/components/PostCard.svelte';
	import Meta from '$lib/composables/Meta.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<Meta title="Posts" description="Blog posts about various things" />
</svelte:head>

<section>
	<div class="breif">
		<h1>Posts</h1>
		<p>Blog posts about various things</p>
	</div>

	{#each data.posts as article}
		<PostCard
			url={'/posts/' + article.slug}
			title={article.title}
			description={article.description}
			publishDate={new Date(article.publishDate)}
		/>
	{/each}
</section>

<style lang="scss">
	.breif {
		margin-bottom: 2rem;
		h1 {
			font-size: 2.2rem;
		}
	}
</style>
