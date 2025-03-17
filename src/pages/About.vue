<template>
    <div>about</div>
    <div>
        <div style="margin-bottom: 20px;">
            <button @click="getTalkList">获取一句话</button>
            总数: {{ sum }}
            扩大十倍的总数为{{ bigSum }}
        </div>
        <span v-for="item in loveList" :key="item" :src="item" alt="" width="200">
            {{ item }} <br>
        </span>
        <div style="margin-top: 20px;">
            <button @click="empty">清空原始数据</button>
        </div>
        <!-- <input v-model="inputText" /> -->
        <input :value="inputText" @input="inputText = (<HTMLInputElement>$event.target).value" />
        <!-- <myInput v-model="myInputText"></myInput>  写当前这个等同于默认写了下方这个函数 -->

        
        <myInput :modelValue="myInputText" @update:modelValue="myInputText = $event"></myInput>
    </div>
</template>
<script setup lang="ts" name="about">
import { useAboutStore } from '@/store/about'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import myInput from './my-input.vue'
// 1. countStore.sum += 1
// 2. countStore.$patch({sum:1})
// 3. actions里面修改

const inputText = ref('zhangsan')
const myInputText = ref('wanger')

const aboutStore = useAboutStore()

// $subscribe  监听store里面的数据变化
aboutStore.$subscribe((mutate, state) => {
    console.log(mutate, state)
    localStorage.setItem('loveList', JSON.stringify(state.loveList))
})

// storeToRefs 只会关注store中的数据，不会对方法进行ref包裹
const { loveList, sum, bigSum } = storeToRefs(aboutStore)
function getTalkList() {
    aboutStore.getTalkList()
}
function empty() {
    aboutStore.$patch({ sum: 0, loveList: [] as string[] })
}
</script>