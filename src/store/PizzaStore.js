import { defineStore } from 'pinia'
import { useCartStore } from '@/store/CartStore.js'

import { collection, query, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore'
import { db } from '@/firebase/index.js'

export const usePizzaStore = defineStore('pizzas', {
    
    state: () => ({
        items: [],
        favorites: [],
        filteredItems: []
    }),
    
    actions: {
        fetchItems() {
            const q = query(collection(db, 'items'))
            
            onSnapshot(q, (querySnapshot) => {
                this.items = []
                querySnapshot.forEach((doc) => {
                    // console.log(doc.id, " => ", doc.data().im);
                    const item = {
                        id: doc.id,
                        ...doc.data(),
                        isFavorite: false,
                        itemIsAdded: false
                    }
                    this.items.push(item)
                    this.filteredItems = this.items
                })
                //запомним сердечки при загрузке
                this.items.forEach((item) => {
                    // noinspection JSUnresolvedVariable
                    if (this.favorites.some(el => el.parentId === item.id)) {
                        item.isFavorite = true
                    }
                })
                //запомним добавленные к корзину, при использовании фильтра
                this.items.forEach(item => {
                    if (useCartStore().getCartItems.some(el => el.id === item.id)) {
                        item.itemIsAdded = true
                    }
                })
            })
        },
        fetchFavorites() {
            const q = query(collection(db, 'favorites'))
            
            onSnapshot(q, (querySnapshot) => {
                this.favorites = []
                querySnapshot.forEach((doc) => {
                    // console.log(doc.id, " => ", doc.data().im);
                    const fav = {
                        id: doc.id,
                        parentId: doc.data().parentId
                    }
                    this.favorites.push(fav)
                    // console.log(fbItems.value)
                })
            })
        },
        
        async addToFavorites(item) {
            if (!item.isFavorite) {
                item.isFavorite = true
                
                await addDoc(collection(db, 'favorites'), {
                    parentId: item.id
                })
            } else {
                item.isFavorite = false
                const docRef = doc(db, 'favorites', this.favorites.find(el => el.parentId === item.id).id)
                await deleteDoc(docRef)
            }
        },
        
        addItem(item) {
            item.itemIsAdded = true
        },
        
        removeItem(item) {
            item.itemIsAdded = false
            console.log(this.items)
        },
        
        sortByPrice(sortBy, searchInput) {
            if (searchInput) {
                this.filterItems(searchInput)
            }
            if (sortBy === 'asc'){
                this.filteredItems.sort((a, b) => a.price - b.price);
            } else if (sortBy === 'desc') {
                this.filteredItems.sort((a, b) => b.price - a.price)
            } else if (sortBy === 'title') {
                this.filteredItems.sort((a, b) => a.title.localeCompare(b.title))
            }
        },
        
        filterItems(searchInput) {
            if (searchInput) {
                this.filteredItems = this.items.filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase()))
            } else {
                this.filteredItems = this.items
            }
        }
        
    },
    
    getters: {
        getItems(state) {
            return state.filteredItems
        }
    }
})