<script lang="ts">
	import { base } from '$app/paths';
	import SmartLink from '../link/SmartLink.svelte';
	import type { Maker } from '$types/maker';
	import { createAvatar } from '@dicebear/avatars';
	import * as style from '@dicebear/avatars-bottts-sprites';

	export let maker: Maker;
	let avatarImage = maker.avatar
		? maker.avatar.startsWith('http')
			? maker.avatar
			: `${base}/images/projects/${maker.avatar}`
		: createAvatar(style, {
				seed: 'custom-seed'
		  });
</script>

<div>
	<SmartLink href={maker.contactLink}>
		<div class="container">
			{#if maker.avatar}
				<img class="avatar" src={avatarImage} alt="{maker.name}'s Avatar" />
			{:else}
				<div class="avatar">
					{@html avatarImage}
				</div>
			{/if}
			<div class="details">
				<div class="name">{maker.name}</div>
				{#if maker.role}
					<div class="role">{maker.role}</div>
				{/if}
			</div>
		</div>
	</SmartLink>
</div>

<style>
	.avatar {
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
	}

	.container {
		display: flex;
		align-items: center;
		gap: 1rem;
		display: flex;
		align-items: center;
		padding: 0.5rem;
	}

	.container:hover {
		cursor: pointer;
		text-decoration: none;
	}

	.name {
		font-size: 1rem;
		font-weight: bold;
	}

	.role {
		font-size: 0.75rem;
		font-weight: bold;
	}
</style>
