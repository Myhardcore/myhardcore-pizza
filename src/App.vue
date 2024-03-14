<script setup>

import TheHeader from './components/UI/TheHeader.vue'
import CardList from '@/components/CardList.vue'
import Drawer from '@/components/Drawer.vue'
import FilterAndSearch from '@/components/FilterAndSearch.vue'
import { useCartStore } from '@/store/CartStore.js'


</script>

<template>
	<div class="fixed top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] w-full h-full bg-gray-200">
	</div>
		<keep-alive>
			<Drawer v-if="useCartStore().getCartIsOpened" />
		</keep-alive>
		
		<div class="bg-white w-4/5 m-auto rounded-xl shadow-3xl relative mb-20 border border-pinky-pink mt-20">
			<TheHeader />
			<FilterAndSearch />
			<CardList v-auto-animate />
		</div>
	
</template>

<style scoped>

</style>
