<template>
<div class="content-page">
    

    <div class="content">
         <div class="container-fluid">
        <b-row style="justify-content: center;">
            
            <div style="width: 300px !important; margin-top: 20px; text-align: center;">
 
  <b-alert :show="isSuccess"  dismissible="true" variant="success">Success Alert</b-alert>
  
</div>
        </b-row>
       
            <div class="card-body">

                <div class="page-title-box">
                    <div class="row align-items-center">
                        <div class="col-sm-6">
                            <h3 class="page-title">MÔN HỌC XÉT CHUYÊN NGÀNH</h3>
                        </div>
                        <div class="col-sm-6">
                            <div class="btn-toolbar float-lg-right form-group mb-0" role="toolbar">
                                <div class="">
                                    <a href="/#/AddSubject" style="background-color: #FFBE00; border-color: #FFBE00" class="btn btn-info waves-effect waves-light  m-r-5" role="button" data-toggle="modal" data-target="#addSubjectModal"><i class="fas fa-plus"></i> <i></i> <span>Thêm môn học</span> </a>
                                </div>
                            </div>
                        </div>
                    </div> <!-- end row -->
                </div>
            </div>

            <div class="table-responsive">
                <table class="table table-striped mb-0">
                    <thead>
                        <tr class="bg-primary" style="background-color: #1C819E !important;">
                            <th>#</th>
                            <th>Môn học</th>
                            <th>Xét chuyên ngành</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody v-for="(item) in pageOfItems" :key="item.id">
                        <tr>
                            <th scope="row" style="width: 50px">{{item.id}}</th>
                            <td>Kỹ thuật phần mềm</td>
                            <td>Developer</td>
                            <td>Tạo 1 website hoặc ứng dụng nào đó?</td>
                            <td>
                                <div class="btn-toolbar form-group mb-0">
                                    <div class="">
                                        <a href="update-product.html" role="button" class="btn btn-success waves-effect waves-light m-r-5"><i class="far fa-edit"></i></a>
                                        <button type="button" class="btn btn-danger waves-effect waves-light m-r-5" data-toggle="modal" data-target="#alertDeleteModal"><i class="far fa-trash-alt"></i></button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>

                </table>
                <div class="card-footer pb-0 pt-3 " style="text-align: end; background-color: transparent;">
                    <jw-pagination :pageSize="pageSize" :items="exampleItems" @changePage="onChangePage" :labels="customLabels"></jw-pagination>
                </div>

                <!-- modal -->
                <div id="addSubjectModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title mt-0" id="myModalLabel">Thêm môn học</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="card-body">
                                    <form>
                                        <div class="form-group">
                                            <label>Mã môn học</label>
                                            <div>
                                                <input v-model="subjectId" required="true" class="form-control" rows="5" style="boder: #000000" placeholder="Nhập vào mã môn học " id="subjectId">
                                            </div>
                                        </div>

                                        <div class="form-group" style="boder: #000000;">
                                            <label>Tên môn học</label>
                                            <div>
                                                <input v-model="subjectName" required="true" class="form-control" rows="5" style="boder: #000000" placeholder="Nhập vào tên môn học " id="subjectName">
                                            </div>
                                        </div>
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

export default {
    name: 'Setting',
    methods: {
        fetchSubjet(callback) {
            callback();
        },
        addSubject() {
            let url = `https://localhost:44326/api/MonHoc`;

            this.submitting = true;
            axios.post(url, {
                    MonHocId: this.subjectId,
                    TenMonHoc: this.subjectName,
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
    },
    data() {
        return {
            submitting: false,
            isSuccess: false,
            subjectName: "",
            subjectId: "",
            accountJson: "",
        }
    },
}
</script>
