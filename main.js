import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { createRouter, createWebHashHistory } from "https://unpkg.com/vue-router@4.1.6/dist/vue-router.esm-browser.js";
import { createApp } from "https://unpkg.com/vue@3.2.31/dist/vue.esm-browser.js";
import App from './src/App.vue';
import routes from './src/routes.js';

const firebaseConfig = {
  apiKey: "AIzaSyDHrUcv8c6S04STttlQ8Ck02SuXdeM3psw",
  authDomain: "vought-international-eb8c7.firebaseapp.com",
  projectId: "vought-international-eb8c7",
  storageBucket: "vought-international-eb8c7.firebasestorage.app",
  messagingSenderId: "596496897354",
  appId: "1:596496897354:web:8605892781e81358fb9db3"
};

const appFirebase = initializeApp(firebaseConfig);
const auth = getAuth(appFirebase);

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');