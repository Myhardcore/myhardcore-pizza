<script setup>

defineEmits(['addToFavorite', 'addToCart', 'quickView']);
defineProps({
	title: String,
	price: Number,
	imgUrl: String,
	isFavorite: Boolean,
	isAdded: Boolean

})

</script>

<template>
		<div class=" relative bg-white border border-pinky-pink rounded-3xl p-8 cursor-fancy hover:-translate-y-2 hover:shadow-xl transition ">
			<img :src="isFavorite ? '/like-2.svg' : '/like-1.svg'" alt="like 2"
				 class="absolute top-8 left-8" @click="$emit('addToFavorite')">
			<img :src="imgUrl" alt="Pizza country" @click="$emit('quickView')">
			<p class="mt-2 text-pinky-pink font-extrabold text-xl"> {{ title }}</p>
			<div class="flex justify-between mt-5">
				<div class="flex flex-col">
					<span class="text-lovely-gray"> Price </span>
					<span class="font-bold text-blacky-black"> {{ price }} $ </span>
				</div>
				<img @click="$emit('addToCart')" :src="isAdded ? '/checked.svg' : '/plus.svg'" alt="Plus">
			</div>
	</div>
</template>

<style scoped>

</style>