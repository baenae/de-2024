<template>
	<main>
		<h2>Case Study</h2>
		<h1>Lettering by MJ</h1>
		<p>
			Bilder für die Webseite und Social Media für das Lettering by Martina Johanna.
		</p>

		<div class="previewImages">
			<img
				v-for="n in 7"
				:src="'../src/assets/content-images/casestudy-mj/' + n + '_preview.jpg'"
				alt="Foto von Lettering mit Martina Johanna"
				title="Foto von Lettering mit Martina Johanna"
			>
		</div>
	</main>
</template>
<script setup>
</script>
