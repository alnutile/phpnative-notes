<script setup>

import {useForm} from "@inertiajs/vue3";
import ActionMessage from "@/Components/ActionMessage.vue";

const form = useForm({});

const backup = () => {
    form.get(route("backup"), {
        preserveScroll: true
    });
}
</script>

<template>

    <form @submit.prevent="backup">
        <button class="btn-primary btn" :disabled="form.processing">
            <ActionMessage :on="form.recentlySuccessful">Backup complete</ActionMessage>
            Backup
        </button>
    </form>
</template>

<style scoped>

</style>
