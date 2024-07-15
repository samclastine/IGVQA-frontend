import { createStore } from 'vuex';
import authModule from "./auth/index";

export default createStore({
  state: {
    csvData: [],
    Fdata: [],
  },
  getters: {
    getCSVData: (state) => state.csvData,
    getFData: (state) => state.Fdata, // Corrected getter name
  },
  mutations: {
    setCSVData(state, data) {
      state.csvData = data;
    },
    setFData(state, newData) { // Corrected mutation name
      state.Fdata = newData;
    },
  },
  actions: {
    loadCSVData({ commit }, csvData) {
      // You can perform any necessary parsing or processing of the CSV data here before storing it
      commit('setCSVData', csvData);
    },
    updateData({ commit }, newData) { // Corrected mutation name
      commit('setFData', newData); // Corrected mutation name
    },
  },
  modules: {
    authModule
  },
});
