<template>
  <div class="entregar">
    <h2>Entrega de balones a Cliente.</h2>
    <Inputs type="number" name="traking">Numero de traking</Inputs>
    <Inputs type="text" name="paciente">Nombre del Paciente</Inputs>
    <ItemList
      v-for="n in 3"
      :key="n"
      serial="123456"
      cliente="Wladimir Perez"
    />
    <Buttons>Entregar</Buttons>
  </div>
</template>

<script>
import Inputs from "@/components/Inputs.vue";
import ItemList from "@/components/ItemList.vue";
import Buttons from "@/components/Buttons.vue";

export default {
  name: "Entregar",
  components: {
    Inputs,
    ItemList,
    Buttons,
  },
};
</script>

<style scoped>
.entregar {
  width: 90%;
  margin: 0 auto;
  padding-top: 2rem;
  align-items: center;
}
</style>
