<script setup>

import { usePizzaStore } from '@/store/PizzaStore.js'
import { reactive } from 'vue'

const store = usePizzaStore()

const filters = reactive({
	sortBy: 'title',
	searchInput: ''
})

function sortByPrice() {
	store.fetchItems(filters.sortBy, filters.searchInput)
}

function filterItems() {
	store.fetchItems(filters.sortBy, filters.searchInput)
}

</script>

<template>
	<div class="p-10">
		<div class="flex justify-between items-center">
			<h2 class="text-3xl font-bold mb-8 uppercase">All pizzas</h2>

			<div class="flex gap-4">
				<select v-model="filters.sortBy" class="py-2 px-3 border rounded-md outline-none" @change="sortByPrice">
					<option value="title">All</option>
					<option value="price">Cheapest</option>
					<option value="-price">Expensive</option>
				</select>

				<div class="relative">
					<img alt="" class="absolute left-3 top-3" src="/search.svg">
					<input
						  v-model="filters.searchInput"
						  class="border rounded-md py-2 pl-12 pr-4 outline-none focus:border-gray-400"
						  placeholder="search..."
						  type="text"
						  @keyup="filterItems" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>