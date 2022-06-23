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
                    <div style="flex: auto;">
                        <div class="row" style="justify-content: space-between;">
                            <div style="width: 300px; margin-left: 30px">
                                <b-form-input id="input-2" v-model="inputQuestion" placeholder="Nhập câu hỏi bạn muốn tìm kiếm.." v-on:keyup.enter="getTableData()"> </b-form-input>
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

                                <div>
                                    <div class="dropdown mo-mb-2">
                                        <button :disabled="major === '-1' || (major && major.ChuyenNganhId === '-1')" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style=" background-color: #005874; border-color: #005874"> {{job === "-1" ? 'Chọn hướng phát triển' : job.TenCongViec}} </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 34px, 0px);">
                                            <div style="height:120px !important; overflow:scroll;">
                                                <tbody v-for=" (job, index) in jobData" :key="index">
                                                    <a class="dropdown-item" v-on:click="onJobSelect(job)">{{job.TenCongViec}}</a>
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
                                <a style="color: #ffffff; background-color: #FFBE00; border-color: #FFBE00" class="btn btn-info waves-effect waves-light  m-r-5" role="button" v-b-modal="'importExcelFile'"><i class="fas fa-plus"></i> <i></i> <span>Tải tập tin câu hỏi</span> </a>
                                <a style="color: #ffffff; background-color: #FFBE00; border-color: #FFBE00" class="btn btn-info waves-effect waves-light  m-r-5" role="button" v-b-modal="'addQuestionModal'"><i class="fas fa-plus"></i> <i></i> <span>Thêm câu hỏi</span> </a>

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

                    <b-modal id="alertDeleteModal" title="Xóa câu hỏi" hide-footer>
                        <div class="modal-body">
                            <h5 class="font-16">Bạn có chắc chắn muốn xóa câu hỏi này không?</h5>
                            <p></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelDeleteQuestion()">Hủy</button>
                            <button type="button" class="btn btn-primary waves-effect waves-light" v-on:click="deleteQuestion()">Xác nhận</button>
                        </div>
                    </b-modal>

                    <!-- modal -->

                    <b-modal id="importExcelFile" title="Tải tập tin câu hỏi" hide-footer>
                        <b-form-group label="Tập tin" label-for="form-image" label-cols-lg="2">
                            <b-input-group>
                                <b-input-group-prepend is-text>
                                    <i style="font-size: 16px !important" class="mdi mdi-file-excel"></i>
                                </b-input-group-prepend>
                                <b-form-file @change="onFileChange" id="form-image" v-model="excelFile" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"></b-form-file>
                            </b-input-group>
                        </b-form-group>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelDeleteQuestion()">Hủy</button>
                            <button type="button" class="btn btn-primary waves-effect waves-light" v-on:click="uploadQuestionFile()">Xác nhận</button>
                        </div>
                    </b-modal>

                </div>
            </div>

            <!-- modal -->
            <b-modal id="addQuestionModal" title="Thêm câu hỏi" hide-footer>
                <form @submit.prevent="addQuestion" novalidate>
                    <div class="modal-body">
                        <div class="form-group">
                                    <label>Chuyên ngành</label>
                                    <div class="dropdown mo-mb-2">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width: 365px !important;background-color:transparent; boder:#000000; color: #000000;text-align: left;">
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
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width: 365px !important;background-color:transparent; boder:#000000; color: #000000;text-align: left;">
                                            {{jobPopup === "-1" ? 'Chọn hướng phát triển' : jobPopup.TenCongViec}}
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <tbody v-for=" (job, index) in jobDataPopup" :key="index">
                                                <a class="dropdown-item" v-on:click="onJobSelect(job, 1)">{{job.TenCongViec}}</a>
                                            </tbody>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <form-group :validator="$v.tencauhoi" label="Tên câu hỏi">
                                        <b-form-textarea @input="$v.tencauhoi.$touch()" required row="4" id="tencauhoi" v-model="tencauhoi" placeholder="Nhập vào nội dung câu hỏi "></b-form-textarea>
                                    </form-group>
                                </div>
                                <div class="form-group" style="text-align: end;">
                                    <div>
                                        <button type="reset" class="btn btn-secondary waves-effect m-l-5" v-on:click="onCancelAddQuestion"> Hủy </button>
                                        <button type="submit" class="btn btn-primary waves-effect waves-light"> Lưu </button>
                                    </div>
                                </div>
                        <p></p>
                    </div>
                </form>
            </b-modal>

            <!--Edit editQuestionModal -->
            <!-- modal -->
            <b-modal id="editQuestionModal" title="Chỉnh sửa câu hỏi" hide-footer>
                <form @submit.prevent="updateQuestion" novalidate>
                    <div class="modal-body">
                        <label>Chuyên ngành</label>
                        <b-form-input id="chuyenNganh" v-model="needUpdatedQuestion.TenChuyenNganh" disabled="true"></b-form-input>
                        <label>Công việc và hướng phát triển</label>
                        <b-form-input id="congViec" v-model="needUpdatedQuestion.TenCongViec" disabled="true"></b-form-input>
                        <form-group :validator="$v.needUpdatedQuestion.TenCauHoi" label="Tên câu hỏi">
                            <b-form-textarea @input="$v.needUpdatedQuestion.$touch()" id="tenCauHoi" v-model="needUpdatedQuestion.TenCauHoi" required rows="4"></b-form-textarea>
                        </form-group>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelEditQuestion()">Hủy</button>
                        <button type="submit" class="btn btn-primary waves-effect waves-light">Lưu</button>
                    </div>
                </form>
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
import {
    required,

} from "vuelidate/lib/validators";
const customLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
};
export default {
    name: 'TestManger',
    validations: {
        tencauhoi: {
            required
        },
        needUpdatedQuestion: {
            TenCauHoi: {
                required,
            }
        }
    },
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

        onCancelEditQuestion() {
            this.$bvModal.hide('editQuestionModal');
        },
        onCancelAddQuestion() {
            this.$bvModal.hide('addQuestionModal');
        },
        onCancelDeleteQuestion() {
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
            let url = 'https://fit4u-admin.somee.com/api/ChuyenNganh';
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
        addQuestion() {
            this.$v.tencauhoi.$touch();
              
            if (this.$v.tencauhoi.$pending || this.$v.tencauhoi.$error) return;
         
            const id = this.jobPopup.CongViecVaHuongPhatTrienId;

            let url = `https://fit4u-admin.somee.com/api/BaiDanhGiaDinhHuongNgheNghiep?tencauhoi=${this.tencauhoi}&id=${id}`;
            axios.post(url).then((response) => {
                this.questionJson = response.data

                if (response.data === "Success") {
                    this.$bvToast.toast('Thêm câu hỏi thành công!', {
                        title: 'Thành công',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 1000,
                    });

                    this.tencauhoi = "";
                    this.getTableData();
                    this.$bvModal.hide('addQuestionModal')
                }
            });
        },

        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;

        },

        uploadQuestionFile() {

            let url = 'https://fit4u-admin.somee.com/api/ReadQuestionExcel';
            let formData = new FormData();
            formData.append("formFile", this.excelFile);
            axios.post(url, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },

            }).then((response) => {

                if (response.data === "success") {
                    this.$bvToast.toast('Thêm tập tin câu hỏi thành công!', {
                        title: 'Thành công',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 1000,
                    });
                    this.$bvModal.hide('importExcelFile');
                    this.getTableData();
                }
            });

        },
        deleteQuestion() {
            let url = `https://fit4u-admin.somee.com/api/CauHoiHuongPhatTrien?ques_id=${this.needUpdatedQuestion.BaiDanhGiaDinhHuongNgheNghiepId}&job_id=${this.needUpdatedQuestion.CongViecVaHuongPhatTrienId}`;

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
            this.$v.needUpdatedQuestion.TenCauHoi.$touch();
            if (this.$v.needUpdatedQuestion.TenCauHoi.$pending || this.$v.needUpdatedQuestion.TenCauHoi.$error) return;
            let url = `https://fit4u-admin.somee.com/api/BaiDanhGiaDinhHuongNgheNghiep/${this.needUpdatedQuestion.BaiDanhGiaDinhHuongNgheNghiepId}`;
            axios.put(url, {
                    BaiDanhGiaDinhHuongNgheNghiepId: this.needUpdatedQuestion.BaiDanhGiaDinhHuongNgheNghiepId,
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
            needUpdatedQuestion: {},
            excelFile: "",
        }
    },

}
</script>
