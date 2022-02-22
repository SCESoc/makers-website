<script lang="ts">
	import { base } from '$app/paths';
	import ActiveTag from '../../components/tags/ActiveTag.svelte';
	import type { Project } from '$types/projects';
	import dayjs from 'dayjs';
	import Tag from '../../components/tags/Tag.svelte';
	import MakerTag from '../../components/tags/MakerTag.svelte';
	import TechTag from '../../components/tags/TechTag.svelte';
	import ConnectTag from '../../components/tags/ConnectTag.svelte';
	import CollaborateTag from '../../components/tags/CollaborateTag.svelte';

	export let project: Project;
	let projectData = project.metadata;
	let startDate = projectData.startDate && dayjs(projectData.startDate).format('MMMM YYYY');
	let logo = projectData.logo.startsWith('http')
		? projectData.logo
		: `${base}/images/projects/${projectData.logo}`;
</script>

<svelte:head>
	<title>{projectData.title}</title>
</svelte:head>

<div class="title-header">
	{#if logo}
		<img class="logo" src={logo} alt="{projectData.title}'s Logo" />
	{/if}
	<div class="title-header-right">
		{#if projectData.active}
			<ActiveTag active={projectData.active} />
		{/if}
		{#if projectData.lookingForCollaborators}
			<CollaborateTag />
		{/if}
	</div>
</div>
<h1 class="title">{projectData.title}</h1>
{#if projectData.description}
	<p class="description">{projectData.description}</p>
{/if}
<div class="title-footer">
	{#if startDate}
		<p class="date">Since: {startDate}</p>
	{/if}
	{#if projectData.tags && projectData.tags.length}
		<div class="tags">
			{#each projectData.tags as tag}
				<Tag label={tag} />
			{/each}
		</div>
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
	<div class="sidebar">
		{#if projectData.makers && projectData.makers.length}
			<h3>Makers</h3>
			{#each projectData.makers as maker}
				<MakerTag {maker} />
			{/each}
		{/if}
		{#if projectData.technologies && projectData.technologies.length}
			<h3>Technologies Used</h3>
			<div class="tags">
				{#each projectData.technologies as technology}
					<TechTag {technology} />
				{/each}
			</div>
		{/if}
		{#if projectData.connectLinks && projectData.connectLinks.length}
			<h3>Connect</h3>
			{#if projectData.lookingForCollaborators}
				<p class="collab">Reach out to us! 👋 We are looking for collaborators!</p>
			{/if}
			<div class="links">
				{#each projectData.connectLinks as connectLink}
					<ConnectTag {connectLink} />
				{/each}
			</div>
		{/if}
	</div>
	<article class="content">
		{@html project.content}
	</article>
</div>

<style>
	.article-layout {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.banner {
		width: 100%;
		max-height: 30rem;
		object-fit: cover;
		border-radius: 0.4rem;
	}

	.collab {
		font-size: 1rem;
		font-weight: 600;
	}

	.date {
		font-size: 1.25rem;
		font-weight: 600;
	}

	.description {
		width: 100%;
		text-align: center;
		color: #777;
	}

	.links {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.logo {
		height: 5rem;
		border-radius: 0.4rem;
	}

	.sidebar {
		width: 100%;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem;
	}

	.title {
		margin: 0;
	}

	.title-footer {
		display: flex;
		flex-direction: column;
		padding-bottom: 1rem;
	}

	.title-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.title-header-right {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	@media (min-width: 720px) {
		.article-layout {
			flex-direction: row-reverse;
			gap: 3rem;
		}

		.content {
			width: 70%;
			padding: 1.5rem 0;
		}

		.sidebar {
			width: 30%;
			height: 100vh;
			position: sticky;
			top: 0;
			overflow-y: auto;
		}

		.title-footer {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			gap: 3rem;
			padding: 0.5rem 1rem;
		}
	}
</style>
