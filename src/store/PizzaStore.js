import { defineStore } from 'pinia'
import axios from 'axios'
import { useCartStore } from '@/store/CartStore.js'


export const usePizzaStore = defineStore('pizzas', {
    
    state: () => ({
        items: [],
        favorites: []
    }),
    
    actions: {
        fetchItems(filterValue, searchValue) {
            try {
                axios.get('https://803aa6e687528694.mokky.dev/items',
                      {
                          params: {
                              sortBy: filterValue,
                              title: `*${searchValue}*`
                          }
                      }).then((response) => {
                    this.items = response.data.map((obj) => ({
                        ...obj,
                        isFavorite: false,
                        itemIsAdded: false
                    }))
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
            } catch (err) {
                console.log(err)
            }
        },
        addItem(item) {
            item.itemIsAdded = true
        },
        removeItem(item) {
            item.itemIsAdded = false
            console.log(this.items)
        },
        
        fetchFavorites() {
            try {
                
                axios.get('https://803aa6e687528694.mokky.dev/favorites').then((response) => {
                    this.favorites = response.data
                })
            } catch (err) {
                console.log(err)
            }
        },
        
        async addToFavorites(item) {
            if (!item.isFavorite) {
                item.isFavorite = true
                const obj = {
                    parentId: item.id
                }
                const { data } = await axios.post('https://803aa6e687528694.mokky.dev/favorites', obj)
                this.favorites.push({ parentId: item.id, id: data.id })
                console.log('add, ', this.favorites)
            } else {
                item.isFavorite = false
                const deleteId = this.favorites.find(el => el.parentId === item.id).id
                await axios.delete(`https://803aa6e687528694.mokky.dev/favorites/${deleteId}`)
                this.favorites = this.favorites.filter(el => el.parentId !== item.id)
            }
            
        }
        
    },
    
    getters: {
        getItems(state) {
            return state.items
        }
    }
})