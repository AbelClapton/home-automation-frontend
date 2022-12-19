<template>
	<div id="view-container" class="rounded-lg text-slate-800 h-full">
		<ConnectionsHeader
			:showLoading="busy"
			@refreshConnections="refreshConnections"
		/>
		<router-view @submit="submit"></router-view>
		<!-- <ConnectionsContent :connections="connections" /> -->
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { useConnectionsStore } from '@/stores/connections'
import ConnectionsHeader from '@/components/ConnectionsHeader.vue'

const busy = ref(false)

const connectionsStore = useConnectionsStore()

const refreshConnections = () => {
	connectionsStore.refresh()
}

const submit = async (connection) => {
	alert('Response: ' + JSON.stringify(await connectionsStore.add(connection)))
}
</script>

<style>
#view-container {
	grid-template-columns: repeat(auto-fit, minmax(224px, 1fr));
}
</style>
