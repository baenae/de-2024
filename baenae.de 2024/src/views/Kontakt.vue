<template>
	<main>
		<BreadcrumbNavigation />
		<h1>Kontakt</h1>
		<p>Einfach über E-Mail, WhatsApp, Telefon oder Instagram.</p>

		<img src="../assets/content-images/kontakt.jpg" class="contentImage">

		<ul>
			<li>E-Mail: baenae@gmx.de</li>
			<li>Telefon: 0174 - 919 87 03</li>
			<li>
				Instagram City & Landscape:
				<a href="https://www.instagram.com/baenaeofficial/" target="_blank">@baenaeofficial</a>
			</li>
			<li>
				Instagram Portraits:
				<a href="https://www.instagram.com/baenae.de/" target="_blank">@baenae.de</a>
			</li>
			<li>
				Instagram Warhammer:
				<a href="https://www.instagram.com/baenae_de/" target="_blank">@baenae_de</a>
			</li>
		</ul>
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
		setImage("../src/assets/teaser-images/viertel-baenae.jpg");
	}
});
</script>
