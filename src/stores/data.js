import { defineStore } from 'pinia'

export const useDataStore = defineStore({
	id: 'data',
	state: () => ({
		data: {
			rooms: [
				{
					id: 1,
					name: 'Cocina',
					sensors: [
						{
							name: 'Temperatura',
							type: 'temperature',
							unit: '°C',
							data: {
								current: 27,
								min: 23,
								average: 25,
								max: 27,
								today: [25, 23, 23, 24, 27, 25, 23],
								week: [],
								month: [],
								year: [],
							},
							isConnected: true,
						},
						{
							name: 'Humedad',
							type: 'humidity',
							unit: '%',
							data: {
								current: 50,
								min: 40,
								average: 45,
								max: 54,
								today: [40, 46, 45, 50, 43, 53, 41],
								week: [],
								month: [],
								year: [],
							},
							isConnected: true,
						},
						{
							name: 'Calor',
							type: 'heatIndex',
							unit: 'ppm',
							data: {
								current: 27,
								min: 23,
								average: 25,
								max: 27,
								today: [25, 23, 23, 24, 27, 25, 23],
								week: [],
								month: [],
								year: [],
							},
							isConnected: true,
						},
						{
							name: 'Energia',
							type: 'energy',
							unit: 'kWh',
							data: {
								current: 0.45,
								min: 0.4,
								average: 0.45,
								max: 0.5,
								today: [0.4, 0.43, 0.45, 0.42, 0.46, 0.5, 0.48],
								week: [],
								month: [],
								year: [],
							},
							isConnected: true,
						},
					],
					actuators: [
						{
							name: 'Sensor de Movimiento',
							type: 'movement',
							isActive: true,
							isConnected: true,
						},
						{
							name: 'Sensor de Humo',
							type: 'smoke',
							isActive: false,
							isConnected: true,
						},
					],
					controls: [
						{
							name: 'Bombilla 1',
							type: 'light',
							isActive: true,
							isConnected: true,
						},
						{
							name: 'Bombilla 2',
							type: 'light',
							isActive: false,
							isConnected: false,
						},
					],
				},
			],
		},
	}),
	getters: {},
	actions: {},
})
