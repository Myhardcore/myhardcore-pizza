<script setup>

import CartItemList from "@/components/UI/CartItemList.vue";
</script>

<template>
    <!-- Обертка + верхушка корзины-->
    <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
    <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">
        <h2 class="text-2xl font-bold mb-8">Cart</h2>
        <!-- Рендер итемов в корзине-->
        <CartItemList/>


        <!-- Детали корзины-->
        <div class="flex flex-col gap-4 my-7">
            <div class="flex gap-2">
                <span>Total</span>
                <div class="flex-1 border-b border-dashed"></div>
                <b>18 $</b>
            </div>

            <div class="flex gap-2">
                <span>Tax 20%</span>
                <div class="flex-1 border-b border-dashed"></div>
                <b>5$</b>
            </div>

            <button disabled="" class="mt-5 bg-amber-500 w-full rounded-xl py-3 hover:bg-amber-600 active:bg-amber-700 disabled:bg-slate-300 transition cursor-pointer"> Checkout</button>

        </div>
    </div>




</template>

<style scoped>

</style>