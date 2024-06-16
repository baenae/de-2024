<script setup lang="ts">
</script>

<template>
	<Header id="header">
		<div id="logo">
			<router-link to="/">
				<img
					src="../assets/logo-with-ribbon.png"
					alt="Logo baenae"
					title="Logo baenae"
				>
			</router-link>
		</div>

		<div id="header-content">
			<ul>
				<li>
					<router-link to="/leistungen">Leistungen</router-link>
				</li>
				<li>
					<router-link to="/portfolio">Portfolio</router-link>
				</li>
				<li>
					<router-link to="/ueber-mich">Über mich</router-link>
				</li>
				<li>
					<router-link to="/kontakt">Kontakt</router-link>
				</li>
			</ul>
		</div>
	</Header>
</template>

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

			margin: 0 20px 0 20px;
			width: calc(240px / 3);
			height: auto;

			img {
				width: 100%;
			}
		}

		@media only screen and (max-width: 1200px) {
			#logo {
				margin: 0;
				left: -3px;
			}
		}

		#header-content {
			width: 100%;
			height: 50px;

			ul {
				width: 100%;
				display: inline;

				li {
					display: inline;

					font-family: Roboto;
					font-style: normal;
					font-size: 16px;

					color: black;
					list-style: none;
					padding-right: 22px;

					a {
						text-decoration: none;
						color: black;
					}

					a:hover {
						text-decoration: underline;
					}
				}
			}
		}
	}
</style>
