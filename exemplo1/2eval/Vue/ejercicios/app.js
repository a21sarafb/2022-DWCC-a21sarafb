function numAleatorio(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
Vue.createApp({
	data() {
		return {
			vidaPersoa: 100,
			vidaMonstruo: 100,
			numXogada: 0,
			xogo: true,
			rendicion: false,
			logs: [],
		};
	},
	computed: {
		vidaMonst() {
			return this.vidaMonstruo < 0 ? 0 : this.vidaMonstruo;
		},
		vidaPers() {
			return this.vidaPersoa < 0 ? 0 : this.vidaPersoa;
		},
		ataqueEspecialActivado() {
			return this.numXogada >= 3;
		},
	},
	methods: {
		ataque() {
			let ataquePersoa = numAleatorio(5, 12);
			this.vidaMonstruo -= ataquePersoa;
			let ataqueMonstruo = numAleatorio(8, 15);
			this.vidaPersoa -= ataqueMonstruo;
			this.numXogada++;
		},
		ataqueEspecial() {
			this.numXogada = 0;
			let ataquePersoa = numAleatorio(10, 25);
			this.vidaMonstruo -= ataquePersoa;
			let ataqueMonstruo = numAleatorio(8, 15);
			this.vidaPersoa -= ataqueMonstruo;
			this.numXogada++;
		},
		curacion() {
			let curacionP = numAleatorio(8, 20);
			let cura = this.vidaPersoa + curacionP;
			if (cura < 100) {
				this.vidaPersoa += curacionP;
			}
			let ataqueCura = numAleatorio(8, 15);
			this.vidaPersoa -= ataqueCura;
			this.numXogada++;
		},
		rendirse() {
			this.rendicion = true;
			this.xogo = false;
		},
		reiniciar() {
			this.vidaPersoa = 100;
			this.vidaMonstruo = 100;
			this.numXogada = 0;
			this.xogo = true;
			this.rendicion = false;
			this.logs = [];
		},
	},
	watch: {
		vidaMonstruo() {
			if (this.vidaMonstruo <= 0) {
				this.xogo = false;
			}
		},
		vidaPersoa() {
			if (this.vidaPersoa <= 0) {
				this.xogo = false;
			}
		},
	},
}).mount("#game");
