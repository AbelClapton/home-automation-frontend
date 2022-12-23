<script setup>
import BaseCard from './BaseCard.vue'
defineProps({
	control: Object,
})
</script>

<template>
	<base-card class="w-48 shadow-inner-dark bg-black/40 px-3 py-2">
		<div class="flex items-center justify-between gap-3">
			<font-awesome-icon
				class="pl-1 pr-0.5"
				:class="[control.isActive ? 'text-sky-400' : 'text-gray-400']"
				:icon="['fas', 'person-running']"
				size="lg"
				:beat-fade="control.isActive"
			/>
			<div class="flex flex-col grow pt-0.5">
				<span class="whitespace-pre font-semibold">{{ control.name }}</span>
				<span class="font-light text-[0.7rem] text-red-400">Sensor activado</span>
			</div>
		</div>
	</base-card>
</template>
