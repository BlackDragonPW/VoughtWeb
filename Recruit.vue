<template>
  <div class="recruit">
    <div v-for="(slide, index) in slides" :key="index" v-show="index === currentSlide">
      <h2>{{ slide.title }}</h2>
      <ul>
        <li v-for="point in slide.points">{{ point }}</li>
      </ul>
    </div>
    <button @click="prevSlide">Previous</button>
    <button @click="nextSlide">Next</button>
    <button v-if="currentSlide >= slides.length - 1" @click="$router.push('/login')">Proceed to Login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        { title: "Why Vought?", points: ["Veteran leadership", "Elite alliance", "Growth focused"] },
        { title: "What We Offer", points: ["Optional Taxes", "Protection & Raiding", "Peaceful Growth"] },
        { title: "More Perks", points: ["Noob Friendly", "Fast Growth Grants", "Chill Raiding Policy"] },
        { title: "Join Us", points: ["Elite Nations Only", "Best Support", "Join the Journey"] }
      ]
    };
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.slides.length - 1) this.currentSlide++;
    },
    prevSlide() {
      if (this.currentSlide > 0) this.currentSlide--;
    }
  }
};
</script>