<script setup lang="ts">
import SideNav from "./components/SideNav.vue";
</script>

<template>
	<div class="content-box">
		<SideNav />
		<section class="section">
			<router-view></router-view>
		</section>
	</div>
</template>

<style></style>
