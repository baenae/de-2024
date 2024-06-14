<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router'
	import TeaserImage from "@/components/TeaserImage.vue";
	import NavBar from "@/components/NavBar.vue";
</script>

<template>
    <TeaserImage />

	<div id="main">
		<NavBar />

		<div id="content">
			<RouterView />
		</div>
	</div>
</template>

<style lang="scss">
	#main {
		max-width: 730px;
		width: 730px;

		background-color: #F1EBE4;

		#header-content,
		#content {
			width: 100%;
			//background-color: fuchsia;

			display: flex;
			align-content: center;
			align-items: center;
			justify-content: center;

			* {
				padding: 0 10px 0 10px;
				max-width: 450px;
			}
		}

		#content {
			* {
				padding: 0 10px 0 10px;
				max-width: 450px;
			}
		}
	}

	@media only screen and (max-width: 1200px) {
		#header-content,
		#main {
			max-width: 600px;
			width: 600px;
		}
	}

	@media only screen and (max-width: 1000px) {
		#header-content,
		#main {
			max-width: 500px;
			width: 500px;
		}
	}

</style>
