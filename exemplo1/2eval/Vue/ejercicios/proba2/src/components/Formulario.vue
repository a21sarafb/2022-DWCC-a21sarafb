<script>
export default {
	data() {
		return {};
	},
	props: {
		persona: Object,
	},
};
</script>
<template>
	<div>
		<form>
			<label for="nombre">Nombre:</label>
			<input type="text" name="nombre" id="nombre" v-model="persona.nombre" />
			<br />
			<label for="apellidos">Apellidos:</label>
			<input
				type="text"
				name="apellidos"
				id="apellidos"
				v-model="persona.apellidos"
			/>
			<br />
			<label for="ano_nacemento">Ano Nacemento:</label>
			<input
				type="number"
				name="ano_nacemento"
				id="ano_nacemento"
				v-model="persona.ano_nacemento"
			/>
			<br />
		</form>
	</div>
</template>
