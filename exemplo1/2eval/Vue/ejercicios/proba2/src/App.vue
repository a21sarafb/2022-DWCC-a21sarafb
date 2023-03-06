<script>
import Informacion from "./components/Informacion.vue";
import Formulario from "./components/Formulario.vue";
export default {
	data() {
		return {
			persona: {
				nombre: "Sara",
				apellidos: "Facal Boullosa",
				ano_nacemento: 2000,
			},
		};
	},
	components: {
		Informacion,
		Formulario,
	},
};
</script>

<template>
	<Informacion :persona="persona"></Informacion>
	<Formulario :persona="persona"></Formulario>
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
