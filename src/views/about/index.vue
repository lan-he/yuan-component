<script setup>
import { ref } from 'vue'
defineProps({
    msg: String,
})
const count = ref(0)

const oScript = document.createElement('script')
oScript.src = `https://baike.baidu.com/api/openapi/BaikeLemmaCardApi?appid=379020&bk_key=石榴&callback=getResultList`
document.body.appendChild(oScript)
const oScript1 = document.createElement('script')
oScript1.innerHTML = `
    function getResultList(res) {
        console.log("res", res)
    }
`
document.body.appendChild(oScript1)
</script>

<template>
    ABOUT
    <h1>{{ msg }}</h1>
</template>

<style scoped>
a {
    color: #42b983;
}
</style>
