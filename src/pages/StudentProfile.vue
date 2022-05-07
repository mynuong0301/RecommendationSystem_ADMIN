<template>
    <div class="content-page">
    <!-- Start content -->
        <div class="content">
            <div class="container-fluid">
                <div class="card-body">
                     
                   <div class="page-title-box">
                            <div class="row align-items-center">
                                <div class="col-sm-6">
                                    <h4 class="page-title">Hồ sơ sinh viên</h4>
                                </div>
                            </div> <!-- end row -->
                        </div>               
                    <div class="row mb-3">
                         <div class="col-lg-6">
                                                
                            <form role="search" class="email-inbox">
                                <div class="form-group mb-0">
                                    <input style="width: 500px !important; font-size: 16px;height: 53px; padding-left: 53px;" type="text" class="form-control rounded" placeholder="Nhập vào mã số sinh viên muốn tìm kiếm..">
                                    <button style="top: 13px; left: 10px; font-size: 18px" type="submit"><i class="fa fa-search"></i></button>
                                 </div>
                            </form>
                        </div>   
                      </div>
                <div class="table-responsive">
                    <table class="table table-striped mb-0">
                        <thead>
                            <tr class="bg-primary" style="background-color: #1C819E !important;text-align: center">
                                <th>#</th>
                                <th>MSSV</th>
                                <th>Điểm trung bình</th>
                                <th>Định hướng nghề nghiệp</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>                   
                     <tbody v-for="(item) in pageOfItems" :key="item.id" style="text-align: center">
                        <tr>
                            <th scope="row" style="width: 50px">{{item.id}}</th>
                            <td>18120605</td>
                            <td>8.0</td>
                            <td>Business Analyst</td>           
                            <td>
                                <div class="btn-toolbar form-group mb-0" style="justify-content: center !important;">
                                    <div class="" style="text-align: center;">
                                        <a style="text-align: center;" href="update-product.html" role="button" class="btn btn-success waves-effect waves-light m-r-5" data-toggle="modal" data-target="#viewStudentInfoModal"><i class="mdi mdi-eye-outline" style="text-align: center;"></i></a>
                                    </div>
                                </div>
                            </td>                                 
                        </tr>
                    </tbody> 
           
                </table>
                
                   <div class="card-footer pb-0 pt-3 " style="text-align: end; background-color: transparent;">
                       <div>
                       <label>50 kết quả</label>
                       </div>
                        <jw-pagination :items="exampleItems" @changePage="onChangePage" :labels="customLabels"></jw-pagination>
                    </div>                                            
            </div>
        </div>

                <!-- modal -->
                <div id="viewStudentInfoModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                    <div class="modal-dialog modal-dialog-centered" style="max-width: 986px !important;">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title mt-0" id="myModalLabel">Thông tin chi tiết</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="card-body">
                                  <div class="row">
                            <div class="col-lg-4">
                                <h4>Thông tin chung</h4>
                                <div class="card m-b-30">
                                    <div class="card-body">
                                        <form class="" action="#">
                                            <div class="form-group">
                                                <label>Mã số sinh viên</label>
                                                <input type="text" class="form-control" required="" placeholder="18120605">
                                            </div>
        
                                            <div class="form-group">
                                                <label>Họ và tên</label>
                                                <div>
                                                    <input type="text" id="pass2" class="form-control" required="" placeholder="Hoàng Thị Thùy Trang">
                                                </div>
                                            </div>
        
                                            <div class="form-group">
                                                <label>Điểm trung bình</label>
                                                <div>
                                                    <input type="text" class="form-control" required="" placeholder="8.0">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Định hướng nghề nghiệp</label>
                                                <div>
                                                    <input type="text" class="form-control" required="" placeholder="Business Analyst">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Kết quả bài đánh giá</label>
                                                <div>
                                                    <input type="text" class="form-control" required="" placeholder="Hệ thống thông tin - 80%">
                                                    <input type="text" class="form-control" required="" placeholder="Kỹ thuật phần mềm - 72%">
                                                    <input type="text" class="form-control" required="" placeholder="Khoa học máy tính - 61%">
                                                    <input type="text" class="form-control" required="" placeholder="Thị giác máy tính - 43%">
                                                    <input type="text" class="form-control" required="" placeholder="Công nghệ tri thức - 19%">
                                                    <input type="text" class="form-control" required="" placeholder="Mạng máy tính và viễn thông - 17%">
                                                </div>
                                            </div>                                
                                        </form>
        
                                    </div>
                                </div>
                            </div> <!-- end col -->
        
                            <div class="col-lg-4">
                                <h4>Điểm các môn cơ sở ngành</h4>
                                <div class="card m-b-30">
                                    <div class="card-body">
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
                                    </div>
                                </div>
                            </div> <!-- end col -->
                            <div class="col-lg-4">
                                 <h4>Điểm các môn toán</h4>
                                <div class="card m-b-30">
                                   
                                    <div class="card-body">
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
                                    </div>
                                </div>
                            </div>
                        </div>    
                                <p></p>
                                </div>
                            </div>
                            <!-- <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Hủy</button>
                                        <button type="button" class="btn btn-primary waves-effect waves-light">Xác nhận</button>
                                </div> -->
                        </div><!-- /.modal-content -->
                    </div>
                </div>
                </div>
        </div>
    </div>
</template>

<script>
const exampleItems = [...Array(50).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
const customLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
};
export default {
    name: 'StudentProfile',
    data() {
        return {
           exampleItems,
            pageOfItems: [],
            customLabels
        };
    },
    methods: {
        onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
            console.log(this.pageOfItems);
        }
    }
    
}
</script>