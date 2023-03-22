<script> export default {
	data() {
		return {};
	},
	props: ["modelValue", "selection"],
	emits: ["update:modelValue"],
	methods: {
		seleccionar(e) {
			this.$emit("update:modelValue", e.target.textContent);
			console.log(e.target.textContent);
			console.log(e.target.id);
			if (!this.selection[`seleccionado${e.target.id}`]) {
				for (const property in this.selection) {
					this.selection[property] = false;
				}
				this.selection[`seleccionado${e.target.id}`] = true;
			}
		},
	},
};
</script>
<template>
	<ul>
		<li>
			<button type="button" @click="seleccionar" :class="{ seleccionado: selection.seleccionado1 }" id="1"> Baixo </button>
		</li>
		<li>
			<button type="button" @click="seleccionar" :class="{ seleccionado: selection.seleccionado2 }" id="2"> Medio </button>
		</li>
		<li>
			<button type="button" @click="seleccionar" :class="{ seleccionado: selection.seleccionado3 }" id="3"> Alto </button>
		</li>
	</ul>
</template>
<style scoped>
.seleccionado {
	border-color: rgb(255, 181, 193);
	background: rgb(236, 101, 124);
}
ul {
	display: flex;
	gap: 10px;
}
li {
	list-style: none;
}

</style>
