import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./router/index.js"
import { createPinia } from 'pinia'
// Pinia 持久化存储插件
import piniaPersist from 'pinia-plugin-persist'

const pinia = createPinia()
pinia.use(piniaPersist)
createApp(App)
    .use(ElementPlus)
    .use(router)
    .use(pinia)
    .mount('#app')
