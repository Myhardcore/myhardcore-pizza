<script setup>
import CartItem from '@/components/UI/CartItem.vue'
import { useCartStore } from '@/store/CartStore.js'
import { computed } from 'vue'

const cartStore = useCartStore()
const cartItems = computed(() => cartStore.getCartItems)
</script>

<template>
	<div class="flex flex-col gap-4">
		<CartItem v-for="item in cartItems"
				  :key="item.id"
				  :imgUrl="item.imageUrl"
				  :price="item.price"
				  :title="item.title"
				  :id="item.id"
				  @remove-from-cart="cartStore.addToCart(item)"
		/>
	</div>
</template>

<style scoped>

</style>