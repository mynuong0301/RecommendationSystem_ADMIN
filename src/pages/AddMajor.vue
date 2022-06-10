<template>
<div class="content-page">
    <!-- Start content -->
    <div class="content">
        <div class="row mb-3">

            <div class="col-lg-6">
                <h1></h1>

                <div class="row mb-1" style="justify-content: space-between;">
                    <div class="col-lg-8">
                        <label> Tên chuyên ngành</label>
                    </div>

                </div>

                <div class="row mb-3">

                    <div class="col-lg-12">
                        <!--<label> {{majorJson.LinhVucNghienCuu}}</label>  -->
                        <div>
                            <b-form-input id="tenChuyenNganh" v-model="tenChuyenNganh"></b-form-input>
                        </div>
                    </div>
                    
                </div>

                <div class="row mb-1" style="justify-content: space-between;">
                    <div class="col-lg-8">
                        <label> Mã chuyên ngành</label>
                    </div>

                </div>

                <div class="row mb-3">

                    <div class="col-lg-12">
                        <!--<label> {{majorJson.LinhVucNghienCuu}}</label>  -->
                        <div>
                            <b-form-input id="MaChuyenNganh" v-model="chuyenNganhId"></b-form-input>
                        </div>
                    </div>
                    
                </div>

                <div class="row mb-1" style="justify-content: space-between;">
                    <div class="col-lg-8">
                        <label> Link video</label>
                    </div>

                </div>

                <div class="row mb-3">

                    <div class="col-lg-12">
                        <!--<label> {{majorJson.LinhVucNghienCuu}}</label>  -->
                        <div>
                            <b-form-input id="linkVideo" v-model="linkVideo"></b-form-input>
                            
                        </div>
                    </div>
                    
                </div>
            </div>

            <div class="col-lg-6">
                <h1> </h1>

                <div class="row mb-1" style="justify-content: space-between;">
                    <div class="col-lg-8">
                        <label> Lĩnh vực nghiên cứu</label>
                    </div>

                </div>

                <div class="row mb-3">

                    <div class="col-lg-12">
                        <!--<label> {{majorJson.LinhVucNghienCuu}}</label>  -->
                        <div>
                            <b-form-textarea id="LinhVucNghienCuu" v-model="linhVucNghienCuu" required rows="4"></b-form-textarea>
                        </div>
                    </div>            
                </div>

                <div class="row mb-1" style="justify-content: space-between;">
                    <div class="col-lg-8">
                        <label> Giới thiệu chuyên ngành</label>
                    </div>

                </div>

                <div class="row mb-3">

                    <div class="col-lg-12">
                        <!--<label> {{majorJson.LinhVucNghienCuu}}</label>  -->
                        <div>
                            <b-form-textarea id="gioiThieuChuyenNganh" v-model="gioiThieuChuyenNganh" required rows="4"></b-form-textarea>
                        </div>
                    </div>
                   
                </div>

                <div class="row mb-3">

                    <div class="col-lg-12">
                        
                        <a  role="button"
                         class="btn btn-info waves-effect waves-light  m-r-5" 
                         style="background-color: rgb(255, 190, 0); border-color: rgb(255, 190, 0);margin-left: 470px; margin-right: 0px;">
                         <i class="fas fa-plus" v-on:click ="onClickAddMajor()"></i> <i></i> <span>Thêm chuyên ngành </span></a>
                    </div>
                   
                </div>

            </div>
        </div>

        <div style="margin-left: 13px; margin-right: 13px;" v-if="isActiveTab!== false" >
            <b-card no-body>
                <b-tabs card>
                    <div class="row mb-3">
                        <div class="col-lg-12">
                            <!-- Tab Công việc-->
                            <b-tab title="Công việc và hướng phát triển" active>
                                <b-card-text>
                                    <form class="">
                                        <div class="form-group">
                                           
                                            <div class="row mb-3" style="justify-content: right; margin-right: 1px;">
                                                <a href="/#/AddJob" role="button" data-toggle="modal" data-target="#addJob" class="btn btn-info waves-effect waves-light  m-r-5" style="background-color: rgb(255, 190, 0); border-color: rgb(255, 190, 0);">
                                                    <i class="fas fa-plus"></i> <i></i>
                                                    <span>Thêm công việc </span>
                                                </a>
                                            </div>
                                            <div class="table-responsive" style="width:100%">
                                                <table class="table table-striped mb-0">
                                                    <thead>
                                                        <tr class="bg-primary" style="background-color: rgb(28, 129, 158) !important;">
                                                            <th>STT</th>
                                                            <th>Công việc và hướng phát triển</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody v-for="(item, index) in jobJson" :key="index">
                                                        <tr>
                                                            <th scope="row" style="width: 50px;">{{index+1}}</th>
                                                            <td>{{item.TenCongViec}}</td>
                                                            <td>
                                                                <div class="btn-toolbar form-group mb-0">
                                                                    <div class="">
                                                                        <a role="button" class="btn btn-success waves-effect waves-light m-r-5"><i class="far fa-edit" v-on:click="setNeedUpdatedJob(item)" v-b-modal="'editJobModal'"></i></a>
                                                                        <button v-on:click="setDeletedJob(item.CongViecVaHuongPhatTrienId)" type="button" class="btn btn-danger waves-effect waves-light m-r-5" v-b-modal="'deleteJobModal'"><i class="far fa-trash-alt"></i></button>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                    </form>
                                </b-card-text>
                            </b-tab>
                        </div>
                        <!-- Tab học phần-->
                        <div class="col-lg-12">
                            <b-tab title="Các học phần">
                                <b-card-text>
                                    <!--<label> Các học phần chuyên ngành</label>
                                <form action="#">
                                    <tbody v-for="(item, index) in subjectJson" :key="index" >
                                        <div class="form-group">
                                            <label>{{item.MonHocId}}</label>
                                            <td>{{item.TenMonHoc}}</td>
                                        </div>
                                    </tbody>            
                                </form> -->
                                    <div class="row mb-3" style="justify-content: right; margin-right: 1px;">
                                        <a role="button" v-b-modal="'addSubjectModal'" class="btn btn-info waves-effect waves-light  m-r-5" style="background-color: rgb(255, 190, 0); border-color: rgb(255, 190, 0);">
                                            <i class="fas fa-plus"></i> <i></i>
                                            <span>Thêm học phần </span>
                                        </a>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="table-responsive" style="width:100%">
                                                <table class="table table-striped mb-0">
                                                    <thead>
                                                        <tr class="bg-primary" style="background-color: rgb(28, 129, 158) !important;">
                                                            <th>STT</th>
                                                            <th>Mã môn học</th>
                                                            <th>Tên môn học</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody v-for="(item, index) in subjectJson" :key="index">
                                                        <tr>
                                                            <th scope="row" style="width: 50px;">{{index+1}}</th>
                                                            <td>{{item.MonHocId}}</td>
                                                            <td>{{item.TenMonHoc}}</td>
                                                            <td>
                                                                <div class="btn-toolbar form-group mb-0">
                                                                    <div class="">
                                                                        <a role="button" class="btn btn-success waves-effect waves-light m-r-5"><i class="far fa-edit" v-on:click="setNeedUpdatedSubject(item)" v-b-modal="'editSubjectModal'"></i></a>
                                                                        <button v-on:click="setDeletedSubject(item.ChuyenNganhId, item.MonHocId)" type="button" class="btn btn-danger waves-effect waves-light m-r-5" v-b-modal="'deleteSubjectModal'"><i class="far fa-trash-alt"></i></button>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                    </div>
                                </b-card-text>
                            </b-tab>
                        </div>
                        <!-- Tab ĐIểm sàn-->
                        <b-tab title="Điểm sàn">
                            <b-card-text>
                                <form class="">
                                    <div class="form-group">
                                        <div class="row mb-3" style="justify-content: right; margin-right: 1px;">
                                            <a href="/#/AddMinScore" role="button" data-toggle="modal" data-target="#addMinScore" class="btn btn-info waves-effect waves-light  m-r-5" style="background-color: rgb(255, 190, 0); border-color: rgb(255, 190, 0);">
                                                <i class="fas fa-plus"></i> <i></i>
                                                <span>Thêm điểm sàn </span>
                                            </a>
                                        </div>
                                        <div class="table-responsive" style="width:100%">
                                            <table class="table table-striped mb-0">
                                                <thead>
                                                    <tr class="bg-primary" style="background-color: rgb(28, 129, 158) !important;">
                                                        <th>STT</th>
                                                        <th>Năm</th>
                                                        <th>Điểm</th>
                                                        <th>Ghi chú</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody v-for="(item, index) in minScoreJson" :key="index">
                                                    <tr>
                                                        <th scope="row" style="width: 50px;">{{index+1}}</th>
                                                        <td>{{item.Nam}}</td>
                                                        <td>{{item.Diem===0?'Không có dữ liệu' : item.Diem }}</td>
                                                        <td>{{item.GhiChu}}</td>
                                                        <td>
                                                            <div class="btn-toolbar form-group mb-0">
                                                                <div class="">
                                                                    <a role="button" class="btn btn-success waves-effect waves-light m-r-5"><i class="far fa-edit" v-on:click="setNeedUpdatedMinScore(item)" v-b-modal="'editMinScoreModal'"></i></a>
                                                                    <button v-on:click="setDeletedMinScoreId(item.DiemSanId)" type="button" class="btn btn-danger waves-effect waves-light m-r-5" v-b-modal="'alertDeleteMinScoreModal'"><i class="far fa-trash-alt"></i></button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </form>
                            </b-card-text>
                        </b-tab>

                        <!-- Tab Hướng nghiên cứu-->
                        <b-tab title="Định hướng nghiên cứu" active>
                            <b-card-text>
                                <form class="">
                                    <div class="form-group">
                                        <div class="row mb-3" style="justify-content: right; margin-right: 1px;">
                                            <a href="/#/addResearch" role="button" data-toggle="modal" data-target="#addResearch" class="btn btn-info waves-effect waves-light  m-r-5" style="background-color: rgb(255, 190, 0); border-color: rgb(255, 190, 0);">
                                                <i class="fas fa-plus"></i> <i></i>
                                                <span>Thêm định hướng nghiên cứu </span>
                                            </a>
                                        </div>
                                        <div class="table-responsive" style="width:100%">
                                            <table class="table table-striped mb-0">
                                                <thead>
                                                    <tr class="bg-primary" style="background-color: rgb(28, 129, 158) !important;">
                                                        <th>STT</th>
                                                        <th>Hướng nghiên cứu</th>
                                                        <th>Chủ đề nghiên cứu</th>
                                                        <th>Dự án nghiên cứu</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody v-for="(item, index) in researchJson" :key="index">
                                                    <tr>
                                                        <th scope="row" style="width: 50px;">{{index+1}}</th>
                                                        <td>{{item.TenDinhHuong}}</td>
                                                        <td>{{item.DuAnNghienCuu}}</td>
                                                        <td>{{item.ChuDeNghienCuu}}</td>

                                                        <td>
                                                            <div class="btn-toolbar form-group mb-0">
                                                                <div class="">
                                                                    <a v-on:click="setNeedUpdatedResearchOrientation(item) " role="button" class="btn btn-success waves-effect waves-light m-r-5"><i class="far fa-edit"></i></a>
                                                                    <button v-on:click="setDeletedResearchOrientationId(item.DinhHuongNghienCuuId)" type="button" class="btn btn-danger waves-effect waves-light m-r-5" v-b-modal="'alertDeleteResearchOrientationModal'"><i class="far fa-trash-alt"></i></button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </form>
                            </b-card-text>
                        </b-tab>
                    </div>
                </b-tabs>
            </b-card>
        </div>
    </div>

    <div id="addMajorModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title mt-0" id="myModalLabel">Thêm chuyên ngành</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="card-body">
                        <form class="">
                            <div class="form-group" style="boder: #000000;">
                                <label>Tên chuyên ngành</label>
                                <div>
                                    <input type="text" id="pass2" class="form-control" required="" placeholder="Nhập tên chuyên ngành">
                                </div>
                            </div>
                            <div class="form-group" style="boder: #000000;">
                                <label>Lĩnh vực nghiên cứu</label>
                                <div>
                                    <textarea required="" class="form-control" rows="5" style="boder: #000000" placeholder="Nhập vào lĩnh vực nghiên cứu "></textarea>
                                </div>
                            </div>

                            <div class="form-group" style="boder: #000000;">
                                <label>Công việc và hướng phát triển</label>
                                <div>
                                    <textarea required="" class="form-control" rows="5" style="boder: #000000" placeholder="Nhập vào công việc và hướng phát triển "></textarea>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Các học phần của chuyên ngành</label>
                                <div class="dropdown mo-mb-2">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width: 300px !important;background-color:transparent; boder:#000000; color: #000000;text-align: left;">
                                        Chọn các môn chuyên ngành
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item">Nhập môn lập trình</a>
                                        <a class="dropdown-item">Kỹ thuật lập trình</a>
                                        <a class="dropdown-item">Cơ sở dữ liệu</a>
                                        <a class="dropdown-item">Mạng máy tính</a>
                                        <a class="dropdown-item">Hệ thống máy tính</a>
                                        <a class="dropdown-item">Lập trình hướng đối tượng</a>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Các môn đại cương quan trọng</label>
                                <div class="dropdown mo-mb-2">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width: 300px !important; background-color:transparent; boder:#000000; color: #000000; text-align: left">
                                        Chọn các môn đại cương
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item">Xác suất thống kê</a>
                                        <a class="dropdown-item">Vi tích phân 1B</a>
                                        <a class="dropdown-item">Vi tích phân 2B</a>
                                        <a class="dropdown-item">Đại số tuyến tính</a>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group" style="boder: #000000;">
                                <label>Câu hỏi</label>
                                <div>
                                    <textarea required="" class="form-control" rows="5" style="boder: #000000" placeholder="Nhập vào nội dung câu hỏi "></textarea>
                                </div>
                            </div>
                            <div class="form-group" style="text-align: end;">
                                <div>
                                    <button type="reset" class="btn btn-secondary waves-effect m-l-5"> Hủy </button>
                                    <button type="submit" class="btn btn-primary waves-effect waves-light" v-on:click="updateLinhVucNghienCuu()"> Lưu </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <p></p>
                </div>
            </div>
        </div>
    </div>

    <!--alertDeleteResearchOrientationModal -->
    <!-- modal -->
    <b-modal id="alertDeleteResearchOrientationModal" title="Xóa định hướng nghiên cứu" hide-footer>
        <div class="modal-body">
            <h5 class="font-16">Bạn có chắc chắn muốn xóa định hướng nghiên cứu này không?</h5>
            <p></p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Hủy</button>
            <button type="button" class="btn btn-primary waves-effect waves-light" v-on:click="deleteResearchOrientation()">Xác nhận</button>
        </div>
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
            <button type="button" class="btn btn-primary waves-effect waves-light" v-on:click="deleteSubject()">Xác nhận</button>
        </div>
    </b-modal>

    <!--deleteJobModal -->
    <!-- modal -->
    <b-modal id="deleteJobModal" title="Xóa công việc và hướng phát triển" hide-footer>
        <div class="modal-body">
            <h5 class="font-16">Bạn có chắc chắn muốn xóa công việc và hướng phát triển này không?</h5>
            <p></p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Hủy</button>
            <button type="button" class="btn btn-primary waves-effect waves-light" v-on:click="deleteJob()">Xác nhận</button>
        </div>
    </b-modal>

    <!--alertDeleteMinScoreModal -->
    <!-- modal -->
    <b-modal id="alertDeleteMinScoreModal" title="Xóa điểm sàn" hide-footer>
        <div class="modal-body">
            <h5 class="font-16">Bạn có chắc chắn muốn xóa điểm sàn này không?</h5>
            <p></p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Hủy</button>
            <button type="button" class="btn btn-primary waves-effect waves-light" v-on:click="deleteMinScore()">Xác nhận</button>
        </div>
    </b-modal>

    <!--Edit DinhHuongNghienCuu -->
    <!-- modal -->
    <b-modal id="editResearchModal" title="Chỉnh sửa định hướng nghiên cứu" hide-footer>
        <div class="modal-body">
            <label>Định hướng nghiên cứu</label>
            <b-form-textarea id="dinhHuong" v-model="needUpdatedResearchOrientation.TenDinhHuong" required rows="4"></b-form-textarea>
            <label>Dự án nghiên cứu</label>
            <b-form-textarea id="duAn" v-model="needUpdatedResearchOrientation.DuAnNghienCuu" required rows="4"></b-form-textarea>
            <label>Chủ đề nghiên cứu</label>
            <b-form-textarea id="chuDe" v-model="needUpdatedResearchOrientation.ChuDeNghienCuu" required rows="4"></b-form-textarea>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelEditResearch">Hủy</button>
            <button type="button" class="btn btn-primary waves-effect waves-light" v-on:click="updateResearch()">Lưu</button>
        </div>
    </b-modal>

    <!--Edit MinScore -->
    <!-- modal -->
    <b-modal id="editMinScoreModal" title="Chỉnh sửa điểm sàn" hide-footer>
        <div class="modal-body">
            <label>Năm</label>
            <b-form-input id="nam" v-model="needUpdatedMinScore.Nam"></b-form-input>
            <label>Điểm</label>
            <b-form-input id="diem" v-model="needUpdatedMinScore.Diem"></b-form-input>
            <label>Ghi chú</label>
            <b-form-textarea id="ghiChu" v-model="needUpdatedMinScore.GhiChu" required rows="4"></b-form-textarea>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelEditMinScore">Hủy</button>
            <button type="button" class="btn btn-primary waves-effect waves-light" v-on:click="updateMinScore()">Lưu</button>
        </div>
    </b-modal>

    <!--Edit MJob -->
    <!-- modal -->
    <b-modal id="editJobModal" title="Chỉnh sửa công việc và hướng phát triển" hide-footer>
        <div class="modal-body">
            <label>Tên công việc</label>
            <b-form-input id="congViec" v-model="needUpdatedJob.TenCongViec"></b-form-input>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelEditJob">Hủy</button>
            <button type="button" class="btn btn-primary waves-effect waves-light" v-on:click="updateJob()">Lưu</button>
        </div>
    </b-modal>

    <!-- modal edit subject -->
    <b-modal id="editSubjectModal" title="Chỉnh sửa học phần" hide-footer>
        <div class="modal-body">
            <label>Mã môn học</label>
            <b-form-textarea id="monHocId" v-model="needUpdatedSubject.MonHocId" required rows="4"></b-form-textarea>
            <label>Tên môn học</label>
            <b-form-textarea id="duAn" v-model="needUpdatedSubject.TenMonHoc" required rows="4"></b-form-textarea>

        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelEditSubject">Hủy</button>
            <button type="button" class="btn btn-primary waves-effect waves-light" v-on:click="updateSubject()">Lưu</button>
        </div>
    </b-modal>
    <!-- add job modal -->
    <div id="addJob" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title mt-0" id="myModalLabel">Thêm công việc và hướng phát triển</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <label>Công việc và hướng phát triển</label>
                    <textarea required="required" rows="5" placeholder="Nhập vào công việc và hướng phát triển " class="form-control" v-model="jobName"></textarea>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-primary waves-effect waves-light" v-on:click="addJob(jobName)">Lưu</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>

    <!-- modal edit subject -->
    <b-modal id="addSubjectModal" title="Thêm học phần" hide-footer>
        <div class="modal-body">

            <label>Tên môn học</label>

            <v-select multiple v-model="selectedAddedSubjects" :options="subjectMajorJson" label="TenMonHoc" :reduce="subject => subject.MonHocId" />

        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelAddSubject">Hủy</button>
            <button type="button" class="btn btn-primary waves-effect waves-light" v-on:click="addSubjects()">Lưu</button>
        </div>
    </b-modal>

    <!-- add min score modal -->
    <div id="addMinScore" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title mt-0" id="myModalLabel">Thêm điểm sàn</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <label>Năm học</label>
                    <b-form-input id="input-2" v-model="year" placeholder="Nhập năm học"></b-form-input>
                    <label>Điểm</label>
                    <b-form-input id="input-2" v-model="score" placeholder="Nhập điểm"></b-form-input>
                    <label>Ghi chú</label>
                    <b-form-input id="input-2" v-model="note" placeholder="Nhập ghi chú"></b-form-input>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-primary waves-effect waves-light" v-on:click="addMinScore(score, year, note)">Lưu</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>

    <!-- add dinhHuongNghienCuu modal -->
    <div id="addResearch" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title mt-0" id="myModalLabel">Thêm định hướng nghiên cứu</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <label>Tên định hướng</label>
                    <textarea required="required" rows="5" placeholder="Nhập vào định hướng" class="form-control" v-model="researchName"></textarea>
                    <label>Dự án nghiên cứu</label>
                    <textarea required="required" rows="5" placeholder="Nhập vào dự án nghiên cứu " class="form-control" v-model="projectName"></textarea>
                    <label>Chủ đề nghiên cứu</label>
                    <textarea required="required" rows="5" placeholder="Nhập vào chủ đề nghiên cứu " class="form-control" v-model="topicName"></textarea>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-primary waves-effect waves-light" v-on:click="addResearch(researchName, projectName, topicName)">Lưu</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'AddMajor',
    watch: {
        '$route': function (to, from) {
            this.chuyenNganhId = this.$route.query.id;
            console.log(this.$route.query.id);
            this.getMajorById(this.chuyenNganhId);
            this.getJobByMajorId(this.chuyenNganhId);
            this.getMainAndGenaralSubjectsByMajorId(this.chuyenNganhId);
            this.GetQuestionsByMajorandJob(this.chuyenNganhId);
            this.GetResearchOrientationById(this.chuyenNganhId);
            this.GetMinScoreByMajorId(this.chuyenNganhId);
        }
    },
    methods: {
        getMajorById(id) {
            console.log(this.$route.query.id);
            let url = `https://localhost:44326/api/ChuyenNganh/${id}`;
            axios.get(url).then((response) => {
                this.majorJson = response.data;
                this.backUpLinhVucNghienCuu = this.majorJson.LinhVucNghienCuu;
            });
        },
        getJobByMajorId(major_id) {
            console.log(this.$route.query.id);
            let url = `https://localhost:44326/api/CongViecVaHuongPhatTrien/${major_id}`;
            axios.get(url).then((response) => {
                this.jobJson = response.data;
            });
        },
        getMainAndGenaralSubjectsByMajorId(major_id) {
            console.log(this.$route.query.id);
            let url = `https://localhost:44326/api/MonHocChuyenNganh/${major_id}`;
            axios.get(url).then((response) => {
                this.subjectJson = response.data;
            });
            this.getMajorSubjectsNotInMajor(major_id);
        },
        GetQuestionsByMajorandJob(major_id) {
            console.log(this.$route.query.id);
            let url = `https://localhost:44326/api/CauHoiHuongPhatTrien?major_id=${major_id}`;
            axios.get(url).then((response) => {
                this.questionJson = response.data;
            });
        },
        GetResearchOrientationById(major_id) {
            console.log(this.$route.query.id);
            let url = `https://localhost:44326/api/DinhHuongNghienCuu/${major_id}`;
            axios.get(url).then((response) => {

                if (response.data) {
                    this.researchJson = response.data;
                    this.backUpTenDinhHuong = this.researchJson.TenDinhHuong;
                    this.backUpDuAnNghienCuu = this.researchJson.DuAnNghienCuu;
                    this.backUpChuDeNghienCuu = this.researchJson.ChuDeNghienCuu;
                }

            });
        },

        GetMinScoreByMajorId(major_id) {
            console.log(this.$route.query.id);
            let url = `https://localhost:44326/api/DiemSan/${major_id}`;
            axios.get(url).then((response) => {
                this.minScoreJson = response.data;
            });
        },

        setDeletedResearchOrientationId(id) {
            this.DinhHuongNghienCuuId = id;
        },

        setNeedUpdatedResearchOrientation(object) {
            this.$bvModal.show('editResearchModal');
            this.needUpdatedResearchOrientation = {
                ...object
            };
        },
        setDeletedSubject(major_id, id) {
            this.ChuyenNganhId = major_id
            this.MonHocId = id;
        },
        setNeedUpdatedSubject(object) {
            this.$bvModal.show('editSubjectModal');
            this.needUpdatedSubject = {
                ...object
            };
        },

        setNeedUpdatedJob(object) {
            this.$bvModal.show('editJobModal');
            this.needUpdatedJob = {
                ...object
            };
        },

        setDeletedJob(id) {
            this.CongViecVaHuongPhatTrienId = id;
        },

        setNeedUpdatedMinScore(object) {
            this.needUpdatedMinScore = object;
        },

        setDeletedMinScoreId(id) {
            this.DiemSanId = id;
        },

        deleteResearchOrientation() {
            let url = `https://localhost:44326/api/DinhHuongNghienCuu/${this.DinhHuongNghienCuuId}`;

            axios.delete(url, this.DinhHuongNghienCuuId).then(response => {

                    this.$bvToast.toast('Xóa thành công!', {
                        title: 'Thành công',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 1000,
                    });

                    this.GetResearchOrientationById(this.chuyenNganhId);
                })
                .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });

            this.$bvModal.hide('alertDeleteResearchOrientationModal');
        },

        deleteSubject() {

            let url = `https://localhost:44326/api/MonHocChuyenNganh/${this.ChuyenNganhId}/${this.MonHocId}`;

            axios.delete(url).then(response => {

                    this.$bvToast.toast('Xóa thành công!', {
                        title: 'Thành công',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 1000,
                    });

                    this.getMainAndGenaralSubjectsByMajorId(this.chuyenNganhId);
                })
                .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });

            this.$bvModal.hide('deleteSubjectModal');
        },

        deleteMinScore() {
            let url = `https://localhost:44326/api/DiemSan/${this.DiemSanId}`;

            axios.delete(url, this.DiemSanId).then(response => {

                    this.$bvToast.toast('Xóa thành công!', {
                        title: 'Thành công',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 1000,
                    });

                    this.GetMinScoreByMajorId(this.chuyenNganhId);
                })
                .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });

            this.$bvModal.hide('alertDeleteMinScoreModal');
        },

        updateLinhVucNghienCuu() {
            let url = `https://localhost:44326/api/ChuyenNganh/${this.chuyenNganhId}`;
            axios.put(url, this.majorJson).then(response => {

                    this.majorJson = response.data;
                    this.backUpLinhVucNghienCuu = this.majorJson.LinhVucNghienCuu;
                    this.$bvToast.toast('Cập nhật thành công!', {
                        title: 'Thành công',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 1000,
                    });
                    this.isEditLinhVucNghienCuu = false;
                })
                .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });
        },

        updateResearch() {
            let url = `https://localhost:44326/api/DinhHuongNghienCuu/${this.needUpdatedResearchOrientation.DinhHuongNghienCuuId}`;
            axios.put(url, {
                    ChuyenNganhId: this.needUpdatedResearchOrientation.ChuyenNganhId,
                    TenDinhHuong: this.needUpdatedResearchOrientation.TenDinhHuong,
                    DuAnNghienCuu: this.needUpdatedResearchOrientation.DuAnNghienCuu,
                    ChuDeNghienCuu: this.needUpdatedResearchOrientation.ChuDeNghienCuu,
                    DinhHuongNghienCuuId: this.needUpdatedResearchOrientation.DinhHuongNghienCuuId
                }).then(response => {

                    this.$bvToast.toast('Cập nhật thành công!', {
                        title: 'Thành công',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 1000,
                    });

                    this.GetResearchOrientationById(this.chuyenNganhId);

                })
                .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });

            this.$bvModal.hide('editResearchModal');

            console.log('ChuDeNghienCuut', this.needUpdatedResearchOrientation.ChuDeNghienCuu);
        },

        updateSubject() {
            let url = `https://localhost:44326/api/MonHoc/${this.needUpdatedSubject.MonHocId}`;
            axios.put(url, {
                    MonHocId: this.needUpdatedSubject.MonHocId,
                    TenMonHoc: this.needUpdatedSubject.TenMonHoc,

                }).then(response => {

                    this.$bvToast.toast('Cập nhật thành công!', {
                        title: 'Thành công',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 1000,
                    });

                    this.getMainAndGenaralSubjectsByMajorId(this.chuyenNganhId);

                })
                .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });

            this.$bvModal.hide('editSubjectModal');
        },

        updateJob() {
            let url = `https://localhost:44326/api/CongViecVaHuongPhatTrien/${this.needUpdatedJob.CongViecVaHuongPhatTrienId}`;
            axios.put(url, {
                    CongViecVaHuongPhatTrienId: this.needUpdatedJob.CongViecVaHuongPhatTrienId,
                    TenCongViec: this.needUpdatedJob.TenCongViec,

                }).then(response => {

                    this.$bvToast.toast('Cập nhật thành công!', {
                        title: 'Thành công',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 1000,
                    });

                    this.getJobByMajorId(this.chuyenNganhId);

                })
                .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });

            this.$bvModal.hide('editJobModal');
        },
        deleteJob() {
            let url = `https://localhost:44326/api/CongViecVaHuongPhatTrien/${this.CongViecVaHuongPhatTrienId}`;

            axios.delete(url, this.CongViecVaHuongPhatTrienId).then(response => {

                    this.$bvToast.toast('Xóa thành công!', {
                        title: 'Thành công',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 1000,
                    });

                    this.getJobByMajorId(this.chuyenNganhId);
                })
                .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });

            this.$bvModal.hide('deleteJobModal');
        },

        updateMinScore() {
            let url = `https://localhost:44326/api/DiemSan/${this.needUpdatedMinScore.DiemSanId}`;
            axios.put(url, {
                    Diem: this.needUpdatedMinScore.Diem,
                    Nam: this.needUpdatedMinScore.Nam,
                    GhiChu: this.needUpdatedMinScore.GhiChu,
                    ChuyenNganhId: this.needUpdatedMinScore.ChuyenNganhId,
                    DiemSanId: this.needUpdatedMinScore.DiemSanId
                }).then(response => {

                    this.$bvToast.toast('Cập nhật thành công!', {
                        title: 'Thành công',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 1000,
                    });

                    this.GetMinScoreByMajorId(this.chuyenNganhId);

                })
                .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });

            this.$bvModal.hide('editMinScoreModal');
        },

        addJob(jobName) {

            const body = {
                "TenCongViec": jobName,
                "ChuyenNganhId": this.chuyenNganhId,
            }

            let url = 'https://localhost:44326/api/CongViecVaHuongPhatTrien';
            axios.post(url, body).then((response) => {
                this.questionJson = response.data;

                this.$bvToast.toast('Thêm công việc và hướng phát triển thành công!', {
                    title: 'Thành công',
                    variant: 'success',
                    solid: true,
                    autoHideDelay: 1000,
                });
                this.getJobByMajorId(this.chuyenNganhId);
            });

            this.jobName = "";
        },

        addMinScore(score, year, note) {
            const body = {
                "Diem": score,
                "Nam": year,
                "GhiChu": note,
                "ChuyenNganhId": this.chuyenNganhId,
            }

            let url = 'https://localhost:44326/api/DiemSan';
            axios.post(url, body).then((response) => {
                this.minScoreJson = response.data;

                this.$bvToast.toast('Thêm điểm sàn thành công!', {
                    title: 'Thành công',
                    variant: 'success',
                    solid: true,
                    autoHideDelay: 1000,
                });
                this.GetMinScoreByMajorId(this.chuyenNganhId);
            });

            this.year = "";
            this.score = "";
            this.note = "";
        },

        addResearch(researchName, projectName, topicName) {
            const body = {
                "TenDinhHuong": researchName,
                "DuAnNghienCuu": projectName,
                "ChuDeNghienCuu": topicName,
                "ChuyenNganhId": this.chuyenNganhId,
            }

            let url = 'https://localhost:44326/api/DinhHuongNghienCuu';
            axios.post(url, body).then((response) => {
                this.researchJsonPopup = response.data;

                this.$bvToast.toast('Thêm định hướng nghiên cứu thành công!', {
                    title: 'Thành công',
                    variant: 'success',
                    solid: true,
                    autoHideDelay: 1000,
                });

                this.GetResearchOrientationById(this.chuyenNganhId);

            });

            this.researchName = "";
            this.projectName = "";
            this.topicName = "";
        },

        addSubjects() {
            let url = `https://localhost:44326/api/MonHocChuyenNganh`;

            this.submitting = true;
            axios.post(url, {
                    ChuyenNganhId: this.chuyenNganhId,
                    MonHocIds: this.selectedAddedSubjects,
                }).then(response => {
                    this.getMainAndGenaralSubjectsByMajorId(this.chuyenNganhId);

                })
                .catch(error => {
                    this.submitting = false;
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });
            this.selectedAddedSubjects = [];
        },

        getMajorSubjectsNotInMajor(major_id) {
            let url = `https://localhost:44326/api/MonHocCN/${major_id}`;

            try {
                axios.get(url).then((response) => {
                    this.subjectMajorJson = response.data;
                });
            } catch (e) {
                console.log(e);
            }

        },
        onCancelEditLinhVucNghienCuu() {
            this.majorJson.LinhVucNghienCuu = this.backUpLinhVucNghienCuu;
            this.isEditLinhVucNghienCuu = false;
        },
        onEditLinhVucNghienCuu() {
            this.isEditLinhVucNghienCuu = true;
        },
        onCancelEditResearch() {

            this.$bvModal.hide('editResearchModal');
        },

        onCancelEditMinScore() {
            this.$bvModal.hide('editMinScoreModal');
        },

        onCancelEditSubject() {
            this.$bvModal.hide('editSubjectModal');
        },
        onCancelEditJob() {
            this.$bvModal.hide('editJobModal');
        },

        onCancelAddSubject() {
            this.$bvModal.hide('addSubjectModal');
            this.selectedAddedSubjects = [];
        },

        onClickAddMajor()
        {
            this.isActiveTab = true;
        }
    },
    data() {
        return {
            isActiveTab: false,

            chuyenNganhId: "",
            majorJson: "",
            jobJson: "",
            subjectJson: "",
            questionJson: "",
            researchJson: "",
            minScoreJson: "",
            backUpLinhVucNghienCuu: "",
            isEditLinhVucNghienCuu: false,
            jobName: "",
            minScoreJson: "",
            researchJsonPopup: "",
            researchJsonEditPopup: "",
            DinhHuongNghienCuuId: "",
            year: "",
            score: "",
            note: "",

            researchName: "",
            projectName: "",
            topicName: "",

            DiemSanId: "",

            backUpTenDinhHuong: "",
            backUpDuAnNghienCuu: "",
            backUpChuDeNghienCuu: "",

            needUpdatedResearchOrientation: {
                TenDinhHuong: '',
                DuAnNghienCuu: '',
                ChuDeNghienCuu: ''
            },
            needUpdatedMinScore: {},

            needUpdatedSubject: {},
            MonHocId: "",

            needUpdatedJob: {},

            selectedAddedSubjects: [],
            subjectMajorJson: "",
        }
    },

}
</script>

<style>

</style>
