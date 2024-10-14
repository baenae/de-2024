<template>
	<main>
		<BreadcrumbNavigation :links="[{ url: '/portfolio', text: 'Portfolio' }]" />
		<h1>Stadt & Landschaft</h1>
		<h3>Bremen</h3>
		<ImageGallery
			:reverse="true"
			:imageCount="6"
			imageAltText="Bremen"
			imageString="stadtland-bremen"
		/>

		<h3>Am Meer</h3>
		<ImageGallery
			:reverse="true"
			:imageCount="6"
			imageAltText="Meer"
			imageString="stadtland-meer"
		/>

		<h3>Unterwegs in der Welt</h3>
		<ImageGallery
			:reverse="true"
			:imageCount="6"
			imageAltText="Urlaub"
			imageString="stadtland-urlaub"
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
		setImage("../src/assets/teaser-images/berlin.jpg");
	}
});
</script>

