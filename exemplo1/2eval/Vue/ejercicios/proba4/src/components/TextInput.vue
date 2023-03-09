<script>
export default {
	data() {
		return {
			text: "Texto de ejemplo",
		};
	},
};
</script>

<template>
	<div>
		<p>{{ text }}</p>
		<input type="text" v-model="text" />
	</div>
</template>
