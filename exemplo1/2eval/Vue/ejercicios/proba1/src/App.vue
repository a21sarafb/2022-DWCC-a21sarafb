<script>
import Ej1HolaMundo from "./components/Ej1HolaMundo.vue";
import Ej2BotonContador from "./components/Ej2BotonContador.vue";
import Ej3Datos from "./components/Ej3Datos.vue";
//import HelloWorld from "./components/HelloWorld.vue";
import Ej4Datos from "./components/Ej4Datos.vue";
import Ej5Datos from "./components/Ej5Datos.vue";
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
					isFavorito: true,
				},
				{
					id: 2,
					nombre: "Paula",
					apellidos: "Gonu Insua",
					telefono: "987654321",
					correo: "a22paulagi@iessanclemente.net",
					isFavorito: false,
				},
			],
		};
	},
	computed: {
		maxId() {
			return this.listado.maxId();
		},
	},
	methods: {
		changeFavorito(id) {
			for (const persona of this.listado) {
				if (persona.id == id) {
					persona.isFavorito = !persona.isFavorito;
				}
			}
		},
	},
	components: {
		Ej1HolaMundo,
		Ej2BotonContador,
		Ej3Datos,
		Ej4Datos,
		Ej5Datos,
	},
};
</script>

<template>
	<!--<div class="ej">
		<p>Ej1</p>
		<Ej1HolaMundo />
	</div>
	<br />
	<br />
	<div class="ej">
		<p>Ej2</p>
		<Ej2BotonContador />
		<Ej2BotonContador />
		<Ej2BotonContador />
	</div>
	<br />
	<br />
	<div class="ej">
		<p>Ej3</p>
		<h2>Listado</h2>
		<Ej3Datos />
		<Ej3Datos />
	</div>

	<div class="ej">
		<p>Ej4</p>
		<h2>Listado V2</h2>
		<Ej4Datos v-for="persona in listado" :key="persona.id" :datos="persona">
		</Ej4Datos>
	</div>  -->
	<div class="ej">
		<p>Ej5</p>
		<h2>Listado</h2>
		<Ej5Datos
			v-for="persona in listado"
			:key="persona.id"
			:datos="persona"
			@change-favorito="changeFavorito"
		></Ej5Datos>
	</div>
	<br />
	<br />
</template>

<style scoped>
.ej {
	border: 1px solid black;
	border-radius: 25px;
	padding: 5px;
}
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
