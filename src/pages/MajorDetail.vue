<template>
<div class="content-page">
    <!-- Start content -->
    <div class="content">       
        <div class="row mb-3">
            <p></p>
            <div class="col-lg-12">
                <div class="btn-toolbar float-lg-right form-group mb-0" role="toolbar">
                        <div class="">
                            <a href="/#/ImportFile" style="background-color: #FFBE00; border-color: #FFBE00" class="btn btn-info waves-effect waves-light  m-r-5" role="button" data-toggle="modal" data-target="#importExcelFile"><i class="mdi mdi-pencil"></i> <i></i> <span>Chỉnh sửa</span> </a>
                            <a href="/#/AddQuestion" style="background-color: #005874; border-color: #FFBE00" class="btn btn-info waves-effect waves-light  m-r-5" role="button" data-toggle="modal" data-target="#addMajorModal"><i class="fas fa-plus"></i> <i></i> <span>Thêm chuyên ngành</span> </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-12">
                    <h1>{{majorJson.TenChuyenNganh}} </h1>
            </div>

            <div class="row mb-3">
                <p></p>
                <div class="col-lg-2">
                    <label> Lĩnh vực nghiên cứu</label>
                </div>
                <div class="col-lg-10">
                    <label> {{majorJson.LinhVucNghienCuu}}</label>
                </div>
            </div>
        <div>   
        <b-card no-body>
            <b-tabs card>
                <div class="row mb-3">
                    <div class="col-lg-12">
                        <!-- Tab Công việc-->
                        <b-tab title="Công việc và hướng phát triển" active>
                            <b-card-text>
                                <label> Các công việc và hướng phát triển của chuyên ngành</label>
                                <form class="" action="#">
                                <div class="form-group">
                                    <tbody v-for="(item, index) in jobJson" :key="index"  style="text-align: center">
                                        <tr>
                                            <td>{{item.TenCongViec}}</td>
                                        </tr>
						            </tbody>
						        </div>                           
                                </form>
                            </b-card-text>
                        </b-tab>
                    </div>
                    <!-- Tab học phần-->
                    <div class="col-lg-3">
                        <b-tab title="Các học phần">
                            <b-card-text>
                                <label> Các học phần chuyên ngành</label>
                                <form action="#">
                                    <tbody v-for="(item, index) in subjectJson" :key="index" >
                                        <div class="form-group">
                                            <label>{{item.MonHocId}}</label>
                                            <td>{{item.TenMonHoc}}</td>
                                        </div>
                                    </tbody>            
                                </form> 
                            </b-card-text>
                        </b-tab>
                    </div>
                    <!-- Tab ĐIểm sàn-->
                    <div class="col-lg-3">
                        <b-tab title="Điểm sàn">
                            <b-card-text>
                                <form action="#">      
                                    <div class="form-group">
                                        <label>Vi tích phân 1B</label>
                                        <div>
                                            <input type="text" class="form-control" required="" placeholder="7.0">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Vi tích phân 2B</label>
                                        <div>
                                            <input type="text" class="form-control" required="" placeholder="7.0">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Xác suất thống kê</label>
                                        <div>
                                            <input type="text" class="form-control" required="" placeholder="7.0">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Toán rời rạc</label>
                                        <div>
                                             <input type="text" class="form-control" required="" placeholder="7.0">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Đại số tuyến tính</label>
                                        <div>
                                            <input type="text" class="form-control" required="" placeholder="7.0">
                                        </div>
                                    </div>                                        
                                </form>
                            </b-card-text>
                        </b-tab>
                    </div>
                    <!-- Tab bài đánh giá-->
                        <b-tab title="Bài đánh giá" active>
                            <b-card-text>
                                <form class="" action="#">
                                    <div class="form-group">
						                <div class="table-responsive" style ="width:1000px">
                                            <table class="table table-striped mb-0">
                                                <thead>
                                                    <tr class="bg-primary" style="background-color: rgb(28, 129, 158) !important;">
                                                        <th>STT</th> 
                                                        <th>Công việc/hướng phát triển</th> 
                                                        <th>Câu hỏi</th> 
                                                    </tr>
                                                    </thead> 
                                                    <tbody v-for="(item, index) in questionJson" :key="index">
                                                        <tr>
                                                            <th scope="row" style="width: 50px;">{{index+1}}</th> 
                                                            <td>{{item.TenCongViec}}</td> 
                                                            <td>{{item.TenCauHoi}}</td> 
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
                                <form class="" action="#">
                                    <div class="form-group">
						                <div class="table-responsive" style ="width:1000px">
                                            <table class="table table-striped mb-0">
                                                <thead>
                                                    <tr class="bg-primary" style="background-color: rgb(28, 129, 158) !important;">
                                                        <th>STT</th> 
                                                        <th>Hướng nghiên cứu</th> 
                                                        <th>Chủ đề nghiên cứu</th> 
                                                        <th>Dự án nghiên cứu</th> 
                                                    </tr>
                                                    </thead> 
                                                    <tbody v-for="(item, index) in researchJson" :key="index">
                                                        <tr>
                                                            <th scope="row" style="width: 50px;">{{index+1}}</th> 
                                                            <td>{{item.TenDinhHuong}}</td> 
                                                            <td>{{item.DuAnNghienCuu}}</td> 
                                                            <td>{{item.ChuDeNghienCuu}}</td>
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
                        <form class="" action="#">
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
                                    <button  class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width: 300px !important;background-color:transparent; boder:#000000; color: #000000;text-align: left;">
                                        Chọn các môn chuyên ngành
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Nhập môn lập trình</a>
                                        <a class="dropdown-item" href="#">Kỹ thuật lập trình</a>
                                        <a class="dropdown-item" href="#">Cơ sở dữ liệu</a>
                                        <a class="dropdown-item" href="#">Mạng máy tính</a>
                                        <a class="dropdown-item" href="#">Hệ thống máy tính</a>
                                        <a class="dropdown-item" href="#">Lập trình hướng đối tượng</a>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Các môn đại cương quan trọng</label>
                                <div class="dropdown mo-mb-2">
                                    <button  class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width: 300px !important; background-color:transparent; boder:#000000; color: #000000; text-align: left">
                                        Chọn các môn đại cương
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Xác suất thống kê</a>
                                        <a class="dropdown-item" href="#">Vi tích phân 1B</a>
                                        <a class="dropdown-item" href="#">Vi tích phân 2B</a>
                                        <a class="dropdown-item" href="#">Đại số tuyến tính</a>
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
                                    <button type="submit" class="btn btn-primary waves-effect waves-light"> Lưu </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'MajorDetail',
     watch: {
    '$route': function(to, from) {
        this.chuyenNganhId = this.$route.query.id;
     console.log(this.$route.query.id);
     this.getMajorById(this.chuyenNganhId);
     this.getJobByMajorId(this.chuyenNganhId);
     this.getMainAndGenaralSubjectsByMajorId(this.chuyenNganhId);
     this.GetQuestionsByMajorandJob(this.chuyenNganhId);
     this.GetResearchOrientationById(this.chuyenNganhId);
    }
  },
  methods: {
    getMajorById(id) {
            console.log(this.$route.query.id);
            let url = `https://localhost:44326/api/ChuyenNganh/${id}`;
            axios.get(url).then((response) => {
            this.majorJson = response.data; 
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
    },
    GetQuestionsByMajorandJob(major_id) {
            console.log(this.$route.query.id);
            let url = `https://localhost:44326/api/CauHoiHuongPhatTrien/${major_id}`;
            axios.get(url).then((response) => {
            this.questionJson = response.data; 
            });
    },
    GetResearchOrientationById(major_id) {
            console.log(this.$route.query.id);
            let url = `https://localhost:44326/api/DinhHuongNghienCuu/${major_id}`;
            axios.get(url).then((response) => {
            this.researchJson = response.data; 
            });
    },
  },
    data() {
        return {
            chuyenNganhId: "",
            majorJson: "",
            jobJson:"",
            subjectJson: "",
            questionJson: "",
            researchJson:"",
        }
    }
}
</script>

<style>

</style>