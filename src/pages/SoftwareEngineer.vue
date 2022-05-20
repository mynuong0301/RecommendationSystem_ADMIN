<template>
    <div class="content-page">
        <!-- Start content -->
        <div class="content">       
            <div class="row mb-3">
                <p></p>
                <div class="col-lg-12">
                    <div class="btn-toolbar float-lg-right form-group mb-0" role="toolbar">
                        <div class="">
                            <a href="/#/ImportFile" style="background-color: #FFBE00; border-color: #FFBE00" class="btn btn-info waves-effect waves-light  m-r-5" role="button" data-toggle="modal" data-target="#importExcelFile"><i class="fas fa-plus"></i> <i></i> <span>Chỉnh sửa</span> </a>
                            <a href="/#/AddQuestion" style="background-color: #FFBE00; border-color: #FFBE00" class="btn btn-info waves-effect waves-light  m-r-5" role="button" data-toggle="modal" data-target="#addMajorModal"><i class="fas fa-plus"></i> <i></i> <span>Thêm chuyên ngành</span> </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-12">
                    <h1>Chuyên ngành Kỹ thuật phần mềm </h1>
            </div>

            <div class="row mb-3">
                <p></p>
                <div class="col-lg-2">
                    <label> Lĩnh vực nghiên cứu</label>
                </div>
                <div class="col-lg-10">
                    <label> Các phương pháp cao cấp trong thiết kế phần mềm, Lập trình hướng đối tượng với UML, GIS, phần mềm hỗ trợ giảng dạy, mã hóa và ứng dụng</label>
                </div>
            </div>
        <div>   
        <b-card no-body>
            <b-tabs card>
                <div class="row mb-3">
                    <div class="col-lg-3">
                        <b-tab title="Công việc và hướng phát triển" active>
                            <b-card-text>
                                <form class="" action="#">
                                <div class="form-group">
						            <div class="table-responsive">
						                <table class="table align-middle mb-0">
							                <thead class="table-light">
							                    <tr style="text-align: center">
                                                    <th>Chuyên ngành</th>
                                                    <th>Mức độ phù hợp</th>
                                                </tr>
                                            </thead>
                                            <tbody style="text-align: center"><tr>
                                                <td>Hệ thống thông tin</td>
                                                <td style="color: #fd0808">87%</td>
                                            </tr>
                                            <tr>
                                                <td>Công nghệ phần mềm</td>
                                                <td>65%</td>
                                            </tr>
                                            <tr>
                                                <td>Khoa học máy tính</td>
                                                <td>42%</td>
                                            </tr>
                                            <tr>
                                                <td>Mạng máy tính và viễn thông</td>
                                                <td>33%</td>
                                            </tr>
                                            <tr>
                                                <td>Công nghệ tri thức</td>
                                                <td>28%</td>
                                            </tr>
                                            <tr>
                                                <td>Thị giác máy tính</td>
                                                <td>12%</td>
                                            </tr>
						                    </tbody>
						                </table>
						            </div>
						        </div>                           
                                </form>
                            </b-card-text>
                        </b-tab>
                    </div>
                    <div class="col-lg-3">
                        <b-tab title="Các học phần">
                            <b-card-text>
                                <form action="#">
                                    <div class="form-group">
                                        <label>Nhập môn lập trình</label>
                                            <div>
                                                <input type="text" class="form-control" required="" placeholder="7.0">
                                            </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Kỹ thuật lập trình</label>
                                        <div>
                                            <input type="text" class="form-control" required="" placeholder="7.0">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Cấu trúc dữ liệu và giải thuật</label>
                                        <div>
                                            <input type="text" class="form-control" required="" placeholder="7.0">
                                        </div>
                                    </div>
                                        <div class="form-group">
                                            <label>Lập trình hướng đối tượng</label>
                                            <div>
                                                <input type="text" class="form-control" required="" placeholder="7.0">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Cơ sở dữ liệu</label>
                                            <div>
                                                <input type="text" class="form-control" required="" placeholder="7.0">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Mạng máy tính</label>
                                            <div>
                                                <input type="text" class="form-control" required="" placeholder="7.0">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Hệ điều hành</label>
                                            <div>
                                                <input type="text" class="form-control" required="" placeholder="7.0">
                                            </div>
                                        </div>
        
                                        <div class="form-group">
                                            <label>Kiến trúc máy tính</label>
                                            <div>
                                                <input type="text" class="form-control" required="" placeholder="7.0">
                                            </div> 
                                        </div>             
                                    </form> 
                                </b-card-text>
                            </b-tab>
                        </div>
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
                        <div class="col-lg-3">
                            <b-tab title="Bài đánh giá" active>
                                <b-card-text>
                                    <form class="" action="#">
                                    <div class="form-group">
						                <div class="table-responsive">
						                    <table class="table align-middle mb-0">
							                    <thead class="table-light">
							                        <tr style="text-align: center">
							                            <th>Chuyên ngành</th>
							                            <th>Mức độ phù hợp</th>
							                        </tr>
							                    </thead>
							                    <tbody style="text-align: center"><tr>
							                        <td>Hệ thống thông tin</td>
							                        <td style="color: #fd0808">87%</td>
							                    </tr>
                                                <tr>
                                                    <td>Công nghệ phần mềm</td>
                                                    <td>65%</td>
							                    </tr>
                                                <tr>
                                                    <td>Khoa học máy tính</td>
                                                    <td>42%</td>
                                                </tr>
                                                <tr>
                                                    <td>Mạng máy tính và viễn thông</td>
                                                    <td>33%</td>
                                                </tr>
                                                <tr>
                                                    <td>Công nghệ tri thức</td>
                                                    <td>28%</td>
                                                </tr>
                                                <tr>
                                                    <td>Thị giác máy tính</td>
                                                    <td>12%</td>
                                                </tr>
						                        </tbody>
						                    </table>
						                </div>
						            </div>                           
                                </form>
                            </b-card-text>
                        </b-tab>
                    </div>
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
export default {
    name: 'SoftwareEngineer',
    
}
</script>