<template>
	<main>
		<BreadcrumbNavigation :links="[{ url: '/portfolio', text: 'Portfolio' }, { url: '/portfolio-business', text: 'Business Case Studies' }]" />
		<h1 class="small">Teestübchen im Schnoor</h1>
		<p>
			Für das charmante Teestübchen im Schnoor in Bremen durfte ich die einzigartige Atmosphäre dieses besonderen Cafés einfangen.
			Das Shooting umfasste nicht nur Aufnahmen der gemütlichen Innenräume,
			sondern auch Portraits des engagierten Teams und detailreiche Bilder des vielfältigen Tee- und Speisenangebots.
		</p>

		<p>
			Ziel war es, die heimelige Stimmung des Cafés und die herzliche Gastfreundschaft der Mitarbeitenden visuell zu transportieren –
			perfekt für die Nutzung auf ihrer Webseite und Social Media.
			Die Bilder spiegeln den Charakter des Teestübchens wider:
			Ein Ort zum Wohlfühlen und Genießen, mitten im historischen Schnoor-Viertel.
		</p>

		<ImageGallery
			:imageCount="6"
			imageAltText="Foto vom Teestübchen im Schnoor"
			imageString="casestudy-teestuebchen"
		/>

		<p>
			Seht euch mehr Ergebnisse auf ihrer Webseite an: <a href="https://teestuebchen-schnoor.de/" target="_blank">Teestübchen im Schnoor</a>.
		</p>
	</main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CaseStudy from '@/components/ImageGallery.vue'
import ImageGallery from '@/components/ImageGallery.vue'
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation.vue'
import { useTeaserImage } from '@/useTeaserImage'

export default defineComponent({
	name: "CaseStudy_Teestuebchen",
	components: { BreadcrumbNavigation, ImageGallery, CaseStudy },
	setup() {
		const { setImage } = useTeaserImage();
		setImage("../src/assets/teaser-images/teestuebchen.jpg");
	}
});
</script>
