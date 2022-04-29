<script setup>
import { ref } from 'vue'
import { jsonp } from 'vue-jsonp'
defineProps({
    msg: String,
})
const count = ref(0)

const oScript = document.createElement('script')
oScript.src = `https://j.i8tq.com/weather2020/search/city.js`
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
    <img src="https://hemingxaun-1256953833.cos.ap-shanghai.myqcloud.com/img1.jpeg" alt="" />
    <h1>{{ msg }}</h1>
</template>

<style scoped>
a {
    color: #42b983;
}
</style>
