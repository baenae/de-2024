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
			<transition name="slide-fade">
				<RouterView />
			</transition>

			<Footer>
				<router-link to="/kontakt">Kontakt</router-link>
				<router-link to="/impressum">Impressum</router-link>
				<router-link to="/datenschutz">Datenschutzerklärung</router-link>
			</Footer>
		</div>
	</div>
</template>

<style lang="scss">
	#baenae-app {
		max-width: 730px;
		width: 730px;
		height: 100vh;

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

				font-size: 16px;

				text-align: center;

				a {
					color: #444444;
					padding: 20px;

					font-family: Roboto;
					text-decoration: none;
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

		/* todo Mobile Menü */
	}

	.slide-fade-enter-active {
		transition: all 0.3s ease-out;
	}

	.slide-fade-leave-active {
		transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
	}

	.slide-fade-enter-from,
	.slide-fade-leave-to {
		transform: translateX(20px);
		opacity: 0;
	}
</style>
