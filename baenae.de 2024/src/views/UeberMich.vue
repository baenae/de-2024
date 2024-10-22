<template>
	<main>
		<BreadcrumbNavigation />
		<h1>Über mich</h1>
		<p>
			ich bin Benjamin aus Bremen, werde aber von allen Bänä (ausgesprochen Bene) genannt. Ich bin 44 Jahre alt und wohne im schönen Bremen Woltmershausen. Und ja, Woltmershausen hat wirklich schöne Ecken.
		</p>
		<p>
			Der Fotografie widme ich mich nebenberuflich und als Hobby. Hauptberuflich bin ich Programmierer und Designer.
		</p>
		<p>
			Hobbies habe ich viele. Also neben der Fotografie. Manche Menschen sagen sogar zu viele. Warhammer ist z.B. eines davon. Früher auch das Malen, aber ich habe den Pinsel gegen die Kamera getauscht.
		</p>

		<img src="../assets/content-images/aboutme_1.jpg" class="contentImage">
	</main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation.vue'
import { useTeaserImage } from '@/useTeaserImage'

export default defineComponent({
	name: "Impressum",
	components: { BreadcrumbNavigation },
	setup() {
		const { setImage } = useTeaserImage();
		setImage("../src/assets/teaser-images/hafen-portrait-blau.jpg");
	}
});
</script>
