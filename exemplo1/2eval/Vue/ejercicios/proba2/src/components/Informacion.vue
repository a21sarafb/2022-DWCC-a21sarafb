<script>
export default {
	data() {
		return {};
	},
	props: {
		per: Object,
	},
};
</script>
<template>
	<div>
		<h3>{{ per.nombre }} {{ per.apellidos }}</h3>
		<p><b>Ano nacemento:</b> {{ per.ano_nacemento }}</p>
	</div>
</template>
