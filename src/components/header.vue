<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
setTimeout(() => {
    console.log(route.path)
}, 100)
const navList = [
    {
        name: '首页',
        path: '/home',
    },
    {
        name: '天气',
        path: '/weather-api',
    },
    {
        name: '百科',
        path: '/wiki-api',
    },
    {
        name: '关于',
        path: '/about',
    },
]
const routerPush = (path) => {
    router.push(path)
}
</script>

<template>
    <header class="header-box">
        <div class="header-box-block">
            <svg class="icon logo-svg" aria-hidden="true">
                <use xlink:href="#icon-food-doughnut"></use>
            </svg>
            <span class="logo-title">Zhang Siyuan</span>
            <i class="logo-line"></i>
        </div>
        <div class="header-box-block">
            <div
                class="navigation-bar"
                v-for="(item, index) in navList"
                :key="index"
                :class="{ active: route.path == item.path }"
                @click="routerPush(item.path)"
            >
                {{ item.name }}
            </div>
            <i class="iconfont icon-github"></i>
        </div>
    </header>
</template>

<style scoped lang="less">
.header-box {
    position: relative;
    z-index: 10;
    max-width: 100%;
    box-shadow: 0 2px 8px #f0f1f2;
    height: 64px;
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    align-items: center;
    .header-box-block:first-child {
        flex: 0 0 20.83333333%;
    }
    .header-box-block {
        display: flex;
        align-items: center;
        .logo-svg {
            width: 32px;
            height: 32px;
            margin-right: 12px;
        }
        .logo-title {
            font-weight: 700;
            font-size: 18px;
        }
        .logo-line {
            width: 1px;
            height: 22px;
            background-color: rgba(0, 0, 0, 0.06);
            margin-left: auto;
        }
        .navigation-bar {
            width: 40px;
            height: 64px;
            padding-right: 12px;
            padding-left: 12px;
            line-height: 64px;
            font-size: 14px;
            text-align: center;
            position: relative;
            color: #000000d9;
            cursor: pointer;
        }
        .active {
            color: #1890ff;
            &:after {
                content: '';
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                top: 0;
                width: 40px;
                height: 2px;
                background-color: #1890ff;
            }
        }
        .icon-github {
            font-size: 22px;
            margin-left: 12px;
        }
    }
    .logo {
        width: 100px;
        height: 100px;
        background-color: aqua;
    }
}
</style>
