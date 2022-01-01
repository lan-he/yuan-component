<script setup lang="ts">
import { ref } from "vue";
const menuList = [
	{
		name: 'InputNumber 计数器',
		href: 'input-number'
	},
	{
		name: 'Transfer 穿梭框',
		href: 'input-number'
	}
]
</script>

<template>
	<div class="side-nav">
		<ul>
			<li class="nav-item">
				<a class="nav-item-title" href="#/zh-CN/component/changelog">更新日志</a>
			</li>
			<li class="nav-item">
				<a class="nav-item-title">组件</a>
				<div class="nav-group">
					<ul class="pure-menu-list" style="height: auto">
						<li class="nav-item" v-for="(item, index) in menuList" :key="index">
							<a class="nav-item-send" :href="item.href">{{item.name}}</a>
						</li>
					</ul>
				</div>
			</li>
		</ul>
	</div>
</template>

<style scoped lang="less">
.side-nav {
	width: 240px;
	padding-top: 50px;
	.nav-item {
		.nav-item-title {
			font-size: 16px;
			color: #333;
			line-height: 40px;
			height: 40px;
			margin: 0;
			padding: 0;
			text-decoration: none;
			display: block;
			position: relative;
			transition: 0.15s ease-out;
			font-weight: 700;
		}
		.nav-item-send {
			display: block;
			height: 40px;
			color: #444;
			line-height: 40px;
			font-size: 14px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			font-weight: 400;
		}
	}
}
</style>
