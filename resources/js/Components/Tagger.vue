<script setup>
import {useForm} from "@inertiajs/vue3";
import {useToast} from "vue-toastification";
import {computed, ref, watch} from "vue";
import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
} from '@headlessui/vue'
const toast = useToast();

const props = defineProps({
    note: Object
})

const form = useForm({
    name: "",
    type: ""
})

const tagList = ref([])

const query = ref()

// Added watch for the query ref
watch(query, (newValue, oldValue) => {
    getApiResults();
})

const getApiResults = () => {
    axios.get(route('api.tags', {
        'tag': query.value
    })).then(data => {
        console.log(data);
        tagList.value = data.data;
    })
}

const queryTag = computed(() => {
    return query.value === '' ? null : { id: null, name: query.value }
})

const selectedTag = ref(tagList[0])

const filteredTags = computed(() =>
    query.value === ''
        ? tagList
        : tagList.value.filter((tag) => {
            return tag.name.toLowerCase().includes(query.value.toLowerCase())
        })
)

const removeTagForm = useForm({})

const addTag = () => {
    form.name = query.value;
    form.post(route("notes.tag", {
        note: props.note.id
    }), {
        preserveScroll: true,
        onSuccess: params => {
            toast("Added tag");
            form.reset();
            query.value = ""
        },
        onError: params => {
            toast.error("Error adding tag")
        }
    })
}

const removeTag = (tag_id) => {
    removeTagForm.post(route("notes.tag.remove", {
        note: props.note.id,
        tag: tag_id
    }), {
        preserveScroll: true,
        onError: params => {
            toast.error("Error removing tag")
        }
    })
}
</script>

<template>
    <div class="flex justify-start gap-2 items-center mt-2">
        <Combobox v-model="selectedTag" as="div">
                <div class="relative">
                    <ComboboxInput
                        class="input input-md input-bordered input-primary text-xl w-[300px] rounded-none"
                        placeholder="Find or Add Tag..."
                        @change="query = $event.target.value"
                        :displayValue="(tag) => tag.name"
                        @keyup.enter="addTag"
                    />
                    <ComboboxOptions class="absolute z-10 mt-1 max-h-60 rounded shadow-lg">
                        <ComboboxOption
                            class="hover:cursor-pointer hover:text-gray-400 bg-black text-gray-100 px-2 py-1.5 overflow-auto w-[200px]"
                            v-if="queryTag" :value="queryTag">
                            Add "{{ query }}"
                        </ComboboxOption>
                        <ComboboxOption
                            class="hover:cursor-pointer hover:text-gray-400 bg-black text-gray-100 px-2 py-1.5 overflow-auto w-[200px]"
                            v-for="tag in filteredTags"
                            :key="tag.id"
                            :value="tag"
                        >
                            {{ tag.name }}
                        </ComboboxOption>
                    </ComboboxOptions>
                </div>
            </Combobox>

        <div v-if="form.errors.name">Tag Name required</div>

        <div class="flex justify-start gap-4 items-center">
            <div class="badge badge-info rounded-none flex items-center px-2 py-6 justify-between" v-for="tag in note.tags" :key="tag.id">
                <button type="button" @click="removeTag(tag.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         class="inline-block w-4 h-4 stroke-current pb-0.5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                {{tag.name}}
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
