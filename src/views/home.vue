<script setup>
import { ref } from 'vue'

defineProps({
    msg: String,
})

const count = ref(0)
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
    HOME
    <h1>{{ msg }}</h1>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<style scoped>
a {
    color: #42b983;
}
</style>
