<script lang="ts">
	import type { ConnectLink } from '$types/connectLink';

	import SmartLink from '../link/SmartLink.svelte';

	export let connectLink: ConnectLink;

	let label = connectLink.name;
	let link = connectLink.link;
	let logo =
		connectLink.link && `https://api.faviconkit.com/${new URL(connectLink.link).hostname}/32`;
</script>

<SmartLink href={link}>
	<div class="container">
		{#if logo}
			<img class="logo" src={logo} alt="{label}'s Avatar" />
		{/if}
		<div class="label">{label}</div>
	</div>
</SmartLink>

<style>
	.container {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem;
		border-radius: 0.4rem;
		border: 1px solid #ccc;
	}

	.label {
		font-size: 0.75rem;
		font-weight: 600;
	}

	.logo {
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 0.2rem;
	}
</style>
