<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`projects.json`).then(r => r.json()).then(projects => {
			return { projects };
		});
	}
</script>

<script>
	export let projects;
</script>

<svelte:head>
	<title>FIGBERT Projects</title>
</svelte:head>

<div class="w-3/4">
	<h1>Projects</h1>
	<ul class="ml-6">
		{#if projects.length > 0}
			{#each projects as project}
				<li>
					<a rel="prefetch" href="projects/{project.slug}" class="underline">{project.title}</a>
					<div>
						{@html project.preview}
					</div>
				</li>
			{/each}
		{:else}
			<p>Nothing to see here... yet!</p>
		{/if}
	</ul>
</div>