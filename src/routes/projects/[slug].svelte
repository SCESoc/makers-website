<script lang="ts">
	import type { Project } from '$types/projects';
	import dayjs from 'dayjs';

	export let project: Project;
	let projectData = project.metadata;
	let startDate = projectData.startDate && dayjs(projectData.startDate).format('MMM D, YYYY');
	let endDate = projectData.endDate && dayjs(projectData.endDate).format('MMM D, YYYY');
</script>

<svelte:head>
	<title>{projectData.title}</title>
</svelte:head>

<article>
	<h1 class="title">{projectData.title}</h1>
	{#if projectData.description}
		<p class="description">{projectData.description}</p>
	{/if}
	<div>
		{#if projectData.startDate}
			<p class="info">{projectData.startDate}</p>
		{/if}
		{#if projectData.endDate}
			<p class="info">{projectData.endDate}</p>
		{/if}
		{#if projectData.active}
			<div>Active</div>
		{/if}
	</div>
	{#if projectData.bannerImage}
		<img
			src={projectData.bannerImage}
			alt="{projectData.title} banner"
			title="{projectData.title} banner"
			class="banner"
		/>
	{/if}
	<div class="article-layout">
		<div class="content">
			{@html project.content}
		</div>
		<div class="sidebar">
			{#if projectData.makers && projectData.makers.length}
				<h2>Makers</h2>
				{#each projectData.makers as maker}
					<div>{maker.name}</div>
				{/each}
			{/if}
			{#if projectData.contactEmail}
				<div>{projectData.contactEmail}</div>
			{/if}
			{#if projectData.lookingForCollaborators}
				<div>Looking to collaborate</div>
			{/if}
		</div>
	</div>
</article>

<style>
	.article-layout {
		display: flex;
		gap: 3rem;
	}

	.banner {
		width: 100%;
		max-height: 30rem;
		object-fit: cover;
	}

	.content {
		width: 70%;
	}

	.description {
		width: 100%;
		text-align: center;
	}

	.sidebar {
		width: 30%;
		height: 100%;
		position: sticky;
		top: 0;
	}
</style>
