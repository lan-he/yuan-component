<script setup>
defineProps({
    msg: String,
})
</script>

<template>
    HOME
    <h1>{{ msg }}</h1>
    <img alt="Vue logo" src="@/assets/logo.png" />
</template>

<style scoped>
a {
    color: #42b983;
}
</style>
