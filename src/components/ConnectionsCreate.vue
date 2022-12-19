<script setup>
import { ref } from 'vue'
const formData = ref({
	name: '',
	host: '',
	username: '',
	password: '',
	kind: '',
})

const emit = defineEmits(['submit'])

const submit = () => {
	emit('submit', formData.value)
}
</script>

<template>
	<div class="flex items-center justify-center h-full">
		<form
			class="flex flex-col h-fit -mt-24 px-5 py-10 rounded-lg backdrop-blur-[1px] justify-center gap-2 bg-slate-500/50"
			@submit.prevent="submit"
		>
			<div class="form-control">
				<label for="name">Name:</label>
				<input
					name="name"
					v-model="formData.name"
					autocomplete="off"
					type="text"
					placeholder="Name"
				/>
			</div>
			<div class="form-control">
				<label for="host">Host:</label>
				<input
					name="host"
					v-model="formData.host"
					autocomplete="off"
					type="text"
					placeholder="Host"
				/>
			</div>
			<div class="form-control">
				<label for="username">User:</label>
				<input
					name="username"
					v-model="formData.username"
					autocomplete="off"
					type="text"
					placeholder="User"
				/>
			</div>
			<div class="form-control">
				<label for="password">Password:</label>
				<input
					name="password"
					v-model="formData.password"
					autocomplete="off"
					type="text"
					placeholder="Password"
				/>
			</div>
			<div class="form-control">
				<label for="cars">Database:</label>
				<select name="kind" v-model="formData.kind">
					<option value="MySQL">MySQL</option>
					<option value="PostgreSQL">PostgreSQL</option>
					<option value="Neo4j">Neo4j</option>
				</select>
			</div>
			<div class="form-control mt-10">
				<button
					class="border-slate-700 border-2 px-3 py-1 rounded-lg"
					type="submit"
				>
					Submit
				</button>
			</div>
		</form>
	</div>
</template>

<style>
.form-control {
	@apply flex flex-col items-center justify-start;
}
</style>
