<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
	<TransitionRoot :show="usePizzaStore().openQuickView" as="template">
		<Dialog as="div" class="relative z-10 " @close="usePizzaStore().openQuickView=false">
			<TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
							 leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
				<div class="fixed inset-0 hidden bg-pinky-pink opacity-40 transition-opacity md:block " />
			</TransitionChild>
			
			<div class="fixed inset-0 z-10 w-screen overflow-y-auto ">
				<div class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
					<TransitionChild as="template" enter="ease-out duration-300"
									 enter-from="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
									 enter-to="opacity-100 translate-y-0 md:scale-100" leave="ease-in duration-200"
									 leave-from="opacity-100 translate-y-0 md:scale-100"
									 leave-to="opacity-0 translate-y-4 md:translate-y-0 md:scale-95">
						<DialogPanel
							  class="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
							<div class=" rounded-xl relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 border border-pinky-pink">
								<button
									  class="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
									  type="button"
									  @click="usePizzaStore().openQuickView=false">
									<span class="sr-only">Close</span>
									<XMarkIcon aria-hidden="true" class="h-6 w-6" />
								</button>
								
								<div class="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8 ">
									<div class="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg  sm:col-span-4 lg:col-span-5 h-full flex items-center">
										<img :alt="product.imageAlt" :src="item.imageUrl"
											 class="object-cover object-center " />
									</div>
									<div class="sm:col-span-8 lg:col-span-7">
										<h2 class="text-2xl font-extrabold uppercase text-gray-900 sm:pr-12 text-pinky-pink">
											{{ item.title }}</h2>
										
										<section aria-labelledby="information-heading" class="mt-2">
											<h3 id="information-heading" class="sr-only">Product information</h3>
											
											<p class="text-2xl text-gray-900 font-bold">$ {{ item.price }}</p>
											
											<!--											&lt;!&ndash; Reviews &ndash;&gt;-->
											<!--											<div class="mt-6">-->
											<!--												<h4 class="sr-only">Reviews</h4>-->
											<!--												<div class="flex items-center">-->
											<!--													<div class="flex items-center">-->
											<!--														<StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[product.rating > rating ? 'text-gray-900' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']" aria-hidden="true" />-->
											<!--													</div>-->
											<!--													<p class="sr-only">{{ product.rating }} out of 5 stars</p>-->
											<!--													<a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{{ product.reviewCount }} reviews</a>-->
											<!--												</div>-->
											<!--											</div>-->
										</section>
										
										<section aria-labelledby="options-heading" class="mt-10">
											<h3 id="options-heading" class="sr-only">Product options</h3>
											
											<form @submit.prevent="quickAddToCart(item)">
												<!-- sizes -->
												<div>
													<h4 class="text-md font-medium text-gray-900">Сhoose pizza dough
													</h4>
													
													<RadioGroup v-model="selectedColor" class="mt-4">
														
														<span class="flex items-center space-x-3">
                              <RadioGroupOption v-for="color in product.colors" :key="color.name"
												v-slot="{ active, checked }"
												:value="color" as="template">
                                <div :class="[color.selectedClass, active && checked ? 'border border-pinky-pink' : '',!active && checked ? 'border border-pinky-pink' : '', 'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-3 border border-gray-300']"> {{ color.name }}
                                  <RadioGroupLabel as="span" class="sr-only">{{ color.name }}</RadioGroupLabel>
                                  
                                </div>
                              </RadioGroupOption>
                            </span>
													</RadioGroup>
												</div>
												
												<!-- Sizes -->
												<div class="mt-10">
													<!--													<div class="flex items-center justify-between">-->
													<!--														<h4 class="text-sm font-medium text-gray-900">Size</h4>-->
													<!--														<a class="text-sm font-medium text-indigo-600 hover:text-indigo-500"-->
													<!--														   href="#">Size-->
													<!--															guide</a>-->
													<!--													</div>-->
													
													<RadioGroup v-model="selectedSize" class="mt-4">
														<RadioGroupLabel class="sr-only">Choose a size</RadioGroupLabel>
														<div class="grid grid-cols-4 gap-4">
															<RadioGroupOption v-for="size in product.sizes"
																			  :key="size.name"
																			  v-slot="{ active, checked }"
																			  :disabled="!size.inStock"
																			  :value="size"
																			  as="template">
																<div :class="[size.inStock ? 'cursor-pointer bg-white text-gray-900 shadow-sm' : 'cursor-not-allowed bg-gray-50 text-gray-200', active ? 'border border-pinky-pink' : '', 'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50  sm:flex-1']">
																	<RadioGroupLabel as="span">{{ size.name }}
																	</RadioGroupLabel>
																	<span v-if="size.inStock"
																		  :class="[active ? 'border' : 'border', checked ? 'border-pinky-pink' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-md']"
																		  aria-hidden="true" />
																	<span v-else aria-hidden="true"
																		  class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                                    <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200"
										 preserveAspectRatio="none" stroke="currentColor" viewBox="0 0 100 100">
                                      <line vector-effect="non-scaling-stroke" x1="0" x2="100" y1="100" y2="0" />
                                    </svg>
                                  </span>
																</div>
															</RadioGroupOption>
														</div>
													</RadioGroup>
												</div>
												
												<button
													  class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-pinky-pink px-8 py-3 text-base font-medium text-white hover:bg-pinky-dark"
												>
													Add to cart
												</button>
											</form>
										</section>
									</div>
								</div>
							</div>
						</DialogPanel>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script setup>
import { computed, ref } from 'vue'
import {
	Dialog,
	DialogPanel,
	RadioGroup,
	RadioGroupLabel,
	RadioGroupOption,
	TransitionChild,
	TransitionRoot
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { usePizzaStore } from '@/store/PizzaStore.js'
import { useCartStore } from '@/store/CartStore.js'

const item = computed(() => usePizzaStore().getQuickViewItem)
const product = {
	imageAlt: item.value.title,
	colors: [
		{ name: 'Traditional', class: 'bg-white', selectedClass: 'ring-gray-400' },
		{ name: 'On thin dough', class: 'bg-gray-200', selectedClass: 'ring-gray-400' }
	],
	sizes: [
		{ name: '25 cm', inStock: true },
		{ name: '30 cm', inStock: true },
		{ name: '35 cm', inStock: true },
		{ name: '40 cm', inStock: true }
	
	]
}

const selectedColor = ref(product.colors[0])
const selectedSize = ref(product.sizes[1])

function quickAddToCart(item) {
	useCartStore().addToCart(item)
	usePizzaStore().openQuickView = false
}

</script>