<script>
export default {
	data() {
		return {
			isHidden: true,
		};
	},
	props: {
		datos: Object,
	},
	computed: {
		textoMostrar() {
			return this.isHidden ? "Mostrar Detalles" : "Ocultar Detalles";
		},
	},
	methods: {
		changeVisivility() {
			this.isHidden = !this.isHidden;
		},
	},
};
</script>
<template>
	<div>
		<h3>{{ datos.nombre }} {{ datos.apellidos }}</h3>
		<button @click="changeVisivility">{{ textoMostrar }}</button>
		<div :class="{ hidden: isHidden }">
			<p><b>Telefono:</b> {{ datos.telefono }}</p>
			<p><b>Correo:</b> {{ datos.correo }}</p>
		</div>
	</div>
</template>

<style>
.hidden {
	display: none;
}
</style>
