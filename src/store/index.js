import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      countSend: 0,
      serialSend: [],
      dateNow: "",
      dataSet: [],
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
      state.dateNow = f;
    },
    fillData(state, data) {
      state.dataSet = data;
    },
    clearDataSet(state) {
      state.dataSet = [];
    },
  },
  actions: {
    async getFetch({ commit }, ruta) {
      let url = `http://localhost:5555/APIs/AJ-dev-api/v1/${ruta}`;
      const requestOptions = {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: "769fb7afe1e40d4bbbabf39905a4865d",
        },
      };
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      commit("fillData", data);
    },
    async postFetch({ commit }, options) {
      let url = `http://localhost:5555/APIs/AJ-dev-api/v1/${options.ruta}`;
      const requestOptions = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "769fb7afe1e40d4bbbabf39905a4865d",
        },
        body: JSON.stringify(options.body),
      };
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      commit("fillData", data);
    },
    formatDate({ commit }, f) {
      let now = f;
      const newDate = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
      commit("updateDate", newDate);
    },
    clearDataSet({ commit }) {
      commit("clearDataSet");
    },
    resetSend({ commit }) {
      commit("resetSend");
    },
  },
  modules: {},
});
