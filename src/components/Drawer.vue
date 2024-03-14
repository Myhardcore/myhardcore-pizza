<script setup>

import CartItemList from "@/components/UI/CartItemList.vue";
import { useCartStore } from '@/store/CartStore.js'
import { computed } from 'vue'
function closeCart(){
	useCartStore().toggleCart()
}
const totalPrice = computed(() => useCartStore().getCartTotalPrice)
const cartTax = computed(() => Math.round((useCartStore().getCartTotalPrice * 0.2) * 100) / 100)
</script>

<template>
    <!-- Обертка + верхушка корзины-->
    <div @click="closeCart" class="fixed top-0 left-0 h-full w-full bg-pinky-pink z-20 opacity-40 overflow-y-hidden"></div>
    <div class="bg-white w-1/4 h-full fixed right-0 top-0 z-20 p-8 border-l border-pinky-pink overflow-y-hidden" >
        <h2 class="text-2xl font-bold mb-8 text-pinky-pink">Cart</h2>
        <!-- Рендер итемов в корзине-->
        <CartItemList v-auto-animate/>


        <!-- Детали корзины-->
        <div class="flex flex-col gap-4 my-7">
            <div class="flex gap-2">
                <span class="text-blacky-black">Total</span>
                <div class="flex-1 border-b border-dashed"></div>
                <b class="text-blacky-black">{{ totalPrice }} $</b>
            </div>

            <div class="flex gap-2">
                <span class="text-blacky-black">Tax 20%</span>
                <div class="flex-1 border-b border-dashed"></div>
                <b class="text-blacky-black">{{ cartTax }}$</b>
            </div>

            <button @click="useCartStore().createOrder()" :disabled="totalPrice === 0" class="mt-5 bg-pinky-pink w-full rounded-xl py-3 hover:bg-green-600 active:bg-green-400 disabled:bg-gray-200 transition cursor-pointer text-gray-50"> Checkout</button>

        </div>
    </div>




</template>

<style scoped>

</style>