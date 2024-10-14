<template>
	<div class="teaser-image">
		<div v-for="(image, key) in imageList" :style="{ backgroundImage: 'url(' + image + ')', zIndex: (1000 + key) }">
			&nbsp;
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useTeaserImage } from '@/useTeaserImage'

export default defineComponent({
	name: 'TeaserImage',
	setup() {
		const { imageList } = useTeaserImage();

		return {
			imageList
		};
	}
});


</script>
<style scoped>
	.teaser-image {
		position: relative;
		top: 0;
		left: 0;

		width: calc(100vw - 730px);
		height: 100vh;
		overflow: hidden;

		z-index: 999;

		div {
			position: fixed;
			top: 0;
			left: 0;

			animation-name: fadeIn;
			animation-duration: 1.0s;

			width: calc(100vw - 730px);
			height: 100vh;

			background-color: black;
			overflow: hidden;

			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;

			pointer-events: none;
		}

	}

	@media only screen and (max-width: 1000px) {
		.teaser-image {
			display: none;
		}
	}

	@keyframes fadeIn {
		0%   {
			opacity: 0
		}

		25%   {
			opacity: 0
		}

		100% {
			opacity: 1
		}
	}
</style>
