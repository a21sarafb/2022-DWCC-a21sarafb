<script>
import Ej1HolaMundo from "./components/Ej1HolaMundo.vue";
import Ej2BotonContador from "./components/Ej2BotonContador.vue";
import Ej3Datos from "./components/Ej3Datos.vue";
import HelloWorld from "./components/HelloWorld.vue";
export default {
	// Escribir as opcións do compoñente: data, methods, watch, ...
	data() {
		return {
			count: 0,
		};
	},
	components: {
		Ej1HolaMundo,
		Ej2BotonContador,
		Ej3Datos,
		HelloWorld,
	},
};
</script>

<template>
	<div>
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div>
	<br />
	<br />
	<div class="ej">
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
	<br />
	<br />
	<button @click="count++">You clicked me {{ count }} times.</button>
	<HelloWorld />
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
