<template>
	<main>
		<BreadcrumbNavigation :links="[{ url: '/portfolio', text: 'Portfolio' }, { url: '/portfolio-business', text: 'Business Case Studies' }]" />
		<h1>LUVE</h1>
		<p>
			Für die Lebensmittelmarke Luve habe ich ansprechende Fotos für die Social-Media-Präsenz erstellt.
			Die Aufnahmen zeigen die neuen pflanzlichen Produkte und vermitteln deren Vielfalt und Frische.
		</p>
		<p>
			Die Bilder unterstützen die Kommunikation der Marke und sprechen eine breite Zielgruppe an.
		</p>

		<ImageGallery
			:imageCount="6"
			imageAltText="Foto von LUVE"
			imageString="casestudy-luve"
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
	name: "CaseStudy_Luve",
	components: { BreadcrumbNavigation, ImageGallery, CaseStudy },
	setup() {
		const { setImage } = useTeaserImage();
		setImage("../src/assets/teaser-images/luve.jpg");
	}
});
</script>
