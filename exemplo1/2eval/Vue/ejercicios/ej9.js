Vue.createApp({
	data() {
		return {
			tarefa: true,
			tarefas: "Lavar a roupa",
		};
	},
	methods: {
		hayTarefa() {
			if (this.tarefas === "") {
				this.tarefa = !this.tarefa;
			}
		},
	},
}).mount("#data");
