import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Startseite.vue'
import UeberMich from '../views/UeberMich.vue'
import Leistungen from '../views/Leistungen.vue'
import Leistungen_Bildverkauf from '@/views/Leistungen_Bildverkauf.vue';
import Leistungen_TFPShooting from '@/views/Leistungen_TFPShooting.vue'
import Leistungen_Business from '@/views/Leistungen_Business.vue';
import Leistungen_PrivatesShooting from '@/views/Leistungen_PrivatesShooting.vue';
import Kontakt from '@/views/Kontakt.vue'
import Impressum from '@/views/Impressum.vue'
import Datenschutz from '@/views/Datenschutz.vue'
import Portfolio from '@/views/Portfolio.vue';
import Portfolio_Business from '@/views/Portfolio_Business.vue'
import Baustelle from '@/views/Baustelle.vue'
import Portfolio_Portraits from '@/views/Portfolio_Portraits.vue'
import Portfolio_Akt from '@/views/Portfolio_Akt.vue'
import Portfolio_StadtLandschaft from '@/views/Portfolio_StadtLandschaft.vue'
import CaseStudy_Teestuebchen from '@/views/CaseStudy_Teestuebchen.vue'
import CaseStudy_Geerds from '@/views/CaseStudy_Geerds.vue'
import CaseStudy_MJ from '@/views/CaseStudy_MJ.vue'
import CaseStudy_GutesEis from '@/views/CaseStudy_GutesEis.vue'
import CaseStudy_Luve from '@/views/CaseStudy_Luve.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/leistungen',
			name: 'leistungen',
			component: Leistungen
		},
		{
			path: '/kontakt',
			name: 'kontakt',
			component: Kontakt
		},
		{
			path: '/impressum',
			name: 'impressum',
			component: Impressum
		},
		{
			path: '/baustelle',
			name: 'baustelle',
			component: Baustelle
		},
		{
			path: '/datenschutz',
			name: 'datenschutz',
			component: Datenschutz
		},
		{
			path: '/leistungen-bildverkauf',
			name: 'leistungen-bildverkauf',
			component: Leistungen_Bildverkauf
		},
		{
			path: '/leistungen-tfpshooting',
			name: 'leistungen-tfpshooting',
			component: Leistungen_TFPShooting
		},
		{
			path: '/leistungen-privatesshooting',
			name: 'leistungen-privatesshooting',
			component: Leistungen_PrivatesShooting
		},
		{
			path: '/leistungen-business',
			name: 'leistungen-business',
			component: Leistungen_Business
		},
		{
			path: '/ueber-mich',
			name: 'ueber-mich',
			component: UeberMich
		},
		{
			path: '/portfolio',
			name: 'portfolio',
			component: Portfolio
		},
		{
			path: '/portfolio-business',
			name: 'portfolio-business',
			component: Portfolio_Business
		},
		{
			path: '/portfolio-portraits',
			name: 'portfolio-portraits',
			component: Portfolio_Portraits
		},
		{
			path: '/portfolio-akt',
			name: 'portfolio-akt',
			component: Portfolio_Akt
		},
		{
			path: '/portfolio-stadtlandschaft',
			name: 'portfolio-stadtlandschaft',
			component: Portfolio_StadtLandschaft
		},
		{
			path: '/casestudy-teestuebchen',
			name: 'casestudy-teestuebchen',
			component: CaseStudy_Teestuebchen
		},
		{
			path: '/casestudy-dotyk',
			name: 'casestudy-dotyk',
			component: CaseStudy_Teestuebchen
		},
		{
			path: '/casestudy-geerds',
			name: 'casestudy-geerds',
			component: CaseStudy_Geerds
		},
		{
			path: '/casestudy-mj',
			name: 'casestudy-js',
			component: CaseStudy_MJ
		},
		{
			path: '/casestudy-guteseis',
			name: 'casestudy-guteseis',
			component: CaseStudy_GutesEis
		},
		{
			path: '/casestudy-luve',
			name: 'casestudy-luve',
			component: CaseStudy_Luve
		}
	]
});

export default router
