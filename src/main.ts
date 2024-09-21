import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import pinia from './store'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

createApp(App)
  .use(ElementPlus)
  .use(router)
  .use(pinia)
  .mount('#app');
