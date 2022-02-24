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
			We're a community that comes together to work on personal and group projects. We support,
			provide feedback and share knowledge between us.
		</p>
		<p>
			Anyone can join! To join the Makers Club, type <code>#assign MAKER</code> in the
			<code>#roles</code>
			channel on
			<code><a target="_blank" href="https://www.scesoc.ca/discord">SCESoc's Discord</a></code>.
			Then you will get access to all the <code>Makers Club</code> channels on there.
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
			Projects are a great way for students to expand their knowledge and skill on aspects related
			to their career interests. They teach you things that might not have been taught to you in
			class and you learn from running into problems and making mistakes. It is a different kind of
			learning from lectures and books, it's learning by making. Books and lectures are very
			important for building a foundation, but can only take you so far. Actually building things
			with the knowledge you have gives you a better understanding of how things come together and
			can motivate you to learn more. This is why companies love asking you what kind of personal
			projects you've worked on.
		</p>
		<p>
			We want Makers Club to offer an experience to the Carleton community that fast-tracks the
			journey of students towards their goals and interests through various efforts surrounded
			around 'Projects' - personal projects, side projects, group projects. A community can inspire,
			support and hold you accountable to your goals.
		</p>
	</div>

	<div class="main">
		<h1>Things we do</h1>
		<ul class="grid">
			<li class="item">
				<h3>Share what we're working on</h3>
			</li>
			<li class="item">
				<h3>Offer feedback and support</h3>
			</li>
			<li class="item">
				<h3>Hold each other accountable</h3>
			</li>
			<li class="item">
				<h3>Share knowledge</h3>
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
		display: block;
		/* background: rgb(233, 234, 236); */
		border-radius: 0.4rem;
		padding: 1rem 2rem;
		text-align: center;
		box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
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
