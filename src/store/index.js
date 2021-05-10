import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      serialReception: [],
      countSend: 0,
      serialSend: [],
      recepcion: {
        dni: "",
        nombre: "",
        celular: "",
        autorizador: "",
        balones: [],
      },
      dateNow: "",
    };
  },
  mutations: {
    selectSend(state, $i) {
      if (!state.serialSend.includes($i)) {
        state.serialSend.push($i);
        state.countSend++;
      } else {
        state.serialSend.splice(state.serialSend.indexOf($i), 1);
        state.countSend--;
      }
    },
    listReception(state, $i) {
      state.serialReception.push($i);
    },
    resetSend(state) {
      state.countSend = 0;
      state.serialSend = [];
    },
    updateDate(state, f) {
      let now = new Date(f);
      state.dateNow = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    },
  },
  actions: {},
  modules: {},
});
