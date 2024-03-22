<script setup>
import TheCard from '@/components/UI/TheCard.vue'
import { usePizzaStore } from '@/store/PizzaStore'
import { computed, onMounted } from 'vue'
import { useCartStore } from '@/store/CartStore.js'
import { useAuthStore } from '@/store/AuthStore.js'

const pizzaStore = usePizzaStore()
const cartStore = useCartStore()
cartStore.fetchCartItems()
onMounted(()=>{
	useAuthStore().init()
})

const items = computed(() => pizzaStore.getItems)
console.log(items.value)

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
				 @addToFavorite="pizzaStore.addToFavorites(item)" />
	</div>
</template>

<style scoped>

</style>