<script lang="ts">
	import { base } from '$app/paths';
	import type { Project } from '$types/projects';

	export let projects: Project[];
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>
<div>
	<h1>Projects</h1>
	<p class="info">{projects.length} projects.</p>
	{#each projects as project}
		<a href={`${base}/projects/${project.slug}`}>
			<h2 class="title">{project.metadata.title}</h2>
			<p>{project.metadata.description}</p>
		</a>
	{/each}
</div>

<style>
</style>
