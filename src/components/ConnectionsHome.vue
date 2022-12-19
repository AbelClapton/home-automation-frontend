<template>
	<div class="flex flex-wrap gap-3 pt-3">
		<ConnectionPanel
			v-for="connection in connectionsStore.connections"
			:key="connection.id"
			:connection="connection"
			@deleteConnection="deleteConnection"
			@clicked="clicked"
		/>
	</div>
</template>

<script setup>
import { onMounted } from 'vue'
import ConnectionPanel from '@/components/ConnectionPanel.vue'
import { useConnectionsStore } from '@/stores/connections'

const connectionsStore = useConnectionsStore()

const deleteConnection = (id) => {
	connectionsStore.delete(id)
}

onMounted(() => {
	connectionsStore.refresh()
})

const clicked = (text) => {
	alert('clicked ' + text)
}
</script>
