<script setup>
import { jsonp } from 'vue-jsonp'
import { ref, reactive } from 'vue'

const state = reactive({
    baikeInputValue: '闪电',
    baikeData: {},
    address: '哈尔滨',
})
const chaxun = () => {
    jsonp('https://baike.baidu.com/api/openapi/BaikeLemmaCardApi', {
        appid: '379020',
        bk_key: state.baikeInputValue,
    }).then((res) => {
        state.baikeData = res
    })
}
</script>

<template>
    <div class="weather-box">
        <div class="weather-item"></div>
    </div>
    <input type="text" v-model="input1" />
    <button @click="chaxun">查询</button>
    {{ state.baikeInputValue }} {{ state.baikeData }}
</template>

<style scoped>
a {
    color: #42b983;
}
</style>
