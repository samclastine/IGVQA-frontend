import { createStore } from 'vuex'

export default createStore({
  state: {
    csvData:[]
  },
  getters: {
    getCSVData: state => state.csvData
  },
  mutations: {
    setCSVData(state, data) {
      state.csvData = data;
    }
  },
  actions: {
    loadCSVData({ commit }, csvData) {
      // You can perform any necessary parsing or processing of the CSV data here before storing it
      commit('setCSVData', csvData);
    }
  },
  modules: {
  }
})
