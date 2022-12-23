<script setup>
import BaseCard from './BaseCard.vue'
defineProps({
	control: Object,
})
</script>

<template>
	<base-card
		class="w-48 shadow-inner-dark bg-black/40 px-3 py-2 border-black/40 border-t-gray-400 border-l-gray-400 border-1"
	>
		<div class="flex items-center justify-between gap-3">
			<font-awesome-icon
				class="text-sky-400 pl-1 pr-0.5"
				:icon="['fas', 'lightbulb']"
				size="lg"
			/>
			<div class="flex flex-col grow pt-0.5">
				<span class="whitespace-pre font-semibold">{{ control.name }}</span>
				<span class="font-light text-[0.7rem] text-gray-400">En linea</span>
			</div>
			<button
				class="rounded-full p-1.5 flex items-center justify-center bg-black/20 text-gray-400 transition duration-75 border-black/40 border-t-gray-500 border-l-gray-600 border-1"
				:class="[
					control.isActive ? 'shadow shadow-sky-500' : 'hover:text-white',
				]"
			>
				<font-awesome-icon
					:class="[control.isActive ? 'text-sky-400' : '']"
					:icon="['fas', 'power-off']"
					size="lg"
				/>
			</button>
		</div>
	</base-card>
</template>
