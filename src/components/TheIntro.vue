<script setup>
import { onMounted, ref } from 'vue'

const name = ref()

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search)
  name.value = urlParams.get('name') ?? 'Guest'
})
</script>

<template>
  <section
    class="section-hero h-[100dvh] relative flex flex-col items-center justify-center overflow-hidden"
  >
    <div class="flex flex-col items-center gap-6 text-center">
      <h1
        class="text-6xl text-primary font-display"
        style="text-shadow: rgba(0, 0, 0, 0.1) 2px 2px 0px"
        data-aos="fade-down"
      >
        Nanda &amp; Egi
      </h1>

      <img
        src="/photo-1.webp"
        class="object-cover w-48 h-48 rounded-full shadow-xl aspect-square"
        data-aos="zoom-in"
        data-aos-delay="500"
      />

      <div
        class="flex flex-col w-3/4 gap-1 text-sm text-primary-foreground/60"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <p>Kepada Bapak/Ibu/Saudara/i</p>

        <h2 class="text-2xl font-semibold">{{ name }}</h2>

        <p>Kami Mengundang Anda Untuk Hadir di Acara Penikahan kami.</p>
      </div>

      <div
        class="absolute left-0 right-0 bottom-6"
        data-aos="fade-up"
        data-aos-delay="1000"
        data-aos-offset="0"
      >
        <button
          class="flex items-center h-10 px-4 mx-auto text-sm text-white border rounded-full shadow-xl bg-primary border-primary"
          @click="$emit('open')"
        >
          Buka Undangan
        </button>
      </div>
    </div>
  </section>
</template>
