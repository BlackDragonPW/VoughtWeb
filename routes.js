import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Signup from './pages/Signup.vue';
import Recruit from './pages/Recruit.vue';

export default [
  { path: '/', component: Recruit },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/home', component: Home }
];