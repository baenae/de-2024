import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueEasyLightbox from 'vue-easy-lightbox';
import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css'

const app = createApp(App)

app.use(router)
app.use(VueEasyLightbox);

app.mount('#app')
