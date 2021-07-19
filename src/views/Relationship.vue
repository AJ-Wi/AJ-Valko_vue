<template>
  <div class="relationship">
    <h2>
      {{ title }} <span v-if="error === false">{{ countSend }}</span>
    </h2>
    <BaseCheckList
      v-for="n in data"
      :key="n.serial"
      :itemid="n.serial"
      :itemcontent="n.nombre"
    />
    <BaseButton :disabled="disabled" @click="postData">
      {{ operacion }}
    </BaseButton>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import BaseCheckList from "@/components/BaseCheckList.vue";
import BaseButton from "@/components/BaseButton.vue";
//al darle click a los balones en la seccion de recibir que aparesca un boton que de opcion a devolver en caso de equivocarse cuando uno los manda a planta.
export default {
  name: "Relationship",
  components: {
    BaseCheckList,
    BaseButton,
  },
  props: {
    operacion: {
      type: String,
      default: "enviar",
    },
  },
  data() {
    return {
      data: "",
      title: "",
      disabled: true,
      error: false,
      localState: "",
    };
  },
  computed: {
    ...mapState(["countSend", "serialSend", "dateNow", "dataSet"]),
  },
  mounted() {
    this.updateState();
  },
  updated() {
    this.updateState();
  },
  methods: {
    ...mapActions([
      "formatDate",
      "resetSend",
      "getFetch",
      "postFetch",
      "clearDataSet",
    ]),
    /*
     * funcion para actualizar el estado de la vista y mostrar o la vista de enviar o la de recibir balones de planta
     */
    updateState() {
      //la operacion se actualiza con el hash de la url y la comparo con el estado loca de la vista si es diferente hay que actualizar la vista.
      if (this.operacion != this.localState) {
        this.resetSend(); //aplicamos un reset del estado de la tienda
        this.localState = this.operacion; //actualizamos el estado de la vista
        if (this.operacion === "enviar") {
          this.title = `Balones para enviar a planta: `;
          this.getData("movimientos/recepcion"); //llamamos a la funcion getData para actualizar los datos a mostrar
        } else if (this.operacion === "recibir") {
          this.title = `Balones recividos de planta: `;
          this.getData("movimientos/enviar"); //llamamos a la funcion getData para actualizar los datos a mostrar
        }
      }
      if (this.countSend > 0) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    async getData(ruta) {
      await this.getFetch(ruta);
      if (this.dataSet["status_id"] === "200") {
        this.data = this.dataSet.response;
      } else {
        this.errorFetch(this.dataSet);
      }
      this.clearDataSet();
    },
    async postData() {
      this.formatDate(new Date());
      const postBody = [];
      this.serialSend.forEach((el) => {
        const resultado = this.data.find((reg) => reg.serial === el);
        postBody.push({
          dnicliente: resultado.dni,
          dniusuario: "14261751",
          serial: resultado.serial,
          fecha: this.dateNow,
          operacion: this.operacion,
          estado: "lleno",
        });
      });
      //console.log(postBody);
      await this.postFetch({
        ruta: "movimientos/relationship",
        body: postBody,
      });
      if (this.dataSet["status_id"] === "201") {
        this.localState = "";
        this.updateState();
      } else {
        this.errorFetch(this.dataSet);
      }
      this.clearDataSet();
    },
    errorFetch(params) {
      this.title = "ERROR";
      this.data = [
        {
          serial: params["status_id"],
          nombre: params.response,
        },
      ];
      this.disabled = true;
      this.error = true;
    },
  },
};
</script>

<style scoped>
.relationship {
  width: 90%;
  margin: 0 auto;
  padding-top: 2rem;
  align-items: center;
}
</style>
