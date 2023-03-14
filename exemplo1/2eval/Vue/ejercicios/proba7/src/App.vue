<script>
import Lista from "./components/Lista.vue";
export default {
	components: { Lista, TextInput },
	data() {
		return {
			currentComponent: "Lista",
			compList: ["Lista", "TextInput"],
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