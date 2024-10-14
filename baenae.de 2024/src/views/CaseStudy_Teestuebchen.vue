<template>
	<main>
		<BreadcrumbNavigation :links="[{ url: '/portfolio', text: 'Portfolio' }, { url: '/portfolio-business', text: 'Business Case Studies' }]" />
		<h1 class="small">Teestübchen im Schnoor</h1>
		<p>
			Bilder für die Webseite und Social Media für das Teestübchen im Schnoor.
		</p>

		<ImageGallery
			:imageCount="6"
			imageAltText="Foto vom Teestübchen im Schnoor"
			imageString="casestudy-teestuebchen"
		/>
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
