import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '../views/Home.vue';
import AboutView from '../views/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView }
  ]
});