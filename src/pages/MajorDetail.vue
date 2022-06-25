<template>
<div class="content-page">
    <!-- Start content -->
    <div class="content">
        <div class="row mb-3">
            <p></p>
            <!--<div class="col-lg-12">
                <div class="btn-toolbar float-lg-right form-group mb-0" role="toolbar">
                    <div class="">
                        <a href="/#/ImportFile" style="background-color: #FFBE00; border-color: #FFBE00" class="btn btn-info waves-effect waves-light  m-r-5" role="button" data-toggle="modal" data-target="#importExcelFile"><i class="mdi mdi-pencil"></i> <i></i> <span>Chỉnh sửa</span> </a> 
                        <a href="/#/AddQuestion" style="background-color: #005874; border-color: #FFBE00" class="btn btn-info waves-effect waves-light  m-r-5" role="button" data-toggle="modal" data-target="#addMajorModal"><i class="fas fa-plus"></i> <i></i> <span>Thêm chuyên ngành</span> </a>
                    </div>
                </div>
            </div>-->
        </div>

        <div class="col-lg-12">
            <div class="row mb-1" style="justify-content: space-between; align-items: center;">
                <h1 class="col-lg-9 mb-3">{{majorJson.TenChuyenNganh}} </h1>
                <div class="row" style="margin-right: 13px; height: 40px">

                    <div class="" style="margin-right: 8px">
                        <button role="button" class="btn btn-success waves-effect waves-light m-r-5" v-on:click="onEditLinhVucNghienCuu()"><i class="mdi mdi-pencil-outline"></i></button>
                    </div>
                    <button v-on:click="setDeletedMajor(this.chuyenNganhId)" type="button" class="btn btn-danger waves-effect waves-light m-r-5" v-b-modal="'deleteMajorModal'"><i class="far fa-trash-alt"></i></button>
                </div>
            </div>

            <div class="row mb-1" style="justify-content: space-between;">
                <div class="col-lg-6">
                    <label> Mã chuyên ngành</label>
                </div>
                <div class="col-lg-6">
                    <label> Video</label>
                </div>
            </div>

            <div class="row mb-3">

                <div class="col-lg-6">
                    <!--<label> {{majorJson.LinhVucNghienCuu}}</label>  -->
                    <div>
                        <b-form-input :readonly="true" id="MaChuyenNganh" v-model="majorJson.ChuyenNganhId"></b-form-input>
                    </div>
                </div>
                <div class="col-lg-6">
                    <!--<label> {{majorJson.LinhVucNghienCuu}}</label>  -->
                    <div>
                        <b-form-input :readonly="!isEditLinhVucNghienCuu" id="LinkVideo" v-model="majorJson.LinkVideo"></b-form-input>
                    </div>
                </div>
                <!-- </div>
                    <textarea required="required" rows="5" v-model="majorJson.LinhVucNghienCuu" class="form-control" disabled></textarea>

                </div> -->
            </div>

            <div class="row mb-1" style="justify-content: space-between;">
                <div class="col-lg-6">
                    <div class="row" style="justify-content: space-between;">
                        <div class="col-lg-8"> <label> Giới thiệu chuyên ngành</label></div>

                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="row" style="justify-content: space-between;">
                        <div class="col-lg-8"> <label> Lĩnh vực nghiên cứu</label></div>

                    </div>
                </div>

            </div>

            <div class="row mb-3">
                <div class="col-lg-6">
                    <!--<label> {{majorJson.LinhVucNghienCuu}}</label>  -->
                    <div>
                        <b-form-textarea :readonly="!isEditLinhVucNghienCuu" id="GioiThieuChuyenNganh" v-model="majorJson.GioiThieuChuyenNganh" required rows="6"></b-form-textarea>
                    </div>
                </div>
                <div class="col-lg-6">
                    <!--<label> {{majorJson.LinhVucNghienCuu}}</label>  -->
                    <div>
                        <b-form-textarea :readonly="!isEditLinhVucNghienCuu" id="LinhVucNghienCuu" v-model="majorJson.LinhVucNghienCuu" required rows="6"></b-form-textarea>
                    </div>
                </div>
                <!-- </div>
                    <textarea required="required" rows="5" v-model="majorJson.LinhVucNghienCuu" class="form-control" disabled></textarea>

                </div> -->
            </div>
        </div>
        <div v-if="isEditLinhVucNghienCuu">
            <div class="row mb-3" style="justify-content: right; margin-right: 13px;">
                <button style="margin-right: 15px;" type="button" class="btn btn-secondary waves-effect" v-on:click="onCancelEditLinhVucNghienCuu">Hủy</button>
                <button type="button" class="btn btn-primary waves-effect waves-light" v-on:click="updateLinhVucNghienCuu()">Lưu</button>

            </div>
        </div>

        <div style="margin-left: 13px; margin-right: 13px;">
            <b-card no-body>
                <b-tabs card>
                    <div class="row mb-3">
                        <div class="col-lg-12">
                            <!-- Tab Công việc-->
                            <b-tab title="Công việc và hướng phát triển" active>
                                <b-card-text>
                                    <form class="">
                                        <div class="form-group">
                                            <!--<tbody v-for="(item, index) in jobJson" :key="index"  style="text-align: center">
                                        <tr>
                                            <td>{{item.TenCongViec}}</td>
                                        </tr>

            </tbody> -->
                                            <div class="row mb-3" style="justify-content: right; margin-right: 1px;">
                                                <a v-b-modal="'addJob'" role="button" class="btn btn-info waves-effect waves-light  m-r-5" style="background-color: rgb(255, 190, 0); border-color: rgb(255, 190, 0);">
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
                                                                        <a role="button" class="btn btn-success waves-effect waves-light m-r-5" v-on:click="setNeedUpdatedJob(item)" v-b-modal="'editJobModal'"><i class="far fa-edit"></i></a>
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
                                                                        <!-- <a role="button" class="btn btn-success waves-effect waves-light m-r-5"><i class="far fa-edit" v-on:click="setNeedUpdatedSubject(item)" v-b-modal="'editSubjectModal'"></i></a> -->
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

                        <!-- Tab học phần quan trọng-->
                        <div class="col-lg-12">
                            <b-tab title="Các học phần quan trọng">
                                <b-card-text>

                                    <div class="row mb-3" style="justify-content: right; margin-right: 1px;">
                                        <div class="col-lg-2 m-r-1" style="margin-right: 34px">
                                            <div class="dropdown mo-mb-2 ">
                                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width:220px; background-color: #005874; border-color: #005874"> {{ selectedYear === -1 ? 'Chọn năm' : selectedYear}} </button>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 34px, 0px);">
                                                    <div style="height:120px !important; overflow:scroll;">
                                                        <tbody v-for=" (year, index) in yearList" :key="index">
                                                            <a class="dropdown-item" v-on:click="onKhoaHocSelect(year)">{{year}}</a>
                                                        </tbody>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <a role="button" v-b-modal="'addImportantSubjectModal'" class="btn btn-info waves-effect waves-light  m-r-5" style="background-color: rgb(255, 190, 0); border-color: rgb(255, 190, 0);">
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
                                                    <tbody v-for="(item, index) in importantSubjectJson" :key="index">
                                                        <tr>
                                                            <th scope="row" style="width: 50px;">{{index+1}}</th>
                                                            <td>{{item.MonHocId}}</td>
                                                            <td>{{item.TenMonHoc}}</td>
                                                            <td>
                                                                <div class="btn-toolbar form-group mb-0">
                                                                    <div class="">
                                                                        <!-- <a role="button" class="btn btn-success waves-effect waves-light m-r-5"><i class="far fa-edit" v-on:click="setNeedUpdatedSubject(item)" v-b-modal="'editSubjectModal'"></i></a> -->
                                                                        <button v-on:click="setDeletedImportantSubject(item.MonHocQuanTrongCNId)" type="button" class="btn btn-danger waves-effect waves-light m-r-5" v-b-modal="'deleteImportSubjectModal'"><i class="far fa-trash-alt"></i></button>
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
                                            <a v-b-modal="'addMinScore'" class="btn btn-info waves-effect waves-light  m-r-5" style="background-color: rgb(255, 190, 0); border-color: rgb(255, 190, 0);">
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
                                                        <th>Điểm ngưỡng trên</th>
                                                        <th>Điểm ngưỡng dưới</th>
                                                        <th>Ghi chú</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody v-for="(item, index) in minScoreJson" :key="index">
                                                    <tr>
                                                        <th scope="row" style="width: 50px;">{{index+1}}</th>
                                                        <td>{{item.Nam}}</td>
                                                        <td>{{item.Diem===0?'Không có dữ liệu' : item.Diem }}</td>
                                                        <td>{{item.DiemSanNguongTren}}</td>
                                                        <td>{{item.DiemSanNguongDuoi}}</td>
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
                                            <a v-b-modal="'addResearch'" class="btn btn-info waves-effect waves-light  m-r-5" style="background-color: rgb(255, 190, 0); border-color: rgb(255, 190, 0);">
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
    <!--alertDeleteResearchOrientationModal -->
    <!-- modal -->
    <b-modal id="alertDeleteResearchOrientationModal" title="Xóa định hướng nghiên cứu" hide-footer>
        <div class="modal-body">
            <h5 class="font-16">Bạn có chắc chắn muốn xóa định hướng nghiên cứu này không?</h5>
            <p></p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelDeleteResearchModal">Hủy</button>
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
            <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelDeleteSubject">Hủy</button>
            <button type="button" class="btn btn-primary waves-effect waves-light" v-on:click="deleteSubject()">Xác nhận</button>
        </div>
    </b-modal>

    <!--deleteImportantSubjectModal -->
    <!-- modal -->
    <b-modal id="deleteImportSubjectModal" title="Xóa môn học" hide-footer>
        <div class="modal-body">
            <h5 class="font-16">Bạn có chắc chắn muốn xóa môn học này không?</h5>
            <p></p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelDeleteImportantSubjectModal">Hủy</button>
            <button type="button" class="btn btn-primary waves-effect waves-light" v-on:click="deleteImportantSubject()">Xác nhận</button>
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
            <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelDeleteJobModal">Hủy</button>
            <button type="button" class="btn btn-primary waves-effect waves-light" v-on:click="deleteJob()">Xác nhận</button>
        </div>
    </b-modal>

    <!--deleteMajorModal -->
    <!-- modal -->
    <b-modal id="deleteMajorModal" title="Xóa chuyên ngành" hide-footer>
        <div class="modal-body">
            <h5 class="font-16">Bạn có chắc chắn muốn xóa chuyên ngành này không?</h5>
            <p></p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary waves-effect" v-on:click="onCancelDeleteMajorModal()">Hủy</button>
            <button type="button" class="btn btn-primary waves-effect waves-light" v-on:click="deleteMajor()">Xác nhận</button>
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
            <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelDeleteMinScoreModal">Hủy</button>
            <button type="button" class="btn btn-primary waves-effect waves-light" v-on:click="deleteMinScore()">Xác nhận</button>
        </div>
    </b-modal>

    <!--Edit DinhHuongNghienCuu -->
    <!-- modal -->
    <b-modal id="editResearchModal" title="Chỉnh sửa định hướng nghiên cứu" hide-footer>
        <form @submit.prevent="updateResearch" novalidate>
            <div class="modal-body">
                <form-group :validator="$v.needUpdatedResearchOrientation.TenDinhHuong" label="Định hướng nghiên cứu">
                    <b-form-textarea id="dinhHuong" v-model="needUpdatedResearchOrientation.TenDinhHuong" :required="true" @input="$v.needUpdatedResearchOrientation.$touch()"></b-form-textarea>
                </form-group>
                <label>Dự án nghiên cứu</label>
                <b-form-textarea id="duAn" v-model="needUpdatedResearchOrientation.DuAnNghienCuu" required rows="4"></b-form-textarea>
                <label>Chủ đề nghiên cứu</label>
                <b-form-textarea id="chuDe" v-model="needUpdatedResearchOrientation.ChuDeNghienCuu" required rows="4"></b-form-textarea>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelEditResearch">Hủy</button>
                <button type="submit" class="btn btn-primary waves-effect waves-light">Lưu</button>
            </div>
        </form>
    </b-modal>

    <!--Edit MinScore -->
    <!-- modal -->
    <b-modal id="editMinScoreModal" title="Chỉnh sửa điểm sàn" hide-footer>
        <form @submit.prevent="updateMinScore" novalidate>

            <div class="modal-body">

                <form-group :validator="$v.needUpdatedMinScore.Nam" label="Năm">
                    <b-form-input type="number" :required="true" id="nam" v-model="needUpdatedMinScore.Nam" @input="$v.needUpdatedMinScore.$touch()"></b-form-input>
                </form-group>
                <form-group :validator="$v.needUpdatedMinScore.Diem" label="Điểm">
                    <b-form-input type="number" :required="true" id="diem" v-model="needUpdatedMinScore.Diem" @input="$v.needUpdatedMinScore.$touch()"></b-form-input>
                </form-group>
                <form-group :validator="$v.needUpdatedMinScore.DiemSanNguongTren" label="Điểm ngưỡng trên">
                    <b-form-input type="number" :required="true" id="nam" v-model="needUpdatedMinScore.DiemSanNguongTren" @input="$v.needUpdatedMinScore.$touch()"></b-form-input>
                </form-group>
                <form-group :validator="$v.needUpdatedMinScore.DiemSanNguongDuoi" label="Điểm ngưỡng dưới">
                    <b-form-input type="number" :required="true" id="diem" v-model="needUpdatedMinScore.DiemSanNguongDuoi" @input="$v.needUpdatedMinScore.$touch()"></b-form-input>
                </form-group>
                <label>Ghi chú</label>
                <b-form-textarea id="ghiChu" v-model="needUpdatedMinScore.GhiChu" required rows="4"></b-form-textarea>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelEditMinScore">Hủy</button>
                <button type="submit" class="btn btn-primary waves-effect waves-light">Lưu</button>
            </div>
        </form>
    </b-modal>

    <!--Edit MJob -->
    <!-- modal -->
    <b-modal id="editJobModal" title="Chỉnh sửa công việc và hướng phát triển" hide-footer>
        <form @submit.prevent="updateJob" novalidate>
            <div class="modal-body">
                <form-group :validator="$v.needUpdatedJob.TenCongViec" label="Công việc và hướng phát triển">
                    <b-form-input id="congViec" :required="true" v-model="needUpdatedJob.TenCongViec" @input="$v.needUpdatedJob.$touch()"></b-form-input>
                </form-group>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelEditJob">Hủy</button>
                <button type="submit" class="btn btn-primary waves-effect waves-light">Lưu</button>
            </div>
        </form>
    </b-modal>

    <!-- modal edit subject -->
    <b-modal id="editSubjectModal" title="Chỉnh sửa học phần" hide-footer>
        <form @submit.prevent="updateSubject" novalidate>
            <div class="modal-body">

                <form-group :validator="$v.needUpdatedSubject.MonHocId" label="Tên môn học">
                    <b-form-textarea id="monHocId" v-model="needUpdatedSubject.MonHocId" required rows="4" @input="$v.needUpdatedSubject.$touch()"></b-form-textarea>
                </form-group>
                <label>Mã môn học</label>
                <b-form-textarea :required="true" id="duAn" v-model="needUpdatedSubject.TenMonHoc" @input="$v.needUpdatedSubject.$touch()"></b-form-textarea>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelEditSubject">Hủy</button>
                <button type="submit" class="btn btn-primary waves-effect waves-light">Lưu</button>
            </div>
        </form>
    </b-modal>
    <!-- add job modal -->
    <b-modal id="addJob" title="Thêm công việc và hướng phát triển" hide-footer>
        <form @submit.prevent="addJob" novalidate>
            <div class="modal-body">
                <form-group :validator="$v.jobName" label="Công việc và hướng phát triển">
                    <textarea @input="$v.jobName.$touch()" required="required" rows="5" placeholder="Nhập vào công việc và hướng phát triển " class="form-control" v-model="jobName"></textarea>
                </form-group>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelAddJobModal">Hủy</button>
                <button type="submit" class="btn btn-primary waves-effect waves-light">Lưu</button>
            </div>
        </form>
    </b-modal>

    <!-- modal add subject -->
    <b-modal id="addSubjectModal" title="Thêm học phần" hide-footer>
        <form @submit.prevent="addSubjects" novalidate>
            <div class="modal-body">

                <form-group :validator="$v.selectedAddedSubjects" label="Môn học">

                    <v-select @input="$v.selectedAddedSubjects.$touch()" multiple v-model="selectedAddedSubjects" :options="subjectMajorJson" label="TenMonHoc" :reduce="subject => subject.MonHocId" />
                </form-group>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelAddSubject">Hủy</button>
                <button type="submit" class="btn btn-primary waves-effect waves-light">Lưu</button>
            </div>
        </form>
    </b-modal>

    <!-- modal add important subject -->
    <b-modal id="addImportantSubjectModal" title="Thêm học phần" hide-footer>
        <form @submit.prevent="addImportantSubjects" novalidate>
            <div class="modal-body">
                <div class="form-group">
                    <label>Năm</label>
                    <div>
                        <input type="text" v-model="currentYear" class="form-control" required="true" placeholder="Chọn năm">
                    </div>
                </div>
                <form-group :validator="$v.selectedAddedImportantSubjects" label="Môn học">

                    <v-select @input="$v.selectedAddedImportantSubjects.$touch()" multiple v-model="selectedAddedImportantSubjects" :options="subjectYearJson" label="TenMonHoc" :reduce="importantSubject => importantSubject.MonHocId" />
                </form-group>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelAddImportantSubject">Hủy</button>
                <button type="submit" class="btn btn-primary waves-effect waves-light">Lưu</button>
            </div>
        </form>
    </b-modal>

    <!-- add min score modal -->
    <b-modal id="addMinScore" title="Thêm điểm sàn" hide-footer>
        <form @submit.prevent="addMinScore" novalidate>
            <div class="modal-body">
                <form-group :validator="$v.year" label="Năm">
                    <b-form-input id="input-2" v-model="year" @input="$v.year.$touch()" placeholder="Nhập năm học"></b-form-input>
                </form-group>
                <form-group :validator="$v.score" label="Điểm">
                    <b-form-input id="input-2" v-model="score" @input="$v.score.$touch()" placeholder="Nhập điểm"></b-form-input>

                    <form-group :validator="$v.highScore" label="Điểm ngưỡng trên">
                        <b-form-input id="input-2" v-model="highScore" @input="$v.highScore.$touch()" placeholder="Nhập điểm"></b-form-input>
                    </form-group>
                    <form-group :validator="$v.lowScore" label="Điểm ngưỡng dưới">
                        <b-form-input id="input-2" v-model="lowScore" @input="$v.lowScore.$touch()" placeholder="Nhập điểm"></b-form-input>
                    </form-group>
                </form-group>
                <label>Ghi chú</label>
                <b-form-input id="input-2" v-model="note" placeholder="Nhập ghi chú"></b-form-input>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelAddMinScore">Hủy</button>
                <button type="submit" class="btn btn-primary waves-effect waves-light">Lưu</button>
            </div>
        </form>
    </b-modal>

    <!-- add dinhHuongNghienCuu modal -->
    <b-modal id="addResearch" title="Thêm định hướng nghiên cứu" hide-footer>
        <form @submit.prevent="addResearch" novalidate>

            <div class="modal-body">
                <form-group :validator="$v.researchName" label="Tên định hướng">

                    <textarea @input="$v.researchName.$touch()" required="required" rows="5" placeholder="Nhập vào định hướng" class="form-control" v-model="researchName"></textarea>
                </form-group>
                <label>Dự án nghiên cứu</label>
                <textarea required="required" rows="5" placeholder="Nhập vào dự án nghiên cứu " class="form-control" v-model="projectName"></textarea>
                <label>Chủ đề nghiên cứu</label>
                <textarea required="required" rows="5" placeholder="Nhập vào chủ đề nghiên cứu " class="form-control" v-model="topicName"></textarea>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelResearchModal">Hủy</button>
                <button type="button" class="btn btn-primary waves-effect waves-light" v-on:click="addResearch(researchName, projectName, topicName)">Lưu</button>
            </div>
        </form>
    </b-modal>
</div>
</template>

<script>
import axios from 'axios';
import {
    required,
    email
} from "vuelidate/lib/validators";
import {
    isGt2000,
    isGt0to10,
} from "../validators";

export default {
    name: 'MajorDetail',
    validations: {
        needUpdatedMinScore: {
            Nam: {
                required,
                gt2000: isGt2000
            },
            Diem: {
                required,
                gt0to10: isGt0to10
            },
            DiemSanNguongTren: {
                required
            },
            DiemSanNguongDuoi: {
                required
            },

        },

        // Thêm field mới 
        needUpdatedJob: {
            TenCongViec: {
                required
            },
        },

        //Học phần
        needUpdatedSubject: {
            TenMonHoc: {
                required
            },
        },
        //Định hướng nghiên cứu
        needUpdatedResearchOrientation: {
            TenDinhHuong: {
                required
            }
        },
        researchName: {
            required
        },
        year: {
            required,
            gt2000: isGt2000
        },
        score: {
            required,
            gt0to10: isGt0to10
        },
        highScore: {
            required,
        },
        lowScore: {
            required,
        },
        jobName: {
            required
        },
        selectedAddedSubjects: {

            required

        },
        selectedAddedImportantSubjects: {

            required

        }
    },

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
            this.getAllYears();
        }
    },
    beforeMount() {
        this.chuyenNganhId = this.$route.query.id;
        console.log(this.$route.query.id);
        this.getMajorById(this.chuyenNganhId);
        this.getJobByMajorId(this.chuyenNganhId);
        this.getMainAndGenaralSubjectsByMajorId(this.chuyenNganhId);
        this.GetQuestionsByMajorandJob(this.chuyenNganhId);
        this.GetResearchOrientationById(this.chuyenNganhId);
        this.GetMinScoreByMajorId(this.chuyenNganhId);
        this.getAllYears();
    },
    methods: {
        getMajorById(id) {
            console.log(this.$route.query.id);
            let url = `https://fit4u-admin.somee.com/api/ChuyenNganh/${id}`;
            axios.get(url).then((response) => {
                this.majorJson = response.data;
                this.backUpLinhVucNghienCuu = this.majorJson.LinhVucNghienCuu;
                this.backUpLinkVideo = this.majorJson.LinkVideo;
                this.backUpGioiThieuCN = this.majorJson.GioiThieuChuyenNganh;
            });
        },
        getJobByMajorId(major_id) {
            console.log(this.$route.query.id);
            let url = `https://fit4u-admin.somee.com/api/CongViecVaHuongPhatTrien/${major_id}`;
            axios.get(url).then((response) => {
                this.jobJson = response.data;
            });
        },
        getMainAndGenaralSubjectsByMajorId(major_id) {
            console.log(this.$route.query.id);
            let url = `https://fit4u-admin.somee.com/api/MonHocChuyenNganh/${major_id}`;
            axios.get(url).then((response) => {
                this.subjectJson = response.data;
            });
            this.getMajorSubjectsNotInMajor(major_id);
        },
        GetQuestionsByMajorandJob(major_id) {
            console.log(this.$route.query.id);
            let url = `https://fit4u-admin.somee.com/api/CauHoiHuongPhatTrien?major_id=${major_id}`;
            axios.get(url).then((response) => {
                this.questionJson = response.data;
            });
        },
        GetResearchOrientationById(major_id) {
            console.log(this.$route.query.id);
            let url = `https://fit4u-admin.somee.com/api/DinhHuongNghienCuu/${major_id}`;
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
            let url = `https://fit4u-admin.somee.com/api/DiemSan/${major_id}`;
            axios.get(url).then((response) => {
                this.minScoreJson = response.data;
            });
        },

        setDeletedMajor(id) {
            this.ChuyenNganhId = id;
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

        setDeletedImportantSubject(id) {

            this.MonHocQuanTrongCNId = id;
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
            this.$bvModal.show('editMinScoreModal');
            this.needUpdatedMinScore = {
                ...object
            };
        },

        setDeletedMinScoreId(id) {
            this.DiemSanId = id;
        },

        deleteResearchOrientation() {
            let url = `https://fit4u-admin.somee.com/api/DinhHuongNghienCuu/${this.DinhHuongNghienCuuId}`;

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

            let url = `https://fit4u-admin.somee.com/api/MonHocChuyenNganh/${this.ChuyenNganhId}/${this.MonHocId}`;

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

        deleteImportantSubject() {

            let url = `https://fit4u-admin.somee.com/api/MonHocQuanTrongCN/${this.MonHocQuanTrongCNId}`;

            axios.delete(url).then(response => {

                    this.$bvToast.toast('Xóa thành công!', {
                        title: 'Thành công',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 1000,
                    });

                    this.getAllYears();
                })
                .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });

            this.$bvModal.hide('deleteImportSubjectModal');
        },

        deleteMinScore() {
            let url = `https://fit4u-admin.somee.com/api/DiemSan/${this.DiemSanId}`;

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

        getAllMajors(shouldSelect0) {
            this.$store.dispatch('onGlobalMajorAction', shouldSelect0);
        },
        updateLinhVucNghienCuu() {
            let url = `https://fit4u-admin.somee.com/api/ChuyenNganh/${this.chuyenNganhId}`;
            axios.put(url, this.majorJson).then(response => {

                    this.majorJson = response.data;
                    this.backUpLinhVucNghienCuu = this.majorJson.LinhVucNghienCuu;
                    this.backUpLinkVideo = this.majorJson.LinkVideo;
                    this.backUpGioiThieuCN = this.majorJson.GioiThieuChuyenNganh;
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
            this.$v.needUpdatedResearchOrientation.TenDinhHuong.$touch();
            if (this.$v.needUpdatedResearchOrientation.TenDinhHuong.$pending || this.$v.needUpdatedResearchOrientation.TenDinhHuong.$error) return;
            let url = `https://fit4u-admin.somee.com/api/DinhHuongNghienCuu/${this.needUpdatedResearchOrientation.DinhHuongNghienCuuId}`;
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
            let url = `https://fit4u-admin.somee.com/api/MonHoc/${this.needUpdatedSubject.MonHocId}`;
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
            this.$v.needUpdatedJob.TenCongViec.$touch();

            if (this.$v.needUpdatedJob.TenCongViec.$pending || this.$v.needUpdatedJob.TenCongViec.$error) return;
            let url = `https://fit4u-admin.somee.com/api/CongViecVaHuongPhatTrien/${this.needUpdatedJob.CongViecVaHuongPhatTrienId}`;
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
            let url = `https://fit4u-admin.somee.com/api/CongViecVaHuongPhatTrien/${this.CongViecVaHuongPhatTrienId}`;

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

        deleteMajor() {
            let url = `https://fit4u-admin.somee.com/api/ChuyenNganhBiXoa/${this.chuyenNganhId}`;

            axios.put(url, this.majorJson).then(response => {
                    this.majorJson = response.data;
                    this.$bvToast.toast('Xóa thành công!', {
                        title: 'Thành công',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 1000,
                    });

                    this.getAllMajors(true);
                })
                .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });

            this.$bvModal.hide('deleteMajorModal');
        },

        updateMinScore() {

            console.log("submitted");
            this.$v.needUpdatedMinScore.$touch();
            // if its still pending or an error is returned do not submit
            if (this.$v.needUpdatedMinScore.$pending || this.$v.needUpdatedMinScore.$error) return;
            // to form submit after this

            let url = `https://fit4u-admin.somee.com/api/DiemSan/${this.needUpdatedMinScore.DiemSanId}`;
            axios.put(url, {
                    Diem: this.needUpdatedMinScore.Diem,
                    Nam: this.needUpdatedMinScore.Nam,
                    GhiChu: this.needUpdatedMinScore.GhiChu,
                    ChuyenNganhId: this.needUpdatedMinScore.ChuyenNganhId,
                    DiemSanId: this.needUpdatedMinScore.DiemSanId,
                    DiemSanNguongTren: this.needUpdatedMinScore.DiemSanNguongTren,
                    DiemSanNguongDuoi: this.needUpdatedMinScore.DiemSanNguongDuoi
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

        addJob() {
            this.$v.jobName.$touch();

            if (this.$v.jobName.$pending || this.$v.jobName.$error) return;
            const body = {
                "TenCongViec": this.jobName,
                "ChuyenNganhId": this.chuyenNganhId,
            }

            let url = 'https://fit4u-admin.somee.com/api/CongViecVaHuongPhatTrien';
            axios.post(url, body).then((response) => {
                this.questionJson = response.data;

                this.$bvToast.toast('Thêm công việc và hướng phát triển thành công!', {
                    title: 'Thành công',
                    variant: 'success',
                    solid: true,
                    autoHideDelay: 1000,
                });
                this.getJobByMajorId(this.chuyenNganhId);
                this.$bvModal.hide('addJob');
            });

            this.jobName = "";
        },

        getAllYears() {
            let url = 'https://fit4u-admin.somee.com/api/MonHocCSNvaToan';
            axios.get(url).then((response) => {
                this.yearJson = response.data;

                this.yearJson.forEach((item) => {
                    if (!this.yearList.includes(item.KhoaHoc)) {
                        this.yearList = [...this.yearList, item.KhoaHoc];
                    }
                });

                if (this.yearList.length) {
                    if (this.selectedYear === -1 || this.importantSubjectJson.length === 1) {
                        this.selectedYear = this.yearList[0];
                        this.currentYear = this.yearList[0];
                    }

                    this.getImportantSubjectsByYearOfMajor(this.selectedYear, this.chuyenNganhId);
                    this.getSubjectsNotInImportantSubjectByYearOfMajor(this.selectedYear, this.chuyenNganhId);
                }
            });
        },

        addMinScore() {
            this.$v.year.$touch();
            this.$v.score.$touch();
            this.$v.highScore.$touch();
            this.$v.lowScore.$touch();
            if (this.$v.year.$pending || this.$v.year.$error) return;
            if (this.$v.score.$pending || this.$v.score.$error) return;
            if (this.$v.highScore.$pending || this.$v.highScore.$error) return;
            if (this.$v.lowScore.$pending || this.$v.lowScore.$error) return;
            const body = {
                "Diem": this.score,
                "Nam": this.year,
                "GhiChu": this.note,
                "ChuyenNganhId": this.chuyenNganhId,
                "DiemSanNguongTren": this.highScore,
                "DiemSanNguongDuoi": this.lowScore,
            }

            let url = 'https://fit4u-admin.somee.com/api/DiemSan';
            axios.post(url, body).then((response) => {
                this.minScoreJson = response.data;

                this.$bvToast.toast('Thêm điểm sàn thành công!', {
                    title: 'Thành công',
                    variant: 'success',
                    solid: true,
                    autoHideDelay: 1000,
                });
                this.GetMinScoreByMajorId(this.chuyenNganhId);
                this.$bvModal.hide('addMinScore');
            });

            this.year = "";
            this.score = "";
            this.note = "";
            this.highScore = "";
            this.lowScore = "";
        },

        addResearch(researchName, projectName, topicName) {
            this.$v.researchName.$touch();
            if (this.$v.researchName.$pending || this.$v.researchName.$error) return;
            const body = {
                "TenDinhHuong": researchName,
                "DuAnNghienCuu": projectName,
                "ChuDeNghienCuu": topicName,
                "ChuyenNganhId": this.chuyenNganhId,
            }

            let url = 'https://fit4u-admin.somee.com/api/DinhHuongNghienCuu';
            axios.post(url, body).then((response) => {
                this.researchJsonPopup = response.data;

                this.$bvToast.toast('Thêm định hướng nghiên cứu thành công!', {
                    title: 'Thành công',
                    variant: 'success',
                    solid: true,
                    autoHideDelay: 1000,
                });

                this.GetResearchOrientationById(this.chuyenNganhId);
                this.$bvModal.hide('addResearch');
            });

            this.researchName = "";
            this.projectName = "";
            this.topicName = "";
        },

        addSubjects() {
            this.$v.selectedAddedSubjects.$touch();
            if (this.$v.selectedAddedSubjects.$pending || this.$v.selectedAddedSubjects.$error) return;
            let url = `https://fit4u-admin.somee.com/api/MonHocChuyenNganh`;

            this.submitting = true;
            axios.post(url, {
                    ChuyenNganhId: this.chuyenNganhId,
                    MonHocIds: this.selectedAddedSubjects,
                }).then(response => {
                    this.$bvToast.toast('Thêm học phần thành công!', {
                        title: 'Thành công',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 1000,
                    });

                    this.getMainAndGenaralSubjectsByMajorId(this.chuyenNganhId);
                    this.$bvModal.hide('addSubjectModal')
                })
                .catch(error => {
                    this.submitting = false;
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });
            this.selectedAddedSubjects = [];
        },
        addImportantSubjects() {
            this.$v.selectedAddedImportantSubjects.$touch();
            if (this.$v.selectedAddedImportantSubjects.$pending || this.$v.selectedAddedImportantSubjects.$error) return;
            let url = `https://fit4u-admin.somee.com/api/MonHocQuanTrongCN`;

            this.submitting = true;
            axios.post(url, {
                    ChuyenNganhId: this.chuyenNganhId,
                    KhoaHoc: this.currentYear,
                    MonHocIds: this.selectedAddedImportantSubjects,
                }).then(response => {
                    this.$bvToast.toast('Thêm học phần thành công!', {
                        title: 'Thành công',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 1000,
                    });
                    this.selectedYear = this.currentYear;
                    this.getAllYears();
                    this.$bvModal.hide('addImportantSubjectModal')
                })
                .catch(error => {
                    this.submitting = false;
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });
            this.selectedAddedImportantSubjects = [];
        },

        getMajorSubjectsNotInMajor(major_id) {
            let url = `https://fit4u-admin.somee.com/api/MonHocCN/${major_id}`;

            try {
                axios.get(url).then((response) => {
                    this.subjectMajorJson = response.data;
                });
            } catch (e) {
                console.log(e);
            }

        },

        getImportantSubjectsByYearOfMajor(year, major_id) {
            let url = `https://fit4u-admin.somee.com/api/MonHocQuanTrongCN/${year}/${major_id}`;

            try {
                axios.get(url).then((response) => {
                    this.importantSubjectJson = response.data;
                });
            } catch (e) {
                console.log(e);
            }

        },

        getSubjectsNotInImportantSubjectByYearOfMajor(year, major_id) {
            let url = `https://fit4u-admin.somee.com/api/MonHocCSNvaToanNotInMonHocQuanTrongCN/${year}/${major_id}`;

            try {
                axios.get(url).then((response) => {
                    this.subjectYearJson = response.data;
                });
            } catch (e) {
                console.log(e);
            }

        },
        onKhoaHocSelect(year) {
            this.selectedYear = year;
            this.currentYear = year;
            this.getImportantSubjectsByYearOfMajor(this.selectedYear, this.chuyenNganhId);
            this.getSubjectsNotInImportantSubjectByYearOfMajor(this.selectedYear, this.chuyenNganhId);
        },

        onCancelEditLinhVucNghienCuu() {
            this.majorJson.LinhVucNghienCuu = this.backUpLinhVucNghienCuu;
            this.majorJson.LinkVideo = this.backUpLinkVideo;
            this.majorJson.GioiThieuChuyenNganh = this.backUpGioiThieuCN;
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

        onCancelAddImportantSubject() {
            this.$bvModal.hide('addImportantSubjectModal');
            this.selectedAddedImportantSubjects = [];
        },

        onCancelAddMinScore() {
            this.$bvModal.hide('addMinScore');
            this.year = "";
            this.note = "";
            this.highScore = "";
            this.lowScore = "";
            this.score = "";
        },

        onCancelResearchModal() {
            this.$bvModal.hide('addResearch');

            this.researchName = "";
            this.projectName = "";
            this.topicName = "";

        },
        onCancelDeleteSubject() {
            this.$bvModal.hide('deleteSubjectModal');
        },

        onCancelDeleteMajorModal() {
            this.$bvModal.hide('deleteMajorModal');
        },

        onCancelDeleteImportantSubjectModal() {
            this.$bvModal.hide('deleteImportSubjectModal');
        },
        onCancelDeleteMinScoreModal() {
            this.$bvModal.hide('alertDeleteMinScoreModal');
        },
        onCancelDeleteResearchModal() {
            this.$bvModal.hide('alertDeleteResearchOrientationModal');
        },

        onCancelAddJobModal() {
            this.$bvModal.hide('addJob');
        },

        onCancelDeleteJobModal() {
            this.$bvModal.hide('deleteJobModal');
        },
    },
    data() {
        return {
            chuyenNganhId: "",
            majorJson: "",
            jobJson: "",
            subjectJson: "",
            questionJson: "",
            researchJson: "",
            minScoreJson: "",
            backUpLinhVucNghienCuu: "",
            backUpLinkVideo: "",
            backUpGioiThieuCN: "",
            isEditLinhVucNghienCuu: false,
            jobName: "",
            minScoreJson: "",
            researchJsonPopup: "",
            researchJsonEditPopup: "",
            DinhHuongNghienCuuId: "",
            year: "",
            score: "",
            note: "",
            highScore: "",
            lowScore: "",

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

            importantSubjectJson: "",
            yearJson: "",
            yearList: [],
            subjectYearJson: "",
            selectedYear: -1,
            selectedAddedImportantSubjects: [],
            MonHocQuanTrongCNId: "",
            importantSubject: "",
            currentYear: 0,
        }
    },

}
</script>

<style>

</style>
