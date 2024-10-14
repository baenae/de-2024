<template>
	<main>
		<BreadcrumbNavigation :links="[{ url: '/portfolio', text: 'Portfolio' }]" />
		<h1>Hochzeit, Paare & Familie</h1>

		<p class="info">
			<strong>Achtung:</strong> Keine Party/Event Fotografie. Keine Hochzeiten, Geburtstage, Firmenfeste oder andere Arten von Veranstaltungen.<br><br>
			Ich fotografiere euch gerne als Paar, aber bei der Hochzeitsfeier und beim Standesamt bin ich nicht der richtige Fotograf für euch.
		</p>

		<h3>Hochzeitsfotos</h3>
		<ImageGallery
			:reverse="true"
			:imageCount="6"
			imageAltText="Hochzeitsfotos"
			imageString="hochzeit"
		/>

		<h3>Familie & Paare</h3>
		<ImageGallery
			:reverse="true"
			:imageCount="6"
			imageAltText="Paar-Portraits"
			imageString="paare"
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
	name: "Portfolio_Hochzeit",
	components: { BreadcrumbNavigation, ImageGallery, CaseStudy },
	setup() {
		const { setImage } = useTeaserImage();
		setImage("../src/assets/teaser-images/hochzeit.jpg");
	}
});
</script>
