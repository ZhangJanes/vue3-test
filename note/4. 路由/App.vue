<template>
    <div class="app">
        <h2>Vue路由测试</h2>
    </div>
    <div class="navigate">
        <RouterLink to="/home" active-class="active">首页</RouterLink>
        <br>
        <RouterLink :to="{ name: 'xinwen' }" active-class="active">新闻</RouterLink>
        <br>
        <RouterLink :to="{ path: '/about' }" active-class="active">关于</RouterLink>
    </div>
    <div class="main-content">
        <RouterView />
    </div>
</template>

<script lang="ts" setup name="App">
import { RouterView, RouterLink } from 'vue-router'
</script>

<style>
.main-content {
    width: 1200px;
    height: 400px;
    border-radius: 6px;
    border: 1px solid #ccc;
    margin: 50px auto;
}

.navigate {
    color: #393b3e;
}

.active {
    color: #1e54d5;
    font-weight: 600;
}
</style>
