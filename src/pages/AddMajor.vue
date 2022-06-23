<template>
<div class="content-page">
    <!-- Start content -->
    <div class="content">
        <form @submit.prevent="addNewMajor" novalidate>
            <div class="row mb-3">

                <div class="col-lg-6">
                    <h1></h1>

                    <div class="row mb-1" style="justify-content: space-between;">
                        <!--<div class="col-lg-8">
                        <label>Mã chuyên ngành</label>
                    </div> -->

                    </div>

                    <div class="row mb-3">

                        <div class="col-lg-12">
                            <!--<label> {{majorJson.LinhVucNghienCuu}}</label>  -->

                            <div>
                                <form-group :validator="$v.cNId" label="Mã chuyên ngành">
                                    <b-form-input :required="true" id="cNId" v-model="cNId" @input="$v.cNId.$touch()"></b-form-input>
                                </form-group>
                            </div>

                        </div>

                    </div>

                    <div class="row mb-1" style="justify-content: space-between;">
                        <div class="col-lg-8">

                        </div>

                    </div>

                    <div class="row mb-3">

                        <div class="col-lg-12">
                            <!--<label> {{majorJson.LinhVucNghienCuu}}</label>  -->

                            <div>
                                <form-group :validator="$v.tenChuyenNganh" label="Tên chuyên ngành">
                                    <b-form-input :required="true" id="tenChuyenNganh" v-model="tenChuyenNganh" @input="$v.tenChuyenNganh.$touch()"></b-form-input>
                                </form-group>
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

                </div>
            </div>

            <div class="row mb-3" style="justify-content: right; margin-right: 10px">

                <button type="submit" role="button" class="btn btn-info waves-effect waves-light  m-r-5" style="color: #ffffff; background-color: rgb(255, 190, 0); border-color: rgb(255, 190, 0);margin-left: 470px; margin-right: 0px;">
                    <i class="fas fa-plus" style="color: #ffffff;"></i> <i></i> <span>Thêm chuyên ngành </span></button>

            </div>
        </form>

        <div style="margin-left: 13px; margin-right: 13px;" v-if="isActiveTab!== false">
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
                                                <a v-b-modal="'addJob'" class="btn btn-info waves-effect waves-light  m-r-5" style="background-color: rgb(255, 190, 0); border-color: rgb(255, 190, 0);">
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
                                                                        <!--<a role="button" class="btn btn-success waves-effect waves-light m-r-5"><i class="far fa-edit" v-on:click="setNeedUpdatedSubject(item)" v-b-modal="'editSubjectModal'"></i></a> -->
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
                                            <a v-b-modal="'addMinScore'" role="button" class="btn btn-info waves-effect waves-light  m-r-5" style="background-color: rgb(255, 190, 0); border-color: rgb(255, 190, 0);">
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
                                            <a v-b-modal="'addResearch'" role="button" class="btn btn-info waves-effect waves-light  m-r-5" style="background-color: rgb(255, 190, 0); border-color: rgb(255, 190, 0);">
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
            <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelDeleteResearch">Hủy</button>
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

    <!--deleteJobModal -->
    <!-- modal -->
    <b-modal id="deleteJobModal" title="Xóa công việc và hướng phát triển" hide-footer>
        <div class="modal-body">
            <h5 class="font-16">Bạn có chắc chắn muốn xóa công việc và hướng phát triển này không?</h5>
            <p></p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelDeleteJob">Hủy</button>
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
        <form @submit.prevent="updateResearch" novalidate>
            <div class="modal-body">
                <form-group :validator="$v.needUpdatedResearchOrientation.TenDinhHuong" label="Định hướng nghiên cứu">
                    <b-form-textarea :required="true" id="dinhHuong" v-model="needUpdatedResearchOrientation.TenDinhHuong" @input="$v.needUpdatedResearchOrientation.$touch()"></b-form-textarea>
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
                    <b-form-input id="input-2" v-model="needUpdatedMinScore.DiemSanNguongTren" @input="$v.needUpdatedMinScore.$touch()" placeholder="Nhập điểm"></b-form-input>
                </form-group>
                <form-group :validator="$v.needUpdatedMinScore.DiemSanNguongDuoi" label="Điểm ngưỡng dưới">
                    <b-form-input id="input-2" v-model="needUpdatedMinScore.DiemSanNguongDuoi" @input="$v.needUpdatedMinScore.$touch()" placeholder="Nhập điểm"></b-form-input>
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
                <form-group :validator="$v.needUpdatedJob.TenCongViec" label="Tên Công Việc">
                    <b-form-input id="congViec" :required="true" v-model="needUpdatedJob.TenCongViec" @input="$v.needUpdatedJob.$touch()"></b-form-input>
                </form-group>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelEditJob">Hủy</button>
                <button type="submit" class="btn btn-primary waves-effect waves-light">Lưu</button>
            </div>
        </form>
    </b-modal>

    <!-- modal edit subject 
    <b-modal id="editSubjectModal" title="Chỉnh sửa học phần" hide-footer>
         <form @submit.prevent="updateSubject" novalidate>
        <div class="modal-body">

           <label>Mã môn học</label>
            <b-form-textarea id="monHocId" v-model="needUpdatedSubject.MonHocId" required rows="4"></b-form-textarea>

            <form-group :validator="$v.needUpdatedSubject.TenMonHoc" label="Tên Công Việc">
            <b-form-textarea :required="true" id="duAn" v-model="needUpdatedSubject.TenMonHoc"  @input="$v.needUpdatedSubject.$touch()"></b-form-textarea>
        </form-group>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelEditSubject">Hủy</button>
            <button type="button" class="btn btn-primary waves-effect waves-light" v-on:click="updateSubject()">Lưu</button>
        </div>
         </form>
    </b-modal>-->
    <!-- add job modal -->
    <b-modal id="addJob" title="Thêm công việc và hướng phát triển" hide-footer>
        <form @submit.prevent="addJob" novalidate>
            <div class="modal-body">
                <form-group :validator="$v.jobName" label="Công việc và hướng phát triển">
                    <textarea @input="$v.jobName.$touch()" required="required" rows="5" placeholder="Nhập vào công việc và hướng phát triển " class="form-control" v-model="jobName"></textarea>
                </form-group>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelAddJob">Hủy</button>
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

    <!-- add min score modal -->
    <b-modal id="addMinScore" title="Thêm điểm sàn" hide-footer>
        <form @submit.prevent="addMinScore" novalidate>

            <div class="modal-body">
                <form-group :validator="$v.year" label="Năm">
                    <b-form-input @input="$v.year.$touch()" id="input-2" v-model="year" placeholder="Nhập năm học"></b-form-input>
                </form-group>
                <form-group :validator="$v.score" label="Điểm">
                    <b-form-input @input="$v.score.$touch()" id="input-2" v-model="score" placeholder="Nhập điểm"></b-form-input>
                </form-group>
                
                <form-group :validator="$v.highScore" label="Điểm ngưỡng trên">
                    <b-form-input id="input-2" v-model="highScore" @input="$v.highScore.$touch()" placeholder="Nhập điểm"></b-form-input>
                </form-group>
                <form-group :validator="$v.lowScore" label="Điểm ngưỡng dưới">
                    <b-form-input id="input-2" v-model="lowScore" @input="$v.lowScore.$touch()" placeholder="Nhập điểm"></b-form-input>
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
                <form-group :validator="$v.researchName" label="Định hướng nghiên cứu">
                    <textarea @input="$v.researchName.$touch()" required="required" rows="5" placeholder="Nhập vào định hướng" class="form-control" v-model="researchName"></textarea>
                </form-group>
                <label>Dự án nghiên cứu</label>
                <textarea required="required" rows="5" placeholder="Nhập vào dự án nghiên cứu " class="form-control" v-model="projectName"></textarea>
                <label>Chủ đề nghiên cứu</label>
                <textarea required="required" rows="5" placeholder="Nhập vào chủ đề nghiên cứu " class="form-control" v-model="topicName"></textarea>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelAddResearch">Hủy</button>
                <button type="submit" class="btn btn-primary waves-effect waves-light">Lưu</button>
            </div>

        </form>
    </b-modal>

    <!-- modal add important subject -->
    <b-modal id="addImportantSubjectModal" title="Thêm học phần" hide-footer>
        <form @submit.prevent="addImportantSubjects" novalidate>
            <div class="modal-body">

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

    <!--deleteImportantSubjectModal -->
    <!-- modal -->
    <b-modal id="deleteImportSubjectModal" title="Xóa môn học" hide-footer>
        <div class="modal-body">
            <h5 class="font-16">Bạn có chắc chắn muốn xóa môn học này không?</h5>
            <p></p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal" v-on:click="onCancelDeleteImportantSubject">Hủy</button>
            <button type="button" class="btn btn-primary waves-effect waves-light" v-on:click="deleteImportantSubject()">Xác nhận</button>
        </div>
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
    name: 'AddMajor',
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
                required,
                gt0to10: isGt0to10
            },
            DiemSanNguongDuoi: {
                required,
                gt0to10: isGt0to10
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

        cNId: {
            required
        },

        tenChuyenNganh: {
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
            gt0to10: isGt0to10
        },
        lowScore: {
            required,
            gt0to10: isGt0to10
        },
        jobName: {
            required
        },
        researchName: {
            required
        },
        selectedAddedSubjects: {
            required
        },
        selectedAddedImportantSubjects: {

            required

        },
    },

    watch: {
        '$route': function (to, from) {
            this.chuyenNganhId = this.$route.query.id;
            console.log(this.$route.query.id);
            this.getMajorById(this.chuyenNganhId);
            this.getJobByMajorId(this.cNId);
            this.getMainAndGenaralSubjectsByMajorId(this.cNId);
            this.GetQuestionsByMajorandJob(this.cNId);
            this.GetResearchOrientationById(this.cNId);
            this.GetMinScoreByMajorId(this.cNId);
            this.getAllYears();
        }
    },
    methods: {
        getMajorById(id) {
            console.log(this.$route.query.id);
            let url = `https://fit4u-admin.somee.com/api/ChuyenNganh/${id}`;
            axios.get(url).then((response) => {
                this.majorJson = response.data;
                this.backUpLinhVucNghienCuu = this.majorJson.LinhVucNghienCuu;
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
            let url = `https://fit4u-admin.somee.com/api/MonHocChuyenNganh/${this.cNId}`;
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
            this.$bvModal.show('editMinScoreModal');
            this.needUpdatedMinScore ={ ...object};
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

                    this.GetResearchOrientationById(this.cNId);
                })
                .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });

            this.$bvModal.hide('alertDeleteResearchOrientationModal');
        },

        deleteSubject() {

            let url = `https://fit4u-admin.somee.com/api/MonHocChuyenNganh/${this.cNId}/${this.MonHocId}`;

            axios.delete(url).then(response => {

                    this.$bvToast.toast('Xóa thành công!', {
                        title: 'Thành công',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 1000,
                    });

                    this.getMainAndGenaralSubjectsByMajorId(this.cNId);
                })
                .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });

            this.$bvModal.hide('deleteSubjectModal');
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

                    this.GetMinScoreByMajorId(this.cNId);
                })
                .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });

            this.$bvModal.hide('alertDeleteMinScoreModal');
        },

        updateLinhVucNghienCuu() {
            let url = `https://fit4u-admin.somee.com/api/ChuyenNganh/${this.cNId}`;
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

                    this.GetResearchOrientationById(this.cNId);

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

                    this.getMainAndGenaralSubjectsByMajorId(this.cNId);

                })
                .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });

            this.$bvModal.hide('editSubjectModal');
        },

        updateJob() {
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

                    this.getJobByMajorId(this.cNId);

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

                    this.getJobByMajorId(this.cNId);
                })
                .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });

            this.$bvModal.hide('deleteJobModal');
        },

        updateMinScore() {
            let url = `https://fit4u-admin.somee.com/api/DiemSan/${this.needUpdatedMinScore.DiemSanId}`;
            axios.put(url, {
                    Diem: this.needUpdatedMinScore.Diem,
                    Nam: this.needUpdatedMinScore.Nam,
                    GhiChu: this.needUpdatedMinScore.GhiChu,
                    ChuyenNganhId: this.needUpdatedMinScore.ChuyenNganhId,
                    DiemSanId: this.needUpdatedMinScore.DiemSanId,
                    DiemSanNguongTren: this.needUpdatedMinScore.DiemSanNguongTren,
                    DiemSanNguongDuoi: this.needUpdatedMinScore.DiemSanNguongDuoi,
                }).then(response => {

                    this.$bvToast.toast('Cập nhật thành công!', {
                        title: 'Thành công',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 1000,
                    });

                    this.GetMinScoreByMajorId(this.cNId);

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
                "ChuyenNganhId": this.cNId,
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
                this.getJobByMajorId(this.cNId);
                this.$bvModal.hide('addJob');
            });

            this.jobName = "";
        },

        onCancelAddJob() {

            this.$bvModal.hide('addJob');
            this.jobName = "";
        },
        onCancelDeleteJob() {

            this.$bvModal.hide('deleteJobModal');
        },
        onCancelDeleteSubject() {

            this.$bvModal.hide('deleteSubjectModal');
        },
        onCancelDeleteResearch() {

            this.$bvModal.hide('alertDeleteResearchOrientationModal');
        },
        onCancelAddResearch() {
            this.researchName = "";
            this.projectName = "";
            this.topicName = "";
            this.$bvModal.hide('addResearch');
        },
        onCancelAddMinScore(){
            this.$bvModal.hide('addMinScore');
            this.year="";
            this.score="";
            this.highScore="";
            this.lowScore="";
            this.note="";
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
                "ChuyenNganhId": this.cNId,
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
                this.GetMinScoreByMajorId(this.cNId);
                this.$bvModal.hide('addMinScore');
            });

            this.year = "";
            this.score = "";
            this.note = "";
             this.highScore="";
            this.lowScore="";
            this.note="";
        },

        addResearch() {
            this.$v.researchName.$touch();
            if (this.$v.researchName.$pending || this.$v.researchName.$error) return;
            const body = {
                "TenDinhHuong": this.researchName,
                "DuAnNghienCuu": this.projectName,
                "ChuDeNghienCuu": this.topicName,
                "ChuyenNganhId": this.cNId,
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

                this.GetResearchOrientationById(this.cNId);
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
                    ChuyenNganhId: this.cNId,
                    MonHocIds: this.selectedAddedSubjects,
                }).then(response => {
                    this.getMainAndGenaralSubjectsByMajorId(this.cNId);

                })
                .catch(error => {
                    this.submitting = false;
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });
            this.selectedAddedSubjects = [];
            this.$bvModal.hide('addSubjectModal');
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

        //add chuyên ngành
        addNewMajor() {
            this.$v.cNId.$touch();
            this.$v.tenChuyenNganh.$touch();
            // if its still pending or an error is returned do not submit
            if (this.$v.cNId.$pending || this.$v.cNId.$error) return;
            if (this.$v.tenChuyenNganh.$pending || this.$v.tenChuyenNganh.$error) return;
            // to form submit after this

            let url = 'https://fit4u-admin.somee.com/api/ChuyenNganh';

            this.submitting = true;
            axios.post(url, {
                    ChuyenNganhId: this.cNId,
                    TenChuyenNganh: this.tenChuyenNganh,
                    LinhVucNghienCuu: this.linhVucNghienCuu,
                    LinkVideo: this.linkVideo,
                    GioiThieuChuyenNganh: this.gioiThieuChuyenNganh
                }).then(response => {
                    this.isActiveTab = true;
                    this.$store.dispatch('onGlobalMajorAction');
                    this.getMajorSubjectsNotInMajor(this.cNId);
                    this.getAllYears();

                    this.$bvToast.toast('Thêm chuyên ngành thành công', {
                        title: 'Thêm chuyên ngành',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 1000,
                    });
                })
                .catch(error => {
                    this.submitting = false;
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });
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
        onCancelDeleteImportantSubject() {
            this.$bvModal.hide('deleteImportSubjectModal');
            this.selectedAddedImportantSubjects = [];
        },
        onClickAddMajor() {
            this.isActiveTab = true;
        },

        onKhoaHocSelect(year) {
            this.selectedYear = year;
            this.getImportantSubjectsByYearOfMajor(this.selectedYear, this.chuyenNganhId);
            this.getSubjectsNotInImportantSubjectByYearOfMajor(this.selectedYear, this.chuyenNganhId);
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
        onCancelAddImportantSubject() {
            this.$bvModal.hide('addImportantSubjectModal');
            this.selectedAddedImportantSubjects = [];
        },
        addImportantSubjects() {
            this.$v.selectedAddedImportantSubjects.$touch();
            if (this.$v.selectedAddedImportantSubjects.$pending || this.$v.selectedAddedImportantSubjects.$error) return;
            let url = `https://fit4u-admin.somee.com/api/MonHocQuanTrongCN`;

            this.submitting = true;
            axios.post(url, {
                    ChuyenNganhId: this.cNId,
                    KhoaHoc: this.selectedYear,
                    MonHocIds: this.selectedAddedImportantSubjects,
                }).then(response => {
                    this.$bvToast.toast('Thêm học phần thành công!', {
                        title: 'Thành công',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 1000,
                    });

                    this.getImportantSubjectsByYearOfMajor(this.selectedYear, this.cNId);
                    this.$bvModal.hide('addImportantSubjectModal')
                })
                .catch(error => {
                    this.submitting = false;
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });
            this.selectedAddedImportantSubjects = [];
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
                    this.selectedYear = this.yearList[0];
                    this.getImportantSubjectsByYearOfMajor(this.yearList[0], this.cNId);
                    this.getSubjectsNotInImportantSubjectByYearOfMajor(this.yearList[0], this.cNId);
                }
            });
        },
        setDeletedImportantSubject(id) {

            this.MonHocQuanTrongCNId = id;
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

                    this.getImportantSubjectsByYearOfMajor(this.selectedYear, this.cNId);
                })
                .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error", error);
                });

            this.$bvModal.hide('deleteImportSubjectModal');
        },
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
            highScore:"",
            lowScore:"",

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

            //add chuyên ngành
            cNId: "",
            tenChuyenNganh: "",
            linkVideo: "",
            linhVucNghienCuu: "",
            gioiThieuChuyenNganh: "",

            selectedYear: "",
            subjectYearJson: "",
            subjectMajorJson: "",
            selectedAddedImportantSubjects: "",
            yearList: [],
            MonHocQuanTrongCNId: "",
            importantSubject: "",
            importantSubjectJson: "",
            backUpMinScore:"",
        }
    },

}
</script>

<style>

</style>
