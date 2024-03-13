<script setup>
defineProps(['title', 'price', 'imgUrl']);
defineEmits(['removeFromCart']);

</script>

<template>

    <div class="flex  border border-slate-200 p-4 rounded-xl items-center gap-4">
        <img class="w-16 h-16" :src="imgUrl" :alt="title">

        <div class="flex flex-col w-full">
            <p>{{ title }}</p>

            <div class="flex justify-between mt-2">
                <b>{{ price }} $</b>
                <img class="opacity-40 hover:opacity-100 transition cursor-pointer" src="/close.svg" alt="close" @click="$emit('removeFromCart')">
            </div>

        </div>
    </div>

</template>

<style scoped>

</style>