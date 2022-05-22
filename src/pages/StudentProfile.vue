<template>
<div class="content-page">
    <!-- Start content -->
    <div class="content">
        <div class="container-fluid">
            <div class="card-body">

                <div class="page-title-box">
                    <div class="row align-items-center">
                        <div class="col-sm-6">
                            <h3 class="page-title">HỒ SƠ SINH VIÊN</h3>
                        </div>
                    </div> <!-- end row -->
                </div>
                <div class="row mb-3">
                    <div class="col-lg-7">
                        <b-form-input id="input-2" v-model="inputMSSV" placeholder="Nhập MSSV bạn muốn tìm kiếm.." v-on:keyup.enter="getTableData()"></b-form-input>
                    </div>
                    <div class="col-lg-2 m-r-1">
                        <div class="dropdown mo-mb-2 ">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width:220px; background-color: #005874; border-color: #005874"> {{majorStudent ?  majorStudent.TenChuyenNganh: 'Chọn chuyên ngành'}} </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 34px, 0px);">
                                <div style="height:120px !important; overflow:scroll;">
                                    <tbody v-for=" (majorStudent, index) in majorJson" :key="index">
                                        <a class="dropdown-item" v-on:click="onMajorStudentSelect(majorStudent)">{{majorStudent.TenChuyenNganh}}</a>
                                    </tbody>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3">
                        <div class="dropdown mo-mb-2">
                            <button :disabled="majorStudent === '-1' || (majorStudent && majorStudent.ChuyenNganhId === '-1')" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width:220px; background-color: #005874; border-color: #005874"> {{jobStudent === "-1" ? 'Chọn hướng phát triển' : jobStudent.TenCongViec}} </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 34px, 0px);">
                                <div style="height:120px !important; overflow:scroll;">
                                    <tbody v-for=" (jobStudent, index) in jobDataStudent" :key="index">
                                        <a class="dropdown-item" v-on:click="onJobStudentSelect(jobStudent)">{{jobStudent.TenCongViec}}</a>
                                    </tbody>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table table-striped mb-0">
                        <thead>
                            <tr class="bg-primary" style="background-color: #1C819E !important;text-align: center">
                                <th>#</th>
                                <th>MSSV</th>
                                <th>Điểm trung bình</th>
                                <th>Định hướng nghề nghiệp</th>
                                <th>Chuyên ngành</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody v-for="(item, index) in pageOfItems" :key="index" style="text-align: center">
                            <tr>
                                <th scope="row" style="width: 50px">{{index+1}}</th>
                                <td>{{item.MSSV}}</td>
                                <td>{{item.DiemTBCSN}}</td>
                                <td>{{item.TenChuyenNganh}}</td>
                                <td>{{item.TenCongViec}}</td>
                                <td>
                                    <div class="btn-toolbar form-group mb-0" style="justify-content: center !important;">
                                        <div class="" style="text-align: center;">
                                            <a v-on:click="getModalData(item)" style="text-align: center;" href="update-product.html" role="button" class="btn btn-success waves-effect waves-light m-r-5" data-toggle="modal" data-target="#viewStudentInfoModal"><i class="mdi mdi-eye-outline" style="text-align: center;"></i></a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>

                    </table>

                    <div class="card-footer pb-0 pt-3 " style="text-align: end; background-color: transparent;">
                        <jw-pagination :pageSize="pageSize" :items="tableDataStudent" @changePage="onChangePage" :labels="studentLabels"></jw-pagination>
                    </div>
                </div>
            </div>

            <!-- modal -->
            <div id="viewStudentInfoModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                <div class="modal-dialog modal-dialog-centered" style="max-width: 610px !important;">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title mt-0" id="myModalLabel">Thông tin chi tiết</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div>
                            <div>
                                <b-card no-body>
                                    <b-tabs card>
                                        <!--<b-tab title="Thông tin cá nhân" active>
                                            <b-card-text>
                                                <form class="" action="#">
                                                    <div class="form-group">
                                                        <label>Họ và tên</label>
                                                        <div>
                                                            <input type="text" id="pass2" class="form-control" required="" placeholder="Hoàng Thị Thùy Trang">
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label>Kết quả bài đánh giá </label>
                                                        <div class="table-responsive">
                                                            <table class="table align-middle mb-0">
                                                                <thead class="table-light">
                                                                    <tr style="text-align: center">
                                                                        <th>Chuyên ngành</th>
                                                                        <th>Mức độ phù hợp</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody style="text-align: center">
                                                                    <tr>
                                                                        <td>Hệ thống thông tin</td>
                                                                        <td style="color: #fd0808">87%</td>

                                                                    </tr>

                                                                    <tr>
                                                                        <td>Công nghệ phần mềm</td>
                                                                        <td>65%</td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td>Khoa học máy tính</td>
                                                                        <td>42%</td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td>Mạng máy tính và viễn thông</td>
                                                                        <td>33%</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Công nghệ tri thức</td>
                                                                        <td>28%</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Thị giác máy tính</td>
                                                                        <td>12%</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </form>

                                            </b-card-text>
                                        </b-tab> -->
                                        <b-tab title="Điểm cơ sở ngành">
                                            <b-card-text>
                                                <form action="#">
                                                    <tbody v-for="(item, index) in mainSubjectJson" :key="index">
                                                        <div class="form-group">
                                                            <label>{{item.TenMonHoc}}</label>
                                                            <div>
                                                                <b-form-input :id="item.TenMonHoc" v-model="item.DiemMH" disabled required></b-form-input>
                                                               
                                                            </div>
                                                        </div>
                                                    </tbody>
                                                </form>
                                            </b-card-text>
                                        </b-tab>
                                        <b-tab title="Điểm đại cương quan trọng">
                                            <b-card-text>
                                                <form action="#">
                                                    <tbody v-for="(item, index) in generalSubjectJson" :key="index">
                                                        <div class="form-group">
                                                            <label>{{item.TenMonHoc}}</label>
                                                            <div>
                                                                <b-form-input :id="item.TenMonHoc" v-model="item.DiemMH" disabled required></b-form-input>
                                                            </div>
                                                        </div>
                                                    </tbody>
                                                </form>
                                            </b-card-text>
                                        </b-tab>
                                    </b-tabs>
                                </b-card>
                            </div>
                        </div>
                    </div><!-- /.modal-content -->
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
const studentLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
};
export default {
    name: 'StudentProfile',
    data() {
        return {
            exampleItems,
            pageOfItems: [],
            studentLabels,
            majorJson: "",
            mainSubjectJson: "",
            generalSubjectJson: "",
            studentSubjectJson: "",
            inputMSSV: "",
        };
    },
    computed: {
        //
        ...mapGetters([
            'majorStudent',
            'jobStudent',
            'jobDataStudent',
            'tableDataStudent',

        ]),
    },
    mounted() {
        this.getAllMajors();
        this.onMajorStudentSelect();
    },
    methods: {
        getTableData() {
            this.$store.dispatch('onGetStudentsAction', this.inputMSSV);
        },
        onMajorStudentSelect(majorStudent) {
            this.$store.dispatch('onMajorStudentSelectAction', majorStudent);
        },
        onJobStudentSelect(jobStudent) {
            this.$store.dispatch('onJobStudentSelectAction', jobStudent);
        },
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        },
        getAllMajors() {
            let url = 'https://localhost:44326/api/ChuyenNganh';
            axios.get(url).then((response) => {
                this.majorJson = response.data;
                this.majorJson = [{
                    ChuyenNganhId: "-1",
                    TenChuyenNganh: 'Tất cả chuyên ngành',
                }, ...this.majorJson];
                console.log('major', this.majorJson);
            });
        },
        addStudents() {
            let url = 'https://localhost:44326/api/CauHoi';
            axios.get(url).then((response) => {
                this.majorJson = response.data;
            });
        },
        getMainSubjectsInfo(id) {
            let url = `https://localhost:44326/api/DiemCSN/${id}`;
            axios.get(url).then((response) => {
                this.mainSubjectJson = response.data;
            });
        },
        getGeneralSubjectsInfo(id) {
            let url = `https://localhost:44326/api/DiemMonQuanTrong/${id}`;
            axios.get(url).then((response) => {
                this.generalSubjectJson = response.data;
            });
        },
        getModalData(sinhVien) {
            this.getMainSubjectsInfo(sinhVien.MSSV);
            this.getGeneralSubjectsInfo(sinhVien.MSSV);
        },
    },

}
</script>
