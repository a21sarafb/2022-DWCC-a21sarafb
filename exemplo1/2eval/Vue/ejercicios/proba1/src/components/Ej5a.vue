<script>
export default {
	data() {
		return {
			nombre: "",
			apellidos: "",
			telefono: "",
			email: "",
			isFavorito: false,
		};
	},
	computed: {},
	methods: {
		addPersona() {
			this.$emit(
				"addPersona",
				this.nombre,
				this.apellidos,
				this.telefono,
				this.email,
				this.isFavorito
			);
		},
	},
	emits: ["addPersona"],
};
</script>
<template>
	<div>
		<form>
			<label for="nombre">Nombre:</label>
			<input type="text" id="nombre" v-model="nombre" /><br />
			<label for="apellidos">Apellidos: </label>
			<input type="text" id="apellidos" v-model="apellidos" /><br />
			<label for="telf">Telefono: </label>
			<input type="text" id="telf" v-model="telefono" /><br />
			<label for="email">Correo: </label>
			<input type="email" id="email" v-model="email" /><br />
			<input type="checkbox" id="fav" :checked="isFavorito" /><label for="fav"
				>Favorito</label
			><br />
			<button @click.prevent="addPersona">Añadir</button>
		</form>
	</div>
</template>

<style>
.hidden {
	display: none;
}
</style>
