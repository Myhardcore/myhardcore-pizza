import { defineStore } from 'pinia'
import { usePizzaStore } from '@/store/PizzaStore.js'

export const useCartStore = defineStore('cart', {
    state: () => ({
        cartItems: [],
        cartIsOpened: false,
        cartTotalPrice: 0,
    }),
    
    actions: {
        toggleCart() {
            this.cartIsOpened = !this.cartIsOpened
        },
        addToCart(item) {
            // noinspection JSUnresolvedVariable
            if (this.cartItems.some(el => el.id === item.id)) {
                this.cartItems = this.cartItems.filter(el => el.id !== item.id)
                usePizzaStore().removeItem(item)
            } else {
                this.cartItems.push(item)
                usePizzaStore().addItem(item)
            }
            this.calculateTotalPrice()
            console.log(this.cartItems)
        },
        calculateTotalPrice() {
            this.cartTotalPrice = 0
            this.cartItems.forEach(item => {
                this.cartTotalPrice += item.price
            })
        },
    },
    
    getters: {
        getCartIsOpened(state) {
            return state.cartIsOpened
        },
        getCartItems(state) {
            return state.cartItems
        },
        getCartTotalPrice(state) {
            return state.cartTotalPrice
        },
    }
})