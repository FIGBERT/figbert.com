<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch(`posts/${params.slug}.json`);
		const data = await res.json();
		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<svelte:head>
	<title>{post.title} by FIGBERT</title>
	<meta name="description" content={post.preview}>
</svelte:head>

<div class="w-3/4">
	<div class="mb-6">
		<h1 class="font-extrabold">{post.title} – {post.date}</h1>
		<div style="color: #bababa;"><a href="/posts">← Back</a></div>
	</div>
	<div>
		{@html post.html}
	</div>
</div>
