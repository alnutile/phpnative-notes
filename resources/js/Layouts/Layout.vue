<script setup>
import {Link, usePage} from '@inertiajs/vue3';
import {ref, provide, computed} from 'vue'
import {Dialog, DialogPanel, TransitionChild, TransitionRoot} from '@headlessui/vue'
import {Bars3Icon, FolderIcon, HomeIcon, XMarkIcon, AdjustmentsVerticalIcon} from '@heroicons/vue/24/outline'
import DesktopLeftNav from "@/Layouts/DesktopLeftNav.vue";
import MobileLeftNav from "@/Layouts/MobileLeftNav.vue";
import Banner from "@/Components/Banner.vue";

defineProps({
    title: String,
});




const leftNav = [
    { name: 'Dashboard', href: route("home"), icon: HomeIcon, current: "home"},
    { name: 'Settings', href: route("settings"), icon: AdjustmentsVerticalIcon, current: "settings"},
]

const tags = computed(() => {
    return usePage().props.tags?.data
})


provide('tags', tags)
provide('leftNav', leftNav)


const leftSidebarOpen = ref(true)


</script>

<template>
    <Banner/>
    <div class="dark:bg-gray-900 grid gap-2 grid-cols-12 ">
        <!-- Static sidebar for desktop -->
        <div :class="leftSidebarOpen ? 'col-span-2' : 'col-span-1'">
            <DesktopLeftNav @showMenu="leftSidebarOpen = !leftSidebarOpen"/>
        </div>

        <div class="mt-10 px-10 z-10" :class="leftSidebarOpen ? 'col-span-10' : 'col-span-11'">
            <slot></slot>
        </div>
    </div>
</template>
