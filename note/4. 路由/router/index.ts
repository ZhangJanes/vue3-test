// 创建一个路由器并暴露出去 vue3 制定路由的时候需要指定路由工作模式

// 第一步：引入createRouter
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import News from '@/pages/News.vue'
import detail from '@/pages/detail.vue'
// 第二步：创建路由器

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'zhuye',
      path: '/home',
      component: Home,
    },
    {
      name: 'guanyu',
      path: '/about',
      component: About,
    },
    {
      name: 'xinwen',
      path: '/news',
      component: News,
      children: [
        {
          name: 'detail',
          path: 'detail/:id/:name?/:content', // 子集不需要写斜杠
          component: detail,
        },
      ],
    },
  ],
})

// 暴露出去
export default router
