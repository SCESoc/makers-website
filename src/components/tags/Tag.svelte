<script lang="ts">
	import { convertHexToHSL, stringToColor } from '$lib/utils/stringToColor';

	export let label;
	let backgroundColor = convertHexToHSL(stringToColor(label), 30, 80);
	let color = convertHexToHSL(stringToColor(label), 100, 30);
	let borderColor = convertHexToHSL(stringToColor(label), 50, 60);
</script>

<div class="container" style="background-color: {backgroundColor}; border-color: {borderColor}">
	<div class="label" style="color: {color};">{label}</div>
</div>

<style>
	.container {
		padding: 0.5rem 0.75rem;
		border-radius: 1rem;
		border: 1px solid;
	}

	.label {
		font-size: 0.75rem;
		font-weight: 600;
	}
</style>
