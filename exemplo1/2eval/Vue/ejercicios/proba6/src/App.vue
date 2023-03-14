<script>
import ListaRecursos from "./components/ListaRecursos.vue";
import AñadirRecurso from "./components/AñadirRecurso.vue";
export default {
  data() {
    return {
      listaRecursos: [
        {
          id: generateID(),
          titulo: "Google",
          descripcion: "Navegador web",
          link: "http://google.com",
        },
        {
          id: generateID(),
          titulo: "Youtube",
          descripcion: "Plataforma de video",
          link: "http://youtube.com",
        },
      ],
      currentTab: "ListaRecursos",
      tabs: ["ListaRecursos", "AñadirRecurso"],
    };
  },
  methods: {
    addRecursos(titulo, descripcion, link) {
      this.listaRecursos.push({
        id: generateID(),
        titulo: titulo,
        descripcion: descripcion,
        link: link,
      });
      this.currentTab = "ListaRecursos";
    },
    removeRecursos(idBorrado) {
      this.listaRecursos = this.listaRecursos.filter(
        (recurso) => recurso.id != idBorrado
      );
    },
  },
  provide() {
    return {
      addRecursos: this.addRecursos,
      removeRecursos: this.removeRecursos,
    };
  },
  components: { ListaRecursos, AñadirRecurso },
};
function generateID() {
  return Math.floor(Date.now() * Math.random());
}
</script>

<template>
  <header><h1>RECURSOS</h1></header>
  <main>
    <div>
      <div class="selector">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="currentTab = tab"
          class="btn"
        >
          {{ tab }}
        </button>
      </div>
      <KeepAlive>
        <component :is="currentTab" :lista-recursos="listaRecursos"></component>
      </KeepAlive>
    </div>
  </main>
</template>

<style scoped>
* {
  font-family: arial;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
header,
.selector {
  text-align: center;
  padding: 10px;
  background-color: black;
  color: white;
  margin: 2px;
}
.btn {
  margin: 2px;
  padding: 6px 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: white;
}
</style>