<script setup>
import { ref, computed } from 'vue'
import { useAuthStore } from '@/store/AuthStore.js'

const email = ref('')
const password = ref('')
const formIsValid = ref(true)
const mode = ref('login')
const formCaption = ref('Welcome back!')
const authStore = useAuthStore()

const submitButtonCaption = computed(() => {
	if (mode.value === 'login') {
		return 'Login'
	} else {
		return 'Signup'
	}
})
function submitForm() {
	
	formIsValid.value = true
	if (email.value === '' || !email.value.includes('@') || password.value.length < 6) {
		formIsValid.value = false
		return
	} else {
		if (mode.value === 'signup') {
			authStore.registerUser(email.value, password.value)
		}
		if (mode.value === 'login') {
			authStore.loginUser(email.value, password.value)
		}
	}
}
function switchMode(newMode) {
	mode.value = newMode;
	if (newMode === 'signup') {
		formCaption.value = 'Welcome!'
	} else {
		formCaption.value = 'Welcome Back!'
	}
}

</script>

<template>
<!--	mode switcher -->
	<div class="max-w-md mx-auto mb-5 mt-10">
		<div class="bg-white">
			<nav class="flex flex-col sm:flex-row justify-center">
				<button
					  class=" py-4 px-6 block hover:text-pinky-dark focus:outline-none border-b-2 font-medium"
					  :class="{ 'text-pinky-pink': mode === 'login', 'border-pinky-pink': mode === 'login', 'text-gray-600': mode === 'signup' }"
					  @click="switchMode('login')"
				>
					Login
				</button>
				<button
					  class=" py-4 px-6 block hover:text-pinky-dark focus:outline-none border-b-2 font-medium"
					  :class="{'text-pinky-pink': mode === 'signup', 'border-pinky-pink': mode === 'signup', 'text-gray-600': mode === 'login' }"
					  @click="switchMode('signup')"
				>
					Sign up
				</button>
			</nav>
		</div>
	</div>
	
<!--	form -->
	<div class=" flex items-center justify-center w-full dark:bg-gray-950">
		<div class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md border border-pinky-pink mb-48">
			<h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200"> {{ formCaption }}</h1>
			
			<form @submit.prevent="submitForm">
				
				<!--				email-->
				<div class="mb-4">
					<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 " for="email">Email
						Address</label>
					<input id="email"
						   v-model.trim="email"
						   class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-pinky-pink border-dashed"
						   placeholder="your@email.com"
						   required type="email">
				</div>
				
				<!--				password-->
				<div class="mb-4">
					<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" for="password">Password</label>
					<input id="password"
						   v-model.trim="password"
						   class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-pinky-pink	 border-dashed"
						   placeholder="Enter your password"
						   required type="password">
					<a class="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					   href="#">Forgot Password?</a>
				</div>
				
				<p v-if="!formIsValid">Please enter a valid email and password</p>
				<!--				submit button-->
				<button
					  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pinky-pink hover:bg-pinky-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					  type="submit">
					{{ submitButtonCaption }}
				</button>
			</form>
		</div>
	</div>
</template>

<style scoped>
</style>