import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '../views/Home.vue';
import FoodView from '../views/Food.vue';
import TravelView from '../views/Travel.vue';
import CultureView from '../views/Culture.vue';
import HistoryView from '../views/History.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: HomeView },
    { path: '/food', component: FoodView },
    { path: '/travel', component: TravelView },
    { path: '/culture', component: CultureView },
    { path: '/history', component: HistoryView },
  ],
});
