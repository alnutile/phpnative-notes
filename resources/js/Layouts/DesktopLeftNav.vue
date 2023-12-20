<template>
<div  v-auto-animate>
    <div class="w-72"
         :class="!showMenu ? 'w-32' : 'w-72'">
        <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-800 bg-gray-900 px-6">
            <div class="flex h-16 shrink-0 items-center justify-between">
                <img class="h-12 w-auto rounded-full" v-if="showMenu"
                     :src="usePage().props.logo" :alt="usePage().props.app_name"/>

                <div class="flex-none">
                    <button class="btn btn-square btn-ghost" @click="toggleMenu" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
            </div>
            <nav class="flex flex-1 flex-col" v-if="showMenu">
                <ul role="list" class="flex flex-1 flex-col gap-y-7 overflow-hidden">
                    <li>
                        <ul role="list" class="-mx-2 space-y-1">
                            <li v-for="item in leftNav" :key="item.name">
                                <Link :href="item.href"
                                      :class="[route().current(item.current) ? 'bg-slate-600/10 text-gray-300' :
                                  'text-gray-300 hover:text-indigo-600 hover:bg-slate-800/10',
                                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                                    <component :is="item.icon"
                                               :class="[item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600', 'h-6 w-6 shrink-0']"
                                               aria-hidden="true"/>
                                    {{ item.name }}
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div class="text-xs font-semibold leading-6 text-gray-300">Tags</div>
                        <Tags :tags="tags"></Tags>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</div>
</template>
<script setup>
import {inject, ref} from "vue";
import Tags from "@/Components/Tags.vue"
import {usePage, Link} from "@inertiajs/vue3";


const leftNav = inject("leftNav")
const tags = inject("tags")

const emits = defineEmits('showMenu')

const showMenu = ref(true)

const toggleMenu = () => {
    showMenu.value = !showMenu.value
    emits('showMenu')
}
</script>
