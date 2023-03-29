import { createApp } from 'vue'
import './assets//style.css'
import router from './router/main'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
