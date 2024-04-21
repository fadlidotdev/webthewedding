<template>
  <section class="section-hero h-[100vh] relative flex flex-col items-center justify-center">
    <div class="text-center flex flex-col gap-6 items-center">
      <h1
        class="text-primary font-display text-6xl"
        style="text-shadow: rgba(0, 0, 0, 0.1) 2px 2px 0px"
      >
        Nanda &amp; Egi
      </h1>

      <img
        src="/photo-1.webp"
        class="aspect-square object-cover w-48 h-48 shadow-xl rounded-full"
      />

      <div class="text-sm w-3/4 flex flex-col gap-1 text-primary-foreground/60">
        <p>Kepada Bapak/Ibu/Saudara/i</p>

        <h2 class="font-semibold text-2xl">Nova dan Suami</h2>

        <p>Kami Mengundang Anda Untuk Hadir Di Acara Ngunduh Mantu Kami.</p>
      </div>

      <div class="absolute bottom-6 left-0 right-0">
        <button
          class="bg-primary border-primary text-white text-sm border rounded-full h-10 px-4 flex items-center mx-auto shadow-xl"
          @click="$emit('open')"
        >
          Buka Undangan
        </button>
      </div>
    </div>
  </section>
</template>
