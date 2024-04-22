import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import VueEasyLightbox from 'vue-easy-lightbox'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(VueEasyLightbox)
app.use(
  AOS.init({
    once: true,
    duration: 750
  })
)

app.mount('#app')
