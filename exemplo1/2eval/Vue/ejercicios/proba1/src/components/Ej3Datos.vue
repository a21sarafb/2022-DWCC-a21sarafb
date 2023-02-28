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
			isHidden: true,
		};
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
		<h3>{{ persona.nombre }} {{ persona.apellidos }}</h3>
		<button @click="changeVisivility">{{ textoMostrar }}</button>
		<div :class="{ hidden: isHidden }">
			<p><b>Telefono:</b> {{ persona.telefono }}</p>
			<p><b>Correo:</b> {{ persona.correo }}</p>
		</div>
	</div>
</template>

<style>
.hidden {
	display: none;
}
</style>
