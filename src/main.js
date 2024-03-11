import './assets/main.css';
import { createPinia } from 'pinia'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'


import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(autoAnimatePlugin);
app.mount('#app');

