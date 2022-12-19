<script setup>
import BasePanel from './BasePanel.vue'

defineProps({
	data: Object,
})
</script>

<template>
	<base-panel>
		<div class="flex flex-col h-full items-center justify-between">
			<div class="w-full flex justify-between items-start">
				<h5 class="font-semibold">{{ data.name }}</h5>
				<span class="text-gray-400">({{ data.unit }})</span>
			</div>

			<div class="flex justify-center items-center my-6 mx-4">
				<div
					class="flex justify-center items-center rounded-full border-8 border-sky-500 w-24 h-24 shadow-lg shadow-sky-400/40"
				>
					<span class="text-3xl font-semibold">
						{{ data.value }}<sup class="text-base">{{ data.unit }}</sup>
					</span>
				</div>
			</div>

			<div class="flex gap-3 justify-evenly">
				<div class="flex flex-col justify-center items-center scale-75">
					<span class="font-medium text-gray-400">Mín.</span>
					<span class="text-lg">{{ data.min }}</span>
				</div>

				<div class="flex flex-col justify-center items-center">
					<span class="font-medium text-gray-400">Media</span>
					<span class="text-lg">{{ data.average }}</span>
				</div>

				<div class="flex flex-col justify-center items-center scale-75">
					<span class="font-medium text-gray-400">Máx.</span>
					<span class="text-lg">{{ data.max }}</span>
				</div>
			</div>
		</div>
	</base-panel>
</template>
