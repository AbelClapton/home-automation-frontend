<script setup>
import BasePanel from './BasePanel.vue'
import LightControl from './LightControl.vue'
import SensorCard from './SensorCard.vue'
import MovementDetector from './MovementDetector.vue'
import SmokeDetector from './SmokeDetector.vue'

const props = defineProps({
	room: Object,
})

const getControlsByType = (type) => {
	return props.room.controls.filter((control) => control.type === type)
}

const getActuatorsByType = (type) => {
	return props.room.actuators.filter((control) => control.type === type)
}
</script>

<template>
	<base-panel class="w-fit" :title="room.name">
		<div class="mt-2 flex gap-3">
			<div class="flex flex-col gap-3 h-min">
				<light-control
					class="flex-1"
					v-for="control in getControlsByType('light')"
					:key="control.name"
					:control="control"
				/>
				<movement-detector
					class="flex-1"
					v-for="control in getActuatorsByType('movement')"
					:key="control.name"
					:control="control"
				/>
				<smoke-detector
					class="flex-1"
					v-for="control in getActuatorsByType('smoke')"
					:key="control.name"
					:control="control"
				/>
			</div>
			<div class="flex gap-3 flex-wrap">
				<sensor-card
					v-for="sensor in room.sensors"
					:key="sensor.name"
					:sensor="sensor"
				/>
			</div>
		</div>
	</base-panel>
</template>
