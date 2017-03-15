import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutation-types';
import * as actions from './actions';
import * as getters from './getters';
// import home from './modules/home';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isDesktop: false,
    navigationOpen: false,
    searchOpen: false
  },
  actions,
  getters,
  mutations: {
    /* eslint no-param-reassign: ["error", { "props": false }] */
    /* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
    [types.RENDER_DESKTOP_NAVIGATION](state) {
      state.isDesktop = true;
    },
    [types.RENDER_MOBILE_NAVIGATION](state) {
      state.isDesktop = false;
    }
  }
  // modules: {
  //   home
  // }
});

export default store;
