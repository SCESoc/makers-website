<script lang="ts">
	import ProjectCard from '../components/cards/ProjectCard.svelte';
	import { base } from '$app/paths';

	import type { Project } from '$types/projects';

	import FloatingBlurBlob from '../components/backgrounds/FloatingBlurBlob.svelte';

	export let projects: Project[];
</script>

<svelte:head>
	<title>Makers Club</title>
</svelte:head>
<div>
	<FloatingBlurBlob style="position: absolute; top: 0; left: 0; width: 100vw; z-index: -1;" />
	<div class="main">
		<h1 class="main-heading">A Community that Learns by Making</h1>
		<p>
			We're a community of like minded individuals who connect to work on personal and group
			projects. We support, provide feedback and share knowledge between each other
		</p>
		<p>
			Anyone can join! To join the Makers Club, type <code>#assign MAKER</code> in the
			<code>#roles</code>
			channel on
			<code><a target="_blank" href="https://www.scesoc.ca/discord">SCESoc's Discord</a></code>. You
			will be able to access all the
			<code>Makers Club</code> channels available
		</p>
		<p>
			We meet up once in a while on <code
				><a target="_blank" href="https://www.scesoc.ca/discord">SCESoc's Discord</a></code
			>
			to discuss what we're working on and learning.
		</p>
	</div>

	<div class="main">
		<h1>What is the Makers Club?</h1>
		<p>
			Projects are a great way to expand a student&apos;s knowledge and skill related to their
			career and interests. Projects teaches the student to apply what they have learnt in college
			and identify the bottlenecks they face in their respective projects. Students get the
			opportunity to make mistakes without fear and learn practically. It is a different kind of
			learning from lectures and books, it's learning by making. Books and lectures are very
			important for building a foundation. Actually building things with the knowledge you have
			learnt from the lectures gives you a better understanding of how things come together and you
			will be motivated to learn more. Every company asks about the project you have done.
		</p>
		<p>
			Makers Club offers an experience to the Carleton community that can fast-track the journey of
			students towards their goals and interests through various activities around 'Projects' -
			personal projects, side projects, group projects. A community that can inspire, support and
			track your goals.
		</p>
	</div>

	<div class="main">
		<h1>Things we do</h1>
		<ul class="grid">
			<li class="item">
				<div class="item-text">SHARE OUR PROJECTS</div>
			</li>
			<li class="item">
				<div class="item-text">COMMUNITY SUPPORT</div>
			</li>
			<li class="item">
				<div class="item-text">ACCOUNTABILITY</div>
			</li>
			<li class="item">
				<div class="item-text">KNOWLEDGE SHARING</div>
			</li>
		</ul>
	</div>

	<div class="main">
		<h1>Community Projects</h1>
		<div class="flex-end">
			<a class="see-more" sveltekit:prefetch href="{base}/projects">See All -></a>
		</div>
		<div class="projects">
			{#each projects as project}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</div>

<style>
	a {
		color: var(--scesoc-yellow);
	}

	p {
		font-size: 1rem;
	}

	.flex-end {
		display: flex;
		justify-content: flex-end;
	}

	.main {
		text-align: center;
		min-height: 90vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 1rem;
		margin: 0 auto;
		padding: 3rem 0;
	}

	.item {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 0.4rem;
		padding: 2rem 2.5rem;
		text-align: center;
		box-shadow: 0px 0px 10px 5px rgba(204, 153, 13, 0.493);
	}

	.item-text {
		font-size: 1.5rem;
		font-weight: 800;
	}

	.main-heading {
		font-size: 3em;
		font-weight: 900;
	}

	.projects {
		display: flex;
		flex-direction: column;
		margin-top: 1rem;
		gap: 1rem;
	}

	.see-more {
		font-size: 1rem;
		font-weight: 600;
		color: var(--text-color);
	}

	@media (min-width: 720px) {
		p {
			font-size: 1.2rem;
		}

		.grid {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-gap: 3rem;
			margin: 0 auto;
		}

		.main-heading {
			font-size: 6em;
			font-weight: 900;
		}

		.main {
			min-height: 80vh;
		}
	}
</style>
