<script setup>
import { ref } from 'vue'
import TheIntro from './components/TheIntro.vue'
import TheNavigation from './components/TheNavigation.vue'

const opened = ref(false)
</script>

<template>
  <TheIntro v-show="!opened" @open="opened = true" />

  <TheNavigation v-show="opened" />

  <main v-show="opened">
    <section
      class="section-hero-2 gap-8 min-h-[100vh] flex flex-col items-center justify-center text-center"
    >
      <h1
        class="text-primary font-display text-7xl"
        style="text-shadow: rgba(0, 0, 0, 0.1) 2px 2px 0px"
      >
        Nanda &amp;<br />
        Egi
      </h1>

      <div class="space-y-4 flex flex-col items-center">
        <p class="px-4">
          Kami mengundang acara Ngunduh Mantu kami <br />
          Minggu, 28 April 2024
        </p>

        <div class="flex gap-4">
          <div
            class="font-medium bg-white/25 border-2 w-16 h-16 border-primary/50 rounded p-2 flex flex-col items-center justify-center"
          >
            <span class="text-xl font-bold">6</span>
            <span>Hari</span>
          </div>
          <div
            class="font-medium bg-white/25 border-2 w-16 h-16 border-primary/50 rounded p-2 flex flex-col items-center justify-center"
          >
            <span class="text-xl font-bold">18</span>
            <span>Jam</span>
          </div>
          <div
            class="font-medium bg-white/25 border-2 w-16 h-16 border-primary/50 rounded p-2 flex flex-col items-center justify-center"
          >
            <span class="text-xl font-bold">42</span>
            <span>Detik</span>
          </div>
        </div>
      </div>
    </section>

    <section id="mempelai" class="py-16 pt-10 px-5 relative overflow-hidden">
      <div class="mb-4 text-center">
        <h2 class="text-4xl text-primary">Mempelai</h2>

        <img class="absolute -left-8 top-2 w-28" src="/ornaments/gold-flower.png" alt="" />
        <img
          class="absolute -right-8 scale-x-[-1] top-2 w-28"
          src="/ornaments/gold-flower.png"
          alt=""
        />
      </div>

      <img
        src="/mempelai.webp"
        class="w-56 mb-8 mx-auto aspect-[3/4] rounded shadow-xl object-cover"
        alt=""
      />

      <div class="text-center flex flex-col gap-5">
        <div>
          <h2 class="font-semibold text-xl">Rezky Nanda, S.H.</h2>
          <p class="opacity-75 text-sm">Putra Bapak Ruslan, S.Pd. dan Ibu Trimurtiani, S.Pd.</p>
        </div>

        <p class="font-display text-6xl text-primary">&</p>

        <div>
          <h2 class="font-semibold text-xl">Egi Dian Saputri, S.H.</h2>
          <p class="opacity-75 text-sm">Putri Bapak Sasri dan Ibu Yusmawati</p>
        </div>
      </div>
    </section>

    <section id="acara" class="py-16 pb-24 px-5">
      <div class="mb-4">
        <h2 class="text-primary-foreground text-4xl">It's The Day</h2>
        <p class="text-primary-foreground/50">Minggu, 28 April 2024</p>
      </div>

      <div class="relative">
        <div class="bg-gradient-to-r from-primary to-primary-foreground rounded-xl p-5 text-white">
          <h2 class="font-display text-3xl mb-2">Ngunduh Mantu</h2>

          <div class="space-y-3">
            <div class="flex gap-2">
              <span class="material-symbols-outlined"> location_on </span>
              <p class="text-sm opacity-75">
                Gedung Balai Prajurit <br />
                Jl. Pembangunan No. 01, Padang Harapan, Kota Bengkulu
              </p>
            </div>

            <div class="flex gap-2">
              <span class="material-symbols-outlined"> schedule </span>
              <p class="text-sm opacity-75">Pukul 08:00 - Selesai</p>
            </div>
          </div>
        </div>

        <img
          class="w-16 absolute -top-6 -right-4"
          src="/ornaments/ornament-sun-flower.png"
          alt=""
        />
      </div>
    </section>

    <section class="min-h-[100vh] bg-primary py-16 flex flex-col items-center text-white">
      <h2 class="text-4xl">RSVP</h2>
      <p class="opacity-75">Your wish are very mean to us.</p>
    </section>
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
</style>
