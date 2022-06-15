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
                            <div style="width: 300px; margin-left: 30px">
                                <b-form-input id="input-2" v-model="inputAdmin" placeholder="Nhập người dùng bạn muốn tìm kiếm.." v-on:keyup.enter="getTableData()"> </b-form-input>
                            </div>

                            <div class="row" style="justify-content: right;">
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

                            </div>
                        </div>
                    </div>

                    <div style="width: 400px; margin-right: 10px">
                        <div class="btn-toolbar float-lg-right form-group mb-0" role="toolbar">
                            <div class="">
                                <a style="color: #ffffff; background-color: #FFBE00; border-color: #FFBE00" class="btn btn-info waves-effect waves-light  m-r-5" role="button" data-toggle="modal" data-target="#addAccountModal"><i class="fas fa-plus"></i> <i></i> <span>Thêm tài khoản</span> </a>

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
                                <th>Mật khẩu</th>
                                <th>Email</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody v-for="(item, index) in pageOfItems" :key="index">
                            <tr>
                                <th scope="row" style="width: 50px">{{index+1}}</th>
                                <td>{{item.TenChuyenNganh}}</td>
                                <td>{{item.TenCongViec}}</td>
                                <td>{{item.TenCauHoi}}</td>
                                <td>
                                    <div class="btn-toolbar form-group mb-0">
                                        <div class="">
                                            <a v-on:click="setNeedUpdatedQuestion(item)" v-b-modal="'editQuestionModal'" role="button" class="btn btn-success waves-effect waves-light m-r-5"><i class="far fa-edit"></i></a>
                                            <button v-on:click="setNeedUpdatedQuestion(item)" type="button" class="btn btn-danger waves-effect waves-light m-r-5" data-toggle="modal" v-b-modal="'alertDeleteModal'"><i class="far fa-trash-alt"></i></button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                    <div class="card-footer pb-0 pt-3 " style="text-align: end; background-color: transparent;">
                        <jw-pagination :pageSize="pageSize" :items="tableData" @changePage="onChangePage" :labels="customLabels"></jw-pagination>
                    </div>

                    <!-- modal -->

                    <b-modal id="alertDeleteModal" title="Xóa câu hỏi" hide-footer>
                        <div class="modal-body">
                            <h5 class="font-16">Bạn có chắc chắn muốn khóa tài khoản này không?</h5>
                            <p></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelDeleteQuestion()">Hủy</button>
                            <button type="button" class="btn btn-primary waves-effect waves-light" v-on:click="deleteQuestion()">Xác nhận</button>
                        </div>
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
const exampleItems = [...Array(50).keys()].map(i => ({
    id: (i + 1),
    name: 'Item ' + (i + 1)
}));
const accountLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
};
export default {
    name: 'Account',
    data() {
        return {
            exampleItems,
            pageOfItems: [],
            accountLabels,
            accountJson: "",        
            inputAdmin: "",
        };
    },
    mounted() {

    },
    methods: {

    },
    data() {
        return {
            exampleItems,
            pageOfItems: [],
        }
    },

}
</script>
