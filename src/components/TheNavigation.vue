<script setup></script>

<template>
  <nav class="fixed bottom-4 left-4 right-4 z-50">
    <ul
      class="bg-white opacity-75 border-primary/50 text-primary p-2 rounded-lg border-2 grid grid-cols-4 place-items-center"
    >
      <li>
        <a class="flex gap-1 items-center flex-col justify-center" href="#mempelai">
          <span class="material-symbols-outlined"> favorite </span>
          <span class="font-medium text-xs">Mempelai</span>
        </a>
      </li>
      <li>
        <a class="flex gap-1 items-center flex-col justify-center" href="#acara">
          <span class="material-symbols-outlined"> today </span>
          <span class="font-medium text-xs">Acara</span>
        </a>
      </li>
      <li>
        <a class="flex gap-1 items-center flex-col justify-center" href="">
          <span class="material-symbols-outlined"> gallery_thumbnail </span>
          <span class="font-medium text-xs">Galeri</span>
        </a>
      </li>
      <li>
        <a class="flex gap-1 items-center flex-col justify-center" href="">
          <span class="material-symbols-outlined"> chat_bubble </span>
          <span class="font-medium text-xs">Ucapan</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
