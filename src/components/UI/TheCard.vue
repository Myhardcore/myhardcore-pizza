<script setup>
defineEmits(['addToFavorite']);
defineProps({
	title: String,
	price: Number,
	imgUrl: String,
	isFavorite: Boolean

})

</script>

<template>
	<div>
		<div class=" relative bg-white border border-slate-200 rounded-3xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition ">
			<img :src="isFavorite ? '/like-2.svg' : '/like-1.svg'" alt="like 2"
				 class="absolute top-8 left-8" @click="$emit('addToFavorite')">
			<img :src="imgUrl" alt="Pizza country">
			<p class="mt-2"> {{ title }}</p>
			<div class="flex justify-between mt-5">
				<div class="flex flex-col">
					<span class="text-slate-400"> Price </span>
					<span class="font-bold"> {{ price }} $ </span>
				</div>
				<img :src="isAdded ? '/checked.svg' : '/plus.svg'" alt="Plus" @click="null">
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>