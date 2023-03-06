<script>
export default {
	data() {
		return {};
	},
	props: {
		persona: Object,
	},
};
</script>
<template>
	<div>
		<h3>{{ persona.nombre }} {{ persona.apellidos }}</h3>
		<p><b>Ano nacemento:</b> {{ persona.ano_nacemento }}</p>
	</div>
</template>
