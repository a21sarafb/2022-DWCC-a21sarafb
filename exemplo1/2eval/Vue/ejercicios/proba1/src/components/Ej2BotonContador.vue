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
	<button @click="cont++">{{ cont }}</button>
</template>
