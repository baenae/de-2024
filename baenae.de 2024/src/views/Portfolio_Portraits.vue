<template>
	<main>
		<BreadcrumbNavigation :links="[{ url: '/portfolio', text: 'Portfolio' }]" />
		<h1>Portrait Fotografie</h1>
		<h3>Studio Portraits</h3>
		<ImageGallery
			:imageCount="6"
			imageAltText="Portraits in Farbe"
			imageString="portrait-studio"
		/>

		<h3>Schwarzweiß Portraits</h3>
		<ImageGallery
			:imageCount="6"
			imageAltText="Portraits in Schwarzweis"
			imageString="portrait-sw"
		/>

		<h3>Outdoor Portraits</h3>
		<ImageGallery
			:imageCount="6"
			imageAltText="Outdoor Portraits"
			imageString="portrait-outdoor"
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
		setImage("../src/assets/teaser-images/julia.jpg");
	}
});
</script>
