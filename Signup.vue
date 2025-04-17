<template>
  <div>
    <h2>Sign Up</h2>
    <input v-model="email" type="email" placeholder="Enter Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <input v-model="nationId" placeholder="Nation ID" />
    <input v-model="playerName" placeholder="Player Name" />
    <input type="file" @change="handleFile" />
    <button @click="signup">Sign Up</button>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://ykcboeosacfhkybxaiwn.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrY2JvZW9zYWNmaGt5YnhhaXduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5MTE0MzksImV4cCI6MjA2MDQ4NzQzOX0.TkBJhjuzRux4iKx8gyOn7Y2QqLC-FnV4_alKaG5Kzfg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default {
  data() {
    return {
      email: '', password: '', nationId: '', playerName: '', profilePic: null
    };
  },
  methods: {
    handleFile(event) {
      this.profilePic = event.target.files[0];
    },
    async signup() {
      const auth = getAuth();
      try {
        const { user } = await createUserWithEmailAndPassword(auth, this.email, this.password);
        await supabase.from('users').insert({
          email: this.email,
          nation_id: this.nationId,
          player_name: this.playerName
        });
        this.$router.push('/home');
      } catch (err) {
        alert(err.message);
      }
    }
  }
};
</script>