<template>
	<main>
		<BreadcrumbNavigation :links="[{ url: '/portfolio', text: 'Portfolio' }, { url: '/portfolio-business', text: 'Business Case Studies' }]" />
		<h1>Gutes Eis</h1>
		<p>
			Für die Eismarke gutes eis durfte ich ein lebhaftes Shooting in ihrer Eisdiele in Bremen realisieren.
			Gemeinsam mit einigen Laienmodellen und dem Chef haben wir ein fröhliches und entspanntes Shooting durchgeführt,
			das viele tolle Bilder hervorgebracht hat.
		</p>

		<ImageGallery
			:imageCount="6"
			imageAltText="Foto von Gutes Eis"
			imageString="casestudy-guteseis"
		/>

		<p>
			Die entstandenen Aufnahmen fangen die Freude und den Genuss des Eises perfekt ein und werden für die Webseite sowie die Social-Media-Präsenz genutzt.
			Überzeugt euch selbst: <a href="https://guteseis.de/" target="_blank">guteseis.de</a>.
		</p>
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
