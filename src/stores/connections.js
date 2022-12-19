import { defineStore } from 'pinia'
import ConnectionService from '../services/ConnectionService'

export const useConnectionsStore = defineStore({
	id: 'connections',
	state: () => ({
		connections: [],
	}),
	getters: {
		get: (state, id) => state.connections.find((el) => el.id === id),
	},
	actions: {
		async add(connection) {
			const response = await ConnectionService.save(connection)
			this.refresh()
			return response
		},
		async delete(id) {
			const response = await ConnectionService.delete(id)
			this.refresh()
			return response
		},
		async refresh() {
			this.connections = await ConnectionService.fetchAll()
		},
	},
})
