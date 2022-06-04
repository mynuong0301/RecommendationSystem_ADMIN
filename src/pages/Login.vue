<template>
<div class="content-page">
    <!-- Start content -->
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

                    <form class="form-horizontal m-t-30" action="index.html">

                        <div class="form-group">
                            <div class="col-12">
                                <label>Tên đăng nhập</label>
                                <input class="form-control" type="text" required="" placeholder="Tên đăng nhập">
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-12">
                                <label>Mật khẩu</label>
                                <input class="form-control" type="password" required="" placeholder="Mật khẩu">
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
                                <button class="btn btn-primary btn-block btn-lg waves-effect waves-light" type="submit">Đăng nhập</button>
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
    </div>
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

        };
    },
    computed: {
        //

    },
    mounted() {

    },
    methods: {

    },

}
</script>
