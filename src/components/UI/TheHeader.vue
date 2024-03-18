<script setup>
import { useCartStore } from '@/store/CartStore.js'
import { computed } from 'vue'

const cartStore = useCartStore();

function openCart() {
	cartStore.toggleCart()
	document.body.classList.toggle('overflow-y-hidden') // TODO Костыли???
}

const totalPrice = computed(() => cartStore.getCartTotalPrice)

//TODO еще жесткие костыли!
window.addEventListener('scroll', function() {
	if (window.scrollY > 80) {
		document.querySelector('header > div').classList.remove('rounded-t-xl', 'py-5')
	} else {
		document.querySelector('header > div').classList.add('rounded-t-xl', 'py-5' )
	}
})

</script>

<template>
	<header
		  class="sticky top-0 z-10 " style="height:136px;">
		<div class="flex justify-between px-10 py-5 border-b border-pinky-pink bg-white rounded-t-xl transition-all duration-200 ">
		<div class=" items-center gap-4">
			<router-link to="/home"><img alt="Logo" class="w-1/3" src="/logo3.png"/></router-link>
		</div>
		
		<ul class="flex gap-10 items-center">
			<li class="flex items-center gap-4 cursor-pointer text-blacky-black hover:text-pinky-pink ">
				<img alt="home" class="w-6" src="/home.png">
				<router-link class="active:text-pinky-pink active:underline underline-offset-8" to="/home"> Home
				</router-link>
			</li>
			<li class="flex items-center gap-3 cursor-pointer text-blacky-black hover:text-pinky-pink">
				<img alt="favorites" class="w-6" src="/heart.png">
				<router-link class="active:text-pinky-pink active:underline underline-offset-8" to="/favorites">
					Favorite
				</router-link>
			</li>
			<li class="flex items-center gap-4 cursor-pointer text-blacky-black hover:text-pinky-pink"
				@click="openCart">
				<img alt="cart" class="w-6" src="/cart.png">
				<span>Open Cart ({{ totalPrice }} $)</span>
			</li>
			<li class="flex items-center gap-4 cursor-pointer text-blacky-black hover:text-pinky-pink ">
				<img alt="profile" class="w-6 " src="/profile.png">
				<span>Profile</span>
			</li>
		</ul>
		</div>
	</header>
</template>

<style scoped>
</style>