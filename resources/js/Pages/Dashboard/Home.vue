<script setup>
import AppLayout from '@/Layouts/Layout.vue';
import {Link, useForm, router} from "@inertiajs/vue3";
import {useToast } from "vue-toastification";
import Pagination from "@/Components/Pagination.vue";
import Tag from "@/Components/Tag.vue";

const toast = useToast();
const props = defineProps({
    notes: Object,
    search: String,
    error: String,
    tag: String,
})

const form = useForm({
    search: props.search
})

const create = () => {
    router.visit(route('notes.create'));
}

const submit = () => {
    form.get(route("home"), {
        onError: params => {
            toast.error("Error with search")
        },
        preserveScroll: true
    })
}
</script>

<template>
    <AppLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Home
            </h2>
        </template>

        <div>
            <div class="max-w-full mx-auto sm:px-2 lg:px-2 dark:text-gray-300 mt-4">
                <div v-if="error" class="text-white">Error: {{ error }}</div>
                <div>
                    <form @submit.prevent="submit">
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input
                                v-model="form.search"
                                type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required>
                            <div class=" absolute end-2.5 bottom-2.5 top-2 flex items-center gap-2 justify-end">
                                <button

                                    type="submit"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                                <Link :href="route('home')" type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Reset</Link>
                            </div>
                        </div>
                    </form>
                </div>
                <h2 class="text-gray-300 mb-4 mt-4 flex justify-between items-center">
                    <div class="flex gap-2 items-center">
                        <span>Latest Notes</span>
                        <span v-if="tag"
                              class="flex justify-start gap-2 items-center">Filtered by tag: <Tag >{{ tag }}</Tag> </span>
                    </div>
                    <Link
                        v-shortkey="['ctrl', 'c']" @shortkey="create()"
                        :href="route('notes.create')" type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Create</Link>
                </h2>
                <div class="grid grid-cols-1 justify-center gap-2 mx-auto w-full" v-auto-animate>
                    <div
                        v-for="note in notes.data" :key="note.id"
                        class="block p-6 bg-white border border-gray-200 rounded-lg
                    shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-pink-600 flex items-center justify-between">

                            <Link :href="note.route" type="button">{{ note.title }}</Link>

                            <span class="text-sm">{{ note.date }}</span>

                        </h5>
                        <div class="font-normal text-gray-700 dark:text-gray-400" v-html="note.truncated"> </div>
                        <div class="flex justify-end gap-2 items-center mt-5">
                            <Link :href="note.route" type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Edit</Link>
                        </div>
                    </div>
                </div>
                <div class="mt-4">
                    <Pagination :meta="notes.meta" :link="notes.links"/>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
