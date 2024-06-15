<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router'
	import TeaserImage from "@/components/TeaserImage.vue";
	import NavBar from "@/components/NavBar.vue";
</script>

<template>
    <TeaserImage />

	<div id="baenae-app">
		<NavBar />

		<div id="content">
			<RouterView />

			<Footer>
				<router-link to="/about">Kontakt</router-link>
				<router-link to="/about">Impressum</router-link>
			</Footer>
		</div>
	</div>
</template>

<style lang="scss">
	#baenae-app {
		max-width: 730px;
		width: 730px;
		height: 100vh;

		background-color: #F1EBE4;

		overflow: auto;

		#header-content,
		#content {
			width: 100%;

			display: flex;
			align-content: center;
			align-items: center;
			justify-content: center;
			flex-direction: column;

			* {
				width: 100%;
				max-width: 470px;
			}
		}

		#content {
			padding: 0 10px 0 10px;

			footer {
				border-top: 1px solid #999999;
				margin: 50px 0 80px 0;
				padding-top: 15px;

				text-align: center;

				a {
					color: #444444;
					padding: 10px;
				}

				a:hover {
					color: black;
				}
			}
		}
	}

	@media only screen and (max-width: 1200px) {
		#header-content,
		#content {
			max-width: 600px;
			width: 600px;
		}

		#header-content {
			margin-left: 80px;
		}
	}

	@media only screen and (max-width: 1000px) {
		#header-content,
		#content {
			max-width: 500px;
			width: 500px;
		}

		/* todo Menü ändern */
	}
</style>
