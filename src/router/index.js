import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		component: () => import('../views/Home.vue')
	},
	{
		path: '/register',
		component: () => import('../views/Register.vue')
	},
	{
		path: '/sign-in',
		component: () => import('../views/SignIn.vue')
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
});

export default router
