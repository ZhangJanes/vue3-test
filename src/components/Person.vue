<template>
    <!-- 结构 -->
    <div class="app">
        sum:{{ sum }}
        <button @click="changeSun">点击</button>
    </div>
</template>

<script lang="ts" setup name="person">
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
// setup里面直接就是创建了
console.log('创建了')

let sum = ref(0)

function changeSun() {
    sum.value++
}

onBeforeMount(() => {
    console.log('挂载前')
})

onMounted(() => {
    console.log('子-----挂载完毕')
})

onBeforeUpdate(() => {
    console.log('更新前')
})

onUpdated(() => {
    console.log('更新完毕')
})

onBeforeUnmount(() => {
    console.log('卸载前')
})

onUnmounted(() => {
    console.log('卸载完毕')
})

</script>