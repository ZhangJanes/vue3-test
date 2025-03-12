<template>
    <div>
        <!-- 使用query时和path一起使用，使用params时和name一起使用 否则控制台会有警告 -->
        <router-link style="margin-bottom: 12px;" v-for="item in newList" :key="item.id" :to="{
            name: 'detail',
            // params: { ...item },
            query: { ...item }
        }">
            {{ item.name }}
            <br />
        </router-link>
    </div>
    <div style="border: 1px solid #ccc;width: 500px;height: 400px;">
        <RouterView />
    </div>
</template>
<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'

let newList = reactive([
    {
        name: '新闻一',
        content: '这是新闻1',
        id: 'werqweq1'
    },
    {
        name: '新闻二',
        content: '这是新闻2',
        id: 'werqweq2'
    },
    {
        name: '新闻三',
        content: '这是新闻3',
        id: 'werqweq3'
    },
    {
        name: '新闻四',
        content: '这是新闻4',
        id: 'werqweq4'
    }
])
const router = useRouter()
// onMounted(() => {
//     setTimeout(() => {
//         router.push('/news')
//     }, 3000)
// })
</script>