<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch(`projects/${params.slug}.json`);
		const data = await res.json();
		if (res.status === 200) {
			return { project: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let project;
</script>

<svelte:head>
	<title>{project.title} by FIGBERT</title>
	<meta name="description" content={project.preview}>
</svelte:head>

<div class="w-3/4">
	<div class="mb-6">
		<h1 class="font-extrabold">{project.title}</h1>
		<div style="color: #bababa;"><a href="/projects">← Back</a></div>
	</div>
	<div>
		{@html project.html}
	</div>
</div>
