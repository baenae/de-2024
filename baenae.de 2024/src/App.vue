<template>
	<vue-easy-lightbox
		:visible="isLightboxOpen"
		:imgs="imageList"
		:index="imageIndex"
		:rotateDisabled="true"
		@hide="onCloseLightbox"
	/>

    <TeaserImage />

	<div id="baenae-app">
		<NavBar />

		<div id="content">
			<router-view v-slot="{ Component }">
				<transition name="fade">
					<component :is="Component" />
				</transition>
			</router-view>

			<div class="footer">
				<router-link to="/kontakt">Kontakt</router-link>
				<router-link to="/impressum">Impressum</router-link>
				<router-link to="/datenschutz">Datenschutzerklärung</router-link>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
	import { defineComponent, watch } from "vue";
	import { useLightbox } from '@/useLightbox';
	import TeaserImage from "@/components/TeaserImage.vue";
	import NavBar from "@/components/NavBar.vue";

	export default defineComponent({
		name: 'App',
		components: {
			NavBar, TeaserImage
		},
		setup() {
			const { isLightboxOpen, imageIndex, imageList, onCloseLightbox } = useLightbox();

			return {
				isLightboxOpen,
				imageIndex,
				imageList,
				onCloseLightbox
			};
		}
	});


</script>
