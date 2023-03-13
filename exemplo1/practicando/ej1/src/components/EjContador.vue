<script>
export default {
	data() {
		return {
			texto: "Pulsame",
			cont: 0,
		};
	},
	methods: {
		contador() {
			this.cont++;
		},
	},
};
</script>
<template>
	<p>{{ texto }}</p>
	<button @click="contador">{{ cont }}</button>
</template>
