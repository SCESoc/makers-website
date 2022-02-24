<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import SCESocLogo from './SCESocLogo.svg';
	import { mobileMenuOpen } from '../../stores/global';
	import { menu } from '$lib/menu';

	let innerWidth;

	function openMobileMenu() {
		mobileMenuOpen.update((v) => true);
	}
</script>

<svelte:window bind:innerWidth />

<header>
	<div class="corner">
		<a sveltekit:prefetch href="/">
			<span class="logo">makers<br />club</span>
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		{#if innerWidth > 480}
			<ul>
				{#each menu as item}
					<li class:active={item.active($page.url.pathname)}>
						<a sveltekit:prefetch href={`${base}${item.path}`}>{item.name}</a>
					</li>
				{/each}
			</ul>
		{:else}
			<ul>
				<li on:click={openMobileMenu}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="#fff"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</li>
			</ul>
		{/if}
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a target="_blank" href="https://www.scesoc.ca/">
			<img src={SCESocLogo} alt="SCESoc" />
			{#if innerWidth > 480}
				<span class="logo">SCESoc</span>
			{/if}
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		height: 3em;
		padding: 0.5em 1em 0em 1em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2.5em;
		height: 2.5em;
		object-fit: contain;
	}

	.logo {
		font-size: 1em;
		font-weight: bold;
		color: var(--heading-color);
	}

	a:hover {
		text-decoration: none !important;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: #151515;
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		line-height: 0;
		align-items: center;
		list-style: none;
		background: var(--background);
		font-size: 1rem;
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
		margin: 0;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: #fff;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}

	@media (min-width: 480px) {
		.corner {
			padding: 1em 3em 0em 3em;
		}

		.logo {
			font-size: 1.25em;
		}
	}
</style>
