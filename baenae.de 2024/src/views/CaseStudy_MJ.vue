<template>
	<main>
		<BreadcrumbNavigation :links="[{ url: '/portfolio', text: 'Portfolio' }, { url: '/portfolio-business', text: 'Business Case Studies' }]" />
		<h1>Lettering by MJ</h1>
		<p>
			Für Martina Johanna, eine talentierte Künstlerin im Bereich Hand Lettering,
			durfte ich Portraitaufnahmen erstellen, die ihre Kreativität und Persönlichkeit widerspiegeln.
			Martina bietet nicht nur individuelle Hand Lettering-Auftragsarbeiten an,
			sondern leitet auch inspirierende Workshops.
		</p>
		<p>
			Ziel des Shootings war es, authentische und ansprechende Bilder zu kreieren,
			die Martinas Leidenschaft für ihre Kunst zum Ausdruck bringen und gleichzeitig ihre Professionalität unterstreichen.
			Diese Portraits werden auf ihrer Webseite und in ihrer Kommunikation genutzt,
			um ihre Workshops und Auftragsarbeiten visuell zu unterstützen.
		</p>

		<ImageGallery
			:imageCount="6"
			imageAltText="Foto von Lettering mit Martina Johanna"
			imageString="casestudy-mj"
		/>

		<p>
			Seht euch mehr Ergebnisse auf ihrer Webseite an: <a href="https://lettering-by-mj.com/" target="_blank">Lettering by MJ.</a>.
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
	name: "CaseStudy_MJ",
	components: { BreadcrumbNavigation, ImageGallery, CaseStudy },
	setup() {
		const { setImage } = useTeaserImage();
		setImage("../src/assets/teaser-images/mj.jpg");
	}
});
</script>
