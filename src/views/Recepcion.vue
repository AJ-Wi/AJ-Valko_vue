<template>
  <div class="recepcion">
    <BaseInput
      v-model="newData.dni"
      name="dni"
      type="number"
      @focusout="searchCliente"
    >
      DNI del Cliente
    </BaseInput>
    <BaseInput v-model="newData.nombre" name="nombre" type="text">
      Nombre del Paciente
    </BaseInput>
    <BaseInput v-model="newData.telefono" name="telefono" type="tel">
      Telefono
    </BaseInput>
    <BaseInput v-model="newData.autorizador" name="autorizador" type="text">
      Quien autoriza
    </BaseInput>
    <BaseInput
      v-model="serial"
      name="serial"
      type="text"
      @focusout="searchBalon"
    >
      Serial del balon
    </BaseInput>
    <BaseInput v-model="marca" name="marca" type="text">
      Marca del balon
    </BaseInput>
    <ToggleMode text="true" @value="tulipa = $event">Tulipa</ToggleMode>
    <ToggleMode text="true" val1="8" val2="10" @value="capacidad = $event"
      >Capacidad
    </ToggleMode>
    <BaseButton @click="postData">Guardar</BaseButton>
    <BaseButton @click="addBalon">Añadir balon</BaseButton>
    <BaseList
      v-for="n in newData.balones"
      :key="n.serial"
      :itemid="n.serial"
      :itemcontent="n.marca"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
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
      newData: {
        dni: "",
        nombre: "",
        telefono: "",
        autorizador: "",
        balones: [],
      },
      dni: "",
      nombre: "",
      telefono: "",
      autorizador: "",
      serial: "",
      marca: "",
      tulipa: "",
      capacidad: "",
      dniUser: "",
      balones: [],
      clientesDB: "",
      balonesDB: "",
    };
  },
  computed: {
    ...mapState(["dateNow", "dataSet"]),
  },
  mounted() {
    this.getClientes();
    this.getBalones();
  },
  methods: {
    ...mapActions(["formatDate", "getFetch", "postFetch", "clearDataSet"]),
    addBalon() {
      if (this.serial !== "") {
        this.newData.balones.push({
          serial: this.serial,
          marca: this.marca,
          tulipa: this.tulipa,
          capacidad: this.capacidad,
        });
        this.serial = "";
        this.marca = "";
      }
    },
    async postData() {
      this.formatDate(new Date());
      this.newData.dniUser = "14261751";
      this.newData.fecha = this.dateNow;
      await this.postFetch({
        ruta: "movimientos/recepcion",
        body: this.newData,
      });
      if (this.dataSet["status_id"] !== "201") {
        this.errorFetch(this.dataSet);
      }
      this.clearDataSet();
    },
    async getClientes() {
      await this.getFetch("clientes");
      if (this.dataSet["status_id"] === "200") {
        this.clientesDB = this.dataSet.response;
      }
      this.clearDataSet();
    },
    async getBalones() {
      await this.getFetch("balones");
      if (this.dataSet["status_id"] === "200") {
        this.balonesDB = this.dataSet.response;
      }
      this.clearDataSet();
    },
    searchCliente() {
      this.clientesDB.forEach((el) => {
        if (this.newData.dni === el.dni) {
          this.newData.nombre = el.nombre;
          this.newData.telefono = el.telefono;
          this.newData.autorizador = el.autorizador;
        }
      });
    },
    searchBalon() {
      this.balonesDB.forEach((el) => {
        if (this.serial === el.serial) {
          this.marca = el.marca;
        }
      });
    },
    errorFetch(params) {
      this.title = "ERROR";
      this.data = [
        {
          serial: params["status_id"],
          nombre: params.response,
        },
      ];
    },
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
