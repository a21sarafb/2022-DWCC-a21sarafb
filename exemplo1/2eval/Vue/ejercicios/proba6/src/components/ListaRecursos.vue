<script>
import Recurso from "./Recurso.vue";
export default {
  data() {
    return {};
  },
  props: {
    listaRecursos: Array,
  },
  components: { Recurso },
};
</script>
<template>
  <div v-for="recurso in listaRecursos" :key="recurso.id">
    <Recurso :id="recurso.id">
      <template #id>ID: {{ recurso.id }}</template>
      <template #titulo>Titulo: {{ recurso.titulo }}</template>
      <template #descripcion>Desc: {{ recurso.descripcion }}</template>
      <template #link><a :href="recurso.link">Enlace</a></template>
    </Recurso>
  </div>
</template>

<style scoped></style>