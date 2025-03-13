// import { defineStore } from 'pinia'
// import axios from 'axios'
// // 名字和hook类似 格式为use + 文件名称 + store ，defineStore的第一个参数和文件名一样
// export const useAboutStore = defineStore('about', {
//   // actions 里面放置的是一个一个的方法，用于响应组件中的“动作”，actions 直接调用。 useAboutStore.increment(val)
//   actions: {
//     // 抽出相似的代码逻辑，进行复用，放在actions里面
//     async getImg() {
//       // 当前可直接使用this
//       let {
//         data: { message },
//       } = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
//       this.imgList.push(message)
//       this.sum = this.imgList.length
//     },
//   },
//   state() {
//     return {
//       sum: 0,
//       imgList:
//         (JSON.parse(localStorage.getItem('imgList') as string) as string[]) || ([] as string[]),
//     }
//   },
//   getters: {
//     // 可以理解为计算属性
//     // 对数据不满意，可以对项目进行加工，也可以直接使用this,getters里面定义的数据，可以同state一样方式取出。
//     bigSum(state) {
//       return state.sum * 10
//     },
//     upperSchool(): string {
//       return this.upperSchool.toUpperCase()
//     },
//   },
// })
import { defineStore } from 'pinia'
import axios from 'axios'
import { ref, computed } from 'vue'

export const useAboutStore = defineStore('about', () => {
  // State 状态定义
  const sum = ref<number>(0)
  const imgList = ref<string[]>(
    JSON.parse(localStorage.getItem('imgList') || '[]'), // 初始化处理
  )

  // Actions 操作方法
  const getImg = async () => {
    try {
      const { data } = await axios.get<{ message: string }>(
        'https://dog.ceo/api/breed/pembroke/images/random',
      )
      imgList.value.push(data.message)
      sum.value = imgList.value.length

      // 持久化到 localStorage
      localStorage.setItem('imgList', JSON.stringify(imgList.value))
    } catch (error) {
      console.error('Failed to fetch dog image:', error)
    }
  }

  // Getters 计算属性
  const bigSum = computed(() => sum.value * 10)
  const upperSchool = computed(() => 'yourSchoolName'.toUpperCase()) // 修改为实际需要处理的属性

  return {
    sum,
    imgList,
    getImg,
    bigSum,
    upperSchool,
  }
})
