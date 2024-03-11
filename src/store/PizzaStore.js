import { defineStore } from 'pinia'
import axios from 'axios'


export const usePizzaStore = defineStore('pizzas', {

    state: () => ({
        items: []
    }),

    actions: {
        fetchItems(type,params) {
           type === 'title' ? (params = `*${params}*`) : params;
            try {
                axios.get('https://803aa6e687528694.mokky.dev/items?' + type + '=' + params).then((response) => {
                    this.items = response.data
                })
            } catch (e) {
                console.log(e)
            }
        }
    },

    getters: {
        getItems(state) {
            return state.items
        }
    }
})