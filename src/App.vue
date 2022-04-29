<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from '@/components/header.vue'
</script>

<template>
    <Header />
    <div class="main-wrapper">
        <router-view></router-view>
    </div>
</template>

<style>
@import './assets/iconfont/iconfont.css';
* {
    margin: 0;
}
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
.main-wrapper {
    position: relative;
    padding: 40px 0 0;
    background: #fff;
}
</style>
