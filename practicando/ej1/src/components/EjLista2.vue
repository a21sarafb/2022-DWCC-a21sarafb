<script>
export default {
	data() {
		return {
			visible: true,
		};
	},
	props: {
		datos: Object,
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
	<h3>{{ datos.nombre }} {{ datos.apellidos }}</h3>
	<button @click="changeVisivility">{{ textoBoton }}</button>
	<div :class="{ hidden: visible }">
		<p><b>Telefono:</b> {{ datos.telefono }}</p>
		<p><b>Correo:</b> {{ datos.correo }}</p>
	</div>
</template>

<style>
.hidden {
	display: none;
}
</style>
