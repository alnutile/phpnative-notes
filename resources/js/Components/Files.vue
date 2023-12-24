<template>
    <div class="border border-gray-400 px-40 py-10 rounded-md
    border-dashed
    shadow-lg flex flex-col justify-center text-center max-w-2xl">
        <div v-bind="getRootProps()" v-if="!form.processing">
            <input v-bind="getInputProps()" />
            <p v-if="!form.processing">Drop the files here ...</p>
            <p v-else>Drag 'n' drop some files here, or click to select files</p>

            <div class="mt-4">
                <button class="btn btn-default rounded-none" @click="open">Upload</button>
            </div>
        </div>
        <div v-else class="flex justify-center items-center gap-4">
            Uploading
            <span class="loading loading-bars loading-lg text-primary"></span>
        </div>
    </div>
</template>

<script setup>
import { useDropzone } from "vue3-dropzone";
import {ref} from "vue";
import {useToast} from "vue-toastification";
import {useForm} from "@inertiajs/vue3";

const toast = useToast();
const props = defineProps({
    note: Object,
})

const form = useForm({
    files: [],
});

const onDrop = (acceptFiles, rejectReasons) =>  {
    console.log(acceptFiles.length);
    console.log(rejectReasons);

    form.files = acceptFiles;

    form.post(route('files.create', {
        note: props.note.id
    }), {
        onStart: params => {
            toast("Uploading Files")
        },
        onSuccess: params => {
            form.reset('files')
        },
        onError: (error) => {
            toast.error("Could not upload file")
            console.log(error);
        }
    })

}

const { getRootProps, getInputProps, ...rest } = useDropzone({ onDrop });



</script>
