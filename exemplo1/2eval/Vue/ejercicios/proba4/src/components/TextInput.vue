<script>
export default {
	data() {
		return {
			text: "Textoooo",
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
