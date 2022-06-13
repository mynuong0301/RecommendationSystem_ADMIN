<template>
<div class="content">
    <div class="wrapper-page">
        <div class="card card-pages shadow-none">
            <div class="card-body">
                <div class="text-center m-t-0 m-b-15">
                    <a href="index.html" class="logo">
                        <span class="logo-light">
                            <img src="@/assets/images/fulllogo-removebg-preview.png">
                        </span>
                    </a>
                </div>
                <h5 class="font-45 text-center">ĐĂNG NHẬP</h5>

                <form class="form-horizontal m-t-30">

                    <div class="form-group">
                        <div class="col-12">
                            <label>Tên đăng nhập</label>
                            <div>
                                <b-form-input id="userName" v-model="username"></b-form-input>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-12">
                            <label>Mật khẩu</label>
                            <div>
                                <b-form-input id="password" v-model="password" type="password"></b-form-input>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-12">
                            <div class="checkbox checkbox-primary">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1">
                                    <label class="custom-control-label" for="customCheck1"> Lưu thông tin</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group text-center m-t-20">
                        <div class="col-12">
                            <button v-on:click="onLogin()" class="btn btn-primary btn-block btn-lg waves-effect waves-light" type="submit">Đăng nhập</button>
                        </div>
                    </div>

                    <div class="form-group row m-t-30 m-b-0">
                        <div class="col-sm-7">
                            <a href="pages-recoverpw.html" class="text-muted"><i class="fa fa-lock m-r-5"></i> Quên mật khẩu?</a>
                        </div>
                        <div class="col-sm-5 text-right">
                            <a href="pages-register.html" class="text-muted">Tạo tài khoản mới</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <footer class="footer" style="left: 0 !important">
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
    name: 'Login',
    data() {
        return {
            username: "",
            password: "",
        };
    },
    computed: {
        //

    },
    mounted() {

    },
    methods: {
        onLogin() {
            let url = 'https://localhost:44326/api/UserInfo';
            axios.post(url, {
                UserName: this.username,
                Password: this.password
            }).then((response) => {
                alert(response.data);
                if (response.data.token && response.data.user) {
                    var token = response.data.token;
                    var user = response.data.user;
                    localStorage.token = token;
                    localStorage.user = JSON.stringify(user);

                    // thoog báo

                    this.$router.replace({
                        path: '/StudentProfile'
                    });
                } else {
                     this.$bvToast.toast('Tên đăng nhập hoặc mật khẩu không hợp lệ!', {
                        title: 'Đăng nhập',
                        variant: 'danger',
                        solid: true,
                        autoHideDelay: 1000,
                    });
                }

            }).catch((e) => {
                 this.$bvToast.toast('Tên đăng nhập hoặc mật khẩu không hợp lệ!', {
                        title: 'Đăng nhập',
                        variant: 'danger',
                        solid: true,
                        autoHideDelay: 1000,
                    });
            });

            //axios.post(url, {Email: ksdfjsaf ,sdf ksjfk})
            // Đăng nhập thành công lưu token lại
            //var token = response.data;

        },
    },

}
</script>
