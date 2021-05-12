<template>
  <div class="recepcion">
    <BaseInput v-model="dni" name="dni" type="number">
      DNI del Cliente
    </BaseInput>
    <BaseInput v-model="nombre" name="nombre" type="text">
      Nombre del Paciente
    </BaseInput>
    <BaseInput v-model="telefono" name="telefono" type="tel">
      Telefono
    </BaseInput>
    <BaseInput v-model="autorizador" name="autorizador" type="text">
      Quien autoriza
    </BaseInput>
    <BaseInput v-model="serial" name="serial" type="text">
      Serial del balon
    </BaseInput>
    <BaseInput v-model="marca" name="marca" type="text">
      Marca del balon
    </BaseInput>
    <ToggleMode text="true" @value="tulipa = $event">Tulipa</ToggleMode>
    <ToggleMode text="true" val1="8" val2="10" @value="capacidad = $event"
      >Capacidad
    </ToggleMode>
    <BaseButton @click="saveRegister">Guardar</BaseButton>
    <BaseButton @click="addBalon">Añadir balon</BaseButton>
    <BaseList
      v-for="n in balones"
      :key="n.serial"
      :itemid="n.serial"
      :itemcontent="n.marca"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ToggleMode from "@/components/ToggleMode.vue";
import BaseList from "@/components/BaseList.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";

export default {
  name: "Recepcion",
  components: {
    ToggleMode,
    BaseList,
    BaseButton,
    BaseInput,
  },
  data() {
    return {
      dni: "",
      nombre: "",
      telefono: "",
      autorizador: "",
      serial: "",
      marca: "",
      tulipa: "",
      capacidad: "",
      balones: [],
      clientesDB: "",
      balonesDB: "",
    };
  },
  methods: {
    ...mapActions(["getBalones"]),
    async getFetch() {
      let ruta = "http://192.168.100.36:5555/APIs/AJ-dev-api/v1/clientes";
      const options = {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: "769fb7afe1e40d4bbbabf39905a4865d",
        },
      };
      const response = await this.executeFetch(ruta, options);
      if (response["status_id"] === "200") {
        this.clientesDB = response.response;
      }
    },
    addBalon() {
      if (this.serial !== "") {
        this.balones.push({
          serial: this.serial,
          marca: this.marca,
          tulipa: this.tulipa,
          capacidad: this.capacidad,
        });
        this.serial = "";
        this.marca = "";
      }
    },
    saveRegister() {
      //guardar registro en la bbdd
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
