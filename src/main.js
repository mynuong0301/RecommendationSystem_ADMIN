// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'
import Vuex from 'vuex'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { store } from './store/store.js'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import Vuelidate from "vuelidate";
import VuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";
import './plugins/element.js'

Vue.use(Vuelidate);
Vue.use(VuelidateErrorExtractor, {
    i18n: false,
    // Define common validation messages.
    messages: {
        required: "{attribute} không được bỏ trống",
        gt2000: "{attribute} phải lớn hơn 2000",
        notGmail: "{attribute} không hợp lệ",
        gt0to10: "{attribute} phải có giá trị từ 0 đến 10",
        email: "{attribute} is not a valid Email address.",
        isEmailAvailable: "{attribute} is not available. Must be at least 10 characters long.",
        passwordLength: "{attribute} tối thiểu 8 kí tự",

    }
});
Vue.component("form-group", templates.singleErrorExtractor.foundation6);

Vue.component('v-select', vSelect)

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})