<template>
	<div class="text-2xl flex items-center justify-between pr-4">
		<h1
			@click="$router.push('/connections')"
			class="hover:cursor-pointer hover:opacity-70"
		>
			<b>Connections</b>
		</h1>
		<div class="flex gap-1">
			<ChevronLeftIcon
				class="hover:bg-slate-500/70 hover:cursor-pointer rounded-3xl p-1"
			/>
			<PlusIcon
				class="hover:bg-slate-500/70 hover:cursor-pointer rounded-3xl p-1"
				@click="$router.push('/connections/new')"
			/>
			<ViewGridIcon
				class="hover:bg-slate-500/70 hover:cursor-pointer rounded-3xl p-1"
			/>
			<RefreshIcon
				class="hover:bg-slate-500/70 hover:cursor-pointer rounded-3xl p-1"
				:class="[props.showLoading ? 'animate-spin' : '']"
				@click="$emit('refreshConnections')"
			/>
		</div>
	</div>
</template>

<script setup>
import RefreshIcon from '@/components/icons/RefreshIcon.vue'
import ViewGridIcon from '@/components/icons/ViewGridIcon.vue'
import ChevronLeftIcon from '@/components/icons/ChevronLeftIcon.vue'
import PlusIcon from '@/components/icons/PlusIcon.vue'

const props = defineProps({
	showLoading: Boolean,
})

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['refreshConnections'])
</script>
