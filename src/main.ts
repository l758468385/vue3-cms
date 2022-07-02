import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

// 按需导入 element-plus 组件插件
import { register } from "@/global/index"
// 全局引入element-plus
// import ElementPlus from 'element-plus'
import "element-plus/dist/index.css"

import '@/service/axios-demo'
const app = createApp(App)
app.use(register)
app.use(router)
app.use(store)

app.mount("#app")
// createApp(App).use(store).use(router).mount('#app')
