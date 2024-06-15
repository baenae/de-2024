<template>
	<div
		class="teaser-image"
	>

	</div>
</template>

<style scoped>
	.teaser-image {
		position: relative;
		top: 0;
		left: 0;

		width: calc(100vw - 730px);
		height: 100vh;

		background-color: black;
		overflow: hidden;

		background-image: url("../assets/teaser-images/hafen-bw.jpg");
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;

		pointer-events: none;
	}

	@media only screen and (max-width: 1200px) {
		#teaser-image {
			width: calc(100vw - 600px);
		}
	}

	@media only screen and (max-width: 1000px) {
		#teaser-image {
			width: calc(100vw - 500px);
		}
	}
</style>
