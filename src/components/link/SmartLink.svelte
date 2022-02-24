<script lang="ts">
	import { emailIsValid } from '$lib/utils/validate';

	export let href: string;
</script>

{#if href && href.startsWith('/')}
	<a sveltekit:prefetch {href} {...$$restProps}><slot /></a>
{:else if emailIsValid(href)}
	<a href="mailto: {href}" {...$$restProps}><slot /></a>
{:else}
	<a {href} target="_blank" {...$$restProps}><slot /></a>
{/if}

<style>
</style>
