<template>
	<main>
		<BreadcrumbNavigation :links="[{ url: '/leistungen', text: 'Leistungen' }]" />
		<h1>TFP Shooting</h1>

		<h3>Was ist ein TFP Shooting?</h3>
		<p>
			Wir machen zusammen Fotos und es geht nicht um Geld.
			Am Ende verdient niemand daran und alle Akteur:innen werden mit den fertigen Fotos entlohnt.
			Die dürfen dann frei für alle nicht kommerziellen Zwecke genutzt werden.
		</p>
		<p>
			Wikipedia Artikel: <a href="https://de.wikipedia.org/wiki/Time_for_prints_(Fotografie)" target="_blank">Time for prints</a>
		</p>
		<p>
			Das Model bekommt ein professionelles Shooting mit Bearbeitung und muss keinen teuren Fotografen bezahlen.
			Der Fotograf (Bänä) bekommt ein Model, um mit seiner Fotografie weiterzukommen.
		</p>

		<p>
			Beispielbilder findest du auf Instagram
			<a href="https://www.instagram.com/baenae.de/" target="_blank">@baenae.de</a>
		</p>

		<h3>FAQ</h3>
		<p>
			<strong>Als erste Regel:</strong>
			Ausnahmen sind immer möglich und drin. Wir sollten nur drüber sprechen.</p>
		<p>
			<strong>Warum machst du (Bänä) das?</strong>
			Vor allem, weil ich daran viel Spaß habe. Aber ich möchte auch in meiner Fotografie weiterkommen, mein Portfolio um neue spannende Menschen erweitern und neue Dinge ausprobieren.
		</p>

		<p>
			<strong>Wofür darf das Model die Bilder nutzen?</strong>
			Social-Media, Bewerbungen, Webseiten, als Druck, als Geschenk für deine Freund:in, Oma, Opa …
		</p>

		<p>
			<strong>Wofür darf der Fotograf die Bilder nutzen?</strong>
			Für Social-Media und meine Webseite.
			<strong>Wichtig: Es werden keine Fotos von dir veröffentlicht, denen du nicht zugestimmt hast.</strong>
		</p>

		<p>
			<strong>Namensnennungen</strong>
			Der Fotograf soll auf den Fotos markiert und in der Beschreibung benannt und verlinkt werden. Das Model wird auch verlinkt und genannt, kann aber auf Wunsch auch anonym bleiben.
		</p>

		<p>
			<strong>Darf ich später ein Bild verändern oder einen Filter drauf legen?</strong>
			Bitte nicht…. Du malst doch auch nicht auf van Goghs Sonnenblumen rum.
		</p>

		<p>
			<strong>Darf ich eine Begleitperson mitbringen?</strong>
			Super, eine helfende Hand ist immer gerne gesehen.
		</p>

		<p>
			<strong>Kannst du auch in einem anderen Stil fotografieren?</strong>
			Mein Stil macht meine Fotos erst wirklich zu meinen Fotos.
			Ich probiere gerne mal etwas anderes aus, aber wenn dir mein Bildlook nicht gefällt,
			dann macht es wenig Sinn, dass wir zusammen shooten.
		</p>

		<p>
			<strong>Was bekomme ich am Ende?</strong>
			Du bekommst die fertig bearbeiteten Fotos.
			Auf Wunsch auch in hoher Druckauflösung.
			Die Foto-Rohdaten gebe ich nicht heraus.
		</p>

		<p>
			<strong>Hast du ein Studio?</strong>
			Ja. Ich hab bei mir zu Hause alles soweit eingerichtet, dass man das Studio nennen kann.
			Licht, Platz und alles Nötige ist vorhanden.
		</p>

		<p>
			<strong>Shootest du auch outdoor?</strong>
			Ja, unbedingt!
		</p>

		<p>
			<strong>Was muss ich beim Aktshooting beachten?</strong>
			Enge und einschneidende Unterwäsche macht Abdrücke.
			Wenn du keine Abdrücke vom BH oder ähnlichen haben möchtest, komm in weiter und lockerer Kleidung zum Shooting.
		</p>
	</main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useTeaserImage } from '@/useTeaserImage'
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation.vue'
export default defineComponent({
	name: "Startseite",
	components: { BreadcrumbNavigation },
	setup() {
		const { setImage } = useTeaserImage();
		setImage("../src/assets/teaser-images/franzi_gelb.jpg");
	}
});
</script>
