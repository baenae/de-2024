<template>
	<div class="breadcrumb">
		<router-link to="/">
			Startseite
		</router-link>
		<template v-for="link in links">
			<img src="../assets/chevron-double-right.svg">
			<router-link :to="link.url">{{ link.text }}</router-link>
		</template>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
		name: "BreadcrumbNavigation",
		props: {
			links: {
				type: Object,
				default: null
			}
		}
	});
</script>
<style scoped lang="scss">
#app {
	#baenae-app {

	}
}
</style>
