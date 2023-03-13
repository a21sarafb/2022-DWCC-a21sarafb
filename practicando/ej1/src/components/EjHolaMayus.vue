<script>
export default {
	data() {
		return {
			texto: "hola mundo",
			mayuscula: false,
		};
	},
	methods: {
		mayus() {
			this.texto = !this.mayuscula
				? this.texto.toUpperCase()
				: this.texto.toLowerCase();
			this.mayuscula = !this.mayuscula;
		},
		engadir() {
			this.texto = this.texto + "!";
		},
	},
};
</script>
<template>
	<p>{{ texto }}</p>
	<button @click="mayus">Change case</button>
	<button @click="engadir">Add character</button>
</template>
