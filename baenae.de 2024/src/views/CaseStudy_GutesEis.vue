<template>
	<main>
		<BreadcrumbNavigation :links="[{ url: '/portfolio', text: 'Portfolio' }, { url: '/portfolio-business', text: 'Business Case Studies' }]" />
		<h1>Gutes Eis</h1>
		<p>
			Premium-Manufaktur-BIO-Eis aus Bremen für nachhaltigen Genuss. Bilder für die Webseite und Social Media.
		</p>

		<ImageGallery
			:imageCount="6"
			imageAltText="Foto von Gutes Eis"
			imageString="casestudy-guteseis"
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
	name: "CaseStudy_GutesEis",
	components: { BreadcrumbNavigation, ImageGallery, CaseStudy },
	setup() {
		const { setImage } = useTeaserImage();
		setImage("../src/assets/teaser-images/guteseis.jpg");
	}
});
</script>
