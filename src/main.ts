import '@app/assets/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './app/providers/router'

const app = createApp(App);
app.use(router);
app.use(createPinia());

app.mount('#app');
