<template>
<div id="app">

    <!-- Begin page -->
    <div id="wrapper">
    <div class="topbar">

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

                      <h6 class="mt-3">Admin</h6>

                            <div class="dropdown notification-list nav-pro-img">
                                <a class="dropdown-toggle nav-link arrow-none nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                    <img src="@/assets/images/users/user-4.jpg" alt="user" class="rounded-circle">
                                </a>
                                <div class="dropdown-menu dropdown-menu-right profile-dropdown ">
                                    <!-- item-->
                                    <a class="dropdown-item" href="#"><i class="mdi mdi-account-circle"></i> Profile</a>
                                    <a class="dropdown-item" href="#"><i class="mdi mdi-wallet"></i> My Wallet</a>
                                    <a class="dropdown-item d-block" href="#"><span class="badge badge-success float-right">11</span><i class="mdi mdi-settings"></i> Settings</a>
                                    <a class="dropdown-item" href="#"><i class="mdi mdi-lock-open-outline"></i> Lock screen</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item text-danger" href="#"><i class="mdi mdi-power text-danger"></i> Logout</a>
                                </div>
                            </div>
                            </div>
                        </li>

                    </ul>

                </nav>

                

            </div>

        <!-- ========== Left Sidebar Start ========== -->
        <div class="left side-menu">
            <div class="slimscroll-menu" id="remove-scroll">
                <!--- Sidemenu -->
                <div id="sidebar-menu">
                    <!-- Left Menu Start -->
                    <ul class="metismenu" id="side-menu">
                       
                        <li>
                            <!--<a href="/#/" class="waves-effect"><i class="fas fa-store-alt" ></i><span> Trang chủ </span> </a>
                            <a href="/#/" class="waves-effect"><i class="fas fa-info-circle"></i><span>  Giới thiệu </span> </a> -->
                             <li>
                                <a v-on:click="showChuyenNganhList()" class="waves-effect"><i class="fas fa-folder-open"></i> <span> Chuyên ngành  <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span> </a>
                                <ul id="chuyenNganhList" class="submenu mm-collapse mm-show" >
                                    <li v-for=" (major, index) in accountJson" :key="index"><a style="white-space: break-spaces;" class="dropdown-item" :href="`#/MajorDetail?id=${major.ChuyenNganhId}`">{{major.TenChuyenNganh}}</a></li>
                                   
                                </ul>
                            </li>
                            
                            <li>
                            <a href="/#/TestManager" class="waves-effect"><i class="fas fa-book"></i><span>Bài đánh giá </span> </a>
                             </li>
                             <li>
                            <a href="/#/StudentProfile" class="waves-effect"><i class="fas fa-address-book"></i><span>Hồ sơ sinh viên </span> </a>
                              </li>
                             <li>
                            <a href="/#/Setting" class="waves-effect"><i class="mdi mdi-settings"></i><span>Tùy chỉnh </span> </a>
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
    <footer class="footer">
        © 2022 FIT - Gợi ý chuyên ngành <span class="d-none d-sm-inline-block"><i class="mdi mdi-heart text-danger"></i></span>.
    </footer>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  mounted() {
      this.getAllMajors();
  },
  methods: {
  getAllMajors() {
        let url = 'https://localhost:44326/api/ChuyenNganh';
        axios.get(url).then((response) => {
        this.accountJson = response.data; 
      });
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

    }
  }, data () {
    return {
     accountJson: "",
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
