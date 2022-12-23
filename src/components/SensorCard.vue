<script setup>
import { ref, onMounted } from 'vue'
import { getSensorIcon } from '@/utils'

import BaseChart from '@/components/BaseChart.vue'

const props = defineProps({
	sensor: Object,
})

const series = ref([])
const selection = ref('today')
let icon = ref('')

onMounted(() => {
	icon.value = getSensorIcon(props.sensor.name)
	series.value = [
		{
			name: props.sensor.name,
			data: props.sensor.data.today,
		},
	]
})
</script>

<template>
	<div
		class="flex text-white shadow-lg shadow-black/40 rounded-xl border-black/40 border-t-gray-400 border-l-gray-400 border-1"
	>
		<div
			class="flex flex-col h-full items-center bg-black/60 justify-between shadow-inner-dark p-3 backdrop-blur-[1px] rounded-l-xl w-44"
		>
			<div class="w-full flex items-start justify-between">
				<font-awesome-icon
					v-if="icon"
					class="text-sky-400"
					:icon="['fas', icon]"
					size="lg"
				/>
				<h5 class="text-center uppercase tracking-wider">{{ sensor.name }}</h5>
				<span class="text-gray-400">({{ sensor.unit }})</span>
			</div>

			<div class="flex justify-center items-center my-6 mx-4">
				<div
					class="flex justify-center items-center rounded-full border-8 border-sky-500 w-[6.5rem] h-[6.5rem] shadow-lg shadow-sky-500/40"
				>
					<span class="text-3xl font-semibold">
						{{ sensor.data.current }}<sup class="text-base">{{ sensor.unit }}</sup>
					</span>
				</div>
			</div>

			<div class="flex gap-3 justify-evenly">
				<div class="flex flex-col justify-center items-center scale-75">
					<span class="font-medium text-gray-400">Mín.</span>
					<span class="text-lg">{{ sensor.data.min }}</span>
				</div>

				<div class="flex flex-col justify-center items-center">
					<span class="font-medium text-gray-400">Media</span>
					<span class="text-lg">{{ sensor.data.average }}</span>
				</div>

				<div class="flex flex-col justify-center items-center scale-75">
					<span class="font-medium text-gray-400">Máx.</span>
					<span class="text-lg">{{ sensor.data.max }}</span>
				</div>
			</div>
		</div>
		<div
			class="w-96 bg-black/5 shadow-inner-light backdrop-blur-xl rounded-r-xl flex flex-col py-3 pl-3 pr-4 relative gap-2"
		>
			<div class="flex gap-1 items-center absolute right-3.5 top-1.5">
				<font-awesome-icon
					class="text-sky-400 scale-75 animate-pulse"
					icon="fa-solid fa-circle"
				/>
				<span class="text-gray-400 font-light pt-0.5">En línea</span>
			</div>
			<base-chart type="area" :options="chartOptions" :series="series" />
			<div class="flex items-center justify-center gap-3 pt-1.5 pl-3.5">
				<button
					class="bg-transparent border-0 text-[0.7rem] uppercase hover:text-white"
					@click="updateData('today')"
					:class="[
						selection == 'today' ? 'text-white font-semibold' : 'text-gray-400',
					]"
				>
					hoy
				</button>
				<button
					class="bg-transparent border-0 text-[0.7rem] uppercase hover:text-white"
					@click="updateData('week')"
					:class="[
						selection == 'week' ? 'text-white font-semibold' : 'text-gray-400',
					]"
				>
					semana
				</button>
				<button
					class="bg-transparent border-0 text-[0.7rem] uppercase hover:text-white"
					@click="updateData('month')"
					:class="[
						selection == 'month' ? 'text-white font-semibold' : 'text-gray-400',
					]"
				>
					mes
				</button>
				<button
					class="bg-transparent border-0 text-[0.7rem] uppercase hover:text-white"
					@click="updateData('year')"
					:class="[
						selection == 'year' ? 'text-white font-semibold' : 'text-gray-400',
					]"
				>
					año
				</button>
			</div>
		</div>
	</div>
</template>
