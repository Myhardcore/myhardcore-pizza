<script setup>
import { useCartStore } from '@/store/CartStore.js'
import { computed } from 'vue'
import moment from 'moment'

useCartStore().fetchOrders()
const items = computed(() => useCartStore().getOrderItems)

console.log(items)
</script>

<template>
	<div class="p-10 ">
		<h2 class="text-3xl mb-8 uppercase text-pinky-pink font-extrabold">My orders</h2>
		<div class="font-medium" v-if="items.length === 0">No orders yet. Add some tasty pitsa to your cart...</div>
		<div v-for="order in items"
			 :key="order" class=" relative bg-white border border-pinky-pink rounded-3xl p-4 mb-4">
			<div class="text-lovely-gray mt-2 ml-3 mb-4">
				{{moment.unix(order.date.seconds).format('Do MMMM YYYY')}}
			</div>
			<div v-for="item in order.items" :key="item">
				
				<div class="relative bg-white grid-cols-4 grid gap-4">
					<div class="flex items-center">
						<img :src="item.imageUrl" alt="Pizza country" class="w-16 h-16 mr-10">
						<p class="text-pinky-pink font-extrabold text-xl"> {{ item.title }}</p>
					</div>
					<div class=" flex-col mx-auto">
						<div class="text-lovely-gray mt-2"> Price</div>
						<div class="font-bold text-blacky-black"> {{ item.price }} $</div>
					</div>
					
					<div class=" flex-col mx-auto">
						<div class="text-lovely-gray mt-2"> Count</div>
						<div class="font-bold text-blacky-black flex justify-center"> {{ item.count }}</div>
					</div>
					
					<div class=" flex-col mx-auto">
						<div class="text-lovely-gray mt-2"> Total</div>
						<div class="font-bold text-blacky-black flex justify-center"> {{ item.count * item.price }} $</div>
					</div>
				</div>
			</div>
			<div class="font-bold text-blacky-black flex mr-5 mt-10 justify-end border-t border-dashed border-lovely-gray pt-5">Total price: {{order.totalPrice}} $</div>
		
		</div>
	
	</div>

</template>

<style scoped>

</style>