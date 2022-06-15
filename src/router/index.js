import Vue from 'vue'
import Router from 'vue-router'
import TestManager from '@/pages/TestManager.vue'
import StudentProfile from '@/pages/StudentProfile.vue'
import SoftwareEngineer from '@/pages/SoftwareEngineer.vue'
import Setting from '@/pages/Setting.vue'
import MajorDetail from '@/pages/MajorDetail.vue'
import Login from '@/pages/Login.vue'
import AddMajor from '@/pages/AddMajor.vue'
import Account from '@/pages/Account.vue'
import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);
Vue.use(Router)

export default new Router({
    routes: [{
        path: "/",
        name: "Login",
        component: Login
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
    }, {
        path: "/MajorDetail",
        name: "MajorDetail",
        component: MajorDetail
    }, {
        path: "/TestManager",
        name: "TestManager",
        component: TestManager
    }, {
        path: "/AddMajor",
        name: "AddMajor",
        component: AddMajor
    }, {
        path: "/Account",
        name: "Account",
        component: Account
    }]
})