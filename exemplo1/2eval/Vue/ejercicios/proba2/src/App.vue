<script>
import Informacion from "./components/Informacion.vue";
import Formulario from "./components/Formulario.vue";
export default {
	data() {
		return {
			persona: {
				nombre: "Lucia",
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
	<Informacion :per="persona"></Informacion>
	<Formulario :per="persona"></Formulario>
</template>
