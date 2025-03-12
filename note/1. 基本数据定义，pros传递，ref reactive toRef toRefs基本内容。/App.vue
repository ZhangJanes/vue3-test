<template>
    <!-- 结构 -->
    <div class="app">
        <person ref="ren" a="haha" b="haha" />
        <persons />
        <watchEffect />
        <button @click="getRen">ceshi </button>
    </div>
</template>

<script lang="ts" setup name="App">
import person from './components/Person.vue'
import persons from './components/persons.vue'
import watchEffect from './components/watchEffect.vue'

import { ref } from 'vue'

let ren = ref()
console.log(ren.value)
function getRen() {
    console.log(ren.value)
}
</script>

<style></style>
