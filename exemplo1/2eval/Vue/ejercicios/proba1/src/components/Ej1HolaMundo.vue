<script>
export default {
	data() {
		return {
			texto: "hola mundo",
			mayus: false,
		};
	},
	methods: {
		toggleCase() {
			this.texto = !this.mayus ? this.texto.toUpperCase() : this.texto.toLowerCase();
			this.mayus = !this.mayus;
		},
		addCharacter() {
			this.texto = this.texto + "!";
		},
	},
};
</script>
<template>
	<p>{{ texto }}</p>
	<button @click="toggleCase">Change case</button>
	<button @click="addCharacter">Add character</button>
</template>
