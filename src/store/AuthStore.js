import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged  } from 'firebase/auth'

import { auth } from '@/firebase/index.js'


export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
        user: {}
        }
    },
    actions: {
        
        init(){
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    this.user.id = user.uid
                    this.user.email = user.email
                    this.router.push('/home')
                } else {
                    this.user = {}
                    this.router.replace('/auth')
                }
            });
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