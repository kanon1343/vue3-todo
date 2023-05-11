import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'

import './assets/main.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.config.globalProperties.$axios = axios.create({
    baseURL: 'http://127.0.0.1:5173/'
})
app.mount('#app')
