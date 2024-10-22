<template>
	<main>
		<BreadcrumbNavigation :links="[{ url: '/portfolio', text: 'Portfolio' }, { url: '/portfolio-business', text: 'Business Case Studies' }]" />
		<h1 class="small">Geerds Unternehmensberatung</h1>
		<p>
			Für Geerds Unternehmensberatung habe ich ein professionelles Shooting mit Inhaber Arno Geerds durchgeführt.
			Die Beratung zeichnet sich durch unabhängige und neutrale betriebs- und finanzwirtschaftliche Expertise aus.
		</p>

		<p>
			Die entstandenen Portraits vermitteln Vertrauen und Professionalität,
			ideal für die Webseite und andere Kommunikationskanäle.
			Sie spiegeln die Philosophie der Unternehmensberatung wider und unterstützen die Markenpräsenz von Geerds.
		</p>

		<p>
			Erfahrt mehr auf der Webseite: <a href="https://geerds.net/" target="_blank">Geerds Unternehmensberatung</a>.
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
