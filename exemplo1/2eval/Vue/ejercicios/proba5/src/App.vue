<script>
import Modal from "./components/Modal.vue";
export default {
  components: { Modal },
  data() {
    return {
      isHidden: true,
    };
  },
};
</script>

<template>
  <button @click="isHidden = !isHidden">Mostrar Modal</button>
  <Modal :class="{ hidden: isHidden }">
    <template #header> Header del padre </template>

    <template #main> </template>

    <template #footer> </template>

    <template #button>
      <button @click="isHidden = !isHidden">OK</button>
    </template>
  </Modal>
</template>

<style scoped>
.hidden {
  display: none;
}
</style>
