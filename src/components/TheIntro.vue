<template>
  <section class="section-hero h-[100vh] relative flex flex-col items-center justify-center">
    <div class="flex flex-col items-center gap-6 text-center">
      <h1 class="text-6xl text-primary font-display" style="text-shadow: rgba(0, 0, 0, 0.1) 2px 2px 0px">
        Nanda &amp; Egi
      </h1>

      <img src="/photo-1.webp" class="object-cover w-48 h-48 rounded-full shadow-xl aspect-square" />

      <div class="flex flex-col w-3/4 gap-1 text-sm text-primary-foreground/60">
        <p>Kepada Bapak/Ibu/Saudara/i</p>

        <h2 class="text-2xl font-semibold">Nova dan Suami</h2>

        <p>Kami Mengundang Anda Untuk Hadir di Acara Penikahan kami.</p>
      </div>

      <div class="absolute left-0 right-0 bottom-6">
        <button
          class="flex items-center h-10 px-4 mx-auto text-sm text-white border rounded-full shadow-xl bg-primary border-primary"
          @click="$emit('open')">
          Buka Undangan
        </button>
      </div>
    </div>
  </section>
</template>
