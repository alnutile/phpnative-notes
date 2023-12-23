<script setup>
import AppLayout from '@/Layouts/Layout.vue';
import {useForm, usePage} from "@inertiajs/vue3";
import ActionMessage from "@/Components/ActionMessage.vue";
import {CheckIcon} from "@heroicons/vue/20/solid/index.js";
import ResourceNoEditor from "@/Pages/Notes/Components/ResourceNoEditor.vue";

const props = defineProps({
    note: Object
})

const form = useForm({
    title: "",
    content: ""
})

const save = () => {
    form.post(route("notes.store"), {
        preserveScroll: true
    })
}


</script>

<template>
    <AppLayout>

        <div>
            <div class="max-w-full mx-auto dark:text-gray-300">
                <div class="flex justify-between gap-4 items-center">
                    <div class="w-4/6 flex items-center gap-4">
                        <input class="bg-slate-900 border-0 text-lg w-full ring-indigo-600 ring-1"
                               autofocus
                               placeholder="Title here..."
                               v-model="form.title"/>

                        <button @click="save" class="text-pink-600">save</button>
                    </div>
                </div>
            </div>

            <div class="flex justify-end h-4 mb-4">
                <ActionMessage :on="form.recentlySuccessful">saved</ActionMessage>
            </div>

            <form @submit.prevent="save">
                <div>
                    <ResourceNoEditor v-model="form"/>
                </div>
                <div class="flex gap-4 items-center mt-4">
                    <button type="submit" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                        Save
                    </button>
                    <ActionMessage :on="form.recentlySuccessful">saved</ActionMessage>
                </div>
            </form>

        </div>
    </AppLayout>
</template>

