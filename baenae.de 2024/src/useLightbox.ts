import { readonly, ref } from 'vue'

// Ist  die Lightbox geöffnet
const isLightboxOpen = ref(false);

// Die Liste zum durchsteppen der Bilder
const imageList = ref([""]);

// Das aktuelle Bild was angezeigt wird
const imageIndex = ref(0);

export function useLightbox() {

	// Diese Imagelist ist nur der aktuellen Komponente bekannt.
	// Diese wird dann an die public imageList übergeben, wenn diese geöffnet wird.
	// Weil mehrere ImageLists gleichzeitig geben kann
	const privateImageList = ref([""]);

	const setGalleryImageList = (name: string, imageCount:number) => {
		const result = [];
		for (let i = 1; i <= imageCount; i++) {
			result.push(`../../src/assets/content-images/${name}/${i}.jpg`);
		}
		privateImageList.value = result;
	};

	const openLightbox = (index: number) => {
		imageList.value = privateImageList.value;

		imageIndex.value = index;
		isLightboxOpen.value = true;
	};

	const onCloseLightbox = () => {
		isLightboxOpen.value = false;
	};

	return {
		isLightboxOpen: readonly(isLightboxOpen),
		imageList: readonly(imageList),
		imageIndex: readonly(imageIndex),
		openLightbox,
		onCloseLightbox,
		setImageImageList: setGalleryImageList
	};
}
