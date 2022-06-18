<template>
<div id="app">

    <!-- Begin page -->
    <div id="wrapper">
        <div class="topbar" v-if="isLogin">

            <!-- LOGO -->
            <div class="topbar-left">
                <a href="index.html" class="logo">
                    <span class="logo-light">
                        <img src="@/assets/images/fulllogo-removebg-preview.png">
                    </span>
                </a>
            </div>

            <nav class="navbar-custom ">
                <ul class="navbar-right list-inline float-right mb-0">

                    <li class="dropdown notification-list list-inline-item">
                        <div class="row align-items-center float-right  ">

                            <h6 class="mt-3">{{this.currentUser.DisplayName}}</h6>

                            <div class="dropdown notification-list nav-pro-img">
                                <a class="dropdown-toggle nav-link arrow-none nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                    <img src="@/assets/images/users/user-4.jpg" alt="user" class="rounded-circle">
                                </a>
                                <div class="dropdown-menu dropdown-menu-right profile-dropdown ">
                                    <!-- item-->
                                    <a class="dropdown-item"><i class="mdi mdi-account-circle"></i> Profile</a>

                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item text-danger" v-on:click="logOut()"><i class="mdi mdi-power text-danger"></i> Logout</a>
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>

            </nav>

        </div>

        <!-- ========== Left Sidebar Start ========== -->
        <div class="left side-menu" v-if="isLogin">
            <div class="slimscroll-menu" id="remove-scroll">
                <!--- Sidemenu -->
                <div id="sidebar-menu">
                    <!-- Left Menu Start -->
                    <ul class="metismenu" id="side-menu">

                        <li>
                            <!--<a href="/#/" class="waves-effect"><i class="fas fa-store-alt" ></i><span> Trang chủ </span> </a>
                            <a href="/#/" class="waves-effect"><i class="fas fa-info-circle"></i><span>  Giới thiệu </span> </a> -->
                        <li>
                            <a v-on:click="showChuyenNganhList()" class="waves-effect"><i class="fas fa-folder-open"></i> <span> Chuyên ngành <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span> </a>
                            <ul id="chuyenNganhList" class="submenu mm-collapse mm-show">
                                <li v-for=" (major, index) in responseGlobalMajorData" :key="index">
                                    <a v-if="major.ChuyenNganhId !== '-100'" style="white-space: break-spaces; " class="dropdown-item" :href="`#/MajorDetail?id=${major.ChuyenNganhId}`">{{major.TenChuyenNganh}}</a>
                                    <a v-else style="white-space: break-spaces;  border-style: dotted;  color:#ffffff; font-weight: 500;" class="dropdown-item" href="/#/AddMajor"> <i class="mdi mdi-plus-circle-outline" style="color:#ffffff; font-size: 20px; margin-right: 10px;"></i>Thêm mới</a>
                                </li>

                            </ul>

                        </li>

                        <li>
                            <a href="/#/TestManager" class="waves-effect"><i class="fas fa-book"></i><span>Bài đánh giá </span> </a>
                        </li>
                        <li>
                            <a href="/#/StudentProfile" class="waves-effect"><i class="fas fa-address-book"></i><span>Hồ sơ sinh viên </span> </a>
                        </li>
                        <li>
                            <a href="/#/Subject" class="waves-effect"><i class="mdi mdi-notebook-multiple"></i><span>Quản lý môn học </span> </a>
                        </li>
                        <li>
                            <a href="/#/Setting" class="waves-effect"><i class="mdi mdi-book-open-page-variant"></i><span>Môn học xét CN </span> </a>
                        </li>
                        <li>
                            <a href="/#/Account" class="waves-effect"><i class="mdi mdi-account-multiple-outline"></i><span>Quản lý tài khoản </span> </a>
                        </li>
                    </ul>
                </div>
                <!-- Sidebar -->
                <div class="clearfix"></div>
            </div>
            <!-- Sidebar -left -->
        </div>
        <!-- Left Sidebar End -->

        <router-view />
    </div>
    <footer class="footer" v-if="isLogin">
        © 2022 FIT - Gợi ý chuyên ngành <span class="d-none d-sm-inline-block"><i class="mdi mdi-heart text-danger"></i></span>.
    </footer>
</div>
</template>

<script>
import axios from 'axios';
import {
    mapGetters,
    mapActions
} from 'vuex';
export default {
    name: 'App',
    computed: {
        //
        ...mapGetters([
            'responseGlobalMajorData',
        ]),
    },
    beforeMount() {
        console.log('localStorage', localStorage.token);
        if (localStorage.token) {
            this.currentUser = JSON.parse(localStorage.user);
            this.isLogin = true;
            if (window.location.href === '/') {
                this.$router.replace({
                    path: '/StudentProfile'
                });
            }
        } else {
            this.isLogin = false;
        }
    },
    mounted() {
        this.getAllMajors();
        if (localStorage.token) {
            this.currentUser = JSON.parse(localStorage.user);
            this.isLogin = true;
        } else {
            this.isLogin = false;
        }
    },
    watch: {
        '$route': function (to, from) {
            if (localStorage.token) {
                this.currentUser = JSON.parse(localStorage.user);
                this.isLogin = true;
            } else {
                this.isLogin = false;
            }
        }
    },
    methods: {
        getAllMajors() {
            this.$store.dispatch('onGlobalMajorAction');
        },
        showChuyenNganhList() {
            const ul = document.getElementById("chuyenNganhList");
            const arrow = document.getElementsByClassName("mdi mdi-chevron-right")[0];
            if (ul.className.includes("mm-show")) {
                ul.className = ul.className.replace("mm-show", "");
                arrow.style.transform = 'rotate(0deg)'
            } else {
                ul.className += " mm-show";
                arrow.style.transform = 'rotate(90deg)'
            }
        },
        logOut() {
            localStorage.removeItem(
                'token'
            );
            localStorage.removeItem(
                'user'
            );
            this.isLogin = false;
            this.$router.replace({
                path: '/'
            });
        },
    },
    data() {
        return {
            accountJson: "",
            currentUser: {},
            isLogin: false,
        }
    },
}
</script>

<style>
@import './assets/css/style.css';
@import './assets/css/icons.css';
@import './assets/css/bootstrap.min.css';
@import './assets/css/metismenu.min.css';
@import './assets/icons/_fontawesome.scss';
</style>