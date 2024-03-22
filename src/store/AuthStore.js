import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

import { auth } from '@/firebase/index.js'
import { usePizzaStore } from '@/store/PizzaStore.js'

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            user: {}
        }
    },
    actions: {
        
        init() {
            const pizzaStore = usePizzaStore()
            onAuthStateChanged(auth, (user) => {
                
                if (user) {
                    this.user.id = user.uid
                    this.user.email = user.email
                    pizzaStore.init()
                    this.router.push('/home')
                    console.log('user detected', this.user.id)
                } else {
                    this.user = {}
                    usePizzaStore().fetchItems()
                    usePizzaStore().clearFavorites()
                    console.log('No user')
                    // this.router.replace('/home')
                }
            })
        },
        
        registerUser(email, password) {
            createUserWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                      // Signed up
                      const user = userCredential.user
                  })
                  .catch((error) => {
                      console.log('error: ', error.message)
                  })
        },
        
        loginUser(email, password) {
            signInWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                      const user = userCredential.user
                  })
                  .catch((error) => {
                      console.log('error:', error.message)
                  })
        },
        
        logoutUser() {
            signOut(auth).then(() => {
                // console.log('User signed out')
            }).catch((error) => {
                console.log(error.message)
            })
        }
        
    }
})