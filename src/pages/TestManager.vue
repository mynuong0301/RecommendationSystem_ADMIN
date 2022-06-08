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
                            <h3 class="page-title" style="padding-left: 0px !important;">BÀI ĐÁNH GIÁ</h3>
                        </div>
                    </div> <!-- end row -->
                </div>
                <div class="row mb-3">
                    <div class="col-lg-4">

                     
                                <b-form-input id="input-2" v-model="inputQuestion" placeholder="Nhập câu hỏi bạn muốn tìm kiếm.." v-on:keyup.enter="getTableData()"> </b-form-input>
                           
                     
                    </div>

                    <div class="col-lg-2 m-r-1">
                        <div class="dropdown mo-mb-2 ">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width:220px; background-color: #005874; border-color: #005874"> {{major ?  major.TenChuyenNganh: 'Chọn chuyên ngành'}} </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 34px, 0px);">
                                <div style="height:120px !important; overflow:scroll;">
                                    <tbody v-for=" (major, index) in majorJson" :key="index">
                                        <a class="dropdown-item" v-on:click="onMajorSelect(major)">{{major.TenChuyenNganh}}</a>
                                    </tbody>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-2">
                        <div class="dropdown mo-mb-2">
                            <button :disabled="major === '-1' || (major && major.ChuyenNganhId === '-1')" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width:220px; background-color: #005874; border-color: #005874"> {{job === "-1" ? 'Chọn hướng phát triển' : job.TenCongViec}} </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 34px, 0px);">
                                <div style="height:120px !important; overflow:scroll;">
                                    <tbody v-for=" (job, index) in jobData" :key="index">
                                        <a class="dropdown-item" v-on:click="onJobSelect(job)">{{job.TenCongViec}}</a>
                                    </tbody>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="btn-toolbar float-lg-right form-group mb-0" role="toolbar">
                            <div class="">
                                <a href="/#/ImportFile" style="background-color: #FFBE00; border-color: #FFBE00" class="btn btn-info waves-effect waves-light  m-r-5" role="button" data-toggle="modal" data-target="#importExcelFile"><i class="fas fa-plus"></i> <i></i> <span>Tải tập tin câu hỏi</span> </a>
                                <a style="color: #ffffff; background-color: #FFBE00; border-color: #FFBE00" class="btn btn-info waves-effect waves-light  m-r-5" role="button" data-toggle="modal" data-target="#addQuestionModal"><i class="fas fa-plus"></i> <i></i> <span>Thêm câu hỏi</span> </a>

                            </div>
                        </div>
                    </div>

                </div>

                <div class="table-responsive">
                    <table class="table table-striped mb-0">
                        <thead>
                            <tr class="bg-primary" style="background-color: #1C819E !important;">
                                <th>STT</th>
                                <th>Chuyên ngành</th>
                                <th>Công việc/hướng phát triển</th>
                                <th>Câu hỏi</th>
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
            
                     <b-modal id="alertDeleteModal" title="Xóa câu hỏ" hide-footer>
                <div class="modal-body">
                     <h5 class="font-16">Bạn có chắc chắn muốn xóa câu hỏi này không?</h5>
                                    <p></p></div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelDeleteQuestion()">Hủy</button>
                    <button type="button" class="btn btn-primary waves-effect waves-light" v-on:click="deleteQuestion()">Xác nhận</button>
                </div>
            </b-modal>

                    <!-- modal -->
                    <div id="importExcelFile" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title mt-0" id="myModalLabel">Tải tập tin câu hỏi</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div>
                                        <!-- Styled -->
                                        <b-form-file v-model="file1" :state="Boolean(file1)" placeholder="Chọn tập tin hoặc kéo thả..." drop-placeholder="Kéo thả tập tin vào đây..."></b-form-file>
                                        <div class="mt-3">Tập tin đã chọn: {{ file1 ? file1.name : '' }}</div>

                                        <!-- Plain mode -->
                                        <b-form-file v-model="file2" class="mt-3" plain></b-form-file>
                                        <!--<div class="mt-3">Tập tin đã chọn: {{ file2 ? file2.name : '' }}</div> -->
                                    </div>
                                </div>
                            </div><!-- /.modal-content -->
                        </div><!-- /.modal-dialog -->
                    </div>

                </div>
            </div>

            <!-- modal -->
            <div id="addQuestionModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title mt-0" id="myModalLabel">Thêm câu hỏi</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="card-body">
                                <form>
                                    <div class="form-group">
                                        <label>Chuyên ngành</label>
                                        <div class="dropdown mo-mb-2">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width: 300px !important;background-color:transparent; boder:#000000; color: #000000;text-align: left;">
                                                {{majorPopup=== "-1" ? 'Chọn chuyên ngành' :majorPopup.TenChuyenNganh}}
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <tbody v-for=" (major, index) in majorJson" :key="index">
                                                    <a class="dropdown-item" v-on:click="onMajorSelect(major, 1)">{{major.TenChuyenNganh}}</a>
                                                </tbody>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Công việc/hướng phát triển</label>
                                        <div class="dropdown mo-mb-2">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width: 300px !important;background-color:transparent; boder:#000000; color: #000000;text-align: left;">
                                                {{jobPopup === "-1" ? 'Chọn hướng phát triển' : jobPopup.TenCongViec}}
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <tbody v-for=" (job, index) in jobDataPopup" :key="index">
                                                    <a class="dropdown-item" v-on:click="onJobSelect(job, 1)">{{job.TenCongViec}}</a>
                                                </tbody>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group" style="boder: #000000;">
                                        <label>Câu hỏi</label>
                                        <div>
                                            <textarea required="" v-model="tencauhoi" class="form-control" rows="5" style="boder: #000000" placeholder="Nhập vào nội dung câu hỏi "></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group" style="text-align: end;">
                                        <div>
                                            <button type="reset" class="btn btn-secondary waves-effect m-l-5"> Hủy </button>
                                            <button class="btn btn-primary waves-effect waves-light" v-on:click="addQuestion(tencauhoi)"> Lưu </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <p></p>
                        </div>
                        <!-- <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Hủy</button>
                                        <button type="button" class="btn btn-primary waves-effect waves-light">Xác nhận</button>
                                </div> -->
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div>

            <!--Edit MinScore -->
            <!-- modal -->
            <b-modal id="editQuestionModal" title="Chỉnh sửa câu hỏi" hide-footer>
                <div class="modal-body">
                    <label>Chuyên ngành</label>
                    <b-form-input id="chuyenNganh" v-model="needUpdatedQuestion.TenChuyenNganh"></b-form-input>
                    <label>Công việc và hướng phát triển</label>
                    <b-form-input id="congViec" v-model="needUpdatedQuestion.TenCongViec"></b-form-input>
                    <label>Tên câu hỏi</label>
                    <b-form-textarea id="tenCauHoi" v-model="needUpdatedQuestion.TenCauHoi" required rows="4"></b-form-textarea>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelEditQuestion()">Hủy</button>
                    <button type="button" class="btn btn-primary waves-effect waves-light" v-on:click="updateQuestion()">Lưu</button>
                </div>
            </b-modal>
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
const customLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
};
export default {
    name: 'TestManger',
    computed: {
        //
        ...mapGetters([
            'major',
            'job',
            'jobData',
            'tableData',
            'jobPopup',
            'jobDataPopup',
            'majorPopup'
        ]),
    },
    mounted() {
        this.getAllMajors();
        this.onMajorSelect();
    },
    methods: {
        getTableData() {
            console.log('inputQuestion', this.inputQuestion);
            this.$store.dispatch('onGetQuestionsAction', this.inputQuestion);

        },
        
        setNeedUpdatedQuestion(object) {
            this.needUpdatedQuestion = object;
        },

        onCancelEditQuestion()
        {
            this.$bvModal.hide('editQuestionModal');
        },
          onCancelDeleteQuestion()
        {
            this.$bvModal.hide('alertDeleteModal');
        },
        onMajorSelect(major, type) {
            this.$store.dispatch('onMajorSelectAction', {
                major,
                type
            });
            this.inputQuestion = "";
        },
        onJobSelect(job, type) {
            this.$store.dispatch('onJobSelectAction', {
                job,
                type
            });
             this.inputQuestion = "";
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
                this.backUpQuestionName = this.questionJson.TenCauHoi;
            });
        },
        addQuestion(tencauhoi) {
            const id = this.jobPopup.CongViecVaHuongPhatTrienId;

            let url = `https://localhost:44326/api/BaiDanhGiaDinhHuongNgheNghiep?tencauhoi=${tencauhoi}&id=${id}`;
            axios.post(url).then((response) => {
                this.questionJson = response.data;

                if (response.data === "Success") {
                    this.$bvToast.toast('Thêm câu hỏi thành công!', {
                        title: 'Thành công',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 1000,
                    });

                    this.tencauhoi = "";
                      this.getTableData();
                }
            });
        },
        deleteQuestion() {
            let url = `https://localhost:44326/api/CauHoiHuongPhatTrien?ques_id=${this.needUpdatedQuestion.BaiDanhGiaDinhHuongNgheNghiepId}&job_id=${this.needUpdatedQuestion.CongViecVaHuongPhatTrienId}`;

            axios.delete(url).then(response => {
                       if (response.data) {
                    this.$bvToast.toast('Xóa câu hỏi thành công!', {
                        title: 'Thành công',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 1000,
                    });
                    this.getTableData();
                    }
                })
                .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });

                this.onCancelDeleteQuestion();
        },

        updateQuestion() {
            let url = `https://localhost:44326/api/BaiDanhGiaDinhHuongNgheNghiep/${this.needUpdatedQuestion.BaiDanhGiaDinhHuongNgheNghiepId}`;
            axios.put(url, 
                        {BaiDanhGiaDinhHuongNgheNghiepId: this.needUpdatedQuestion.BaiDanhGiaDinhHuongNgheNghiepId,
                        TenCauHoi: this.needUpdatedQuestion.TenCauHoi
                        }).then(response => {
                    console.log(response.data);
                    this.questionJson = response.data;
                    this.backUpQuestionName = this.questionJson.TenCauHoi;
                    this.$bvToast.toast('Cập nhật thành công!', {
                        title: 'Thành công',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 1000,
                    });
                })
                .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });
                this.$bvModal.hide('editQuestionModal');
        },

    },
    data() {
        return {
            pageOfItems: [],
            customLabels,
            pageSize: 5,
            majorJson: "",
            questionJson: "",
            tencauhoi: "",
            inputQuestion: "",
            backUpQuestionName: "",
            needUpdatedQuestion:{},
        }
    },

}
</script>
