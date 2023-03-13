<script>
export default {
	data() {
		return {
			persona: {
				nombre: "Sara",
				apellidos: "Facal Boullosa",
				telefono: 123456789,
				correo: "a21sarafb@iessanclemente.net",
			},
			visible: true,
		};
	},
	computed: {
		textoBoton() {
			return this.visible ? "Mostrar Detalles" : "Ocultar Detalles";
		},
	},
	methods: {
		changeVisivility() {
			this.visible = !this.visible;
		},
	},
};
</script>
<template>
	<h1>Listado</h1>
	<h3>{{ persona.nombre }} {{ persona.apellidos }}</h3>
	<button @click="changeVisivility">{{ textoBoton }}</button>
	<div :class="{ hidden: visible }">
		<p><b>Telefono:</b> {{ persona.telefono }}</p>
		<p><b>Correo:</b> {{ persona.correo }}</p>
	</div>
</template>

<style>
.hidden {
	display: none;
}
</style>
