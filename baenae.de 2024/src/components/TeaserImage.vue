<template>
	<div id="teaser-image">
		<img src="../assets/teaserimages/hafen-bw.jpg" alt=""> />
	</div>
</template>

<style scoped>
	#teaser-image {
		position: relative;
		top: 0;
		left: 0;

		width: calc(100vw - 730px);
		height: 100vh;

		background-color: black;
		overflow: hidden;

		img {
			width: 100%;
			height: auto;
		}
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
