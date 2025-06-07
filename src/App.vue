<!--
 * @Author: zhangjianing 1026597665@qq.com
 * @Date: 2025-06-07 22:01:33
 * @LastEditors: zhangjianing 1026597665@qq.com
 * @LastEditTime: 2025-06-07 22:04:12
 * @FilePath: \vue3-test\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="app">
        <h2>Vue路由测试</h2>
    </div>
    <div class="navigate">
        <!-- 加了replace 之后 无法通过浏览器进行回退 -->
        <RouterLink replace to="/home" active-class="active">首页</RouterLink>
        <br>
        <RouterLink replace :to="{ name: 'xinwen' }" active-class="active">新闻</RouterLink>
        <br>
        <RouterLink replace :to="{ path: '/about' }" active-class="active">关于</RouterLink>
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
