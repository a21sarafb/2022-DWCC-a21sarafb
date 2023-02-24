function numAleatorio(max, min) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
Vue.createApp({
	data() {
		return {
			vidaMonstro: 100,
			vidaPersona: 100,
			xogo: true,
			numXogada: 0,
			rendicion: false,
			logs: [],
		};
	},
	computed: {
		vidaM() {
			return this.vidaMonstro < 0 ? 0 : this.vidaMonstro;
		},
		vidaXogador() {
			return this.vidaPersona < 0 ? 0 : this.vidaPersona;
		},
		ataqueEspecialDisponible() {
			return this.numXogada >= 3;
		},
		logsOrdenados() {
			return this.logs.reverse();
		},
	},
	methods: {
		ataque() {
			let ataqueXogador = numAleatorio(12, 5);
			this.vidaMonstro = this.vidaMonstro - ataqueXogador;
			this.logs.push({
				origen: "Persona",
				cantidad: ataqueXogador,
				tipo: "daño",
			});
			let ataqueMonstruo = numAleatorio(15, 8);
			this.vidaPersona = this.vidaPersona - ataqueMonstruo;
			this.logs.push({
				origen: "Monstro",
				cantidad: ataqueMonstruo,
				tipo: "daño",
			});
			this.numXogada++;
		},
		ataqueEspecial() {
			this.numXogada = 0;
			let ataqueXogador = numAleatorio(25, 10);
			this.vidaMonstro = this.vidaMonstro - ataqueXogador;
			this.logs.push({
				origen: "Persona",
				cantidad: ataqueXogador,
				tipo: "daño",
			});
			let ataqueMonstruo = numAleatorio(15, 8);
			this.vidaPersona = this.vidaPersona - ataqueMonstruo;
			this.logs.push({
				origen: "Monstro",
				cantidad: ataqueMonstruo,
				tipo: "daño",
			});
			this.numXogada++;
		},
		curacion() {
			let curacion = numAleatorio(20, 8);
			this.vidaPersona =
				this.vidaPersona + curacion > 100 ? 100 : this.vidaPersona + curacion;
			this.logs.push({
				origen: "Persona",
				cantidad: curacion,
				tipo: "curacion",
			});
			let ataqueMonstruo = numAleatorio(15, 8);
			this.vidaPersona = this.vidaPersona - ataqueMonstruo;
			this.logs.push({
				origen: "Monstro",
				cantidad: ataqueMonstruo,
				tipo: "daño",
			});
			this.numXogada++;
		},
		reiniciar() {
			this.vidaMonstro = 100;
			this.vidaPersona = 100;
			this.xogo = true;
			this.numXogada = 0;
			this.rendicion = false;
			this.logs = [];
		},
		rendirse() {
			this.rendicion = true;
			this.xogo = false;
		},
	},
	watch: {
		vidaMonstro() {
			if (this.vidaMonstro <= 0) {
				this.xogo = false;
			}
		},
		vidaPersona() {
			if (this.vidaPersona <= 0) {
				this.xogo = false;
			}
		},
	},
}).mount("#data");
