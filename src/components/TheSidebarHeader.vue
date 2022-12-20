<template>
	<div class="flex items-center justify-between">
		<a
			href="#"
			class="bg-sky-500 p-1.5 rounded flex items-center justify-center focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
			@click="$emit('toggleSidebar')"
			><svg
				class="w-5 h-5 text-white stroke-current"
				viewBox="0 0 24 24"
				fill="none"
			>
				<path
					d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>
				<path
					d="M9.25 12L4.75 15L12 19.25L19.25 15L14.6722 12"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path></svg
		></a>
	</div>
</template>

<script setup>
const emit = defineEmits(['toggleSidebar'])
</script>
