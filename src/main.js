import './assets/main.css'
import { createPinia } from 'pinia'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import router from '@/router.js'

import { createApp, markRaw } from 'vue'
import App from './App.vue'

const app = createApp(App);
const pinia = createPinia();


pinia.use(({ store }) => {
    store.router = markRaw(router);
});
app.use(pinia);
app.use(router);
app.use(autoAnimatePlugin);

app.mount('#app');

