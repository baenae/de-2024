<template>
	<main>
		<BreadcrumbNavigation :links="[{ url: '/leistungen', text: 'Leistungen' }]" />
		<h1>Bildverkauf</h1>
		<p>
			Moin, du hättest gerne ein Poster von einem meiner Fotos?
			Schick mir einfach eine Nachricht und sag mir, welches Bild du gerne hättest.
		</p>
		<p>
			<strong>Preise:</strong>
			<br />
			A4 – 28 €<br />
			A3 – 35 €<br />
			A2 – 42 €<br />
			<br />
			50cm x 40 cm – 40 €<br />
			70cm x 50 cm – 50 €<br />
			Perfekt für Ikea 50×70 oder 61×91 Rahmen mit Passepartouts. (LOMVIKEN, KNOPPÄNG, RIBBA)
		</p>

		<p>
			Aktuell biete ich noch keinen Versand an. Du kannst die Bilder gerne bei mir in Bremen Woltmershausen abholen.
			Die Bilder werden auf mattem und dickem Fotopapier gedruckt. Matt ist mir wichtig, damit es keine Lichtreflexe auf dem Bild gibt und jeder Blickwinkel funktioniert.
			Wichtige Info am und zum Rand: Die Bilder sind größtenteils im 1×1 oder 4×5 Format. Das bedeutet, dass die Bilder nicht das ganze Blatt bedecken.
		</p>
	</main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useTeaserImage } from '@/useTeaserImage'
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation.vue'
export default defineComponent({
	name: "Startseite",
	components: { BreadcrumbNavigation },
	setup() {
		const { setImage } = useTeaserImage();
		setImage("../src/assets/teaser-images/weserstadion.jpg");
	}
});
</script>
