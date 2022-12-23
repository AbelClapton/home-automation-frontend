<template>
	<!-- SIDEBAR PANEL -->
	<div
		id="the-sidebar-panel"
		class="hidden md:flex flex-col gap-3 bg-black/90 rounded-md transition-all duration-300 ease-in-out max-h-screen"
		:class="[show ? 'show w-64' : 'hide w-12']"
	>
		<TheSidebarHeader @toggleSidebar="toggleSidebar" />
		<hr class="border-gray-700" />

		<TheSidebarNav :expanded="show" />
	</div>
	<!-- END OF SIDEBAR PANEL-->
</template>

<script setup>
import { ref } from 'vue'
import TheSidebarHeader from '@/components/TheSidebarHeader.vue'
import TheSidebarNav from '@/components/TheSidebarNav.vue'

const show = ref(false)

const toggleSidebar = () => {
	show.value = !show.value
}
</script>

<style lang="scss">
#the-sidebar-panel {
	background-image: linear-gradient(
		60deg,
		rgb(0 0 0 / 0.9) 40%,
		rgba(255, 255, 255, 0.01) 20%,
		rgb(0 0 0 / 0.9) // rgba(200, 200, 200, 0.05) 40%
	);
	box-shadow: inset 0px 0px 10px 0px rgba($color: #000, $alpha: 0.9),
		inset 0px 0px 5px 10px rgba($color: #fff, $alpha: 0.1),
		0 0 20px 0px rgba($color: #000, $alpha: 0.9);

	&.hide {
		padding: 0.5rem;
	}

	&.show {
		padding: 1.5rem;
	}
}
</style>
