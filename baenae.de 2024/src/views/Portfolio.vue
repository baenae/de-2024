<template>
	<main>
		<BreadcrumbNavigation />
		<h1>Portfolio</h1>

		<TeaserLink
			:top-line="false"
			image="./src/assets/teaser-link-images/teestuebchen.jpg"
			headline="Business Fotografie"
			text="Individuell zugeschnittenes Shooting. Egal ob Start-Up, großes Unternehmen, Band oder Gastro."
			link="portfolio-business"
		/>

		<TeaserLink
			:top-line="false"
			image="./src/assets/teaser-link-images/portfolio_portraits.jpg"
			headline="Portraits"
			text="Portraitfotografie fängt die Persönlichkeit eines Menschen ein."
			link="portfolio-portraits"
		/>

		<TeaserLink
			:top-line="false"
			image="./src/assets/teaser-link-images/portfolio_akt.jpg"
			headline="Akt Fotografie"
			text="Ästhetischen Darstellung des nackten Körpers und betont dessen Formen, Linien und Ausdruck"
			link="portfolio-akt"
		/>

		<TeaserLink
			:top-line="false"
			image="./src/assets/teaser-link-images/portfolio_babybauch.jpg"
			headline="Babybauch Fotografie"
			text="Ästhetischen Darstellung des nackten Körpers und betont dessen Formen, Linien und Ausdruck"
			link="portfolio-babybauch"
		/>

		<TeaserLink
			:top-line="false"
			image="./src/assets/teaser-link-images/portfolio_hochzeit.jpg"
			headline="Hochzeit, Paare & Familie"
			text="Ästhetischen Darstellung des nackten Körpers und betont dessen Formen, Linien und Ausdruck"
			link="portfolio-hochzeit"
		/>

		<TeaserLink
			:top-line="false"
			image="./src/assets/teaser-link-images/portfolio_stadtlandschaft.jpg"
			headline="Land- und Stadtfotografie"
			text="Fotos von Bremen und der Welt."
			link="portfolio-stadtlandschaft"
		/>
	</main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useTeaserImage } from '@/useTeaserImage'
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation.vue'
import TeaserLink from '@/components/TeaserLink.vue'
export default defineComponent({
	name: "Startseite",
	components: { TeaserLink, BreadcrumbNavigation },
	setup() {
		const { setImage } = useTeaserImage();
		setImage("../src/assets/teaser-images/freimarkt.jpg");
	}
});
</script>
