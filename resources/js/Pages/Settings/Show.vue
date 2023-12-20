<script setup>
import AppLayout from '@/Layouts/Layout.vue';
import {useForm, usePage} from "@inertiajs/vue3";
import ActionMessage from "@/Components/ActionMessage.vue";
import { CheckIcon } from "@heroicons/vue/20/solid/index.js";
import Resource from "@/Pages/Notes/Components/Resource.vue";
import {useToast} from "vue-toastification";


const toast = useToast()

const props = defineProps({
    note: Object
})

const migrate = useForm({})
const seed = useForm({})

const runMigrations = () => {
    migrate.post(route("run.migrations"), {
        preserveScroll: true,
        onError: params => {
            toast.error("Error with migration");
        },
        onSuccess: params => {
            toast("Success with migration")
        }
    });
}

const runSeed = () => {
    migrate.post(route("run.seed"), {
        preserveScroll: true,
        onError: params => {
            toast.error("Error with seed");
        },
        onSuccess: params => {
            toast("Success with seed")
        }
    });
}
</script>

<template>
    <AppLayout>

        <div>
            <h2 class="text-white text-2xl">Settings</h2>
            <div class="max-w-full mx-auto dark:text-gray-300">
                <div class="flex justify-between gap-4 items-center">
                    <button @click="runMigrations" type="button">run migration</button>
                </div>
                <div class="flex justify-between gap-4 items-center">
                    <button @click="runSeed" type="button">run seeder</button>
                </div>
            </div>
        </div>
    </AppLayout>
</template>


