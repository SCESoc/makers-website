<script lang="ts">
	import SmartLink from '../link/SmartLink.svelte';
	import type { Technology } from '$types/technology';

	export let technology: Technology;

	let label;
	let url;
	let logo;

	if (typeof technology === 'string') {
		label = technology;
	} else {
		label = technology.name;
		url = technology.url;
		logo = technology.url && `https://api.faviconkit.com/${new URL(technology.url).hostname}/32`;
	}
</script>

<SmartLink href={url}>
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
		padding: 0.5rem 0.75rem;
		border-radius: 2rem;
		border: 1px solid #ccc;
	}

	.label {
		font-size: 0.75rem;
		font-weight: 600;
	}

	.logo {
		width: 1rem;
		height: 1rem;
	}
</style>
