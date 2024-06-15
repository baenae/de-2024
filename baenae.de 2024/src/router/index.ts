import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Startseite.vue'
import UeberMich from '../views/UeberMich.vue'
import Leistungen from '../views/Leistungen.vue'

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
			path: '/about',
			name: 'about',
			component: UeberMich
		}
	]
});

export default router
