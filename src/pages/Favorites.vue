<script setup>
import { usePizzaStore } from '@/store/PizzaStore.js'
import { computed } from 'vue'
import { useCartStore } from '@/store/CartStore.js'
import TheCard from '@/components/UI/TheCard.vue'

const pizzaStore = usePizzaStore()
pizzaStore.fetchFavorites()
pizzaStore.fetchItems()
const items = computed(() => pizzaStore.getItems)
const favoriteItems = computed(() => items.value.filter(item => item.isFavorite))


</script>

<template>
	<div class="p-10 h-screen">
		<h2 class="text-3xl mb-8 uppercase text-pinky-pink font-extrabold">My favorites</h2>
		<div class="grid grid-cols-4 gap-5 p-8 ">
			<TheCard v-for="item in favoriteItems"
					 :key="item.id"
					 :imgUrl="item.imageUrl"
					 :isAdded="item.itemIsAdded"
					 :isFavorite="item.isFavorite"
					 :price="item.price"
					 :title="item.title.toUpperCase()"
					 @addToCart="useCartStore().addToCart(item)"
					 @addToFavorite="pizzaStore.addToFavorites(item)" />
		</div>
	</div>
</template>

<style scoped>

</style>