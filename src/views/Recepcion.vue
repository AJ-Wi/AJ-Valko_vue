<template>
  <div class="recepcion">
    <Inputs type="text" name="paciente">Nombre del Paciente</Inputs>
    <Inputs type="number" name="DNI">DNI del Paciente</Inputs>
    <Inputs type="tel" name="celular">Telefono</Inputs>
    <Inputs type="text" name="autorizador">Quien autoriza</Inputs>
    <Inputs type="text" name="serial">Serial del balon</Inputs>
    <Inputs type="text" name="marca">Marca del balon</Inputs>
    <ToggleMode text="true">Tulipa</ToggleMode>
    <ToggleMode text="true" val1="8" val2="10">Capacidad</ToggleMode>
    <input type="button" value="Guardar" />
  </div>
</template>

<script>
import Inputs from "@/components/Inputs.vue";
import ToggleMode from "@/components/ToggleMode.vue";

export default {
  name: "Recepcion",
  components: {
    Inputs,
    ToggleMode,
  },
};
</script>

<style scoped>
.recepcion {
  width: 90%;
  margin: 0 auto;
  padding-top: 2rem;
  align-items: center;
}
</style>
