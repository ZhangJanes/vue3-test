<template>
    <div>
        编号：{{ id }}
        名称：{{ name }}
        内容：{{ content }}
    </div>
</template>
<script setup lang="ts">
// import { useRoute } from 'vue-router'
import { toRefs, defineProps } from 'vue'
defineProps(['id', 'name', 'content'])
</script>