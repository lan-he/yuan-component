<script setup>
import { jsonp } from 'vue-jsonp'
import { ref, reactive, toRefs } from 'vue'

const state = reactive({
    address: '哈尔滨',
    baikeData: {},
    buttonAnmition: false,
})
const queryWeather = () => {
    state.buttonAnmition = true

    jsonp('https://query.asilu.com/weather/weather/', {
        address: state.address,
    }).then((res) => {
        state.baikeData = res
        console.log(res, 'QQQQQQQ')
    })
}
</script>

<template>
    <video class="video-background" autoplay loop muted>
        <source src="@/assets/video/video1.mp4" type="video/mp4" />
    </video>
    <div class="weather-box">
        <div class="weather-query-block">
            <input class="" type="text" v-model="state.address" />
            <button class="query-button" @click="queryWeather" :class="{ animation: state.buttonAnmition }">
                查询
            </button>
        </div>
        <div class="weather-item-box">
            <div class="weather-item" v-for="item in state.baikeData.list">
                <span>{{ item.date }}</span>
                <span>{{ item.weather }}</span>
                <span>{{ item.temp }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.video-background {
    position: fixed;
    right: 0px;
    bottom: 0px;
    min-width: 100vw;
    min-height: 100vh;
    height: auto;
    width: auto;
    /*加滤镜*/
    // filter: blur(15px); //背景模糊设置
    // -webkit-filter: grayscale(100%);
    // filter: grayscale(100%); //背景灰度设置
}
.weather-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    .weather-query-block {
        display: flex;
        input {
            box-sizing: border-box;
            margin: 0;
            position: relative;
            display: inline-block;
            width: 100%;
            min-width: 0;
            padding: 4px 11px;
            color: #000000d9;
            font-size: 14px;
            background-color: #fff;
            border: 1px solid #d9d9d9;
            border-radius: 2px;
            transition: all 0.3s;
            &:hover {
                border-color: #40a9ff;
                border-right-width: 1px;
            }
            &:focus {
                border-color: #40a9ff;
                box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
                border-right-width: 1px;
                outline: 0;
            }
        }
        .query-button {
            margin-left: 10px;
            color: #fff;
            border-color: #40a9ff;
            background: #40a9ff;
            text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
            box-shadow: 0 2px #0000000b;
            line-height: 1.5715;
            position: relative;
            display: inline-block;
            font-weight: 400;
            white-space: nowrap;
            text-align: center;
            border: 1px solid transparent;
            box-shadow: 0 2px #00000004;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            height: 32px;
            padding: 4px 15px;
            font-size: 14px;
            border-radius: 2px;
        }
        .animation {
            &:after {
                position: absolute;
                display: block;
                border-radius: inherit;
                box-shadow: 0 0 0 0 #1890ff;
                opacity: 0.2;
                animation: fadeEffect 2s cubic-bezier(0.08, 0.82, 0.17, 1),
                    waveEffect 0.4s cubic-bezier(0.08, 0.82, 0.17, 1);
                animation-fill-mode: forwards;
                content: '';
                pointer-events: none;
            }
        }
    }
    .weather-item-box {
        position: relative;
        border-radius: 50px;
        margin-top: 20px;
        .weather-item {
            height: 40px;
            padding: 0 6px;
            border-top: 1px solid #999;
            display: flex;
            align-items: center;
        }
    }
}
</style>
