<script lang="ts">
	import ProjectCard from '../../components/cards/ProjectCard.svelte';
	import type { Project } from '$types/projects';

	export let projects: Project[];
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>
<div>
	<h1>Projects</h1>
	<p class="page-description">Curation of projects being worked on in the Carleton Community</p>
	<div class="stats">{projects.length} Project(s)</div>
	<div class="projects">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</div>

<style>
	.page-description {
		text-align: center;
		text-align: center;
		color: #777;
	}

	.projects {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.stats {
		display: flex;
		justify-content: flex-end;
		font-size: 1rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}
</style>
