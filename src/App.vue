<script setup>

import TheHeader from './components/UI/TheHeader.vue'
import CardList from '@/components/CardList.vue'
import Drawer from '@/components/Drawer.vue'
import FilterAndSearch from '@/components/FilterAndSearch.vue'

</script>

<template>
	<!--    <Drawer />-->
	<div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
		<TheHeader />
		<FilterAndSearch/>
		<div class="mt-10">
			<CardList v-auto-animate/>
		</div>
	</div>
</template>

<style scoped>

</style>
