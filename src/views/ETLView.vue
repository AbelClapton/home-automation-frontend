<template>
	<div class="text-slate-800 h-full flex flex-col gap-2">
		<div class="text-2xl flex items-center justify-between pr-4">
			<h1
				@click="$router.push('/etl')"
				class="hover:cursor-pointer hover:opacity-70"
			>
				<b>ETL Tool</b>
			</h1>
			<div class="flex gap-1"></div>
		</div>
		<!-- Connections -->
		<div class="flex gap-2 h-full pb-2">
			<div class="flex-1 border">
				<div class="flex flex-col gap-3">
					<div
						v-for="connection in connectionsStore.connections"
						:key="connection.id"
						class="flex flex-col p-2 gap-1 hover:bg-slate-500/70 rounded-lg"
					>
						<div>{{ connection.name }}</div>
						<div>
							<div>{{ connection.host }}:{{ connection.port || '3306' }}</div>
							<div>{{ connection.user }}</div>
						</div>
					</div>
				</div>
			</div>
			<!-- End of connections -->

			<!-- Schemas -->
			<div class="flex-1 border">select database</div>
			<!-- End of schemas -->

			<!-- Tables -->
			<div class="flex-1 border">select tables</div>
			<!-- End of tables -->

			<!-- Fields -->
			<div class="flex-1 border">select fields</div>
			<!-- End of fields -->
		</div>
		<div class="flex gap-2 justify-end">
			<button>Previous</button><button>Next</button>
		</div>
	</div>
</template>

<script setup>
import { useConnectionsStore } from '@/stores/connections.js'

const connectionsStore = useConnectionsStore()
</script>
