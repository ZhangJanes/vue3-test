<template>
    <div>
        编号：{{ params.id }}
        名称：{{ params.name }}
        内容：{{ params.content }}
    </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { toRefs } from 'vue'
const route = useRoute()
let { params } = toRefs(route)
// let { query } = toRefs(route)
</script>