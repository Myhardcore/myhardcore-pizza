import { defineStore } from 'pinia'
import { usePizzaStore } from '@/store/PizzaStore.js'
import { useAuthStore } from '@/store/AuthStore.js'

import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/firebase/index.js'

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
                this.cartItems.itemIsAdded = true
            }
            
            localStorage.setItem('cart', JSON.stringify(this.cartItems))
            this.calculateTotalPrice()
            
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
            localStorage.setItem('cart', JSON.stringify(this.cartItems))
            this.calculateTotalPrice()
        },
        
        async createOrder() {
            await addDoc(collection(db, 'users', useAuthStore().user.id, 'orders'), {
                items: this.cartItems,
                totalPrice: this.cartTotalPrice
            }).then(
                  () => {
                      this.cartItems = []
                      this.cartTotalPrice = 0
                      this.cartIsOpened = false
                      usePizzaStore().fetchItems()
                      localStorage.setItem('cart', JSON.stringify([]))
                  }
            )
        },
        
        fetchCartItems() {
            if (!this.cartItems) {
                this.cartItems = []
            } else {
                this.cartItems = JSON.parse(localStorage.getItem('cart'))
                this.calculateTotalPrice()
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
        },
        getItemCountValue() {
            return usePizzaStore().getItems.count
        }
    }
})