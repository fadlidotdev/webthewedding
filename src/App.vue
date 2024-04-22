<script setup>
import { ref } from 'vue'

import TheIntro from './components/TheIntro.vue'
import TheNavigation from './components/TheNavigation.vue'
import TheRSVP from './components/TheRSVP.vue'
import TheCouple from './components/TheCouple.vue'
import TheEvents from './components/TheEvents.vue'
import ThePortraits from './components/ThePortraits.vue'
import TheWelcoming from './components/TheWelcoming.vue'
import TheStory from './components/TheStory.vue'
import TheFin from './components/TheFin.vue'
import TheCopyright from './components/TheCopyright.vue'

const opened = ref(false)

const audioPlayer = ref(null)
const isAudioPaused = ref(true)

function openInvitation() {
  opened.value = true
  audioPlayer.value.play()
  isAudioPaused.value = false
}

function toggleAudioPlayer() {
  isAudioPaused.value = !isAudioPaused.value
  if (audioPlayer.value.paused) {
    audioPlayer.value.play()
  } else {
    audioPlayer.value.pause()
  }
}
</script>

<template>
  <TheIntro v-show="!opened" @open="openInvitation" />

  <TheNavigation v-show="opened" />

  <audio ref="audioPlayer">
    <source src="/Shane-Filan-Beautiful-In-White-Official-Video.mp3" type="audio/mp3" />
  </audio>

  <button
    v-show="opened"
    :class="{
      'transition-all duration-500 fixed z-50 top-3 left-3 text-white bg-[#dcd1c2] flex items-center justify-center w-9 h-9 rounded-full': true,
      'animate-spin': !isAudioPaused
    }"
    @click="toggleAudioPlayer"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="w-5 h-5"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M6 12c0-1.7.7-3.2 1.8-4.2"></path>
      <circle cx="12" cy="12" r="2"></circle>
    </svg>
  </button>

  <main>
    <Transition
      enter-from-class="translate-y-full"
      enter-active-class="transition duration-1000"
      enter-to-class="translate-y-0"
    >
      <TheWelcoming v-if="opened" />
    </Transition>

    <template v-if="opened">
      <TheCouple />

      <TheEvents />
      <TheRSVP />

      <ThePortraits />

      <TheStory />

      <TheFin />

      <TheCopyright />
    </template>
  </main>
</template>

<style scoped>
.section-hero {
  background-image: linear-gradient(
      to right bottom,
      rgba(252, 250, 246, 0.9),
      rgba(209, 217, 223, 0.7)
    ),
    url(/hero.webp);
  padding: 4.8rem 0px 9.6rem;
  background-size: 400%;
  background-position: center;
}

.section-hero-2 {
  background-image: linear-gradient(
      to right bottom,
      rgba(252, 250, 246, 0.9),
      rgba(209, 217, 223, 0.7)
    ),
    url(/hero-2.webp);
  padding: 4.8rem 0px 9.6rem;
  background-size: cover;
  background-position: center;
}

.section-fin {
  background-image: linear-gradient(to right bottom, rgba(70, 37, 35, 0.9), rgba(151, 96, 63, 0.7)),
    url(/hero-2.webp);
  background-size: cover;
  background-position: center;
}
</style>
