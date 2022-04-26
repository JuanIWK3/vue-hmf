import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import Signup from '../pages/Signup.vue';
import Movie from '../pages/Movie.vue';
import Profile from '../pages/Profile.vue';
import Search from '../pages/Search.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup', name: 'Signup', component: Signup },
  { path: '/movies/:id', name: 'Movie', component: Movie },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/search', name: 'Search', component: Search },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const isLogged = localStorage.getItem('auth') == 'true';

router.beforeEach(async (to) => {
  if (!isLogged && to.name == 'Profile') {
    return '/login';
  }
});

export default router;
