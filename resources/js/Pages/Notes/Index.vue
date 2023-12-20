<script setup>
import AppLayout from '@/Layouts/Layout.vue';

</script>

<template>
    <AppLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Notes
            </h2>
        </template>

        <div>
            <div class="max-w-full mx-auto sm:px-2 lg:px-2 dark:text-gray-300 mt-4 prose">
                Notes
            </div>
        </div>
    </AppLayout>
</template>
