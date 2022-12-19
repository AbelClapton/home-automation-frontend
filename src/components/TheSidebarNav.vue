<template>
	<div class="flex flex-col gap-2">
		<div v-for="item in mainlist" :key="item.text" class="">
			<TheSidebarNavItem
				:text="item.text"
				:icon="item.icon"
				:path="item.path"
				:expanded="props.expanded"
				:subitems="item.subitems"
			/>
		</div>
		<hr class="border-gray-700 py-1 mt-1" />
		<div v-for="item in secondarylist" :key="item.text" class="">
			<TheSidebarNavItem
				:text="item.text"
				:icon="item.icon"
				:path="item.path"
				:expanded="props.expanded"
			/>
		</div>
	</div>
</template>

<script setup>
import TheSidebarNavItem from '@/components/TheSidebarNavItem.vue'

const props = defineProps({
	expanded: Boolean,
})

const mainlist = [
	{ text: 'Dashboard', icon: 'Dashboard', path: '/' },
	{
		text: 'Content',
		icon: 'Content',
		path: '/content',
		subitems: [
			{ text: 'Courses', path: '/Courses' },
			{ text: 'Categories', path: '/Categories' },
			{ text: 'Instructors', path: '/Instructors' },
			{ text: 'Video Library', path: '/Video' },
		],
	},
	{ text: 'Connections', icon: 'Database', path: '/connections' },
	{ text: 'ETL Tool', icon: 'ETL', path: '/etl' },
	{ text: 'Reporting', icon: 'Reporting', path: '/reporting' },
	{ text: 'Support', icon: 'Support', path: '/support' },
]

const secondarylist = [
	{ text: 'Settings', icon: 'Settings', path: '/settings' },
	{ text: 'Notifications', icon: 'Notifications', path: '/notifications' },
	{ text: 'Apps', icon: 'Apps', path: '/apps' },
]
</script>
