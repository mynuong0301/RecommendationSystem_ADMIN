<template>
<!-- ============================================================== -->
<!-- Start right Content here -->
<!-- ============================================================== -->
<div class="content-page">
    <!-- Start content -->
    <div class="content">

        <div class="container-fluid">
            <!-- end page-title -->

            <div class="card-body">

                <div class="page-title-box">
                    <div class="row align-items-center">
                        <div class="col-sm-6">
                            <h3 class="page-title" style="padding-left: 0px !important;">QUẢN LÝ TÀI KHOẢN ADMIN</h3>
                        </div>
                    </div> <!-- end row -->
                </div>
                <div class="row mb-3">
                    <div style="flex: auto;">
                        <div class="row" style="justify-content: space-between;">
                            <div style="width: 600px; margin-left: 30px">
                                <b-form-input id="input-2" v-model="inputAdmin" placeholder="Nhập người dùng bạn muốn tìm kiếm.." v-on:keyup.enter="getAllAccounts()"> </b-form-input>
                            </div>

                            <!--<div class="row" style="justify-content: right;">
                                <div style="margin-right: 20px">
                                    <div class="dropdown mo-mb-2 ">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style=" background-color: #005874; border-color: #005874"> {{major ?  major.TenChuyenNganh: 'Chọn chuyên ngành'}} </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 34px, 0px);">
                                            <div style="height:120px !important; overflow:scroll;">
                                                <tbody v-for=" (major, index) in majorJson" :key="index">
                                                    <a class="dropdown-item" v-on:click="onMajorSelect(major)">{{major.TenChuyenNganh}}</a>
                                                </tbody>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>-->
                        </div>
                    </div>

                    <div style="width: 400px; margin-right: 10px">
                        <div class="btn-toolbar float-lg-right form-group mb-0" role="toolbar">
                            <div class="">
                                <a style="color: #ffffff; background-color: #FFBE00; border-color: #FFBE00" class="btn btn-info waves-effect waves-light  m-r-5" role="button" v-b-modal="'addAccountModal'"><i class="fas fa-plus"></i> <i></i> <span>Thêm tài khoản</span> </a>

                            </div>
                        </div>
                    </div>

                </div>

                <div class="table-responsive">
                    <table class="table table-striped mb-0">
                        <thead>
                            <tr class="bg-primary" style="background-color: #1C819E !important;">
                                <th>STT</th>
                                <th>Tên hiển thị</th>
                                <th>Tên đăng nhập</th>                                
                                <th>Email</th>
                                <th>Trạng thái</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody v-for="(item, index) in accountJson" :key="index">
                            <tr>

                                <th scope="row" style="width: 50px">{{index+1}}</th>
                                <td>{{item.DisplayName}}</td>
                                <td>{{item.UserName}}</td>                             
                                <td>{{item.Email}}</td>
                                <td>
                                    <div v-if="item.isActive === LOCKED_STATE">
                                        <span class="badge badge-danger">Bị khóa</span>
                                    </div>
                                    <div v-else>
                                        <span class="badge badge-success">Đang hoạt động</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="btn-toolbar form-group mb-0">
                                        <div class="row">
                                            <div v-if="item.isActive === LOCKED_STATE">
                                                <a role="button" class="btn btn-success waves-effect waves-light m-r-5" v-on:click="setNeedUnlockAccount(item)" v-b-modal="'unlockModal'"><i class="mdi mdi-lock-open-outline"></i></a>
                                            </div>

                                            <div v-else>
                                                <a role="button" class="btn btn-info waves-effect waves-light m-r-5" v-on:click="setNeedLockAccount(item)" v-b-modal="'lockModal'"><i class="mdi mdi-lock"></i></a>
                                            </div>

                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- modal lock account -->
                    <b-modal id="lockModal" title="Khóa tài khoản" hide-footer>
                        <div class="modal-body">
                            <h5 class="font-16">Bạn có chắc chắn muốn khóa tài khoản này không?</h5>
                            <p></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelLockAccount">Hủy</button>
                            <button type="submit" class="btn btn-primary waves-effect waves-light" v-on:click="updateAccountState()">Xác nhận</button>
                        </div>
                    </b-modal>

                    <!-- modal unlock account -->
                    <b-modal id="unlockModal" title="Mở khóa tài khoản" hide-footer>
                        <div class="modal-body">
                            <h5 class="font-16">Bạn có chắc chắn muốn mở khóa tài khoản này không?</h5>
                            <p></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelUnlockAccount">Hủy</button>
                            <button type="submit" class="btn btn-primary waves-effect waves-light" v-on:click="updateAccountState()">Xác nhận</button>
                        </div>
                    </b-modal>

                    <!-- modal add account -->
                    <b-modal id="addAccountModal" title="Thêm tài khoản admin" hide-footer>
                        <form @submit.prevent="addAccount" novalidate>
                            <div class="modal-body">
                                <form-group :validator="$v.tenHienThi" label="Tên hiển thị">
                                    <b-form-input id="tenHienThi" v-model="tenHienThi" @input="$v.tenHienThi.$touch()" :required="true"></b-form-input>
                                </form-group>
                                <form-group :validator="$v.tenDangNhap" label="Tên đăng nhập">
                                    <b-form-input id="tenDangNhap" v-model="tenDangNhap" @input="$v.tenDangNhap.$touch()" :required="true"></b-form-input>
                                </form-group>
                                <form-group :validator="$v.matKhau" label="Mật khẩu">
                                    <b-form-input id="matKhau" v-model="matKhau" @input="$v.matKhau.$touch()" :required="true"></b-form-input>
                                </form-group>
                                <form-group :validator="$v.email" label="Email">
                                    <b-form-input id="email" v-model="email" @input="$v.email.$touch()" :required="true"></b-form-input>
                                </form-group>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelAddAccount">Hủy</button>
                                <button type="submit" class="btn btn-primary waves-effect waves-light">Lưu</button>
                            </div>
                        </form>
                    </b-modal>
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
import {
    required,

} from "vuelidate/lib/validators";
import {
    isPasswordLength,
    isGmail
} from "../validators";
export default {
    name: 'Account',
    validations: {
        tenHienThi: {
            required
        },
        tenDangNhap: {
            required
        },
        matKhau: {
            required,
            passwordLength: isPasswordLength
        },
        email: {
            required,
            notGmail:isGmail
        },
    },

    data() {
        return {
            accountJson: "",
            inputAdmin: "",
            needUpdatedAccount: {},
            tenHienThi:"",
            tenDangNhap:"",
            matKhau:"",
            email:"",
        };
    },
    mounted() {
        this.getAllAccounts()
    },
    created() {
        this.LOCKED_STATE = 0;
        this.ACTIVE_STATE = 1;
    },
    methods: {
        getAllAccounts() {
            let url = 'https://fit4u-admin.somee.com/api/Account';
            if (this.inputAdmin) {
                url += '?displayName=' + this.inputAdmin;
            }
            axios.get(url).then((response) => {
                this.accountJson = response.data;
            });
        },

        updateAccountState() {
            if (this.needUpdatedAccount.isActive === this.LOCKED_STATE) {
                this.needUpdatedAccount.isActive = this.ACTIVE_STATE;
            } else {
                this.needUpdatedAccount.isActive = this.LOCKED_STATE;
            }

            let url = `https://fit4u-admin.somee.com/api/Account/${this.needUpdatedAccount.AdminId}`;
            axios.put(url, {
                    DisplayName: this.needUpdatedAccount.DisplayName,
                    UserName: this.needUpdatedAccount.UserName,
                    Password: this.needUpdatedAccount.Password,
                    Email: this.needUpdatedAccount.Email,
                    isActive: this.needUpdatedAccount.isActive
                }).then(response => {
                    console.log(response.data);
                    this.getAllAccounts();
                })
                .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });

            this.$bvModal.hide('unlockModal');
            this.$bvModal.hide('lockModal');

        },

        setNeedLockAccount(object) {
            this.$bvModal.show('lockModal');
            this.needUpdatedAccount = {
                ...object

            };
        },
        setNeedUnlockAccount(object) {
            this.$bvModal.show('unlockModal');
            this.needUpdatedAccount = {
                ...object
            };
        },

        onCancelLockAccount() {
            this.$bvModal.hide('lockModal');
        },
        onCancelUnlockAccount() {
            this.$bvModal.hide('unlockModal');
        },

        onCancelAddAccount() {
            this.tenHienThi="",
            this.tenDangNhap="",
            this.matKhau="",
            this.email="",
            this.$bvModal.hide('addAccountModal');
        },


        addAccount() {
            this.$v.tenHienThi.$touch();
            this.$v.tenDangNhap.$touch();
            this.$v.matKhau.$touch();
            this.$v.email.$touch();
            if (this.$v.tenHienThi.$pending || this.$v.tenHienThi.$error) return;           
            if (this.$v.tenDangNhap.$pending || this.$v.tenDangNhap.$error) return;           
            if (this.$v.matKhau.$pending || this.$v.matKhau.$error) return;          
            if (this.$v.email.$pending || this.$v.email.$error) return;
            const body = {
                "DisplayName": this.tenHienThi,
                "UserName": this.tenDangNhap,
                "Password": this.matKhau,
                "Email": this.email,
            }

            let url = 'https://fit4u-admin.somee.com/api/Account';
            axios.post(url, body).then((response) => {
                this.questionJson = response.data;

                this.$bvToast.toast('Thêm tài khoản!', {
                    title: 'Thành công',
                    variant: 'success',
                    solid: true,
                    autoHideDelay: 1000,
                });
                this.getAllAccounts();
                this.tenHienThi="",
            this.tenDangNhap="",
            this.matKhau="",
            this.email="",
            this.$bvModal.hide('addAccountModal');
            });
            
        },
    },

}
</script>
