<script setup>

import CardList from '@/components/CardList.vue'
import FilterAndSearch from '@/components/FilterAndSearch.vue'
import TheSwiper from '@/components/UI/TheSwiper.vue'
import ProgressBar from '@/components/UI/ProgressBar.vue'
import { usePizzaStore } from '@/store/PizzaStore.js'
import FooterPage from '@/App.vue'


</script>

<template>
	<TheSwiper />
	<FilterAndSearch />
	<ProgressBar v-if="!usePizzaStore().itemsLoaded"/>
	<CardList v-auto-animate />
	
	
</template>

<style scoped>

</style>
