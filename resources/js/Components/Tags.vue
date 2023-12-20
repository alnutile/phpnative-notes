<script setup>
import { Link } from "@inertiajs/vue3";
import Tag from "@/Components/Tag.vue";

const props = defineProps({
    tags: Object
})
</script>

<template>
    <ul role="list" class="-mx-2 mt-2 space-y-1">
        <li v-for="tag in tags" :key="tag.id" class="flex justify-start gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-3 h-3 text-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"/>
            </svg>
            <Link :href="`${route('home')}?tag=${tag.name}`"
            >
                <Tag>
                    {{ tag.name }}
                </Tag>
            </Link>
        </li>
    </ul>
</template>

<style scoped>

</style>
