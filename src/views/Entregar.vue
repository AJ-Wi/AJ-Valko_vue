<template>
  <div class="entregar">
    <h2>Entrega de balones a Cliente.</h2>
    <BaseInput v-model="traking" name="traking" type="number">
      Numero de traking
    </BaseInput>
    <BaseInput v-model="nombre" name="nombre" type="text">
      Nombre del Paciente
    </BaseInput>
    <BaseCheckList
      v-for="n in 3"
      :key="n"
      itemid="123456"
      itemcontent="Wladimir Perez"
    />
    <BaseButton>Entregar</BaseButton>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";
import BaseCheckList from "@/components/BaseCheckList.vue";
import BaseButton from "@/components/BaseButton.vue";

export default {
  name: "Entregar",
  components: {
    BaseInput,
    BaseCheckList,
    BaseButton,
  },
  data() {
    return {
      traking: "",
      nombre: "",
    };
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
