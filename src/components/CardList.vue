<script setup>
import TheCard from '@/components/UI/TheCard.vue'
import { usePizzaStore } from '@/store/PizzaStore'
import { computed } from 'vue'

const pizzaStore = usePizzaStore();
pizzaStore.fetchFavorites();
pizzaStore.fetchItems('title', '');
const items = computed(() => pizzaStore.getItems);


</script>

<template>
	<div class="grid grid-cols-4 gap-5 p-8 ">
		<TheCard v-for="item in items"
				 :key="item.id"
				 :imgUrl="item.imageUrl"
				 :isFavorite="item.isFavorite"
				 :price="item.price"
				 :title="item.title"
				 @addToFavorite="pizzaStore.addToFavorites(item)" />
	</div>
</template>

<style scoped>

</style>