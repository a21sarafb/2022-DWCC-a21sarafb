<script>
export default {
  data() {
    return {};
  },
  props: {
    id: Number,
  },
  inject: ["removeRecursos"],
};
</script>

<template>
  <div class="recurso">
    <span class="id"><slot name="id"></slot></span>
    <span class="titulo"><slot name="titulo"></slot></span>
    <span class="descripcion"><slot name="descripcion"></slot></span>
    <span class="link"> <slot name="link"></slot></span>
    <span class="removeBtn"
      ><button @click.prevent="removeRecursos(this.id)">Eliminar</button></span
    >
  </div>
</template>

<style scoped>
.recurso {
  display: grid;
  text-align: center;
  border: 2px solid black;
  margin: 5px;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
}
</style>