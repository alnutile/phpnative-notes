<script setup>
import AppLayout from '@/Layouts/Layout.vue';
import {useForm, usePage} from "@inertiajs/vue3";
import {useToast} from "vue-toastification";
import Backup from "@/Pages/Settings/Components/Backup.vue";


const toast = useToast()

const props = defineProps({
    note: Object,
    storage_path: String,
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
            <div class="max-w-full mx-auto dark:text-gray-300 mt-10">
                <div>Storage Page: {{ storage_path }}</div>

                <div>
                    <h2>Backup</h2>
                    <Backup/>
                </div>

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


