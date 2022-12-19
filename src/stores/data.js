import { defineStore } from 'pinia'

export const useDataStore = defineStore({
	id: 'data',
	state: () => ({
		data: {},
	}),
	getters: {},
	actions: {},
})
