<template>
    <div>about</div>
    <div>
        <button @click="getImg">获取图片</button>
        总数: {{ sum }}
        扩大十倍的总数为{{ bigSum }}
        <img v-for="img in imgList" :key="img" :src="img" alt="" width="200">
        <button @click="empty">清空原始数据</button>
    </div>
</template>
<script setup lang="ts" name="about">
import { useAboutStore } from '@/store/about'
import { storeToRefs } from 'pinia'
// 1. countStore.sum += 1
// 2. countStore.$patch({sum:1})
// 3. actions里面修改

const aboutStore = useAboutStore()

// $subscribe  监听store里面的数据变化
aboutStore.$subscribe((mutate, state) => {
    console.log(mutate, state)
    localStorage.setItem('imgList', JSON.stringify(state.imgList))
})

// storeToRefs 只会关注store中的数据，不会对方法进行ref包裹
const { imgList, sum, bigSum } = storeToRefs(aboutStore)
function getImg() {
    aboutStore.getImg()
}
function empty() {
    aboutStore.$patch({ sum: 0, imgList: [] as string[] })
}
</script>