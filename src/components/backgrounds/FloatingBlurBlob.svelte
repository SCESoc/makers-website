<div class="container__elements" {...$$restProps}>
	<div class="block">
		<div class="circle-1" />
		<div class="circle-2" />
		<div class="blurred-bg" />
		<div class="block-content">
			<slot />
		</div>
	</div>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.container__elements {
		width: 85%;
	}

	.block {
		background: #fbfbfb;
		width: 100%;
		height: 100vh;
		position: relative;
		overflow: hidden;
		transform: translateZ(0);
		-webkit-transform: translateZ(0);
	}

	.block-content {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
	}

	.blurred-bg {
		display: block;
		background: rgba(170, 196, 200, 0.01);
		backdrop-filter: saturate(180%) blur(3rem);
		-webkit-backdrop-filter: saturate(180%) blur(3rem);
		height: 63rem;
		z-index: 1;
	}

	.circle-1 {
		position: absolute;
		transform-origin: center;
		background-color: #e0a73d44;
		width: 500px;
		height: 600px;
		border-radius: 40rem;
		transform: translateY(300px) translateX(1000px);
		animation: circle-1-animation 8s ease-in-out infinite alternate;
		z-index: -1;
	}

	.circle-2 {
		position: absolute;
		transform-origin: center;
		background-color: #e2bd4150;
		width: 500px;
		height: 600px;
		border-radius: 40rem;
		transform: translateY(0px) translateX(100px);
		animation: circle-2-animation 8s ease-in-out infinite alternate;
		z-index: -1;
	}

	@keyframes circle-1-animation {
		0% {
		}

		100% {
			transform: translateY(0px) translateX(100px) rotate(180deg);
		}
	}

	@keyframes circle-2-animation {
		0% {
		}

		100% {
			transform: translateY(300px) translateX(1000px) rotate(180deg);
		}
	}
</style>
