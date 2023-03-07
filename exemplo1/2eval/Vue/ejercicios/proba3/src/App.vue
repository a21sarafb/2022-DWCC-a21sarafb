<script>
import Ej1 from "./components/Ej1.vue";

export default {
	data() {
		return {
			nombre: "",
			apellidos: "",
			correo: "",
			modelValue: "",
			selection: {
				seleccionado1: false,
				seleccionado2: false,
				seleccionado3: false,
			},
		};
	},
	methods: {
		enviar() {
			console.log(`Nombre: ${this.nombre}`);
			console.log(`Apellidos: ${this.apellidos}`);
			console.log(`Correo: ${this.correo}`);
			console.log(`Nivel: ${this.modelValue}`);

			this.nombre = "";
			this.apellidos = "";
			this.correo = "";
			this.modelValue = "";

			for (const property in this.selection) {
				this.selection[property] = false;
			}
		},
	},
	components: {
		Ej1,
	},
};
</script>

<template>
	<form>
		<label for="nombre">Nombre:</label>
		<input type="text" name="nombre" id="nombre" v-model="nombre" />
		<br />
		<label for="apellidos">Apellidos:</label>
		<input type="text" name="apellidos" id="apellidos" v-model="apellidos" />
		<br />
		<label for="correo">Correo:</label>
		<input type="email" name="correo" id="correo" v-model="correo" />
		<br />
		<Ej1 v-model="modelValue" :selection="selection"></Ej1>
		<button @click.prevent="enviar">Enviar</button>
	</form>
</template>
