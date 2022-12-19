<template>
	<div
		class="panel"
		@click="
			panelHover ? $router.push(`/connections/${props.connection.id}`) : ''
		"
	>
		<div class="flex justify-between">
			<div class="text-xl">{{ props.connection.name }}</div>
			<div>
				<button
					class="p-1 -mr-1 rounded-3xl hover:bg-slate-500/70"
					@mouseover="panelHover = false"
					@mouseleave="panelHover = true"
				>
					<PencilIcon />
				</button>
				<button
					class="p-1 -mr-1 rounded-3xl hover:bg-slate-500/70"
					@click="$emit('deleteConnection', props.connection.id)"
					@mouseover="panelHover = false"
					@mouseleave="panelHover = true"
				>
					<TrashIcon />
				</button>
				<button
					class="p-1 -mr-1 rounded-3xl hover:bg-slate-500/70"
					@click="$emit('clicked', 'button')"
					@mouseover="panelHover = false"
					@mouseleave="panelHover = true"
				>
					<DotsVerticalIcon />
				</button>
			</div>
		</div>
		<div class="flex justify-between gap-2">
			<div class="flex flex-col justify-center">
				<div class="text-xs flex gap-1 items-center">
					<UserIcon />
					<span>{{ props.connection.username }}</span>
				</div>
				<div class="text-xs flex gap-1 items-center">
					<GlobeIcon />
					<span>{{ props.connection.host }}</span>
				</div>
			</div>
			<Icon class="-my-2" />
		</div>
	</div>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue'
import UserIcon from '@/components/icons/UserIcon.vue'
import GlobeIcon from '@/components/icons/GlobeIcon.vue'
import TrashIcon from '@/components/icons/TrashIcon.vue'
import PencilIcon from '@/components/icons/PencilIcon.vue'
import DotsVerticalIcon from '@/components/icons/DotsVerticalIcon.vue'
const Icon = defineAsyncComponent(() =>
	import(`./icons/${props.connection.kind}Icon.vue`)
)

const props = defineProps({
	connection: Object,
})

const panelHover = ref(true)

const emit = defineEmits(['deleteConnection', 'clicked'])
</script>
