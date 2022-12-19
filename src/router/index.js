import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'dashboard',
			component: DashboardView,
		},
		{
			path: '/connections',
			name: 'connections',
			component: () => import('../views/ConnectionsView.vue'),
			children: [
				{
					path: '',
					name: 'connections-home',
					component: () => import('../components/ConnectionsHome.vue'),
				},
				{
					path: 'new',
					name: 'connections-new',
					component: () => import('../components/ConnectionsCreate.vue'),
				},
				{
					path: ':id',
					name: 'connections-details',
					component: () => import('../components/ConnectionDetails.vue'),
				},
			],
		},
		{
			path: '/etl',
			name: 'etl',
			component: () => import('../views/ETLView.vue'),
			// children: [
			// 	{
			// 		path: '',
			// 		name: 'connections-home',
			// 		component: ConnectionsHome,
			// 	},
			// 	{
			// 		path: 'new',
			// 		name: 'connections-new',
			// 		component: ConnectionsCreate,
			// 	},
			// 	{
			// 		path: ':id',
			// 		name: 'connections-details',
			// 		component: ConnectionDetails,
			// 	},
			// ],
		},
	],
})

export default router
