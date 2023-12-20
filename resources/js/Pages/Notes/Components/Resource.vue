<script setup>


import {useToast} from "vue-toastification";

import {useForm} from "@inertiajs/vue3";

const toast = useToast()


const props = defineProps({
    modelValue: Object,
    note: Object
})

const emits = defineEmits(['update:modelValue'])


const form = useForm({
    file: null
})



const handleUploadImage = (event, insertImage, files) => {
    // Get the files and upload them to the file server, then insert the corresponding content into the editor
    console.log(files[0]);
    console.log(insertImage);

    form.file = files[0];

    form.post(route('upload.file', {
        note: props.note?.id
    }), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
        },
    });
    // // Here is just an example
    // insertImage({
    //     url:
    //         'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1269952892,3525182336&fm=26&gp=0.jpg',
    //     desc: 'desc',
    //     // width: 'auto',
    //     // height: 'auto',
    // });
}

</script>

<template>
    <div>

        <v-md-editor
            :disabled-menus="[]"
            @upload-image="handleUploadImage"
            @save="emits('save')"
            v-model="modelValue.content"
            height="900px"></v-md-editor>
    </div>
</template>

<style scope>

@media (prefers-color-scheme: dark) {
    .v-md-editor {
        background-color: transparent !important;
    }
    .v-md-editor.v-md-editor--edit {
        background-color: transparent;
    }
    .v-md-editor__toolbar {
        background-color: transparent;
        color: white;
    }
    .v-md-textarea-editor textarea{
        background-color: transparent;
        color: white !important;
        font-size: 16px;
    }

    .vuepress-markdown-body {
        background-color: transparent !important;;
        color: white !important;
    }
}

</style>
