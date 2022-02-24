<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { mobileMenuOpen } from '../../stores/global';
	import { menu } from '$lib/menu';

	function closeMobileMenu() {
		mobileMenuOpen.update((v) => false);
	}
</script>

<div class="container blurred-bg">
	<div class="close" on:click={closeMobileMenu}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M6 18L18 6M6 6l12 12"
			/>
		</svg>
	</div>
	<div class="title">Menu</div>
	<ul>
		{#each menu as item}
			<li class:active={item.active($page.url.pathname)}>
				<a sveltekit:prefetch href={`${base}${item.path}`}>{item.name}</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	li {
		font-weight: 600;
		color: #000;
	}

	.blurred-bg {
		background: rgba(224, 233, 235, 0.445);
		backdrop-filter: saturate(180%) blur(3rem);
		-webkit-backdrop-filter: saturate(180%) blur(3rem);
		z-index: 1;
	}

	.container {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		z-index: 2;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 2rem;
		text-align: center;
		overflow-y: auto;
	}

	.close {
		position: absolute;
		top: 1rem;
		left: 1rem;
		color: #151515;
		z-index: 3;
		height: 3rem;
		width: 3rem;
	}

	.title {
		font-size: 2rem;
		font-weight: 600;
		margin-bottom: 3rem;
	}
</style>
