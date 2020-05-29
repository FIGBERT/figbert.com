<svelte:head>
	<title>FIGBERT</title>
	<meta name="description" content="The home of FIGBERT on the clearnet – my blog, portfolio, and general hub of information.">
</svelte:head>

<script context="module">
	export function preload({ params, query }) {
		return this.fetch("rss.xml").then(() => {
			return this.fetch("atom.xml")
		});
	}
</script>

<div class="w-3/4">
	<h1>Welcome to the home of FIGBERT on the clearnet</h1>
	<p>
		Below you'll find a few curated posts and projects of mine – my <a href="https://joelhooks.com/digital-garden" target="_blank" rel="noopener noreferrer" class="underline">
		digital garden</a> if you will. To see my posts organized in chronological order, take a look at some of my <a href="/posts" class="underline">posts</a>, and to see all
		of my projects navigate to the <a href="/posts" class="underline">projects</a> page.
	</p>
	<pre class="hidden sm:block whitespace-pre">
		{#if Math.floor(Math.random() * 2) == 0}
<!--      -->&nbsp;&nbsp;_______________________
<!--     -->/ \ ~~~~~~~~~~~~~~~~~~~~ \.
<!--     -->\_ | ~~~~~~~~~~~~~~~~~~~~ |.
<!--     -->   | ~~~~~~~~~~~~~~~~~~~~ |.
<!--     -->   | ~~~~    <a href="/projects/txtodo" class="underline">txtodo</a>    ~~~~ |.
<!--     -->   | ~~~~~~~~~~~~~~~~~~~~ |.
<!--     -->   | ~~~~~~~~~~~~~~~~~~~~ |.
<!--     -->   | ~~~~~~~~~~~~~~~~~~~~ |.
<!--     -->   |   ____________________|_
<!--     -->   \_/_____________________/.
		{:else}
<!--     -->.----------------------------.
<!--     -->|\  /\  /\ /\ /\ /\ /\  /\  /|
<!--     -->| )(  )(  )(  )(  )(  )(  )( |
<!--     -->|(  )(  )(  )(  )(  )(  )(  )|
<!--     -->| )(  )(  )( <a href="/projects/txtodo" class="underline">txtodo</a> )(  )(  )( |
<!--     -->|(  )(  )(  )(  )(  )(  )(  )|
<!--     -->| )(  )(  )(  )(  )(  )(  )( |
<!--     -->|(  )(  )(  )(  )(  )(  )(  )|
<!--     -->|/  \/  \/ \/ \/ \/ \/  \/  \|
<!--     -->'----------------------------'
		{/if}
	</pre>
	<li class="block sm:hidden mt-8">
		<ul>&rightarrow; &rightarrow; <a href="/projects/txtodo" class="underline">txtodo</a> &leftarrow; &leftarrow;<ul>
	</li>
</div>
