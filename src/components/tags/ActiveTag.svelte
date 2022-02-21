<script lang="ts">
	export let active = false;
</script>

<div class="container" title="Project is {!active && 'not'} actively being developed">
	<div class="circle {!active && 'inactive'}" />
	<div class="label">{active ? 'Active' : 'Not Active'}</div>
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		background-color: rgba(76, 175, 80, 0.2);
		padding: 0.5rem 0.75rem;
		border-radius: 1rem;
		cursor: default;
		height: fit-content;
	}

	.circle {
		background-color: rgba(76, 175, 80, 1);
		height: 1rem;
		width: 1rem;
		border-radius: 50%;
	}

	.label {
		font-size: 0.75rem;
		font-weight: 600;
	}

	.inactive {
		background-color: #e72727;
	}
</style>
