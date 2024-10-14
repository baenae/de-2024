<template>
	<main>
		<BreadcrumbNavigation :links="[{ url: '/leistungen', text: 'Leistungen' }]" />
		<h1>Business-Shooting</h1>

		<p>Egal ob Start-Up, großes Unternehmen, Band oder Gastro, ich bin der richtige für euch.</p>

		<ul>
			<li>Fertig aufbereitete Formate für:</li>
			<li>
				<ul>
					<li>Webseiten</li>
					<li>Social-Media</li>
					<li>Poster</li>
					<li>Prospekte</li>
					<li>Flyer</li>
				</ul>
			</li>
			<li>Shooting von Büro, Arbeitsplätzen und Werkstätten</li>
			<li>Portraits von Führungskräften und Mitarbeitenden, z.B.:</li>
			<li>
				<ul>
					<li>während der Arbeit</li>
					<li>Nachstellen von Meeting, Verkaufs- und Beratungsstituationen</li>
				</ul>
			</li>
		</ul>

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
