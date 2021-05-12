import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      countSend: 0,
      serialSend: [],
      dateNow: "",
      balones: [],
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
    resetSend(state) {
      state.countSend = 0;
      state.serialSend = [];
    },
    updateDate(state, f) {
      let now = new Date(f);
      state.dateNow = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    },
    addBalones(state, getBalones) {
      state.balones = getBalones;
    },
  },
  actions: {
    async getBalones({ commit }, ruta) {
      let url = `http://192.168.100.36:5555/APIs/AJ-dev-api/v1/balones${ruta}`;
      const requestOptions = {
        method: "get",
      };
      requestOptions["headers"] = {
        "Content-Type": "application/json",
        Authorization: "769fb7afe1e40d4bbbabf39905a4865d",
      };
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      commit("addBalones", data);
    },
  },
  modules: {},
});
