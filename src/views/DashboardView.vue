<script setup>
import { ref, onMounted } from 'vue'
import SensorPanel from '../components/SensorPanel.vue'

const sensors = ref({
	temperature: {
		name: 'Temperatura',
		unit: '°C',
		value: 36,
		average: 35,
		max: 36,
		min: 36,
	},
	humidity: {
		name: 'Humedad',
		unit: '%',
		value: 36,
		average: 35,
		max: 36,
		min: 36,
	},
	heatIndex: {
		name: 'Sensación Térmica',
		unit: 'ppm',
		value: 36,
		average: 35,
		max: 36,
		min: 36,
	},
	energy: {
		name: 'Medidor de Corriente',
		unit: 'kW/h',
		value: 36,
		average: 35,
		max: 36,
		min: 36,
	},
})
</script>

<template>
	<div class="mt-4 flex gap-3 w-min">
		<sensor-panel
			class="flex-1"
			v-for="sensor in sensors"
			:key="sensor.name"
			:data="sensor"
		/>
	</div>
</template>
