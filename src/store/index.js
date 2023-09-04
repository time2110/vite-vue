import { createPinia } from 'pinia'
// Pinia 持久化存储插件
import piniaPersist from 'pinia-plugin-persist'

const pinia = createPinia()
pinia.use(piniaPersist)

export default pinia