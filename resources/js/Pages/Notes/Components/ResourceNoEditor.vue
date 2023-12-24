<script setup>


import {useToast} from "vue-toastification";

import {useForm} from "@inertiajs/vue3";

const toast = useToast()


const props = defineProps({
    modelValue: Object,
    note: Object
})

const emits = defineEmits(['update:modelValue'])


</script>

<template>
    <div class="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
        <label for="editor" class="sr-only">Publish post</label>
        <textarea id="editor"
                  rows="45"
                  @save="emits('save')"
                  v-model="modelValue.content"
                  placeholder="Start writing..." required
                  class="block w-full px-0 text-lg text-gray-800 bg-white border-0 dark:bg-gray-800
                  focus:ring-0 dark:text-white dark:placeholder-gray-400"
                  ></textarea>
    </div>

</template>
