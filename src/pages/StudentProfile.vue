<template>
<div class="content-page">
    <!-- Start content -->
    <div class="content">
        <div class="container-fluid">
            <div class="card-body">

                <div class="page-title-box">
                    <div class="row align-items-center">
                        <div class="col-sm-6">
                            <h3 class="page-title" style="padding-left: 0px !important;">HỒ SƠ SINH VIÊN</h3>
                        </div>
                    </div> <!-- end row -->
                </div>
                <div class="row mb-3">
                    <div class="col-lg-6" style=" margin-right: 20px;">
                        <b-form-input id="input-2" v-model="inputMSSV" placeholder="Nhập MSSV bạn muốn tìm kiếm.." v-on:keyup.enter="getTableData()"></b-form-input>
                    </div>
                    <div style="flex: auto; margin-right: 30px" >
                        <div class="row" style="justify-content: right;">
                            <div class="dropdown mo-mb-2 " style="margin-right: 20px;">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style=" background-color: #005874; border-color: #005874"> {{majorStudent ?  majorStudent.TenChuyenNganh: 'Chọn chuyên ngành'}} </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 34px, 0px);">
                                <div style="height:120px !important; overflow:scroll;">
                                    <tbody v-for=" (majorStudent, index) in majorJson" :key="index">
                                        <a class="dropdown-item" v-on:click="onMajorStudentSelect(majorStudent)">{{majorStudent.TenChuyenNganh}}</a>
                                    </tbody>
                                </div>
                            </div>
                        </div>

                         <div>
                        <div class="dropdown mo-mb-2">
                            <button :disabled="majorStudent === '-1' || (majorStudent && majorStudent.ChuyenNganhId === '-1')" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style=" background-color: #005874; border-color: #005874"> {{jobStudent === "-1" ? 'Chọn hướng phát triển' : jobStudent.TenCongViec}} </button>
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
                    </div>

                   
                </div>
                <div class="table-responsive">
                    <table class="table table-striped mb-0">
                        <thead>
                            <tr class="bg-primary" style="background-color: #1C819E !important;text-align: center">
                                <th>#</th>
                                <th>MSSV</th>
                                <th>Điểm trung bình</th>
                                <th>Chuyên ngành</th>
                                <th>Định hướng nghề nghiệp</th>
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
                            <h5 class="modal-title mt-0" id="myModalLabel">Điểm môn học</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div>
                            <div>
                                <b-card no-body>
                                    <b-tabs card>
                                        <b-tab title="Cơ sở ngành">
                                            <b-card-text>
                                                <div class="table-responsive">
                                                    <table class="table table-striped mb-0">
                                                        <thead>
                                                            <tr class="bg-primary" style="background-color: #1C819E !important;">
                                                                <th>STT</th>
                                                                <th>Mã môn học</th>
                                                                <th>Tên môn học</th>
                                                                <th>Điểm</th>
                                                                <th> </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody v-for="(item, index) in mainSubjectJson" :key="index">
                                                            <tr style="background: white !important">
                                                                <th scope="row" style="width: 50px">{{index+1}}</th>
                                                                <td>{{item.MonHocId}}</td>
                                                                <td>{{item.TenMonHoc}}</td>
                                                                <td>{{item.DiemMH}}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </b-card-text>
                                        </b-tab>
                                        <b-tab title="Đại cương quan trọng">
                                            <b-card-text>
                                                <div class="table-responsive">
                                                    <table class="table table-striped mb-0">
                                                        <thead>
                                                            <tr class="bg-primary" style="background-color: #1C819E !important;">
                                                                <th>STT</th>
                                                                <th>Mã môn học</th>
                                                                <th>Tên môn học</th>
                                                                <th>Điểm</th>
                                                                <th> </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody v-for="(item, index) in generalSubjectJson" :key="index">
                                                            <tr  style="background: white !important">
                                                                <th scope="row" style="width: 50px">{{index+1}}</th>
                                                                <td>{{item.MonHocId}}</td>
                                                                <td>{{item.TenMonHoc}}</td>
                                                                <td>{{item.DiemMH}}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
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
             console.log('majorStudent', majorStudent);
            this.$store.dispatch('onMajorStudentSelectAction', majorStudent);
            this.inputMSSV ="";
        },
        onJobStudentSelect(jobStudent) {
            console.log('jobStudent', jobStudent);
            this.$store.dispatch('onJobStudentSelectAction', jobStudent);
            this.inputMSSV ="";
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
