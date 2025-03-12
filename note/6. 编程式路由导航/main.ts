import { createApp } from 'vue'

import App from './App.vue' // app组件最后挂载

import router from './router'

const app = createApp(App)

// 使用路由器
app.use(router)

// 挂载
app.mount('#app')
