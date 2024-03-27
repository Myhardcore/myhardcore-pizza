<script setup>

import CartItemList from '@/components/UI/CartItemList.vue'
import { useCartStore } from '@/store/CartStore.js'

import { computed } from 'vue'

function closeCart() {
	useCartStore().toggleCart()
	useCartStore().orderCreated = false
	document.body.classList.toggle('overflow-y-hidden') // TODO Костыли???
}

const totalPrice = computed(() => useCartStore().getCartTotalPrice)
const cartTax = computed(() => Math.round((useCartStore().getCartTotalPrice * 0.2) * 100) / 100)

</script>

<template>
	<!-- Обертка + верхушка корзины-->
	<div class="fixed top-0 left-0 h-full w-full bg-pinky-pink z-20 opacity-40 " @click="closeCart"></div>
	<div class="bg-white w-1/4 fixed right-0 top-0 bottom-0 z-20 p-8 border-l border-pinky-pink overflow-y-scroll" >
		<h2 class="text-2xl font-bold mb-8 text-pinky-pink">Cart</h2>
		<!-- Рендер итемов в корзине-->
		<CartItemList v-auto-animate />
		
		
		<!-- Детали корзины-->
		<div v-if="useCartStore().getCartItems.length === 0 && !useCartStore().orderCreated"
			 class="flex flex-col justify-center gap-4 items-center h-full">
			<img alt="empty cart" class="max-w-56" src="/empty-cart.png">
			<p class="font-bold text-pinky-pink text-2xl">Your cart is empty</p>
			<p class=" text-blacky-black ">Please add at least one pitsa to create new order</p>
		</div>
		<div v-else-if="useCartStore().orderCreated"
			 class="flex flex-col justify-center gap-4 items-center h-full">
			<img alt="order success" class="max-w-56" src="/order-success.png">
			<p class="font-bold text-pinky-pink text-2xl">Thank you for your order!</p>
			<p class=" text-blacky-black ">
				You can go to your
				<router-link to="/profile" class="bg-pinky-pink p-1 rounded text-white" @click="closeCart">Profile</router-link>
				to check your recent orders. </p>
		</div>
		<div v-else class="flex flex-col gap-4 my-7 ">
			<div class="flex gap-2">
				<span class="text-blacky-black">Total</span>
				<div class="flex-1 border-b border-dashed"></div>
				<b class="text-blacky-black">{{ totalPrice }} $</b>
			</div>
			
			<div class="flex gap-2">
				<span class="text-blacky-black">Tax 20%</span>
				<div class="flex-1 border-b border-dashed"></div>
				<b class="text-blacky-black">{{ cartTax }}$</b>
			</div>
			
			<button :disabled="totalPrice === 0" class="mt-5 bg-pinky-pink w-full rounded-xl py-3 hover:bg-green-600
					active:bg-green-400 disabled:bg-gray-200 transition cursor-pointer
					text-gray-50"
					@click="useCartStore().createOrder()"> Checkout
			</button>
		
		</div>
	</div>


</template>

<style scoped>

</style>