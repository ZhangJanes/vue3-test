<template>
    <!-- 结构 -->
    <div class="app">
        sum:{{ sum }} {{ bigSum }}
        <button @click="changeSum">点击</button>
        <hr>
        <img v-for="dog, index in dogList" :src="dog" :key="index" height="300" style="margin-left: 10px;">
        <br>
        <button @click="getDog">再来一只</button>
    </div>
</template>

<script lang="ts" setup name="person">
import useSum from '@/hooks/useSum'
import useDog from '@/hooks/useDog'

const { dogList, getDog } = useDog()
const { sum, changeSum, bigSum } = useSum()
</script>