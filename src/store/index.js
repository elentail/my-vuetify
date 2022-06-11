import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //theme: localStorage.getItem('theme'),
    favoriteDrawer: false,
  },
  getters: {
    getFavoriteDrawer: function (state) {
      return state.favoriteDrawer;
    },
  },
  mutations: {
    setFavoriteDrawer(state, payload) {
      state.favoriteDrawer = payload;
    },
  },
  actions: {},
  modules: {},
});
