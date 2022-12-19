<template>
	<div :id="'nav-item-' + props.text" class="nav-item" @click="focus">
		<router-link
			:to="props.path ? props.path : '#'"
			class="p-1.5 flex gap-3 items-center justify-start w-full group"
		>
			<Icon />
			<div v-if="props.expanded" class="tooltip text-xs flex-auto text-start">
				<span>{{ props.text }}</span>
			</div>
			<div
				v-if="props.subitems.length > 0 && props.expanded"
				class="flex items-center"
				:class="{ 'rotate-180': showContent }"
				tabindex="-1"
			>
				<svg class="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M15.25 10.75L12 14.25L8.75 10.75"
					></path>
				</svg>
			</div>
			<div
				v-if="!props.expanded"
				class="nav-item-tooltip group-hover:scale-100"
			>
				{{ props.text }}
			</div>
		</router-link>
	</div>
	<div
		v-if="subitems.length > 0 && props.expanded && showContent"
		class="pt-2 pl-4"
	>
		<ul class="flex flex-col pl-2 text-gray-500 border-l border-gray-700">
			<li v-for="item in subitems" :key="item">
				<router-link
					:to="item.path ? item.path : '#'"
					class="inline-block w-full px-4 py-2 text-xs text-left rounded hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-500 focus:text-white"
					>{{ item.text }}</router-link
				>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue'

const props = defineProps({
	text: String,
	icon: String,
	path: String,
	subitems: {
		type: Array,
		default() {
			return []
		},
	},
	expanded: Boolean,
})

const active = ref(false)
const showContent = ref(true)

const focus = () => {
	if (props.subitems.length > 0) showContent.value = !showContent.value
	else active.value = true
}

const Icon = defineAsyncComponent(() => import(`./icons/${props.icon}Icon.vue`))
</script>

<style lang="scss">
.nav-item {
	@apply flex gap-2 items-center transition-all ease-in-out rounded-lg text-gray-500 hover:cursor-pointer;

	.router-link-active {
		// @apply outline-none rounded-lg ring-1 ring-gray-500 hover:ring-white text-white;
		@apply text-white;
	}

	& > *:not(.router-link-active):hover {
		@apply text-white;
	}

	.nav-item-tooltip {
		@apply absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-gray-800 text-xs font-bold scale-0 transition-all duration-100 origin-left z-10;
	}
}
</style>
