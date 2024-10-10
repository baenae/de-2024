<template>
	<main>
		<h2>Das kannst du von mir erwarten.</h2>
		<h1>Leistungen</h1>

		<TeaserLink
			image="./src/assets/teaser-link-images/business-shooting.jpg"
			headline="Business Shooting"
			text="Individuell zugeschnittenes Shooting. Egal ob Start-Up, großes Unternehmen, Band oder Gastro."
			link="/leistungen-business"
		/>

		<TeaserLink
			image="./src/assets/teaser-link-images/privates-shooting.jpg"
			headline="Privates Shooting"
			text="Persönliches und individuelles Shooting. Portraits, Babybauch, Paare, Familie, After Wedding, Bands, Sensual und Akt."
			link="/leistungen-privatesshooting"
		/>

		<TeaserLink
			image="./src/assets/teaser-link-images/tfp-shooting.jpg"
			headline="TFP Shooting"
			text="Model und Fotograf arbeiten zusammen, um ihr Portfolio zu erweitern."
			link="/leistungen-tfpshooting"
		/>

		<TeaserLink
			image="./src/assets/teaser-link-images/bildverkauf.jpg"
			headline="Bild Verkauf"
			text="Land und Citybilder als Druck oder Poster."
			link="/leistungen-bildverkauf"
		/>

	</main>
</template>
<script
	setup
	lang="ts">
import TeaserLink from '@/components/TeaserLink.vue'
</script>
