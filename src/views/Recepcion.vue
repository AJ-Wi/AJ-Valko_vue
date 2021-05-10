<template>
  <div class="recepcion">
    <Inputs type="text" name="nombre">Nombre del Paciente</Inputs>
    <Inputs type="number" name="dni">DNI del Paciente</Inputs>
    <Inputs type="tel" name="celular">Telefono</Inputs>
    <Inputs type="text" name="autorizador">Quien autoriza</Inputs>
    <Inputs type="text" name="serial">Serial del balon</Inputs>
    <Inputs type="text" name="marca">Marca del balon</Inputs>
    <ToggleMode text="true">Tulipa</ToggleMode>
    <ToggleMode text="true" val1="8" val2="10">Capacidad</ToggleMode>
    <Buttons>Guardar</Buttons>
    <Buttons>añadir balon</Buttons>
    <button type="button" class="btn" @click="addBalon">nuevo balon</button>
    {{ balones }}
  </div>
</template>

<script>
import Inputs from "@/components/Inputs.vue";
import ToggleMode from "@/components/ToggleMode.vue";
import Buttons from "@/components/Buttons.vue";

export default {
  name: "Recepcion",
  components: {
    Inputs,
    ToggleMode,
    Buttons,
  },
  computed: {
    balones() {
      return this.$store.state.serialReception;
    },
  },
  methods: {
    addBalon() {
      this.$store.commit("listReception", "12345");
    },
  },
  /* Me traigo por fetch los datos de balones y clientes
  al escribir el nombre del cliente o su dni actualiza los inputs con los datos del cliente.
  y al escribir el serial del balon se rellenan los inputs con los datos del balon.
  */
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
