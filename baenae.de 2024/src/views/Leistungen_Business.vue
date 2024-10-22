<template>
	<main>
		<BreadcrumbNavigation :links="[{ url: '/leistungen', text: 'Leistungen' }]" />
		<h1>Business-Shooting</h1>

		<p>Ob Start-up, etabliertes Unternehmen, Band oder Gastronomie – ich bin euer Partner für professionelle Business-Fotografie.</p>

		<p>Meine Leistungen umfassen:</p>
		<ul>
			<li>Bereitstellung fertiger Formate für:</li>
			<li>
				<ul>
					<li>Webseiten</li>
					<li>Social Media</li>
					<li>Poster</li>
					<li>Prospekte</li>
					<li>Flyer</li>
				</ul>
			</li>
			<li>Fotos von Büros, Arbeitsplätzen oder Werkstätten</li>
			<li>Portraits von Führungskräften und Mitarbeitenden, z.B.:</li>
			<li>
				<ul>
					<li>während der Arbeit</li>
					<li>in realistischen Meeting-, Verkaufs- oder Beratungssituationen</li>
				</ul>
			</li>
		</ul>
		<p>Lasst uns gemeinsam die Atmosphäre eures Unternehmens authentisch und überzeugend in Szene setzen.</p>

		<TeaserLink
			:top-line="true"
			image="./src/assets/teaser-link-images/teestuebchen.jpg"
			headline="Case Studies"
			text="Individuell zugeschnittenes Shooting. Egal ob Start-Up, großes Unternehmen, Band oder Gastro."
			link="portfolio-business"
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
		setImage("../src/assets/teaser-images/cassandra-bw.jpg");
	}
});
</script>
