<template>
	<main>
		<h2>Das kannst du von mir erwarten. Meine</h2>
		<h1>Leistungen</h1>

		<TeaserLink
			image="../assets/teaser-images/hafen-bw.jpg"
			headline="Business Shooting"
			text="Individuell zugeschnittenes Shooting. Egal ob Start-Up, großes Unternehmen, Band oder Gastro."
			link="home"
		/>

		<TeaserLink
			image="../assets/teaser-images/hafen-bw.jpg"
			headline="Privates Shooting"
			text="Persönliches und individuelles Shooting. Portraits, Babybauch, Paare, Familie, After Wedding, Bands, Sensual und Akt."
			link="leistungen"
		/>

		<TeaserLink
			image="../assets/teaser-images/hafen-bw.jpg"
			headline="TFP Shooting"
			text="Model und Fotograf arbeiten zusammen, um ihr Portfolio zu erweitern."
			link="aboutmet"
		/>

		<TeaserLink
			image="../assets/teaser-images/hafen-bw.jpg"
			headline="Bild Verkauf"
			text="Land und Citybilder als Druck oder Poster."
			link="startseite"
		/>

	</main>
</template>
<script
	setup
	lang="ts">
import TeaserLink from '@/components/TeaserLink.vue'
</script>
