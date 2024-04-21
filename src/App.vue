<script setup>
import { ref } from 'vue'
import TheIntro from './components/TheIntro.vue'
import TheNavigation from './components/TheNavigation.vue'
import TheRSVP from './components/TheRSVP.vue'
import TheCouple from './components/TheCouple.vue';
import TheEvents from './components/TheEvents.vue';
import ThePortraits from './components/ThePortraits.vue';
import TheWelcoming from './components/TheWelcoming.vue';

const opened = ref(false)
</script>

<template>
  <TheIntro v-show="!opened" @open="opened = true" />

  <TheNavigation v-show="opened" />

  <main v-show="opened">
    <TheWelcoming />

    <TheCouple />

    <TheEvents />

    <TheRSVP />

    <ThePortraits />
  </main>
</template>

<style scoped>
.section-hero {
  background-image: linear-gradient(to right bottom,
      rgba(252, 250, 246, 0.9),
      rgba(209, 217, 223, 0.7)),
    url(/hero.webp);
  padding: 4.8rem 0px 9.6rem;
  background-size: 400%;
  background-position: center;
}

.section-hero-2 {
  background-image: linear-gradient(to right bottom,
      rgba(252, 250, 246, 0.9),
      rgba(209, 217, 223, 0.7)),
    url(/hero-2.webp);
  padding: 4.8rem 0px 9.6rem;
  background-size: cover;
  background-position: center;
}
</style>
