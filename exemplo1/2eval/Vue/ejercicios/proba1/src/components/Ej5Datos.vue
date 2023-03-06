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
		favorito() {
			return this.datos.isFavorito ? "(Favorito)" : "";
		},
	},
	methods: {
		ocultar() {
			this.isHidden = !this.isHidden;
		},
		cambioFavorito() {
			this.$emit("changeFavorito", this.datos.id);
		},
	},
	emits: ["changeFavorito"],
};
</script>
<template>
	<div>
		<h3>{{ datos.nombre }} {{ datos.apellidos }} {{ favorito }}</h3>
		<button @click="cambioFavorito">Cambiar favorito</button>
		<button @click="ocultar">{{ textoMostrar }}</button>
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
