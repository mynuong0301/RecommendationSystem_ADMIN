<template>
<!-- ============================================================== -->
<!-- Start right Content here -->
<!-- ============================================================== -->
<div class="content-page">
    <!-- Start content -->
    <div class="content">
        
        <div class="container-fluid">
            <!-- end page-title -->
            
           
           <!-- <div class="button-items">
                <button type="button" class="btn btn-outline-primary waves-effect waves-light">Lọc</button>
                <li class="d-none d-md-inline-block">
                    <form role="search" class="app-search">
                        <div class="form-group mb-0">
                            <input type="text" class="form-control" placeholder="Tìm kiếm..">
                            <button type="submit"><i class="fa fa-search"></i></button>
                        </div>
                    </form>
                </li>
                <button type="button" class="btn btn-primary waves-effect waves-light">Tải tập tin Excel</button>
                <button type="button" class="btn btn-primary waves-effect waves-light">Thêm câu hỏi </button>
                -->
                <div class="card-body">
                     
                   <div class="page-title-box">
                            <div class="row align-items-center">
                                <div class="col-sm-6">
                                    <h4 class="page-title">Bài đánh giá</h4>
                                </div>
                            </div> <!-- end row -->
                        </div>               
                    <div class="row mb-3">
                         <div class="col-lg-4">
                                                
                            <form role="search" class="email-inbox">
                                <div class="form-group mb-0">
                                    <input type="text" class="form-control rounded" placeholder="Nhập câu hỏi bạn muốn tìm kiếm..">
                                    <button type="submit"><i class="fa fa-search"></i></button>
                                 </div>
                            </form>
                        </div>

                        <div class="col-lg-2 m-r-1">
                             <div class="dropdown mo-mb-2 ">
	                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width:220px; background-color: #005874; border-color: #005874"> Chọn chuyên ngành </button>
	                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 34px, 0px);"> 
                        <a class="dropdown-item" href="#">Kỹ thuật phần mềm</a>
                        <a class="dropdown-item" href="#">Hệ thống thông tin</a> 
                        <a class="dropdown-item" href="#">Khoa học máy tính</a> 
                        <a class="dropdown-item" href="#">Công nghệ tri thức</a> 
                        <a class="dropdown-item" href="#">Thị giác máy tính </a> 
                        <a class="dropdown-item" href="#">Mạng máy tính và viễn thông </a> 
                    </div>
                </div>
                        </div>

                        <div class="col-lg-2">
                            <div class="dropdown mo-mb-2">
	                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width:220px; background-color: #005874; border-color: #005874"> Chọn hướng phát triển </button>
	                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 34px, 0px);"> 
                        <a class="dropdown-item" href="#">Developer</a> 
                        <a class="dropdown-item" href="#">Tester</a> 
                </div>
                        </div> </div>
    
                    <div class="col-lg-4">
                        <div class="btn-toolbar float-lg-right form-group mb-0" role="toolbar">
                            <div class="">
                                <a href="add-product.html" style="background-color: #FFBE00; border-color: #FFBE00" class="btn btn-info waves-effect waves-light  m-r-5" role="button"><i class="fas fa-plus"></i> <i></i> <span>Tải tập tin Excel</span> </a>
                                <a href="/#/AddQuestion" style="background-color: #FFBE00; border-color: #FFBE00" class="btn btn-info waves-effect waves-light  m-r-5" role="button" data-toggle="modal" data-target="#addQuestionModal"><i class="fas fa-plus"></i> <i></i> <span>Thêm câu hỏi</span> </a>
                                
                            </div>
                        </div>
                    </div>
    
                </div>
               

                


                <div class="table-responsive">
                    <table class="table table-striped mb-0">
                        <thead>
                            <tr class="bg-primary" style="background-color: #1C819E !important;">
                                <th>#</th>
                                <th>Chuyên ngành</th>
                                <th>Công việc/hướng phát triển</th>
                                <th>Câu hỏi</th>
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
                        <jw-pagination :items="exampleItems" @changePage="onChangePage" :labels="customLabels"></jw-pagination>
                    </div>

                <!-- modal -->
                <div id="alertDeleteModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title mt-0" id="myModalLabel">Xóa câu hỏi</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <h5 class="font-16">Bạn có chắc chắn muốn xóa câu hỏi này không?</h5>
                                <p></p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Hủy</button>
                                <button type="button" class="btn btn-primary waves-effect waves-light">Xác nhận</button>
                            </div>
                        </div><!-- /.modal-content -->
                    </div><!-- /.modal-dialog -->
                </div>
                                            
            </div>
        </div>

                <!-- modal -->
                <div id="addQuestionModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title mt-0" id="myModalLabel">Thêm câu hỏi</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="card-body">
	                                <form class="" action="#">
		                                <div class="form-group">
			                                <label>Chuyên ngành</label>
			                                <div class="dropdown mo-mb-2">
                                                <button  class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width: 300px !important;background-color:transparent; boder:#000000; color: #000000;text-align: left;">
                                                       Chọn chuyên ngành
                                                </button>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="#">Kỹ thuật phần mềm</a>
                                                    <a class="dropdown-item" href="#">Hệ thống thông tin</a>
                                                    <a class="dropdown-item" href="#">Khoa hoc máy tính</a>
                                                    <a class="dropdown-item" href="#">Công nghệ tri thức</a>
                                                    <a class="dropdown-item" href="#">Thị giác máy tính</a>
                                                    <a class="dropdown-item" href="#">Mạng máy tính và viễn thông</a>
                                                </div>
                                            </div>
		                                </div>
		                                <div class="form-group">
			                                <label>Công việc/hướng phát triển</label>
			                                <div class="dropdown mo-mb-2">
                                                <button  class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width: 300px !important; background-color:transparent; boder:#000000; color: #000000; text-align: left">
                                                    Chọn công việc/hướng phát triển
                                                </button>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="#">Developer</a>
                                                    <a class="dropdown-item" href="#">Tester</a>
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
                            <!-- <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Hủy</button>
                                        <button type="button" class="btn btn-primary waves-effect waves-light">Xác nhận</button>
                                </div> -->
                        </div><!-- /.modal-content -->
                    </div><!-- /.modal-dialog -->
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
    name: 'TestManger',
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





