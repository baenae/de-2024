<template>
	<main>
		<h2>Portfolio - Case Studies</h2>
		<h1>Business Fotografie</h1>

		<TeaserLink
			:top-line="false"
			image="./src/assets/teaser-link-images/casestudies_teestuebchen.jpg"
			headline="Teestübchen"
			text="Bilder für die Webseite und Social Media für das Teestübchen im Schnoor."
			link="casestudy-teestuebchen"
		/>

		<TeaserLink
			:top-line="false"
			image="./src/assets/teaser-link-images/casestudies_mj.jpg"
			headline="Lettering by MJ"
			text="Bilder für die Webseite und Social Media für das Lettering by Martina Johanna."
			link="casestudy-mj"
		/>

		<TeaserLink
			:top-line="false"
			image="./src/assets/teaser-link-images/casestudies_dotyk.jpg"
			headline="Dotyk"
			text="Shooting für die Band Dotyk. Bilder für die Webseite und Social Media."
			link="casestudy-dotyk"
		/>

		<TeaserLink
			:top-line="false"
			image="./src/assets/teaser-link-images/casestudies_guteseis.jpg"
			headline="Gutes Eis"
			text="Premium-Manufaktur-BIO-Eis aus Bremen für nachhaltigen Genuss. Bilder für die Webseite und Social Media."
			link="casestudy-guteseis"
		/>

		<TeaserLink
			:top-line="false"
			image="./src/assets/teaser-link-images/casestudies_geerds.jpg"
			headline="Geerds Unternehmensberatung"
			text="Bilder für die Webseite und Social Media für das Geerds Unternehmesberatung."
			link="casestudy-geerds"
		/>

		<TeaserLink
			:top-line="false"
			image="./src/assets/teaser-link-images/casestudies_luve.jpg"
			headline="Luve"
			text="MADE WITH LUVE ist zu 100% pflanzlich. Bilder für die Webseite und Social Media."
			link="baustelle"
		/>
	</main>
</template>
<script setup lang="ts">
import TeaserLink from '@/components/TeaserLink.vue'
</script>
