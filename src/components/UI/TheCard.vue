<script setup>

defineProps({
  title: String,
  price: Number,
  imgUrl: String,

})

</script>

<template>
    <div>
        <div class=" relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition">
            <img @click="$emit('addToFavorite')" class="absolute top-8 left-8" :src="null ? '/like-2.svg' : '/like-1.svg'" alt="like 2" >
            <img :src="imgUrl" alt="Pizza country" >
            <p class="mt-2"> {{ title }}</p>
            <div class="flex justify-between mt-5">
                <div class="flex flex-col">
                    <span class="text-slate-400"> Price </span>
                    <span class="font-bold"> {{ price }} $ </span>
                </div>
                <img @click="null" :src="isAdded ? '/checked.svg' : '/plus.svg'" alt="Plus">
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>