<template>
  <button type="button" class="btn"><slot></slot></button>
</template>

<script>
export default {
  name: "Buttons",
  data() {
    return {};
  },
  props: ["value"],
  methods: {
    enviar() {
      //prevent default
    },
  },
};
</script>

<style scoped>
.btn {
  width: 40%;
  height: 3rem;
  background-color: #008afc;
  border-color: #67bd31;
  border-radius: 10px;
  font-weight: 900;
  font-size: 1rem;
}
</style>
