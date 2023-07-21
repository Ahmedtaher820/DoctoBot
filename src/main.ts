import { createApp } from 'vue'
import './assets//style.css'
import router from './router/main'
import App from './App.vue'
import {createPinia} from "pinia"
import vue3GoogleLogin from 'vue3-google-login'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
// import VueObserveVisibility from 'vue-observe-visibility'

const app = createApp(App)
// app.directive('observe-visibility', VueObserveVisibility.ObserveVisibility)
app.use(router)
app.use(createPinia());
// app.use(VueObserveVisibility)
app.use(vue3GoogleLogin, {
    clientId: '755812119613-fuelbcbljoe7sbkpf8na04aovsu954f6.apps.googleusercontent.com',
  })
  app.component('VueDatePicker', VueDatePicker);

app.mount('#app')
