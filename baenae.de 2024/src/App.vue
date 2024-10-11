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
			<router-view v-slot="{ Component }">
				<transition name="fade">
					<component :is="Component" />
				</transition>
			</router-view>

			<div class="footer">
				<router-link to="/kontakt">Kontakt</router-link>
				<router-link to="/impressum">Impressum</router-link>
				<router-link to="/datenschutz">Datenschutzerklärung</router-link>
			</div>
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

			.footer {
				width: 100%;

				border-top: 1px solid #999999;
				margin: 40px 0 40px 0;
				padding-top: 15px;

				display: flex;
				justify-content: center;
				flex-wrap: wrap;

				a {
					width: auto;
					font-size: 16px;
					color: black;
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

	@media only screen and (max-width: 1000px) {
		#baenae-app {
			max-width: 100vw;
			width: 100vw;

			#header-content,
			#content {
				max-width: 100vw;
				width: 100vw;
			}

			/* todo Mobile Menü */
		}
	}

	.fade-enter-active {
		transition: opacity 0.5s ease-out;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}


</style>
