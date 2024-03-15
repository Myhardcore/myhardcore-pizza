<script setup>

import CardList from '@/components/CardList.vue'
import FilterAndSearch from '@/components/FilterAndSearch.vue'
import TheSwiper from '@/components/UI/TheSwiper.vue'


</script>

<template>
	<TheSwiper />
	<FilterAndSearch />
	<CardList v-auto-animate />
</template>

<style scoped>

</style>
