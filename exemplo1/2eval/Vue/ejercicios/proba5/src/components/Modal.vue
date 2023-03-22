<template>
  <div class="modal-mask">
    <div class="modal-container">
      <slot name="header">Defalut header content</slot>
      <br /><br />
      <slot name="main">Defalut main content</slot>
      <br /><br />
      <slot name="footer">Defalut footer content</slot>
      <br /><br />
      <div class="button">
        <slot name="button">Button</slot>
      </div>
    </div>
  </div>
</template>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(167, 3, 3, 0.5);
  display: flex;
}
.modal-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgb(255, 145, 0);
  border: 3px solid rgb(255, 230, 0);
  text-align: left;
}
.button {
  text-align: right;
}
</style>
