<script setup>
defineProps({
	title: String,
})
</script>

<template>
	<div
		class="w-full flex flex-col py-3 px-3 bg-slate-800/50 rounded-lg backdrop-blur-[1px] shadow-xl shadow-black/30 border border-black/30"
	>
		<div
			class="text-xs bg-black/90 flex items-center text-slate-500 rounded-lg w-fit -mt-5"
		>
			<div class="btn-sm">{{ title }}</div>
		</div>

		<slot></slot>
	</div>
</template>
