<script>
export default {
	data() {
		return {
			cont: 0,
		};
	},
};
</script>

<template>
	<div>
		<p>{{ cont }}</p>
		<button @click="cont++">Incrementar</button>
	</div>
</template>
