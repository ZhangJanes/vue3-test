// 创建一个路由器并暴露出去 vue3 制定路由的时候需要指定路由工作模式

// 第一步：引入createRouter
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import News from '@/pages/News.vue'
import detail from '@/pages/detail.vue' //

// 路由组件：路由里面进行引用的就是路由组件。放在view或者pages里面
// 通用组件（一般组件）：可以自己写标签的就是一般组件 放在components里面，在该文件夹下，进行更细化的区分。

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
          //   path: 'detail/:id/:name?/:content', // 子集不需要写斜杠 与第一种配合
          path: 'detail', // 与第二种配合伴随query使用
          component: detail,

          //  第一种写法
          //   props: true, // 路由规则props配置: 将路由收到的所有params参数转换为props参数传给路由组件。只与params配合

          //  第二种写法 与query配合 函数写法
          props(route) {
            return route.query
          },
          //   第三种写法，对象写法
          //   props: {},
        },
      ],
    },
  ],
})

// 暴露出去
export default router
