<script setup>
const props = defineProps(['title', 'price', 'imgUrl', 'id'])
defineEmits(['removeFromCart', 'itemIncrement'])
import { useCartStore } from '@/store/CartStore.js'
import { ref } from 'vue'

const count = ref(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).filter(item => item.id === props.id)[0].count : 1)

function increment() {
	count.value++
	useCartStore().counterValue(props.id, 'inc')
}

function decrement() {
	if (count.value > 1) {
		count.value--
		useCartStore().counterValue(props.id, 'dec')
	}
	
}

</script>

<template>
	
	<div class="flex  border border-pinky-pink p-4 rounded-xl items-center gap-4">
		<img :alt="title" :src="imgUrl" class="w-16 h-16">
		
		<div class="flex flex-col w-full">
			<p class="">{{ title }}</p>
			
			<div class="flex justify-between mt-2 items-center">
				<b>{{ price }} $</b>
				<div class="flex gap-4 items-center">
					<p class="cursor-pointer font-bold" @click="decrement">-</p>
					<p class=" border pr-2 pl-2 border-pinky-pink rounded-md">{{ count }}</p>
					<p class="cursor-pointer font-bold" @click="increment">+</p>
				</div>
				
				<span class="cursor-pointer p-2 transition-all hover:bg-pinky-pink/30 rounded active:bg-pinky-dark/20">
            		<svg class="w-5 h-5" viewBox="0 0 24 24"
						 xmlns="http://www.w3.org/2000/svg" @click="$emit('removeFromCart', id)">
						<path clip-rule="evenodd"
							  d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
							  fill-rule="evenodd"></path>
					</svg>
          		</span>
			</div>
		
		</div>
	</div>

</template>

<style scoped>

</style>