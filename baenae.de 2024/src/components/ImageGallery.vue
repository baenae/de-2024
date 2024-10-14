<template>
	<div :class="'thumbnailGallery ' + ((reverse) ? 'reverse' : '')">
		<img
			v-for="n in imageCount"
			:src="'../src/assets/content-images/' + imageString + '/' + n + '_preview.jpg'"
			:alt="imageAltText"
			:title="imageAltText"
			v-on:click="openLightbox(n - 1)"
		>
	</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useLightbox } from '@/useLightbox'

export default defineComponent({
	name: "ImageGallery",
	props: {
		imageCount: {
			type: Number,
			default: 0
		},
		imageString: {
			type: String,
			default: ""
		},
		imageAltText: {
			type: String,
			default: ""
		},
		reverse: {
			type: Boolean,
			default: false
		}
	},
	setup(props) {
		const { openLightbox, setImageImageList } = useLightbox();
		setImageImageList(props.imageString, props.imageCount);

		return {
			openLightbox,
		};
	}
});
</script>
<style lang="scss" scoped>
.thumbnailGallery {
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
	flex-direction: row;

	img {
		width: calc(50% - 8px) !important;
		height: auto;
		border: white 7px solid;

		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.20);
		border-radius: 2px;
	}
}

.thumbnailGallery.reverse {
	flex-direction: row-reverse !important;
}
</style>
