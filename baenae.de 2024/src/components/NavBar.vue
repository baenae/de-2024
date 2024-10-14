<template>
	<div id="sidemenu">
		<transition name="translateX">
			<nav v-show="navOpen">
				<div class="title" v-on:click="openPage('/')">
					Bänä Fotografie
				</div>
				<div class="sidemenuWrapper">
					<ul>
						<li>
							<span v-on:click="openPage('/leistungen')">Leistungen</span>
							<ul>
								<li v-on:click="openPage('/leistungen-business')">Business Shooting</li>
								<li v-on:click="openPage('/leistungen-privatesshooting')">Privates Shooting</li>
								<li v-on:click="openPage('/leistungen-tfpshooting')">TFP-Shooting</li>
								<li v-on:click="openPage('/leistungen-bildverkauf')">Bildverkauf</li>
							</ul>

						</li>
						<li>
							<span v-on:click="openPage('/portfolio')">Portfolio</span>
							<ul>
								<li v-on:click="openPage('/portfolio-business')">Business Case Studies</li>
								<li v-on:click="openPage('/portfolio-portraits')">Portraits</li>
								<li v-on:click="openPage('/portfolio-akt')">Akt</li>
								<li v-on:click="openPage('/portfolio-babybauch')">Babybauch</li>
								<li v-on:click="openPage('/portfolio-hochzeit')">Hochzeit, Paare & Familie</li>
								<li v-on:click="openPage('/portfolio-stadtlandschaft')">Stadt & Landschaft</li>
							</ul>
						</li>
						<li>
							<span v-on:click="openPage('/ueber-mich')">Über mich</span>
						</li>
						<li>
							<span v-on:click="openPage('/kontakt')">Kontakt</span>
							<ul>
								<li v-on:click="openPage('/impressum')">Impressum</li>
								<li v-on:click="openPage('/datenschutz')">Datenschutzerklärung</li>
							</ul>
						</li>
					</ul>
				</div>
			</nav>
		</transition>
	</div>

	<div id="header">
		<div id="logo" v-on:click="openPage('/')">
			<img
				src="../assets/logo-with-ribbon.png"
				alt="Logo baenae"
				title="Logo baenae"
			>
		</div>

		<button id="burgerMenu" v-on:click="navOpen=!navOpen" v-bind:class="{active:navOpen}">
			<span class="top"></span>
			<span class="mid"></span>
			<span class="bottom"></span>
		</button>
	</div>
</template>
<script lang="ts">
	import { defineComponent } from "vue";
	import router from "@/router";

	export default defineComponent({
		name: "NavBar",
		data() {
			return {
				navOpen: false
			}
		},
		methods: {
			openPage(page: string) {
				this.navOpen = false;
				router.push(page);
			}
		}
	});
</script>
<style lang="scss" scoped>
	#header {
		width: 100%;
		height: 50px;
		background-color: white;

		display: flex;
		justify-content: left;

		position: relative;

		#logo {
			position: absolute;

			cursor: pointer;

			margin: 0 20px 0 20px;
			width: calc(240px / 3);
			height: auto;

			img {
				width: 100%;
			}
		}

		#burgerMenu {
			position: absolute;
			top: 0;
			right: 15px;

			background-color: transparent;

			width: 50px;
			height: 50px;
			border: none;
			z-index: 1000;
			appearance: none;
			cursor: pointer;
			outline: none;

			span {
				display: block;
				width: 20px;
				height: 3px;
				margin: auto;
				background: black;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				transition: all .4s ease;

				&.top {
					transform: translateY(-8px);
				}

				&.bottom {
					transform: translateY(8px);
				}
			}

			&.active{
				span {
					background: white;
				}

				.top {
					transform: rotate(-45deg);
				}
				.mid{
					transform: translateX(-20px) rotate(360deg);
					opacity: 0;
				}
				.bottom {
					transform: rotate(45deg);
				}
			}
		}
	}

	#sidemenu {
		nav {
			width: 300px;
			height: 100%;
			min-height: 100vh;

			background: white;
			position: absolute;
			top: 0;
			right: 0;
			z-index: 99;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.30);

			.title {
				font-family: "Playfair Display", serif;
				font-size: 18px;
				line-height: 18px;
				font-weight: bold;
				text-transform: uppercase;
				color: white;
				background-color: #625857;
				padding: 40px 0 40px 32px;

				cursor: pointer;
			}

			.sidemenuWrapper {
				padding: 20px 0 50px 32px;
				ul {
					li {
						list-style:none;
						padding: 8px 0 8px 0;
						padding: 8px 0 8px 0;

						cursor: pointer;
						font-family: Roboto;

						span {
							font-weight: bold;
						}

						font-size: 16px;
						text-transform: uppercase;
						color: black;

						text-decoration: none;

						a:hover {
							color: black;
							text-decoration: underline;
						}

						border-bottom: 1px solid #CCCCCC;
						width: 240px;

						:last-child {
							border-bottom: none;
						}

						ul {
							padding: 5px 0 0 20px;

							li {
								margin-bottom: 0;
								padding: 4px 0 4px 0;
								font-weight: normal;
								text-transform: none;
								border-bottom: none;
							}
						}

					}

					li:last-child {
						border-bottom: none;
					}
				}
			}
		}
	}

	.translateX-enter{
		transform:translateX(200px);
		opacity: 0;
	}

	.translateX-enter-active,.translateX-leave-active{
		transform-origin: top left 0;
		transition: 0.2s ease;
	}

	.translateX-leave-to{
		transform: translateX(200px);
		opacity: 0;
	}
</style>
