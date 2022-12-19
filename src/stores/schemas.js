import { defineStore } from 'pinia'
import ConnectionService from '../services/ConnectionService'

export const useSchemasStore = defineStore({
	id: 'schemas',
	state: () => ({
		schemas: [],
	}),
	getters: {
		get: (state, connectionId, schema) =>
			state.schemas.find((el) => el.id == connectionId && el.name == schema),
	},
	actions: {
		async save(schema) {
			const response = await ConnectionService.save(schema)
			this.refresh()
			return response
		},
		async delete(id) {
			const response = await ConnectionService.delete(id)
			this.refresh()
			return response
		},
		async refresh() {
			this.schemas = await ConnectionService.fetchAll()
		},
	},
})
