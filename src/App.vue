<script setup>

import TheHeader from './components/UI/TheHeader.vue'
import Drawer from '@/components/Drawer.vue'
import { useCartStore } from '@/store/CartStore.js'

</script>

<template>
	
	
	<div class="fixed top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] w-full h-full bg-gray-200" id="background">
	</div>
	
	<Drawer v-if="useCartStore().getCartIsOpened" />
	
	
	<div class="bg-white w-4/5 m-auto rounded-xl shadow-3xl relative mb-10 border border-pinky-pink mt-10">
		<TheHeader />
		<router-view></router-view>
	
	</div>

</template>

<style scoped>

</style>
