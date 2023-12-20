<template>
    <div class="flex grow flex-col gap-y-5 overflow-y-auto  bg-gray-900 px-6 pb-2">
        <div class="flex h-16 shrink-0 items-center">
            <img class="h-8 w-auto rounded-full"
                 :src="usePage().props.logo" :alt="usePage().props.app_name" />
        </div>
        <nav class="flex flex-1 flex-col">
            <ul role="list" class="flex flex-1 flex-col gap-y-7">
                <li>
                    <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in leftNav" :key="item.name">
                            <Link :href="item.href" :class="[item.current ? 'bg-slate-600/10 text-gray-300' :
                                                    'text-gray-200 hover:text-indigo-600 hover:bg-gray-50',
                                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                                <component :is="item.icon" :class="[item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-indigo-600', 'h-6 w-6 shrink-0']" aria-hidden="true" />
                                {{ item.name }}
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <div class="text-xs font-semibold leading-6 text-gray-400">Tags</div>
                    <ul role="list" class="-mx-2 mt-2 space-y-1">
                        <li v-for="tag in tags" :key="tag.name" class="flex justify-start gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 text-gray-200">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
                            </svg>
                            <a :href="tag.href" :class="[tag.current ? 'bg-slate-700/10 text-indigo-600' : 'text-gray-200 hover:text-indigo-600 hover:bg-gray-400', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                                <span class="truncate">{{ tag.name }}</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script setup>
import {inject} from "vue";
import {Link, usePage} from "@inertiajs/vue3";
import MobileLeftNav from "@/Layouts/MobileLeftNav.vue";


const leftNav = inject("leftNav")
const tags = inject("tags")
</script>
