<script setup>
import VueEasyLightbox from 'vue-easy-lightbox'
import { ref } from 'vue'

const visibleRef = ref(false)
const indexRef = ref(0) // default 0
const imgsRef = ref(['/1.webp', '/2.webp', '/3.webp', '/4.webp', '/5.webp'])

function hide() {
  visibleRef.value = false
}

function open(index) {
  visibleRef.value = true
  indexRef.value = index
}
</script>

<template>
  <VueEasyLightbox
    :visible="visibleRef"
    :imgs="imgsRef"
    :index="indexRef"
    @hide="hide"
  ></VueEasyLightbox>

  <section id="portraits" class="relative py-16 space-y-6 overflow-hidden">
    <div
      class="space-y-1 text-center"
      data-aos="fade-down"
      data-aos-delay="500"
      data-aos-offset="300"
    >
      <h2 class="text-4xl">Portraits of Us</h2>
    </div>

    <div
      class="flex flex-col w-3/4 gap-2 mx-auto"
      data-aos="zoom-in"
      data-aos-delay="500"
      data-aos-offset="300"
      data-aos-duration="750"
    >
      <img class="cursor-pointer aspect-[3/4] object-cover" src="/1.webp" @click="open(0)" />

      <div class="flex w-full gap-2">
        <img
          class="object-cover w-[65%] h-32 overflow-hidden cursor-pointer aspect-square"
          src="/2.webp"
          @click="open(3)"
        />
        <img
          class="object-cover w-[35%] h-32 overflow-hidden cursor-pointer aspect-square"
          src="/3.webp"
          @click="open(4)"
        />
      </div>

      <div class="flex gap-2">
        <img
          class="object-cover overflow-hidden cursor-pointer w-[50%] h-32"
          src="/4.webp"
          @click="open(3)"
        />
        <img
          class="object-cover overflow-hidden cursor-pointer w-[50%] h-32"
          src="/5.webp"
          @click="open(4)"
        />
      </div>
    </div>

    <img
      src="/ornaments/ornament-orange-flower.png"
      class="absolute top-0 w-20 rotate-180 -left-12"
      alt=""
    />
    <img
      src="/ornaments/ornament-orange-flower.png"
      class="absolute top-[50%] w-20 rotate-180 -scale-x-[1] -right-12"
      alt=""
    />
    <img
      src="/ornaments/ornament-orange-flower.png"
      class="absolute top-0 w-20 rotate-180 -left-12"
      alt=""
    />
    <img
      src="/ornaments/ornament-orange-flower.png"
      class="absolute bottom-0 w-20 rotate-180 -left-12"
      alt=""
    />
  </section>
</template>
