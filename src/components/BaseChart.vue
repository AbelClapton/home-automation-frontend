<script setup>
import { ref } from 'vue'
import ApexChart from 'vue3-apexcharts'

defineProps({
	type: String,
	options: {
		type: Object,
		default: () => {},
	},
	series: Array,
})

const chartOptions = ref({
	chart: {
		animations: {
			enabled: true,
		},
		background: 'rgb(0,0,0,0)',
		dropShadow: {
			enabled: true,
		},
		foreColor: '#fff',
		fontFamily: 'Poppins',
		toolbar: {
			show: false,
		},
		fontUrl: null,
	},
	colors: ['#00BDF8'],
	dataLabels: {
		enabled: false,
	},
	fill: {
		type: 'gradient',
		gradient: {
			type: 'vertical',
			gradientToColors: ['#00BDF8'],
			inverseColors: false,
			opacityTo: 0.4,
			colorStops: [
				{
					opacity: 0.8,
					offset: 0,
					color: '#00BDF8',
				},
				{
					opacity: 0,
					offset: 100,
					color: '#00BDF8',
				},
			],
		},
	},
	grid: {
		borderColor: '#9CA3AF',
		strokeDashArray: 1,
		padding: {
			top: -16,
			right: -6,
			bottom: 48,
			left: -4,
		},
	},
	stroke: {
		width: 2,
	},
	tooltip: {
		theme: 'dark',
	},
	xaxis: {
		labels: {
			show: false,
			rotateAlways: true,
			trim: true,
		},
		axisBorder: {
			show: false,
		},
		tickAmount: 'dataPoints',
		tooltip: {
			enabled: false,
		},
	},
	yaxis: {
		tickAmount: 6,
		labels: {
			offsetX: -16,
			// formatter: (value) => Math.floor(value),
			style: {
				colors: ['rgb(156, 163, 175)'],
			},
		},
	},
	theme: {
		mode: 'dark',
	},
})
</script>

<template>
	<div class="w-full mt-7 h-36 overflow-hidden">
		<apex-chart :type="type" :options="chartOptions" :series="series" />
	</div>
</template>
