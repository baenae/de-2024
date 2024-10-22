<template>
	<main>
		<h2>Herzlich willkommen auf</h2>
		<h1>baenae.de</h1>
		<p>
			Moin, ich bin Bänä, Fotograf aus Bremen.
		</p>

		<img
			class="contentImage"
			src="../assets/content-images/aboutme_4.jpg"
			alt="Foto von Baenae auf einer Couch mit Blitzlichern"
			title="Baenae"
		>

		<p>
			Willkommen auf meiner Seite, hier findest du nicht nur meine Arbeiten, sondern auch die Leistungen, die ich dir anbieten kann. Egal ob du ein Shooting für dich, deine Familie, dein Unternehmen, deine Band oder deinen Verein suchst – bei mir bist du genau richtig.
		</p>
		<p>
			Mit meiner entspannten und lockeren Art sorge ich dafür, dass dein Shooting nicht nur stressfrei, sondern auch zu einem besonderen Erlebnis wird. Gemeinsam kreieren wir authentische und einzigartige Bilder, die genau zu dir passen.		</p>
	</main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useTeaserImage } from '@/useTeaserImage'

export default defineComponent({
	name: "Startseite",
	setup() {
		const { setImage } = useTeaserImage();
		setImage("../src/assets/teaser-images/nebel_hohentorshafen.jpg");
	}
});
</script>
