<template>
	<main>
		<BreadcrumbNavigation :links="[{ url: '/portfolio', text: 'Portfolio' }, { url: '/portfolio-business', text: 'Business Case Studies' }]" />
		<h1>Dotyk</h1>
		<p>
			Für die Band Dotyk, bestehend aus Kyrylo und Gerhard, habe ich ein vielseitiges Shooting umgesetzt.
			Im Studio entstanden atmosphärische Portraits, die die musikalische Energie des Duos einfangen.
			Anschließend haben wir in der Überseestadt Bremen dynamische Outdoor-Bilder gemacht,
			die ihre kreative Vielseitigkeit unterstreichen.
		</p>

		<ImageGallery
			:imageCount="6"
			imageAltText="Foto von Dotyk"
			imageString="casestudy-dotyk"
		/>

		<p>
			Die Aufnahmen werden auf ihrer Webseite und zur Promotion genutzt. Seht selbst: <a href="https://www.dotyk.de/" target="_blank">dotyk.de</a>.
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
	name: "CaseStudy_Dotyk",
	components: { BreadcrumbNavigation, ImageGallery, CaseStudy },
	setup() {
		const { setImage } = useTeaserImage();
		setImage("../src/assets/teaser-images/dotyk.jpg");
	}
});
</script>
