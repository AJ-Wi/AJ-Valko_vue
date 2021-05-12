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
    <BaseButton :disabled="disabled" @click="postFetch">
      {{ operacion }}
    </BaseButton>
  </div>
</template>
<script>
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
      localState: "enviar",
    };
  },
  computed: {
    countSend() {
      return this.$store.state.countSend;
    },
    serialSend() {
      return this.$store.state.serialSend;
    },
    dateNow() {
      this.$store.commit("updateDate", new Date());
      return this.$store.state.dateNow;
    },
  },
  mounted() {
    this.$store.commit("resetSend");
    this.getFetch();
  },
  updated() {
    this.updateState();
  },
  methods: {
    updateState() {
      if (this.operacion != this.localState) {
        this.$store.commit("resetSend");
        this.getFetch();
        this.localState = this.operacion;
      }
      if (this.countSend > 0) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    async getFetch() {
      let ruta = "";
      if (this.operacion === "enviar") {
        this.title = `${this.operacion} balones a planta: `;
        ruta = "/recepcion";
      } else if (this.operacion === "recibir") {
        this.title = `${this.operacion} balones de planta: `;
        ruta = "/enviar";
      }
      const requestOptions = {
        method: "get",
      };
      const response = await this.executeFetch(ruta, requestOptions);
      if (response["status_id"] === "200") {
        this.data = response.response;
      } else {
        this.title = "ERROR";
        this.data = [
          {
            serial: response["status_id"],
            nombre: response.response,
          },
        ];
        this.disabled = true;
        this.error = true;
      }
    },
    async postFetch() {
      this.$store.commit("updateDate", new Date());
      //console.log(this.dateNow);
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
      const requestOptions = {
        method: "POST",
        body: JSON.stringify(postBody),
      };
      const response = await this.executeFetch("/relationship", requestOptions);
      if (response["status_id"] === "201") {
        this.$store.commit("resetSend");
        this.getFetch();
      }
    },
    async executeFetch(ruta, requestOptions) {
      let url = `http://192.168.100.36:5555/APIs/AJ-dev-api/v1/movimientos${ruta}`;
      requestOptions["headers"] = {
        "Content-Type": "application/json",
        Authorization: "769fb7afe1e40d4bbbabf39905a4865d",
      };
      //console.log(url, requestOptions);
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      return data;
      //console.log(data);
    },
  },
};
</script>
