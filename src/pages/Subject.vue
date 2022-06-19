<template>
<div class="content-page">

    <div class="content">
        <div class="container-fluid">

            <div class="card-body">

                <div class="page-title-box">
                    <div class="row align-items-center">
                        <div class="col-sm-6">
                            <h3 class="page-title" style="padding-left: 0px !important;">QUẢN LÝ MÔN HỌC</h3>
                        </div>
                    </div> <!-- end row -->
                </div>

                <div class="row mb-3">
                    <div class="col-sm-6">
                        <b-form-input id="input-2" v-model="inputNameSubject" placeholder="Nhập môn học bạn muốn tìm kiếm.." v-on:keyup.enter="getSubjects()"></b-form-input>

                        <!-- <form class="email-inbox">
                            <div class="form-group mb-0">
                                 <input v-model="searchKey" type="text" class="form-control rounded" placeholder="" > -->
                        <!-- <button><i class="fa fa-search"></i></button>
                            </div>
                        </form> -->
                    </div>

                    <!--<div class="col-lg-2 m-r-1">
                        <div class="dropdown mo-mb-2 ">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width:220px; background-color: #005874; border-color: #005874"> {{ khoaHoc === -1 ? 'Chọn năm' : khoaHoc}} </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 34px, 0px);">
                                <div style="height:120px !important; overflow:scroll;">
                                    <tbody v-for=" (year, index) in yearList" :key="index">
                                        <a class="dropdown-item" v-on:click="onKhoaHocSelect(year)">{{year}}</a>
                                    </tbody>
                                </div>
                            </div>
                        </div>
                    </div>-->

                    <div class="col-sm-6">
                        <div class="btn-toolbar float-lg-right form-group mb-0" role="toolbar">
                            <div class="">
                                <a style="background-color: #FFBE00; border-color: #FFBE00" class="btn btn-info waves-effect waves-light  m-r-5" role="button" data-toggle="modal" v-b-modal="'addSubjectAllModal'"><i class="fas fa-plus"></i> <i></i> <span>Thêm môn học</span> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="table-responsive">
                <table class="table table-striped mb-0">
                    <thead>
                        <tr class="bg-primary" style="background-color: #1C819E !important;">
                            <th>STT</th>
                            <th>Mã môn học</th>
                            <th>Tên môn học</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody v-for="(item, index) in pageOfItems" :key="index">
                        <tr>
                            <th scope="row" style="width: 50px">{{index + 1}}</th>
                            <td>{{item.MonHocId}}</td>
                            <td>{{item.TenMonHoc}}</td>

                            <td>
                                <div class="btn-toolbar form-group mb-0">
                                    <div class="row">
                                        <button type="button" class="btn btn-danger waves-effect waves-light m-r-5" v-on:click="setNeedDeletedSubject(item)" v-b-modal="'deleteSubjectModal'"><i class="far fa-trash-alt"></i></button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>

                </table>

                <div class="card-footer pb-0 pt-3 " style="text-align: end; background-color: transparent;">
                    <jw-pagination :pageSize="pageSize" :items="subjectJson" @changePage="onChangePage" :labels="subjectLabels"></jw-pagination>
                </div>

                <!-- modal add subject all -->
                <b-modal id="addSubjectAllModal" title="Thêm mới môn học" hide-footer>
                    <form @submit.prevent="addSubjectsAll" novalidate>
                        <div class="modal-body">
                            <form-group :validator="$v.maMonHoc" label="Mã môn học">
                                <b-form-input id="input-2" v-model="maMonHoc" @input="$v.maMonHoc.$touch()" placeholder="Nhập mã môn học"></b-form-input>
                            </form-group>
                            <form-group :validator="$v.tenMonHoc" label="Tên môn học">
                                <b-form-input id="input-2" v-model="tenMonHoc" @input="$v.tenMonHoc.$touch()" placeholder="Nhập tên môn học"></b-form-input>
                            </form-group>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelAddSubjectAll">Hủy</button>
                            <button type="submit" class="btn btn-primary waves-effect waves-light">Lưu</button>
                        </div>
                    </form>
                </b-modal>

                <!--deleteSubjectModal -->
                <!-- modal -->
                <b-modal id="deleteSubjectModal" title="Xóa môn học" hide-footer>
                    <div class="modal-body">
                        <h5 class="font-16">Bạn có chắc chắn muốn xóa môn học này không?</h5>
                        <p></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Hủy</button>
                        <button type="button" class="btn btn-primary waves-effect waves-light" v-on:click="updateSubjectState()">Xác nhận</button>
                    </div>
                </b-modal>
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
const subjectLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
};
export default {
    name: 'Subject',
    validations: {
        maMonHoc: {
            required,
        },
        tenMonHoc: {
            required,
        },
    },
    mounted() {
        this.getSubjects();

    },
    created() {
        this.ACTIVE_STATE = 1;
        this.UNACTIVE_STATE = 0;
    },
    methods: {
        fetchSubjet(callback) {
            callback();
        },
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        },
        addSubjectsAll() {
            this.$v.maMonHoc.$touch();
            this.$v.tenMonHoc.$touch();
            if (this.$v.maMonHoc.$pending || this.$v.maMonHoc.$error) return;
            if (this.$v.tenMonHoc.$pending || this.$v.tenMonHoc.$error) return;
            let url = 'https://fit4u-admin.somee.com/api/MonHoc';

            this.submitting = true;
            axios.post(url, {
                    MonHocId: this.maMonHoc,
                    TenMonHoc: this.tenMonHoc,
                }).then(response => {
                     this.$bvToast.toast('Thêm thành công!', {
                        title: 'Thành công',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 1000,
                    });
                    this.$bvModal.hide('addSubjectAllModal')
                })
                .catch(error => {
                    this.submitting = false;
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });
            this.maMonHoc = "";
            this.tenMonHoc = "";
        },
        setNeedDeletedSubject(object) {
            this.$bvModal.show('deleteSubjectModal');
            this.needDeletedSubject = {
                ...object

            };
        },

        getSubjects() {
            let url = 'https://fit4u-admin.somee.com/api/MonHoc';
            if (this.inputNameSubject) {
                url += '?name=' + this.inputNameSubject;
            }
            axios.get(url).then((response) => {
                this.subjectJson = response.data;
            });
        },

        updateSubjectState() {
            if (this.needDeletedSubject.isActiveMH === this.ACTIVE_STATE) {
                this.needDeletedSubject.isActiveMH = this.UNACTIVE_STATE;
            }

            let url = `https://fit4u-admin.somee.com/api/MonHoc/${this.needDeletedSubject.MonHocId}`;
            axios.put(url, {
                    MonHocId: this.needDeletedSubject.MonHocId,
                    TenMonHoc: this.needDeletedSubject.TenMonHoc,
                    isActiveMH: this.needDeletedSubject.isActiveMH,
                }).then(response => {

                    this.$bvToast.toast('Xóa thành công!', {
                        title: 'Thành công',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 1000,
                    });
                    this.$bvModal.hide('deleteSubjectModal');
                    this.getSubjects();
                })
                .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });
        },

        onCancelAddSubjectAll() {
            this.$bvModal.hide('addSubjectAllModal');
            this.maMonHoc = "";
            this.tenMonHoc = "";
        },

    },
    data() {
        return {
            pageOfItems: [],
            subjectLabels,
            pageSize: 5,
            submitting: false,
            isSuccess: false,
            subjectName: "",
            subjectId: "",
            subjectJson: "",

            checkBoxValue: 1,
            inputNameSubject: "",
            yearJson: "",
            yearList: [],

            addSubjectList: "",

            selectedAddedSubjects: [],

            needDeletedSubject: {},
            MonHocId: "",
            KhoaHoc: "",

            maMonHoc: "",
            tenMonHoc: "",
        }
    },
    computed: {
        //
        ...mapGetters([
            'khoaHoc',
            'tableDataMonHocXetCN',
        ]),
    },
}
</script>
