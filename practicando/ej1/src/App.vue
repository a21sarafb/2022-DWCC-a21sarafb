<script>
import hola from "./components/EjHolaMayus.vue";
import contador from "./components/EjContador.vue";
import lista from "./components/EjLista.vue";
import lista2 from "./components/EjLista2.vue";
export default {
	data() {
		return {
			listado: [
				{
					id: 1,
					nombre: "Sara",
					apellidos: "Facal Boullosa",
					telefono: "123456789",
					correo: "a21sarafb@iessanclemente.net",
					visible: true,
				},
				{
					id: 2,
					nombre: "Paula",
					apellidos: "Gonu Insua",
					telefono: "987654321",
					correo: "a22paulagi@iessanclemente.net",
					visible: false,
				},
			],
		};
	},
	components: {
		hola,
		contador,
		lista,
		lista2,
	},
};
</script>

<template>
	<hola />
	<contador />
	<contador />
	<contador />
	<lista />
	<p>Ej4</p>
	<h2>Listado V2</h2>
	<lista2 v-for="persona in listado" :key="persona.id" :datos="persona">
	</lista2>
</template>
