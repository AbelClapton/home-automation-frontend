import Api from '@/services/api.js'

export default {
	fetchAll() {
		return Api()
			.get(`connections`)
			.then((res) => res.data)
			.catch((err) => err)
	},
	save(connection) {
		return Api()
			.post(`connections`, connection)
			.then((res) => res.data)
			.catch((err) => err)
	},
	delete(id) {
		return Api()
			.delete(`connections/${id}`)
			.then((res) => res)
			.catch((err) => err)
	},
}
