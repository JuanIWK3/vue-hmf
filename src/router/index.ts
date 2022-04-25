import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import Signup from '../pages/Signup.vue';
import Movie from '../pages/Movie.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/login', name: 'login', component: Login },
  { path: '/signup', name: 'signup', component: Signup },
  { path: '/movies/:id', name: 'movie', component: Movie },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
