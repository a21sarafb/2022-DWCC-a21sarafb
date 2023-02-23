Vue.createApp({
	data() {
		return {
			vidaMonstro: 100,
			vidaPersona: 100,
			jugando: true,
			numAccions: 0,
			rendicion: false,
			logs: [],
		};
	},
	computed: {
		vidaMonstroReal() {
			return this.vidaMonstro < 0 ? 0 : this.vidaMonstro;
		},
		vidaPersonaReal() {
			return this.vidaPersona < 0 ? 0 : this.vidaPersona;
		},
		ataqueEspecialDisponible() {
			return this.numAccions >= 3;
		},
		logsReordenados() {
			return this.logs.reverse();
		},
	},
	methods: {
		ataque() {
			let dañoMonstro = Math.floor(Math.random() * (12 - 5 + 1) + 5);
			this.vidaMonstro = this.vidaMonstro - dañoMonstro;
			this.logs.push({
				origen: "Persona",
				cantidad: dañoMonstro,
				tipo: "daño",
			});
			let dañoPersona = Math.floor(Math.random() * (15 - 8 + 1) + 8);
			this.vidaPersona = this.vidaPersona - dañoPersona;
			this.logs.push({
				origen: "Monstro",
				cantidad: dañoPersona,
				tipo: "daño",
			});
			this.numAccions++;
		},
		ataqueEspecial() {
			this.numAccions = 0;
			let dañoMonstro = Math.floor(Math.random() * (25 - 10 + 1) + 10);
			this.vidaMonstro = this.vidaMonstro - dañoMonstro;
			this.logs.push({
				origen: "Persona",
				cantidad: dañoMonstro,
				tipo: "daño",
			});
			let dañoPersona = Math.floor(Math.random() * (15 - 8 + 1) + 8);
			this.vidaPersona = this.vidaPersona - dañoPersona;
			this.logs.push({
				origen: "Monstro",
				cantidad: dañoPersona,
				tipo: "daño",
			});
			this.numAccions++;
		},
		curacion() {
			let curacion = Math.floor(Math.random() * (20 - 8 + 1) + 8);
			this.vidaPersona =
				this.vidaPersona + curacion > 100 ? 100 : this.vidaPersona + curacion;
			this.logs.push({
				origen: "Persona",
				cantidad: curacion,
				tipo: "curacion",
			});
			let dañoPersona = Math.floor(Math.random() * (15 - 8 + 1) + 8);
			this.vidaPersona = this.vidaPersona - dañoPersona;
			this.logs.push({
				origen: "Monstro",
				cantidad: dañoPersona,
				tipo: "daño",
			});
			this.numAccions++;
		},
		reiniciar() {
			this.vidaMonstro = 100;
			this.vidaPersona = 100;
			this.jugando = true;
			this.numAccions = 0;
			this.rendicion = false;
			this.logs = [];
		},
		rendirse() {
			this.rendicion = true;
			this.jugando = false;
		},
	},
	watch: {
		vidaMonstro() {
			if (this.vidaMonstro <= 0) {
				this.jugando = false;
			}
		},
		vidaPersona() {
			if (this.vidaPersona <= 0) {
				this.jugando = false;
			}
		},
	},
}).mount("#data");
