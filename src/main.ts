import { createApp } from 'vue'
import './assets//style.css'
import router from './router/main'
import App from './App.vue'
import {createPinia} from "pinia"

const app = createApp(App)
app.use(router)
app.use(createPinia());

app.mount('#app')
