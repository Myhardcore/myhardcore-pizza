<script setup>
import TheCard from "@/components/UI/TheCard.vue";
import {usePizzaStore} from "@/store/PizzaStore";
import { computed } from 'vue'

const store = usePizzaStore();
store.fetchItems('sortBy', 'title');
const items = computed(() => store.getItems);

</script>

<template>
    <div class="grid grid-cols-4 gap-5">
        <TheCard v-for="item in items" :key="item.id" :title="item.title" :price="item.price" :imgUrl="item.imageUrl"/>
    </div>
</template>

<style scoped>

</style>