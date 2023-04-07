import { createApp } from 'vue'
import './assets//style.css'
import router from './router/main'
import App from './App.vue'
import {createPinia} from "pinia"
import { VueTelInput } from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'


const app = createApp(App)
app.use(router)
app.use(VueTelInput);
app.use(createPinia());

app.mount('#app')
