import { createApp } from 'vue';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';

import App from './App.vue';
import './assets/tailwind.css'

createApp(App).use(store).use(router).mount('#app');
