<script lang="ts">
	import { base } from '$app/paths';
	import dayjs from 'dayjs';
	import ActiveTag from '../../components/tags/ActiveTag.svelte';
	import CollaborateTag from '../../components/tags/CollaborateTag.svelte';
	import Tag from '../../components/tags/Tag.svelte';

	export let project;
	let projectData = project.metadata;
	let startDate = projectData.startDate && dayjs(projectData.startDate).format('MMMM YYYY');
	let logo = projectData.logo.startsWith('http')
		? projectData.logo
		: `/static/images/projects/${projectData.logo}`;
</script>

<a href={`${base}/projects/${project.slug}`}>
	<div class="container">
		<div class="header">
			{#if logo}
				<img class="logo" src={logo} alt="{projectData.title}'s Logo" />
			{/if}
			<div class="content">
				<div class="title-line">
					<div class="title l-screen">{project.metadata.title}</div>
					<div class="activity-tags">
						{#if projectData.active}
							<ActiveTag active={projectData.active} />
						{/if}
						{#if projectData.lookingForCollaborators}
							<CollaborateTag />
						{/if}
					</div>
				</div>
				<div class="description l-screen">{project.metadata.description}</div>
			</div>
		</div>
		<div class="title s-screen">{project.metadata.title}</div>
		<div class="description s-screen">{project.metadata.description}</div>
		<div class="footer">
			{#if startDate}
				<div class="date">Since: {startDate}</div>
			{/if}
			{#if projectData.tags && projectData.tags.length}
				<div class="tags">
					{#each projectData.tags as tag}
						<Tag label={tag} />
					{/each}
				</div>
			{/if}
		</div>
	</div>
</a>

<style>
	.activity-tags {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		flex-shrink: 0;
	}

	.container {
		display: flex;
		flex-direction: column;
		background-color: #fff;
		border-radius: 5px;
		box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
		transition: all 0.2s ease-in-out;
		padding: 1rem;
	}

	.content {
		width: 100%;
	}

	.date {
		font-size: 1rem;
		font-weight: 600;
		width: 100%;
	}

	.description {
		font-size: 1rem;
		color: #777;
	}

	.footer {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		margin-top: 1rem;
	}

	.header {
		display: flex;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	.logo {
		width: 5rem;
		height: 5rem;
		border-radius: 0.4rem;
		margin-right: 20px;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem;
	}

	.title {
		font-size: 1.5rem;
		font-weight: bold;
		margin-bottom: 0.5rem;
		text-align: start;
		width: 100%;
	}

	.title-line {
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.l-screen {
		display: none;
	}

	.s-screen {
		display: inherit;
	}

	@media (min-width: 720px) {
		.container {
			padding: 1rem 2rem;
		}

		.date {
			width: fit-content;
		}

		.footer {
			flex-direction: row;
		}

		.header {
			margin-bottom: 0;
		}

		.title {
			width: fit-content;
		}

		.title-line {
			flex-direction: row;
		}

		.l-screen {
			display: inherit;
		}

		.s-screen {
			display: none;
		}
	}
</style>
