
import '../css/app.css';
// import BootstrapVue from 'bootstrap-vue'
// import "bootstrap-vue/dist/bootstrap-vue.css"
import './bootstrap';
import '../sass/app.scss'


// use(BootstrapVue)

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m'

createInertiaApp({
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, window.Ziggy)
            .mount(el)
    },
})
