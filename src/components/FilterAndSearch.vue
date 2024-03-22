<script setup>

import { usePizzaStore } from '@/store/PizzaStore.js'
import {  reactive } from 'vue'

const store = usePizzaStore()

const filters = reactive({
	sortBy: 'title',
	searchInput: ''
})

function sortByPrice() {
	store.sortByPrice(filters.sortBy, filters.searchInput)
}

function filterItems() {
	store.filterItems(filters.searchInput)
}
</script>

<template>
	
	<div class="p-10">
		<div class="flex justify-between items-center">
			<h2 class="text-3xl mb-8 uppercase text-pinky-pink font-extrabold">All pizzas</h2>

			<div class="flex gap-4">
				
				<select v-model="filters.sortBy" class="py-2 px-3 border rounded-md outline-none border-pinky-pink focus:border-dashed" @change="sortByPrice">
					<option value="title">By name</option>
					<option value="asc">Cheap first</option>
					<option value="desc">Expensive first</option>
				</select>

				<div class="relative">
					<img alt="" class="absolute left-3 top-3 " src="/search.svg">
					<input
						  v-model="filters.searchInput"
						  class="border rounded-md py-2 pl-12 pr-4 outline-none focus:border-dashed border-pinky-pink"
						  placeholder="search..."
						  type="text"
						  @input="filterItems" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>

