<script setup>

import TheHeader from './components/UI/TheHeader.vue'
import Drawer from '@/components/Drawer.vue'
import { useCartStore } from '@/store/CartStore.js'
import { useAuthStore } from '@/store/AuthStore.js'
import { onMounted } from 'vue'
import ItemQuickview from '@/components/UI/ItemQuickview.vue'
import { usePizzaStore } from '@/store/PizzaStore.js'

onMounted( ()=>{
	useAuthStore().init()
	localStorage.getItem('cart') === null ? localStorage.setItem('cart', JSON.stringify([])) : ''
})

</script>

<template>
	
	
	<div class="fixed bg-repeat top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] w-full h-full bg-lovely-gray" style="background-image: url(/bg-text.svg) " >
	</div>
	
	<Drawer v-if="useCartStore().getCartIsOpened" />
	
	
	
	<div class="bg-white w-4/5 m-auto rounded-xl shadow-3xl relative mb-10 border border-pinky-pink mt-10 min-h-screen">
		<ItemQuickview v-if="usePizzaStore().getQuickViewItem"></ItemQuickview>
		<TheHeader />
		<router-view></router-view>
	
	</div>

</template>

<style>
</style>
