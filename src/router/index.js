import Vue from 'vue'
import Router from 'vue-router'
import TestManager from '@/pages/TestManager.vue'
import AddQuestion from '@/pages/AddQuestion.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: "/",
            name: "TestManager",
            component: TestManager
        },
        {
            path: "/AddQuestion",
            name: "AddQuestion",
            component: AddQuestion
        }
    ]
})