<script setup>
import TheCard from '@/components/UI/TheCard.vue'
import { usePizzaStore } from '@/store/PizzaStore'
import { computed } from 'vue'
import { useCartStore } from '@/store/CartStore.js'
import { useAuthStore } from '@/store/AuthStore.js'

const pizzaStore = usePizzaStore()
const cartStore = useCartStore()
cartStore.fetchCartItems()

const items = computed(() => pizzaStore.getItems)


</script>

<template>
	
	<div class="grid grid-cols-4 gap-5 p-8 ">
		<TheCard v-for="item in items"
				 :key="item.id"
				 :imgUrl="item.imageUrl"
				 :isAdded="item.itemIsAdded"
				 :isFavorite="item.isFavorite"
				 :price="item.price"
				 :title="item.title.toUpperCase()"
				 @addToCart="cartStore.addToCart(item)"
				 @addToFavorite="pizzaStore.addToFavorites(item)"
				 @quick-view="pizzaStore.quickView(item)" />
		
		<div v-if="items.length === 0 && usePizzaStore().itemsLoaded" class="font-semibold text-blacky-black">No such pitsa, bruuh. Try another
			search...
		</div>
		
	</div>

</template>

<style scoped>

</style>