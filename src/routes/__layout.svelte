<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<div class="footer-links">
		<a target="_blank" href="https://www.scesoc.ca/">SCESoc</a>
		<a target="_blank" href="https://www.scesoc.ca/discord">Discord</a>
		<a target="_blank" href="https://github.com/SCESoc">Github</a>
	</div>
</footer>

<style>
	.footer-links {
		display: flex;
		justify-content: space-around;
		gap: 4rem;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
