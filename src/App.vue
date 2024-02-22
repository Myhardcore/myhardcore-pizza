<script setup>
import {onMounted, reactive, ref, watch} from "vue";
import axios from "axios";

import TheHeader from './components/UI/TheHeader.vue';
import CardList from "@/components/CardList.vue";
import Drawer from "@/components/Drawer.vue";

//Объявляем переменные
const items = ref([])
const filters = reactive({
    sortBy: 'title',
    searchQuery: '',
});

//запрашиваем данные с backend'a + логика фильтра и поиска
const fetchItems = async () => {
    try {
        const params = {
            sortBy: filters.sortBy,
        };
        if (filters.searchQuery) {
            params.title = `*${filters.searchQuery}*`
        }

        await axios.get('https://803aa6e687528694.mokky.dev/items',
            {params}).then(response => items.value = response.data.map(item => {
                return {...item,
                    isFavorite: false,
                    favoriteId: null,
                    isAdded: false}

            })
        )
    } catch (e) {
        console.log(e)
    }
}
const fetchFavorites = async () => {
    try {
        await axios.get('https://803aa6e687528694.mokky.dev/favorites').then(response => {
            response.data.forEach(fav => {
               items.value.find(parent => parent.id === fav.parentId).isFavorite = true
            })
        })
    } catch (e) {
        console.log(e)
    }
}
const addToFavorite = async (item) => {
    try {
        if(!item.isFavorite){

            const obj = {
                parentId: item.id
            }
            item.isFavorite = true;
            const {data} = await axios.post('https://803aa6e687528694.mokky.dev/favorites', obj)
            item.favoriteId = data.id
            console.log(data.id)
        } else {
            item.isFavorite = false;
            await axios.delete(`https://803aa6e687528694.mokky.dev/favorites/${item.favoriteId}`);
            item.favoriteId = null
        }
    } catch (e) {
        console.log(e)
    }
}


watch(filters, fetchItems)
onMounted(async ()=>{
    await fetchItems()
    await fetchFavorites()
})

</script>

<template>
    <!--    <Drawer />-->
    <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
        <TheHeader/>

        <div class="p-10">
            <div class="flex justify-between items-center">
                <h2 class="text-3xl font-bold mb-8 uppercase">All pizzas</h2>

                <div class="flex gap-4">
                    <select v-model="filters.sortBy" class="py-2 px-3 border rounded-md outline-none">
                        <option value="title">All</option>
                        <option value="price">Cheapest</option>
                        <option value="-price">Expensive</option>
                    </select>

                    <div class="relative">
                        <img class="absolute left-3 top-3" src="/search.svg" alt="">
                        <input v-model="filters.searchQuery"
                               class="border rounded-md py-2 pl-12 pr-4 outline-none focus:border-gray-400"
                               type="text"
                               placeholder="search..."/>
                    </div>
                </div>
            </div>

            <div class="mt-10">
                <CardList :items="items" @addToFavorite="addToFavorite"/>
            </div>
        </div>

    </div>
</template>

<style scoped>

</style>
