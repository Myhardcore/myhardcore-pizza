import { defineStore } from 'pinia'
import { usePizzaStore } from '@/store/PizzaStore.js'
import axios from 'axios'

export const useCartStore = defineStore('cart', {
    state: () => ({
        cartItems: [],
        cartIsOpened: false,
        cartTotalPrice: 0
    }),
    
    actions: {
        toggleCart() {
            this.cartIsOpened = !this.cartIsOpened
        },
        
        addToCart(item) {
            if (this.cartItems.some(el => el.id === item.id)) {
                this.cartItems = this.cartItems.filter(el => el.id !== item.id)
                usePizzaStore().removeItem(item)
            } else {
                item.count = 1
                this.cartItems.push(item)
                usePizzaStore().addItem(item)
            }
            this.calculateTotalPrice()
            console.log(this.cartItems)
        },
        
        calculateTotalPrice() {
            this.cartTotalPrice = 0
            this.cartItems.forEach(item => {
                this.cartTotalPrice += item.price * item.count
            })
        },
        
        counterValue(id, action) {
            this.cartItems.forEach(item => {
                if (item.id === id && action === 'inc') {
                    item.count++
                } else if (item.id === id && action === 'dec') {
                    item.count--
                }
            })
            this.calculateTotalPrice()
        },
        
        createOrder() {
            try {
                axios.post('https://803aa6e687528694.mokky.dev/orders', {
                    items: this.cartItems,
                    totalPrice: this.cartTotalPrice
                }).then(() => {
                    this.cartItems = []
                    this.cartTotalPrice = 0
                    this.cartIsOpened = false
                    usePizzaStore().fetchItems('title', '')
                })
            } catch (err) {
                console.log(err)
            }
        }
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
        }
    }
})