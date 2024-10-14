<template>
	<main>
		<BreadcrumbNavigation :links="[{ url: '/portfolio', text: 'Portfolio' }, { url: '/portfolio-business', text: 'Business Case Studies' }]" />
		<h1 class="small">Geerds Unternehmensberatung</h1>
		<p>
			Bilder für die Webseite und Social Media für das Geerds Unternehmesberatung.
		</p>

		<ImageGallery
			:imageCount="6"
			imageAltText="Foto von Geerds Unternehmensberatung"
			imageString="casestudy-geerds"
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
	name: "CaseStudy_Geerds",
	components: { BreadcrumbNavigation, ImageGallery, CaseStudy },
	setup() {
		const { setImage } = useTeaserImage();
		setImage("../src/assets/teaser-images/geerds.jpg");
	}
});
</script>
