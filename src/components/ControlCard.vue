<script setup>
import { computed } from 'vue'
import BaseCard from './BaseCard.vue'

const props = defineProps({
	control: Object,
})

const icon = computed(() => {
	switch (props.control.type) {
		case 'light':
			return 'lightbulb'
		case 'movement':
			return 'person-running'
		case 'smoke':
			return 'fire'
		default:
			return ''
	}
})
</script>

<template>
	<base-card>
		<div class="flex justify-start items-start gap-3">
			<font-awesome-icon class="text-sky-400  pl-1 pr-0.5" :icon="['fas', icon]" size="lg" />
			<h5 class="font-semibold text-center whitespace-pre">
				{{ control.name }}
			</h5>
		</div>
	</base-card>
</template>
