<template>
<div id="app">

    <!-- Begin page -->
    <div id="wrapper">
    <div class="topbar">

                <!-- LOGO -->
                <div class="topbar-left">
                    <a href="index.html" class="logo">
                        <span class="logo-light">
                            <i class="mdi mdi-camera-control"></i>
                        </span>
                        <span class="logo-sm">
                            <i class="mdi mdi-camera-control"></i>
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
                        <li class="menu-title">Menu</li>
                        <li>
                            <a href="/#/TestManager" class="waves-effect"><span>Quản Lý Bài Đánh Giá </span> </a>
                            <a href="/#/" class="waves-effect"><span>Quản Lý Profile Chuyên Ngành </span> </a>
                            <a href="/#/" class="waves-effect"><span>Quản Lý Profile Sinh Viên </span> </a>
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
        © 2022 Recommendation System <span class="d-none d-sm-inline-block"><i class="mdi mdi-heart text-danger"></i></span>.
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
