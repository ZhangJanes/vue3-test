<template>
    <!-- 结构 -->
    <div class="app">
        <person ref="ren" v-if="isShow" />
    </div>
</template>

<script lang="ts" setup name="App">
import person from './components/Person.vue'
import { ref, onMounted } from 'vue'
let isShow = ref(true)
// 子组件先挂载完毕，再回来进行父组件的挂载 App组件最后挂载
onMounted(() => {
    console.log('父----挂载完毕')
})
</script>

<style></style>
