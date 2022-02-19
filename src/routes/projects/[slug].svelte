<script lang="ts">
	import type { Project } from '$types/projects';

	export let project: Project;
	let date = project.metadata.date.toUpperCase();
</script>

<svelte:head>
	<title>{project.metadata.title}</title>
</svelte:head>

<article>
	<h1 class="title">{project.metadata.title}</h1>
	<p class="info">{date}</p>
	{@html project.content}
</article>

<style>
</style>
