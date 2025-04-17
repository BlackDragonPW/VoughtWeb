<template>
  <div>
    <h2>Login</h2>
    <input v-model="email" type="email" placeholder="Enter Email (not original)" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="login">Login</button>
    <p>Don't have an account? <a @click="$router.push('/signup')">Sign up</a></p>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      const auth = getAuth();
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push('/home');
      } catch (err) {
        alert(err.message);
      }
    }
  }
};
</script>