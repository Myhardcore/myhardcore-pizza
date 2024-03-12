import { defineStore } from 'pinia'
import axios from 'axios'


export const usePizzaStore = defineStore('pizzas', {

    state: () => ({
        items: [],
        favorites: [],
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
                        isFavorite: false
                    }));
                    
                    this.items.forEach((item) =>{
                        // if(this.favorites.includes(item.id)){
                        //     item.isFavorite = true
                        // }
                        if(this.favorites.some(el => el.parentId === item.id)){
                            item.isFavorite = true
                        }
                    })
                })
            } catch (err) {
                console.log(err)
            }
        },
        
        fetchFavorites(){
            try {
                axios.get('https://803aa6e687528694.mokky.dev/favorites').then((response) => {
                    // this.favorites = response.data.map((item) => item.parentId);
                    this.favorites = response.data
                    console.log(this.favorites)
                })
            } catch (err) {
                console.log(err)
            }
        },
        
        addToFavorites(item) {
            if(!item.isFavorite){
                item.isFavorite = true
                axios.post('https://803aa6e687528694.mokky.dev/favorites', {
                    parentId: item.id
                })
            } else {
                item.isFavorite = false;
                const deleteId= this.favorites.find(el => el.parentId === item.id).id
                axios.delete(`https://803aa6e687528694.mokky.dev/favorites/${deleteId}`)
            }
            
        },
       
    },

    getters: {
        getItems(state) {
            return state.items
        },
    }
})