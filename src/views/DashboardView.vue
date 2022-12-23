<script setup>
import { useDataStore } from '@/stores/data'
import RoomPanel from '../components/RoomPanel.vue'

const dataStore = useDataStore()
</script>

<template>
	<div class="flex flex-wrap gap-6">
		<room-panel class="h-min" :room="dataStore.data.rooms[0]" />
	</div>
</template>
