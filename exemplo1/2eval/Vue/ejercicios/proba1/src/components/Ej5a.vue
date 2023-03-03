<script>
export default {
	data() {
		return {};
	},
	props: {},
	computed: {},
	methods: {},
	emits: [""],
};
</script>
<template>
	<div>
		<form>
			<label for="nombre">Nombre:</label>
			<input type="text" id="nombre" />
			<label for="apellidos">Apellidos:</label>
			<input type="text" id="apellidos" />
			<label for="nombre">Nombre:</label>
			<input type="text" id="telf" />
			<label for="nombre">Nombre:</label>
			<input type="email" id="email" />
			<input type="checkbox" id="fav" /><label for="nombre">Nombre:</label>
		</form>
	</div>
</template>

<style>
.hidden {
	display: none;
}
</style>
