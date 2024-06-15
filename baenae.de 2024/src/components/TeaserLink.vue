<template>
	<div
		class="teaser-link"
	>
		<div class="image">
			<img :src="image">
		</div>

		<div class="text">
			<h3>{{ headline }}</h3>
			<p>{{ text }}</p>
			<div>
				<router-link :to="'/' + link">Mehr erfahren</router-link>
				<img src="../assets/chevron-double-right.svg">
			</div>
		</div>

	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
		name: "TeaserLink",
		props: {
			image: {
				type: String,
				default: ""
			},
			headline: {
				type: String,
				default: ""
			},
			text: {
				type: String,
				default: ""
			},
			link: {
				type: String,
				default: ""
			}
		}
	});
</script>
<style scoped>
	.teaser-link {
		width: 100%;
		padding-bottom: 20px;
		margin-bottom: 20px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.3);

		display: flex;

		* {
			padding: 0;
		}

		.image {
			height: 160px !important;

			max-width: 160px !important;
			max-height: 160px !important;

			background-color: #999999;
		}

		.text {
			width: calc(100% - 160px);
			padding-left: 20px;

			h3 {
				font-family: Playfair Display;
				font-size: 26px;
				margin-bottom: 7px;
			}

			div {
				margin-top: 20px;
				width: 100%;

				font-weight: bold;

				display: flex;
				flex-grow: 0;
				justify-content: right;
				align-content: center;
				align-items: end;

				a {
					padding: 2px 0 2px 0;
					text-align: right;
					text-decoration: none;
					height: 24px;
				}


				img {
					width: 24px !important;
					height: 24px;
				}
			}
		}
	}

	.teaser-link:last-child {
		border-bottom: none;
	}
</style>
