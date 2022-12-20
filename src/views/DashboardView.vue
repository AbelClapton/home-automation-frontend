<script setup>
import { ref, onMounted } from 'vue'
import SensorsPanel from '../components/SensorsPanel.vue'
import RoomPanel from '../components/RoomPanel.vue'

const sensors = ref([
	{
		name: 'Temperatura',
		unit: '°C',
		value: 36,
		average: 35,
		max: 36,
		min: 36,
	},
	{
		name: 'Humedad',
		unit: '%',
		value: 36,
		average: 35,
		max: 36,
		min: 36,
	},
	{
		name: 'Calor',
		unit: 'ppm',
		value: 36,
		average: 35,
		max: 36,
		min: 36,
	},
	{
		name: 'Energia',
		unit: 'kW/h',
		value: 36,
		average: 35,
		max: 36,
		min: 36,
	},
])

const rooms = ref([
	{
		name: 'Sala de Estar',
		controllers: [
			{
				name: 'Bombilla 1',
				type: 'light',
				status: 'on',
			},
			{
				name: 'Bombilla 2',
				type: 'light',
				status: 'off',
			},
		],
		actuators: [
			{
				name: 'Detector de Movimiento',
				type: 'movement',
				status: 'off',
			},
			{
				name: 'Detector de Humo',
				type: 'smoke',
				status: 'off',
			},
		],
		sensors: [
			{
				name: 'Temperatura',
				unit: '°C',
				value: 36,
				average: 35,
				max: 36,
				min: 36,
			},
			{
				name: 'Humedad',
				unit: '%',
				value: 36,
				average: 35,
				max: 36,
				min: 36,
			},
			{
				name: 'Calor',
				unit: 'ppm',
				value: 36,
				average: 35,
				max: 36,
				min: 36,
			},
			{
				name: 'Energia',
				unit: 'kW/h',
				value: 36,
				average: 35,
				max: 36,
				min: 36,
			},
		],
	},
	{
		name: 'Cocina',
		controllers: [
			{
				name: 'Bombilla 1',
				type: 'light',
				status: 'on',
			},
			{
				name: 'Bombilla 2',
				type: 'light',
				status: 'on',
			},
		],
		sensors: [
			{
				name: 'Detector de Movimiento',
				type: 'movement',
				status: 'off',
			},
			{
				name: 'Detector de Humo',
				type: 'smoke',
				status: 'off',
			},
		],
	},
	{
		name: 'Comedor',
		controllers: [
			{
				name: 'Bombilla 1',
				type: 'light',
				status: 'on',
			},
			{
				name: 'Bombilla 2',
				type: 'light',
				status: 'on',
			},
		],
		sensors: [
			{
				name: 'Detector de Movimiento',
				type: 'movement',
				status: 'off',
			},
			{
				name: 'Detector de Humo',
				type: 'airQuality',
				status: 'off',
			},
		],
	},
	{
		name: 'Dormitorio 1',
		controllers: [
			{
				name: 'Bombilla 1',
				type: 'light',
				status: 'on',
			},
			{
				name: 'Bombilla 2',
				type: 'light',
				status: 'on',
			},
		],
		sensors: [
			{
				name: 'Detector de Movimiento',
				type: 'movement',
				status: 'off',
			},
			{
				name: 'Detector de Humo',
				type: 'airQuality',
				status: 'off',
			},
		],
	},
	{
		name: 'Dormitorio 2',
		controllers: [
			{
				name: 'Bombilla 1',
				type: 'light',
				status: 'on',
			},
			{
				name: 'Bombilla 2',
				type: 'light',
				status: 'on',
			},
		],
		sensors: [
			{
				name: 'Detector de Movimiento',
				type: 'movement',
				status: 'off',
			},
			{
				name: 'Detector de Humo',
				type: 'airQuality',
				status: 'off',
			},
		],
	},
	{
		name: 'Baño',
		controllers: [
			{
				name: 'Bombilla 1',
				type: 'light',
				status: 'on',
			},
			{
				name: 'Bombilla 2',
				type: 'light',
				status: 'on',
			},
		],
		sensors: [
			{
				name: 'Detector de Movimiento',
				type: 'movement',
				status: 'off',
			},
			{
				name: 'Detector de Humo',
				type: 'airQuality',
				status: 'off',
			},
		],
	},
])
</script>

<template>
	<div class="flex flex-wrap gap-6">
		<room-panel class="h-min" :room="rooms[0]" />
	</div>
</template>
