<script>
import Contador from "./components/Contador.vue";
import TextInput from "./components/TextInput.vue";
export default {
	components: { Contador, TextInput },
	data() {
		return {
			currentComponent: "Contador",
			compList: ["Contador", "TextInput"],
		};
	},
};
</script>

<template>
	<div v-for="comp in compList" id="contenedor">
		<input
			type="radio"
			name="component"
			:key="comp"
			@click="currentComponent = comp"
			:checked="currentComponent == comp"
		/>
		<label>{{ comp }}</label>
	</div>
	<KeepAlive>
		<component :is="currentComponent" />
	</KeepAlive>
</template>

<style scoped>
#contenedor {
	display: inline-block;
}
</style>
