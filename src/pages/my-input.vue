<template>
    <input :value="modelValue" @input="emit('update:modelValue',(<HTMLInputElement>$event.target).value)"/>
        {{ modelValue }}
</template>
<script setup lang="ts">

import { toRefs } from 'vue'
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>