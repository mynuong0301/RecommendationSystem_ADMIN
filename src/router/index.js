import Vue from 'vue'
import Router from 'vue-router'
import TestManager from '@/pages/TestManager.vue'


Vue.use(Router)

export default new Router({
    routes: [{
        path: "/",
        name: "TestManager",
        component: TestManager
    }]
})