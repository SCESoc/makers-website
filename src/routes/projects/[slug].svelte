<script lang="ts">
	import type { Project } from '$types/projects';

	export let project: Project;
	let date = project.metadata.date.toUpperCase();
</script>

<svelte:head>
	<title>{project.metadata.title}</title>
</svelte:head>

<h1 class="title">{project.metadata.title}</h1>
<p class="info"><a href="https://github.com/zhuzilin">zhuzilin</a> {date}</p>
{@html project.content}

<style>
</style>
