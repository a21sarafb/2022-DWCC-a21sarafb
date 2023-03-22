<script>
import Modal from "./Modal.vue";
export default {
  data() {
    return {
      titulo: "",
      descripcion: "",
      link: "",
      isHidden: true,
    };
  },
  methods: {
    resetDatos() {
      this.titulo = "";
      this.descripcion = "";
      this.link = "";
    },
  },
  components: { Modal },
  inject: ["addRecursos"],
};
</script>
<template>
  <form>
    <label for="titulo">Titulo:</label>
    <input type="text" name="titulo" id="titulo" v-model="titulo" />

    <label for="descripcion">Descripcion:</label>
    <input
      type="text"
      name="descripcion"
      id="descripcion"
      v-model="descripcion"
    />

    <label for="link">Link:</label>
    <input type="text" name="link" id="link" v-model="link" />

    <button
      @click.prevent="
        if (this.titulo == '' || this.descripcion == '' || this.link == '') {
          this.isHidden = false;
        } else {
          addRecursos(this.titulo, this.descripcion, this.link);
          resetDatos();
          currentTab = 'ListaRecursos';
        }
      "
    >
      Añadir
    </button>
    <Teleport to="body">
      <Modal :class="{ hidden: isHidden }">
        <template #body>Nigún campo puede estar vacío!</template><br />
        <template #button
          ><button @click.prevent="isHidden = !isHidden">
            De acuerdo
          </button></template
        ></Modal
      >
    </Teleport>
  </form>
</template>

<style scoped>
form {
  border: 2px solid black;
  width: 30%;
  padding: 5px;
  display: grid;
  gap: 5px;
  margin-left: auto;
  margin-right: auto;
}
.hidden {
  display: none;
}
</style>