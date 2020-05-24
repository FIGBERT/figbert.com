<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`posts.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<svelte:head>
	<title>FIGBERT Blog</title>
	<meta name="description" content="FIGBERT Blog: My writeups, logs, posts, and general thoughts organized chronologically for your viewing pleasure.">
</svelte:head>

<div class="w-3/4">
	<h1>Posts</h1>
	<ul class="ml-6">
		{#if posts.length > 0}
			{#each posts as post}
				<li>
					<a rel="prefetch" href="posts/{post.slug}" class="underline">{post.title} – {post.date}</a>
					<div>
						{@html post.preview}
					</div>
				</li>
			{/each}
		{:else}
			<p>Nothing to see here... yet!</p>
		{/if}
	</ul>
</div>
