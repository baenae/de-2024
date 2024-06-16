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
		}
	]
});

export default router
