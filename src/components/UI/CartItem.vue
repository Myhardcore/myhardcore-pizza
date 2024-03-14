<script setup>
const props = defineProps(['title', 'price', 'imgUrl', 'id'])
defineEmits(['removeFromCart', 'itemIncrement']);
import { useCartStore } from '@/store/CartStore.js'
import { ref } from 'vue'
const count = ref(1);

function increment() {
	count.value++;
	useCartStore().counterValue( props.id, 'inc')
}

function decrement() {
	if (count.value > 1){
		count.value--;
		useCartStore().counterValue( props.id, 'dec')
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
					<p @click="decrement" class="cursor-pointer font-bold">-</p>
					<p class=" border pr-2 pl-2 border-pinky-pink rounded-md">{{ count }}</p>
					<p @click="increment" class="cursor-pointer font-bold">+</p>
				</div>
				
				<img alt="close" class="opacity-40 hover:opacity-100 transition cursor-pointer" src="/close.svg"
					 @click="$emit('removeFromCart')">
			</div>
		
		</div>
	</div>

</template>

<style scoped>

</style>