<template>
	<main>
		<BreadcrumbNavigation :links="[{ url: '/portfolio', text: 'Portfolio' }]" />
		<h1>Aktfotografie</h1>

		<h3>Schwarzweißfotografie</h3>
		<ImageGallery
			:reverse="true"
			:imageCount="6"
			imageAltText="Aktfotografie"
			imageString="akt-sw"
		/>

		<h3>Projekt Gold</h3>
		<ImageGallery
			:reverse="true"
			:imageCount="6"
			imageAltText="Aktfotografie"
			imageString="akt-gold"
		/>

		<h3>Akt in Farbe</h3>
		<ImageGallery
			:reverse="true"
			:imageCount="6"
			imageAltText="Aktfotografie"
			imageString="akt-farbe"
		/>
	</main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CaseStudy from '@/components/ImageGallery.vue'
import ImageGallery from '@/components/ImageGallery.vue'
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation.vue'
import { useTeaserImage } from '@/useTeaserImage'

export default defineComponent({
	name: "Portfolio_Akt",
	components: { BreadcrumbNavigation, ImageGallery, CaseStudy },
	setup() {
		const { setImage } = useTeaserImage();
		setImage("../src/assets/teaser-images/akt.jpg");
	}
});
</script>
