<template>
	<main>
		<h2>Einige meiner Arbeiten</h2>
		<h1>Portfolio</h1>

		<TeaserLink
			:top-line="false"
			image="./src/assets/teaser-link-images/portfolio_business.jpg"
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
			image="./src/assets/teaser-link-images/portfolio_stadtlandschaft.jpg"
			headline="Land- und Stadtfotografie"
			text="Fotos von Bremen und der Welt."
			link="portfolio-stadtlandschaft"
		/>
	</main>
</template>
<script setup lang="ts">
import TeaserLink from '@/components/TeaserLink.vue'
</script>
