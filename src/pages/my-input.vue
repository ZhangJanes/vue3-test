<template>
    <input :value="modelValue" @input="emit('update:modelValue',(<HTMLInputElement>$event.target).value)"/>
        {{ modelValue }}
    <input :value="username" @input="emit('update:username',(<HTMLInputElement>$event.target).value)" />
</template>
<script setup lang="ts">

import { toRefs } from 'vue'
defineProps(['modelValue','username'])
const emit = defineEmits(['update:modelValue','update:username'])
</script>