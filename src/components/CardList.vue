<script setup>
import TheCard from "@/components/UI/TheCard.vue";

defineProps({
    items: Array,
})

const emit = defineEmits(['addToFavorite'])
</script>

<template>
    <div class="grid grid-cols-4 gap-5">
        <TheCard v-for="item in items"
                 :key="item.id"
                 :on-click-add="onClickAdd"
                 :title="item.title + ' Pizza'"
                 :price="item.price"
                 :imgUrl="item.imageUrl"
                 :is-added="false"
                 :is-favorite="item.isFavorite"
                 @addToFavorite="emit('addToFavorite', item)"
        />

    </div>
</template>

<style scoped>

</style>