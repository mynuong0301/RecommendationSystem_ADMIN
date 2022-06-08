<template>
<div class="content-page">

    <div class="content">
        <div class="container-fluid">
            <b-row style="justify-content: center;">

                <div style="width: 300px !important; margin-top: 20px; text-align: center;">

                    <b-alert :show="isSuccess" dismissible="true" variant="success">Success Alert</b-alert>

                </div>
            </b-row>

            <div class="card-body">

                <div class="page-title-box">
                    <div class="row align-items-center">
                        <div class="col-sm-6">
                            <h3 class="page-title" style="padding-left: 0px !important;">MÔN HỌC XÉT CHUYÊN NGÀNH</h3>
                        </div>
                    </div> <!-- end row -->
                </div>

                <div class="row mb-3">
                    <div class="col-sm-6">
                        <b-form-input id="input-2" v-model="searchKey" placeholder="Nhập môn học bạn muốn tìm kiếm.." v-on:keyup.enter="getSubjects()"></b-form-input>

                        <!-- <form class="email-inbox">
                            <div class="form-group mb-0">
                                 <input v-model="searchKey" type="text" class="form-control rounded" placeholder="" > -->
                        <!-- <button><i class="fa fa-search"></i></button>
                            </div>
                        </form> -->
                    </div>

                    <div class="col-lg-2 m-r-1">
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
                    </div>

                    <div class="col-sm-4">
                        <div class="btn-toolbar float-lg-right form-group mb-0" role="toolbar">
                            <div class="">
                                <a href="/#/AddSubject" style="background-color: #FFBE00; border-color: #FFBE00" class="btn btn-info waves-effect waves-light  m-r-5" role="button" data-toggle="modal" data-target="#addSubjectModal"><i class="fas fa-plus"></i> <i></i> <span>Thêm môn học</span> </a>
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
                            <th>Môn học</th>
                            <th>Xét chuyên ngành</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody v-for="(item, index) in pageOfItems" :key="index">
                        <tr>
                            <th scope="row" style="width: 50px">{{index + 1}}</th>
                            <td>{{item.TenMonHoc}}</td>
                            <b-form-checkbox :id="item.MonHocId" v-model="item.XetChuyenNganh" name="checkbox-1" value="1" unchecked-value="0">
                            </b-form-checkbox>
                            <td>
                                <div class="btn-toolbar form-group mb-0">
                                    <div class="">
                                        <a href="update-product.html" role="button" class="btn btn-success waves-effect waves-light m-r-5" v-on:click="updateSubjectState(item.MonHocId)"><i class="mdi mdi-check-bold"></i></a>
                                        <button type="button" class="btn btn-danger waves-effect waves-light m-r-5" data-toggle="modal" data-target="#alertDeleteModal"><i class="far fa-trash-alt"></i></button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>

                </table>
                <div class="card-footer pb-0 pt-3 " style="text-align: end; background-color: transparent;">
                    <jw-pagination :pageSize="pageSize" :items="tableDataMonHocXetCN" @changePage="onChangePage" :labels="subjectLabels"></jw-pagination>
                </div>

                <!-- modal -->
                <div id="addSubjectModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title mt-0" id="myModalLabel">Thêm môn học xét chuyên ngành</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="card-body">
                                    <form>
                                        <div class="form-group">
                                            <label>Mã môn học</label>
                                    
                                            <v-select multiple v-model="selectedAddedSubjects" :options="subjectJson" label="TenMonHoc" :reduce="subject => subject.MonHocId" />
                                        </div>

                                        <!--<div class="form-group" style="boder: #000000;">
                                            <label>Tên môn học</label>
                                            <div>
                                                <input v-model="subjectName" required="true" class="form-control" rows="5" style="boder: #000000" placeholder="Nhập vào tên môn học " id="subjectName">
                                            </div>
                                        </div>
                                        <div class="form-group" style="boder: #000000;">
                                            <b-form-checkbox id="checkbox-1" v-model="checkBoxValue" name="checkbox-1" value="1" unchecked-value="0">
                                                Chọn để xét chuyên ngành
                                            </b-form-checkbox>
                                        </div> -->
                                        <div class="form-group" style="text-align: end;">
                                            <div>
                                                <button type="reset" class="btn btn-secondary waves-effect m-l-5" data-dismiss="modal"> Hủy </button>

                                                <button type="submit" class="btn btn-primary waves-effect waves-light" v-on:click="addSubject()" data-dismiss="modal">
                                                    <b-spinner class="mr-2" v-if="submitting" small></b-spinner>
                                                    <span> Lưu</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <p></p>
                            </div>
                        </div><!-- /.modal-content -->
                    </div><!-- /.modal-dialog -->
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
const subjectLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
};
export default {
    name: 'Setting',
    mounted() {
        this.getSubjects();
        this.getAllYears();
        
    },
    created() {
        this.CHANGE_STATE = 1;
        this.UNCHANGE_STATE = 0;
    },
    methods: {
        fetchSubjet(callback) {
            callback();
        },
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        },
        addSubject() {
            let url = `https://localhost:44326/api/MonHoc`;

            this.submitting = true;
            axios.post(url, {
                    MonHocId: this.subjectId,
                    TenMonHoc: this.subjectName,
                    XetChuyenNganh: this.checkBoxValue,
                }).then(response => {
                    this.isSuccess = true;
                    fetchSubjet(() => {
                        this.submitting = false;
                    });
                })
                .catch(error => {
                    this.submitting = false;
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });
        },

        getSubjects() {
            let url = 'https://localhost:44326/api/MonHoc';
            if (this.searchKey) {
                url += `?name=${this.searchKey}`
            }
            try {
                axios.get(url).then((response) => {
                    this.subjectJson = response.data;
                });
            } catch (e) {
                console.log(e);
            }

        },
        updateSubjectState(subject) {
            let url = `https://localhost:44326/api/MonHoc/${id}`;
            axios.put(url, account).then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });
        },

        getAllYears() {  
            let url = 'https://localhost:44326/api/MonHocCSNvaToan';
            axios.get(url).then((response) => {
                this.yearJson = response.data;
            
              this.yearJson.forEach((item) => {
                    if (!this.yearList.includes(item.KhoaHoc)) {
                        this.yearList = [...this.yearList, item.KhoaHoc];
                    }
                });

               
               if (this.yearList.length) {
                   this.getTableData();
               }
            });
        },

        getTableData() {
            this.$store.dispatch('onGetMonHocXetCNAction', this.yearList[0]);
        },
        onKhoaHocSelect(khoaHoc) {
    
            this.$store.dispatch('onKhoaHocSelectAction', khoaHoc);
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
            searchKey: "",
            yearJson:"",
            yearList: [],

            addSubjectList:"",

            selectedAddedSubjects: [],
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
