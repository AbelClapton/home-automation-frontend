<script setup>
import BasePanel from './BasePanel.vue'
import SensorCard from './SensorCard.vue'
defineProps({
	sensors: Array,
})
</script>

<template>
	<base-panel title="Sensores">
		<div class="flex mt-2 gap-3">
			<sensor-card
				class="flex-1"
				v-for="sensor in sensors"
				:key="sensor.name"
				:sensor="sensor"
			/>
		</div>
	</base-panel>
</template>
