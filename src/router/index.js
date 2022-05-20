import Vue from 'vue'
import Router from 'vue-router'
import TestManager from '@/pages/TestManager.vue'
import StudentProfile from '@/pages/StudentProfile.vue'
import SoftwareEngineer from '@/pages/SoftwareEngineer.vue'
import Setting from '@/pages/Setting.vue'
import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);
Vue.use(Router)

export default new Router({
    routes: [{
        path: "/",
        name: "TestManager",
        component: TestManager
    }, {
        path: "/StudentProfile",
        name: "StudentProfile",
        component: StudentProfile
    }, {
        path: "/SoftwareEngineer",
        name: "SoftwareEngineer",
        component: SoftwareEngineer
    }, {
        path: "/Setting",
        name: "Setting",
        component: Setting
    }]
})