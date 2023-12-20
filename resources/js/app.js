import './bootstrap';
import '../css/app.css';
import 'flowbite';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

import VueShortkey from 'vue3-shortkey';


import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import Prism from 'prismjs';


import enUS from '@kangc/v-md-editor/lib/lang/en-US';
VueMarkdownEditor.lang.use('en-US', enUS);

VueMarkdownEditor.use(vuepressTheme, {
    Prism,
});


import Toast, { TYPE } from "vue-toastification";
import "vue-toastification/dist/index.css";
const toastOptions = {
    toastDefaults: {
        // ToastOptions object for each type of toast
        [TYPE.DEFAULT]: {
            timeout: 3000,
            hideProgressBar: false,
        },
    },
};

import VueEasymde from "vue3-easymde";
import "easymde/dist/easymde.min.css"

const appName = import.meta.env.VITE_APP_NAME || 'Notes';

import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(VueShortkey)
            .use(Toast, toastOptions)
            .use(ZiggyVue)
            .use(autoAnimatePlugin)
            .use(VueEasymde)
            .use(VueMarkdownEditor)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
