<template>
    <!-- 结构 -->
    <div class="app">
        <h2>需求 当水温达到60度时或水位 达到80cm时，给服务器发送请求</h2>
        <span ref="temp">水温: {{ temp }}</span>
        <span>水位: {{ height }}</span>
        <button @click="changeTemp">水温</button>
        <button @click="changeHeight">水位</button>
    </div>
</template>

<script lang="ts" setup name="watchEffect">

import { ref, reactive, watch, watchEffect, defineExpose } from 'vue'

let temp = ref(10)
let height = ref(10)

const changeTemp = () => {
    temp.value += 10
}
const changeHeight = () => {
    height.value += 10
}

// defineExpose({ temp, height})

// watch 必须明确指出监视谁
// watch([temp, height], (value) => {
//     let [newTemp, newHeight] = value
//     if (newTemp >= 60 || newHeight >= 80) {
//         temp.value = 60
//         console.log('警告!')
//     }
// })


//  watchEffect实现监视
watchEffect(() => {
    if (height.value >= 80 || temp.value >= 60) {
        console.log('警告!')
    }
})




</script>

<style></style>
