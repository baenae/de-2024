import { readonly, ref } from 'vue'
const imageList = ref(["../src/assets/teaser-images/weserstadion_xl.jpg"]);

export function useTeaserImage() {

	const setImage = (image: string) => {
		console.log("setImage");
		imageList.value.push(image);
	};

	return {
		imageList: readonly(imageList),
		setImage
	};
}
