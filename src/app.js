import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import VueMaterial from 'vue-material';
// import 'vue-material/dist/vue-material.css';
import App from './App.vue';
import router from './router/index';
import store from './store';

import SiteHeader from './components/SiteHeader.vue';
import SiteNavigation from './components/SiteNavigation.vue';
import SiteMenu from './components/SiteMenu.vue';
import SiteSearch from './components/SiteSearch.vue';

sync(store, router);

Vue.use(VueMaterial);

Vue.component('site-header', SiteHeader);
Vue.component('site-navigation', SiteNavigation);
Vue.component('site-menu', SiteMenu);
Vue.component('site-search', SiteSearch);

const app = new Vue({
  router,
  store,
  ...App,
});

export { app, router, store };
