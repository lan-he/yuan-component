<script setup>
import { jsonp } from 'vue-jsonp'
import { ref, reactive, toRefs } from 'vue'

const state = reactive({
    address: '',
    baikeData: {},
    weatherOfDay: {},
})
const queryWeather = async () => {
    // 查询10日天气
    const res = await jsonp('https://query.asilu.com/weather/weather/', {
        address: state.address,
    })
    state.baikeData = res
    state.baikeData.list.shift()
    state.weatherOfDay = res.list[0]
    console.log(res, 'QQQQQQQ')
}
queryWeather()

jsonp('https://restapi.amap.com/v3/weather/weatherInfo?parameters', {
    key: '1b5a649214eebdc30e7a048000104d5f',
    city: '310000',
    extensions: 'base',
}).then((res) => {
    console.log(res, 'res.livesres.lives')

    state.weatherOfDay = res.list[0]
    console.log(res, 'ssss')
})
const weatherIcon = (code) => {
    if (code === '00') {
        // 晴
        return {
            iconClass: 'icon-qing',
        }
    } else if (code == '01') {
        // 多云
        return {
            iconClass: 'icon-duoyun-3',
        }
    } else if (code === '02') {
        // 阴
        return {
            iconClass: 'icon-duoyun',
        }
    } else if (code === '03') {
        // 阵雨
        return {
            iconClass: 'icon-zhenyu',
        }
    } else if (code === '06') {
        // 雨夹雪
        return {
            iconClass: 'icon-yujiaxue',
        }
    } else if (code === '07') {
        // 小雨
        return {
            iconClass: 'icon-xiaoyu',
        }
    } else if (code === '14') {
        // 小雪
        return {
            iconClass: 'icon-xiaoxue',
        }
    } else if (code === '301') {
        // 雨
        return {
            iconClass: 'icon-zhongyu',
        }
    } else {
        return {
            iconClass: 'icon-qing',
        }
    }
}
</script>

<template>
    <video class="video-background" autoplay loop muted>
        <source
            src="https://hemingxaun-1256953833.cos.ap-shanghai.myqcloud.com/yuan-component/%E6%99%B4%E7%A9%BA%E4%B8%87%E9%87%8C.mp4"
            type="video/mp4"
        />
    </video>
    <div class="weather-box">
        <div class="current-weather">
            <p class="city-title">{{ state.baikeData.city }}</p>
            <p class="city-title">{{ state.weatherOfDay.province }}</p>
            <p class="city-temperature">{{ state.weatherOfDay.temp }}</p>
            <p class="city-winddirection">
                {{ state.weatherOfDay.weather }}
                {{ state.weatherOfDay.wind }}
            </p>
        </div>
        <div class="weather-item-box">
            <div class="weather-item" v-for="item in state.baikeData.list">
                <p class="weather-item-data">{{ item.date }}</p>
                <svg class="icon weather-icon" aria-hidden="true">
                    <use
                        :xlink:href="`#${weatherIcon(item.icon2).iconClass}`"
                    ></use>
                </svg>
                <p class="weather-icon-temp">{{ item.temp }}</p>
            </div>
        </div>
        <div class="weather-query-block" v-if="false">
            <input class="" type="text" v-model="state.address" />
            <button
                class="query-button"
                @click="queryWeather"
                :class="{ animation: state.buttonAnmition }"
            >
                查询
            </button>
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
.current-weather {
    .city-title {
        font-size: 36px;
        color: #fff;
        text-align: center;
        text-shadow: rgb(0 0 0 / 30%) 2px 2px 6px;
    }
    .city-temperature {
        font-size: 66px;
        color: #fff;
        text-align: center;
        text-shadow: rgb(0 0 0 / 30%) 2px 2px 6px;
    }
    .city-winddirection {
        font-size: 26px;
        color: #fff;
        text-align: center;
        text-shadow: rgb(0 0 0 / 30%) 2px 2px 6px;
    }
}
.weather-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
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
    }
    .weather-item-box {
        position: relative;
        border-radius: 50px;
        margin-top: 20px;
        width: 500px;
        border-radius: 20px;
        background: rgba(80, 175, 240, 0.1);
        backdrop-filter: blur(34px);
        padding: 20px;
        .weather-item {
            height: 40px;
            padding: 0 6px;
            border-top: 1px solid #779abf;
            display: flex;
            align-items: center;
            display: flex;

            .weather-item-data {
                width: 160px;
                color: #fff;
                font-size: 20px;
                text-shadow: rgb(0 0 0 / 40%) 0px 1px 3px;
            }
            .weather-icon {
                width: 34px;
                height: 34px;
            }
            .weather-icon-temp {
                margin-left: auto;
            }
        }
    }
}
</style>
