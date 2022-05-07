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
                            
                            <li class="mm-active">
                                <a href="/#/TestManager" class="waves-effect" aria-expanded="true"><i class="fas fa-folder-open"></i><span> Chuyên ngành <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span></a>
                                <ul class="submenu mm-collapse mm-show" style="">
                                    <li><a href="email-inbox.html">Kỹ thuật phần mềm</a></li>
                                    <li><a href="email-read.html">Hệ thống thông tin</a></li>
                                    <li><a href="email-compose.html">Khoa học máy tính</a></li>
                                    <li><a href="email-compose.html">Công nghệ tri thức</a></li>
                                    <li><a href="email-compose.html">Thị giác máy tính</a></li>
                                    <li><a href="email-compose.html">Mạng máy tính và viễn thông</a></li>
                                </ul>
                            </li>
                            <li>
                            <a href="/#/" class="waves-effect"><i class="fas fa-book"></i><span>Bài đánh giá </span> </a>
                             </li>
                             <li>
                            <a href="/#/StudentProfile" class="waves-effect"><i class="fas fa-address-book"></i><span>Hồ sơ sinh viên </span> </a>
                             <li>
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
export default {
  name: 'App',
}
</script>

<style>
@import './assets/css/style.css';
@import './assets/css/icons.css';
@import './assets/css/bootstrap.min.css';
@import './assets/css/metismenu.min.css';
@import './assets/icons/_fontawesome.scss';


</style>
