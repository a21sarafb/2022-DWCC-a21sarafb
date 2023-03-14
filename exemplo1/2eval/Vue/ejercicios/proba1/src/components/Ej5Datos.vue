<script>
export default {
  data() {
    return {
      isHidden: true,
    };
  },
  props: {
    datos: Object,
  },
  computed: {
    textoMostrar() {
      return this.isHidden ? "Mostrar Detalles" : "Ocultar Detalles";
    },
    textoFavorito() {
      return this.datos.isFavorito ? "(Favorito)" : "";
    },
  },
  methods: {
    changeVisivility() {
      this.isHidden = !this.isHidden;
    },
    changeFavorito() {
      this.$emit("changeFavorito", this.datos.id);
    },
    removePersona() {
      this.$emit("removePersona", this.datos.id);
    },
  },
  emits: ["changeFavorito", "removePersona"],
};
</script>
<template>
  <div>
    <h3>{{ datos.nombre }} {{ datos.apellidos }} {{ textoFavorito }}</h3>
    <button @click="changeFavorito">Cambiar favorito</button>
    <button @click="changeVisivility">{{ textoMostrar }}</button>
    <button @click="removePersona">Eliminar</button>
    <div :class="{ hidden: isHidden }">
      <p><b>Telefono:</b> {{ datos.telefono }}</p>
      <p><b>Correo:</b> {{ datos.correo }}</p>
    </div>
  </div>
</template>

<style>
.hidden {
  display: none;
}
</style>