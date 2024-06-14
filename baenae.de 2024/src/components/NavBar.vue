<script setup lang="ts">
</script>

<template>
	<Header>
		<div id="logo">
			<img
				src="../assets/logo-with-ribbon.png"
				alt="Logo baenae"
				title="Logo baenae"
			>
		</div>

		<div id="header-content">
			<ul>
				<li>
					<router-link to="/">Home</router-link>
				</li>
				<li>
					<router-link to="/">About</router-link>
				</li>
			</ul>
		</div>
	</Header>
</template>

<style lang="scss" scoped>
	Header {
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

		#header-content {
			width: 100%;
			height: 50px;
			//background-color: deeppink !important;

			ul {
				display: flex;
				align-items: start;
				justify-content: left;
				//background-color: orchid !important;


				li {
					color: black;
					list-style: none;
					//background-color: cadetblue;
					margin: 0px 20px 0 0;
					padding: 0;

					a {
						text-decoration: none;
						color: black;
					}
				}
			}
		}
	}
</style>
