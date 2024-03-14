<script setup>
import { useCartStore } from '@/store/CartStore.js'
import { computed } from 'vue'

const cartStore = useCartStore();
function openCart() {
	cartStore.toggleCart()
}
const totalPrice = computed(() => cartStore.getCartTotalPrice)
</script>

<template>
    <header class="sticky top-0 z-10 flex justify-between px-10 py-4 border-b border-pinky-pink bg-white rounded-t-xl">

        <div class=" items-center gap-4">
            <img src="/logo3.png" alt="Logo" class="w-1/3">
            
        </div>

        <ul class="flex gap-10 items-center">
            <li @click="openCart" class="flex items-center gap-4 cursor-pointer text-blacky-black hover:text-pinky-pink" >
                <img  src="/cart.svg" alt="cart">
                <span>Open Cart ({{ totalPrice }} $)</span>
            </li>
            <li class="flex items-center gap-3 cursor-pointer text-blacky-black hover:text-pinky-pink  ">
                <img src="/heart.svg" alt="favorites">
                <span>Favorite</span>
            </li>
            <li class="flex items-center gap-4 cursor-pointer text-blacky-black hover:text-pinky-pink ">
                <img src="/profile.svg" alt="profile">
                <span>Profile</span>
            </li>
        </ul>
    </header>
</template>

<style scoped>

</style>