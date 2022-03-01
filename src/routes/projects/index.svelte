<script lang="ts">
	import ProjectCard from '../../components/cards/ProjectCard.svelte';
	import type { Project } from '$types/projects';
	import SmartLink from '../../components/link/SmartLink.svelte';

	export let projects: Project[];
</script>

<svelte:head>
	<title>Project Showcase</title>
</svelte:head>
<div class="container">
	<h1>Projects Showcase</h1>
	<p class="page-description">Curation of projects being worked on in the Carleton Community</p>
	<div class="title-footer">
		<SmartLink href="/add-project">
			<button class="add-project-button">Showcase Your Projects -></button>
		</SmartLink>
		<div class="stats">{projects.length} Project(s)</div>
	</div>
	<div class="projects">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</div>

<style>
	.add-project-button {
		padding: 0.5rem 1rem;
		border-radius: 0.4rem;
		color: white;
		background-color: #272525;
		transition: all 0.2s ease-in-out;
		box-shadow: 0px 0px 10px 5px rgba(204, 153, 13, 0.493);
	}

	.add-project-button:hover {
		background-color: #272525;
		box-shadow: 0px 0px 15px 10px rgba(204, 153, 13, 0.493);
	}

	.container {
		position: relative;
	}

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
		font-size: 1rem;
		font-weight: 600;
	}

	.title-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 0 1.5rem;
	}

	@media (min-width: 720px) {
		.title-footer {
			padding: 1rem 1rem 1.5rem;
		}
	}
</style>
