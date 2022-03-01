import { createStore } from "vuex";

export default createStore({
  state: {
    contador: 180,
  },
  mutations: {
    incrementar(state, payload) {
      state.contador = state.contador + payload;
    },
    disminuir(state, payload) {
      state.contador = state.contador - payload;
    },
  },
  actions: {
    accionIncrementar({ commit }, numero) {
      commit("incrementar", numero);
    },
    accionDisminuir({ commit }, numero) {
      commit("disminuir", numero);
    },
    accionBoton({ commit }, objeto) {
      if (objeto.estado) {
        commit("incrementar", objeto.numero);
      } else {
        commit("disminuir", objeto.numero);
      }
    },
  },
  modules: {},
});
