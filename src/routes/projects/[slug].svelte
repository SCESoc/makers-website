<script lang="ts">
	import type { Project } from '$types/projects';
	import dayjs from 'dayjs';

	export let project: Project;
	let projectData = project.metadata;
	let startDate = projectData.startDate && dayjs(projectData.startDate).format('MMMM YYYY');
</script>

<svelte:head>
	<title>{projectData.title}</title>
</svelte:head>

<article>
	<div class="title-header">
		{#if projectData.active}
			<div>Active</div>
		{/if}
	</div>
	<h1 class="title">{projectData.title}</h1>
	{#if projectData.description}
		<p class="description">{projectData.description}</p>
	{/if}
	<div class="title-footer">
		{#if startDate}
			<p class="info">Since: {startDate}</p>
		{/if}
		{#if projectData.tags}
			<p>Tags</p>
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
				<h3>Makers</h3>
				{#each projectData.makers as maker}
					<div>{maker.name}</div>
				{/each}
			{/if}
			{#if projectData.technologies && projectData.technologies.length}
				<h3>Technologies Used</h3>
				{#each projectData.technologies as technology}
					{#if typeof technology === 'string'}
						<div>{technology}</div>
					{/if}
					{#if typeof technology === 'object'}
						<div>{technology.name}</div>
					{/if}
				{/each}
			{/if}
			{#if projectData.lookingForCollaborators}
				<h3>Collaborate</h3>
			{/if}
			{#if projectData.contactEmail}
				<div>{projectData.contactEmail}</div>
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

	.title-footer {
		display: flex;
		justify-content: space-between;
	}

	.title-header {
		display: flex;
		justify-content: flex-end;
	}
</style>
