<script setup>
import CartItem from '@/components/UI/CartItem.vue'
import { useCartStore } from '@/store/CartStore.js'
import { usePizzaStore } from '@/store/PizzaStore.js'
import { computed } from 'vue'

const cartStore = useCartStore()
cartStore.fetchCartItems()
const cartItems = computed(() => cartStore.getCartItems)

function removeFromCart(item) {
	usePizzaStore().fetchItems('title', '')
	cartStore.addToCart(item)
}


</script>

<template>
	<div class="flex flex-col gap-4">
		<CartItem v-for="item in cartItems"
				  :id="item.id"
				  :key="item.id"
				  :imgUrl="item.imageUrl"
				  :price="item.price"
				  :title="item.title"
				  @remove-from-cart="removeFromCart(item)"
		/>
	</div>
</template>

<style scoped>

</style>