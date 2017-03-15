import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import router from './router/index'
import store from './store'

sync(store, router);

import SiteHeader from './components/SiteHeader.vue';
import SiteNavigation from './components/SiteNavigation.vue';
import SiteMenu from './components/SiteMenu.vue';
import SiteSearch from './components/SiteSearch.vue';

Vue.component('site-header', SiteHeader);
Vue.component('site-navigation', SiteNavigation);
Vue.component('site-menu', SiteMenu);
Vue.component('site-search', SiteSearch);

const app = new Vue({
  router,
  store,
  ...App
});

export { app, router, store };
