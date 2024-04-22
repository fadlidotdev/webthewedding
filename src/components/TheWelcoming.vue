<script setup>
import { ref, onMounted, onUnmounted } from 'vue';


const targetDate = new Date('2024-04-27'); // Set your target date here
targetDate.setHours(10)
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

let interval;

function updateTime() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        clearInterval(interval);
        return;
    }

    days.value = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    seconds.value = Math.floor((diff % (1000 * 60)) / 1000);
}


onMounted(() => {
    updateTime();
    interval = setInterval(updateTime, 1000);
});

onUnmounted(() => {
    clearInterval(interval);
});


</script>

<template>
    <section class="section-hero-2 gap-8 min-h-[100vh] flex flex-col items-center justify-center text-center">
        <h1 class="text-primary font-display text-7xl" style="text-shadow: rgba(0, 0, 0, 0.1) 2px 2px 0px">
            Nanda &amp;<br />
            Egi
        </h1>

        <div class="flex flex-col items-center space-y-8">
            <p class="px-4">
                We invited you to celebrate our Wedding <br />
                Sabtu, 27 April 2024
            </p>

            <div class="flex gap-4">
                <div
                    class="flex flex-col items-center justify-center w-16 h-16 p-2 font-medium border-2 rounded bg-white/25 border-primary/50">
                    <span class="text-xl font-bold">{{ days }}</span>
                    <span>Hari</span>
                </div>
                <div
                    class="flex flex-col items-center justify-center w-16 h-16 p-2 font-medium border-2 rounded bg-white/25 border-primary/50">
                    <span class="text-xl font-bold">{{ hours }}</span>
                    <span>Jam</span>
                </div>
                <div
                    class="flex flex-col items-center justify-center w-16 h-16 p-2 font-medium border-2 rounded bg-white/25 border-primary/50">
                    <span class="text-xl font-bold">{{ minutes }}</span>
                    <span>Menit</span>
                </div>
                <div
                    class="flex flex-col items-center justify-center w-16 h-16 p-2 font-medium border-2 rounded bg-white/25 border-primary/50">
                    <span class="text-xl font-bold">{{ seconds }}</span>
                    <span>Detik</span>
                </div>
            </div>
        </div>
    </section>

</template>