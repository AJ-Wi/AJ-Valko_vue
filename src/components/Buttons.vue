<template>
  <button type="button" class="btn" @click="enviar"><slot></slot></button>
</template>

<script>
export default {
  name: "Buttons",
  data() {
    return {};
  },
  methods: {
    enviar() {
      console.log("click boton enviar");
      //prevent default
    },
  },
};
</script>

<style scoped>
.btn {
  width: 40%;
  height: 3rem;
  margin: 1rem 1rem;
  background-color: var(--bg-button);
  border-color: var(--second-color);
  color: var(--second-color);
  border-radius: 10px;
  font-weight: 900;
  font-size: 1rem;
  cursor: pointer;
}
</style>
