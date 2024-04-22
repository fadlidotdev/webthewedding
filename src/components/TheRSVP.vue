<script setup>
import { supabase } from '@/lib/supabase';
import { Toaster, toast } from '@steveyuowo/vue-hot-toast'
import '@steveyuowo/vue-hot-toast/vue-hot-toast.css'
import { onMounted, ref } from 'vue';

const rsvps = ref([])

const name = ref()
const message = ref()
const attendance = ref()

async function copy(accountNumber) {
    try {
        await navigator.clipboard.writeText(accountNumber)
        toast.success('Berhasil disalin')
    } catch (err) {
        toast.error('Gagal menyalin teks.')
    }
}

async function fetchData() {
    const { data } = await supabase.from('rsvp').select().eq('slug', 'wedding-0').order('id', { ascending: false })
    rsvps.value = data
}

onMounted(() => {
    fetchData()

    const urlParams = new URLSearchParams(window.location.search);
    name.value = urlParams.get('name') ?? 'Guest'
})

async function submit() {
    const { error } = await supabase.from('rsvp').insert({
        name: name.value,
        message: message.value,
        attendance: Number(attendance.value),
        slug: import.meta.env.VITE_SLUG_ID
    })

    if (!error) {
        toast.success('Berhasil dikirim')
        message.value = ''
        attendance.value = undefined

        fetchData()
    }


}
</script>

<template>
    <Toaster />

    <section id="ucapan"
        class="min-h-[100vh] bg-primary py-16 flex flex-col items-center text-white relative overflow-hidden">
        <img src="/ornaments/ornament-orange-flower.png" class="absolute left-0 w-16 rotate-45 -top-8" alt="" />
        <img src="/ornaments/ornament-orange-flower.png" class="absolute right-0 w-16 rotate-45 -top-8" alt="" />
        <img src="/ornaments/ornament-orange-flower.png" class="absolute -top-8 left-[15%] w-16 rotate-45" alt="" />
        <img src="/ornaments/ornament-orange-flower.png" class="absolute -top-8 left-[30%] w-16 rotate-45" alt="" />
        <img src="/ornaments/ornament-orange-flower.png" class="absolute -top-8 right-[15%] w-16 rotate-45" alt="" />
        <img src="/ornaments/ornament-orange-flower.png" class="absolute -top-8 right-[30%] w-16 rotate-45" alt="" />
        <img src="/ornaments/ornament-orange-flower.png" class="absolute -top-8 right-[40%] w-16 rotate-45" alt="" />

        <div class="space-y-1 text-center">
            <h2 class="text-4xl">RSVP</h2>
            <p class="text-sm opacity-75">Your wish are very mean to us.</p>
        </div>

        <form class="flex flex-col w-3/4 gap-2 p-4 my-4 rounded-lg bg-primary-foreground/50" @submit.prevent="submit">
            <input placeholder="Masukkan nama" class="rounded" required v-model="name" />

            <label class="flex items-center gap-2" htmlFor="hadir">
                <input type="radio" required name="kehadiran" id="hadir" value="1" v-model="attendance" />
                <span>Hadir</span>
            </label>
            <label class="flex items-center gap-2" htmlFor="belum_hadir">
                <input type="radio" name="kehadiran" id="belum_hadir" value="0" v-model="attendance" /> <span>Belum
                    Hadir</span>
            </label>

            <textarea required class="rounded" placeholder="Masukkan pesan" v-model="message"></textarea>

            <button class="h-10 px-4 mt-3 text-sm text-white border rounded-lg shadow-xl bg-primary border-primary">
                Kirim
            </button>
        </form>

        <div class="flex flex-col w-3/4 gap-2 mb-16 overflow-auto max-h-80">

            <div v-for="rsvp in rsvps" :key="rsvp.id" class="p-3 text-white rounded-lg bg-primary-foreground/50">
                <div class="flex items-center gap-2 mb-2">
                    <h4 class="text-sm font-medium">{{ rsvp.name }}</h4>

                    <div :class="[
                        'block px-2 py-1 text-xs rounded-full', rsvp.attendance ? 'bg-primary' : 'bg-primary-foreground'
                    ]">{{
                        rsvp.attendance ? 'Hadir' : 'Belum hadir'
                    }}</div>
                </div>
                <p class="text-xs text-white/75">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, qui!
                </p>
            </div>
        </div>

        <div class="mb-6 space-y-1 text-center">
            <h2 class="text-4xl">Wedding Gift</h2>
            <p class="px-5 text-sm opacity-75">
                Bagi Keluarga dan Sahabat yang ingin mengirimkan hadiah, silahkan mengirimkannya melalui
                tautan berikut
            </p>
        </div>

        <div class="w-full px-5 space-y-3">
            <div
                class="flex items-center justify-between w-full p-4 rounded-lg shadow-xl bg-white/75 text-primary-foreground">
                <div class="space-y-1">
                    <h3 class="text-xl font-semibold">Rezky Nanda</h3>
                    <p class="flex items-center gap-2">
                        1351912884
                        <button @click="copy('1351912884')">
                            <span class="text-base material-symbols-outlined"> content_copy </span>
                        </button>
                    </p>
                </div>

                <img src="/bni.png" class="w-16 saturate-0" alt="" />
            </div>

            <div
                class="flex items-center justify-between w-full p-4 rounded-lg shadow-xl bg-white/75 text-primary-foreground">
                <div class="space-y-1">
                    <h3 class="text-xl font-semibold">Egi Dian Saputri</h3>
                    <p class="flex items-center gap-2">
                        1333696319
                        <button @click="copy('1333696319')">
                            <span class="text-base material-symbols-outlined"> content_copy </span>
                        </button>
                    </p>
                </div>

                <img src="/bni.png" class="w-16 saturate-0" alt="" />
            </div>
        </div>
    </section>
</template>
