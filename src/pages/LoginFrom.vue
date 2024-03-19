<script setup>
import { ref, computed } from 'vue'

const email = ref('');
const phone = ref('');
const password = ref('');
const formIsValid = ref(true);
const mode = ref('login');
const formCaption = ref('Welcome back!');

const submitButtonCaption = computed(() => {
if(mode.value === 'login') {
	return 'Login'
} else {
	return 'Signup'
}
});
const switchModeButtonCaption = computed(() => {
if(mode.value === 'login') {
	return 'Create an account'
} else{
	return 'Login'
}
})
function submitForm() {
	this.formIsValid = true
	if(email.value === '' || !email.value.includes('@') || password.value.length < 6) {
		formIsValid.value = false;
		return;
	}
//send http request
}

function switchAuthMode() {
	if(mode.value === 'login') {
		mode.value = 'signup';
		formCaption.value = 'Create an account'
	} else {
		mode.value = 'login';
		formCaption.value = 'Welcome back!'
	}

}

</script>

<template>
	<div class="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
		<div class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md border border-pinky-pink">
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
				
				<div class="mb-4" v-if="mode === 'signup'">
					<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" for="phone">Phone number</label>
					<input id="phone"
						   v-model.trim="phone"
						   class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-pinky-pink	 border-dashed"
						   placeholder="Enter your phone"
						   required type="tel">
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
				
<!--				remember me + create acc-->
				<div class="flex items-center justify-between mb-4">
					<div class="flex items-center">
						<input id="remember" checked
							   class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"
							   type="checkbox">
						<label class="ml-2 block text-sm text-gray-700 dark:text-gray-300" for="remember">Remember
							me</label>
					</div>
					<a class="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					   href="#"
					   @click="switchAuthMode">
						{{ switchModeButtonCaption }}</a>
				</div>
				<p v-if="!formIsValid">Please enter a valid email and password</p>
				
<!--				submit button-->
				<button class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pinky-pink hover:bg-pinky-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit"
						@click="alert('Login')">
					{{ submitButtonCaption }}
				</button>
			</form>
		</div>
	</div>
</template>

<style scoped>

</style>