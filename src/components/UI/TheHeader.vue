<script setup>

</script>

<template>
    <header class="flex justify-between px-10 py-8 border-b border-slate-200">

        <div class="flex items-center gap-4">
            <img src="/logo.png" alt="Logo" class="size-20">
            <div >
                <h2 class="font-bold">MYHARDCORE PIZZA</h2>
                <p class="text-slate-500">Best pizza all around</p>
            </div>
        </div>

        <ul class="flex gap-10 items-center" >
            <li class="flex items-center gap-4 cursor-pointer text-gray-500 hover:text-amber-600">
                <img src="/cart.svg" alt="cart">
                <b>1205 $</b>
            </li>
            <li class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-amber-600  ">
                <img src="/heart.svg" alt="favorites">
                <span>Favorite</span>
            </li>
            <li class="flex items-center gap-4 cursor-pointer text-gray-500 hover:text-amber-600 ">
                <img src="/profile.svg" alt="profile">
                <span>Profile</span>
            </li>
        </ul>
    </header>
</template>

<style scoped>

</style>