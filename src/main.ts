import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { store } from "./store"
import "normalize.css"

// 按需导入 element-plus 组件插件
import { register } from "@/global/index"
// 全局引入element-plus
// import ElementPlus from 'element-plus'
import "element-plus/dist/index.css"

import { setupStore } from "@/store/index"
setupStore()
const app = createApp(App)
app.use(register)
app.use(router)
app.use(store)
app.mount("#app")
// createApp(App).use(store).use(router).mount('#app')
