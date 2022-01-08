<?php

namespace Database\Seeders;

use App\Helpers\SupportString;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;

class categories extends Seeder
{
    // https://cvt.vn/
    // đoạn js đọc data của page
    // function getMenus(id, begin){
    //     const $lisubmenu = $(`#${id} .subNodeMenu li`)
    //     let subs = ''
    //     for( var i = 0; i < $lisubmenu.length; i++ ){
    //         const title = $($lisubmenu[i]).find('a.subNodeLink--unread').text().trim()
    //         if( !title ) continue ;
    //         subs += `
    //                     [
    //                         'parent' => ${begin},
    //                         'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
    //                         'name' => "${title}",
    //                         'background' => '/images/categories/beauty.jpeg'
    //                     ],
    //         `
    //     }
    //     return subs;
    // }
    // function getListNode(){
    //     const $nodes = $('.block--category4 .block-body .node--forum');
    //     let node = '';
    //     // có sẵn 5 cái rồi nên ngồi dêtct từ cái số 4 ==> sub thì lấy từ cái số 6
    //     for( var i = 4; i < $nodes.length ; i++){
    //         const title = $($nodes[i]).find('.node-body .node-title a').text();
    //         if( title == 'Bất Động Sản' ) continue ;
    //         if( !title ) continue ;
    //         const $submenus = $($nodes[i]).find('.node-meta .node-subNodeMenu a.menuTrigger')
    //         $submenus.click()
    //         const submenus = $submenus.attr('aria-controls');
    //         const subs = getMenus(submenus, i + 2);
    //         node += `
    //                     [
    //                         'parent' => Config::get('constant.CATEGORY__PARENT'),
    //                         'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
    //                         'name' => "${title}",
    //                         'background' => '/images/categories/beauty.jpeg'
    //                     ],
    //                     ${subs}
                        
    //         `;
    //     }
    //     return node
    // }
    // console.log( getListNode() );
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
                [
                    'parent' => Config::get('constant.CATEGORY__PARENT'),
                    'verify' => Config::get('constant.CATEGORY__VERIFY.REQUIRED'),
                    'name' => "Bất Động Sản",
                    'background' => '/images/categories/topbds_vn.jpeg'
                ],
                [
                    'parent' => 1,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.REQUIRED'),
                    'name' => "Căn hộ chung cư",
                    'background' => '/images/categories/can-ho-chung-cu.jpeg'
                ],
                [
                    'parent' => 1,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.REQUIRED'),
                    'name' => "Nhà riêng",
                    'background' => '/images/categories/nha-rieng.jpeg'
                ],
                [
                    'parent' => 1,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.REQUIRED'),
                    'name' => "Nhà biệt thự, liền kề",
                    'background' => '/images/categories/biet-thu.jpeg'
                ],
                [
                    'parent' => 1,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.REQUIRED'),
                    'name' => "Nhà mặt phố",
                    'background' => '/images/categories/nha-pho.jpeg'
                ],
                [
                    'parent' => 1,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.REQUIRED'),
                    'name' => "Đất nền dự án",
                    'background' => '/images/categories/dat-nen-phan-lo.jpeg'
                ],
                [
                    'parent' => 1,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.REQUIRED'),
                    'name' => "Bán đất",
                    'background' => '/images/categories/ban-dat.jpeg'
                ],
                [
                    'parent' => 1,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.REQUIRED'),
                    'name' => "Trang trại, khu nghỉ dưỡng",
                    'background' => '/images/categories/trai.jpeg'
                ],
                [
                    'parent' => 1,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.REQUIRED'),
                    'name' => "Kho, nhà xưởng",
                    'background' => '/images/categories/kho-xuong.jpeg'
                ],
                [
                    'parent' => 1,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.REQUIRED'),
                    'name' => "Phòng trọ",
                    'background' => '/images/categories/phong-tro.jpeg'
                ],
                [ 
                    'parent' => 1,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.REQUIRED'),
                    'name' => "Văn Phòng",
                    'background' => '/images/categories/van-phong.jpeg'
                ],
                [
                    'parent' => 1,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.REQUIRED'),
                    'name' => "Mặt bằng kinh doanh",
                    'background' => '/images/categories/mat-bang-kinh-doanh-mat-tien.jpeg'
                ],
                [
                    'parent' => 1,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.REQUIRED'),
                    'name' => "Bất động sản khác",
                    'background' => '/images/categories/bat-dong-san-khac.jpeg'
                ],
                [
                    'parent' => Config::get('constant.CATEGORY__PARENT'),
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Review - Phê bình",
                    'background' => '/images/categories/review.jpeg'
                ],
                [
                    'parent' => 2,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Review - Phê bình món ăn",
                    'background' => '/images/categories/review-food.jpeg'
                ],
                [
                    'parent' => 2,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Review - Phê bình khách sạn",
                    'background' => '/images/categories/review-hotel.jpeg'
                ],
                [
                    'parent' => Config::get('constant.CATEGORY__PARENT'),
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Thời Trang - Phụ Kiện",
                    'background' => '/images/categories/fashion.jpeg'
                ],
                [
                    'parent' => 3,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Thời trang nam",
                    'background' => '/images/categories/fas-male.jpeg'
                ],
                [
                    'parent' => 3,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Thời trang nữ",
                    'background' => '/images/categories/fas-female.jpeg'
                ],
                [
                    'parent' => 3,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Thời trang mẹ và bé",
                    'background' => '/images/categories/me-be.jpeg'
                ],
                [
                    'parent' => 3,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Phụ kiện thời trang",
                    'background' => '/images/categories/phu-kien-thoi-trang.jpeg'
                ],

                [
                    'parent' => Config::get('constant.CATEGORY__PARENT'),
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Điện Thoại - Linh Kiện",
                    'background' => '/images/categories/dt-linh-kien.jpeg'
                ],
                [
                    'parent' => 4,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Iphone",
                    'background' => '/images/categories/iphone.jpeg'
                ],
                [
                    'parent' => 4,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Android",
                    'background' => '/images/categories/android.jpeg'
                ],
                [
                    'parent' => 4,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Điện Thoại Phổ Thông",
                    'background' => '/images/categories/dt-pho-thong.jpeg'
                ],
                [
                    'parent' => 4,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Linh kiện điện thoại",
                    'background' => '/images/categories/linh-kien-dien-thoai.jpeg'
                ],

                [
                    'parent' => Config::get('constant.CATEGORY__PARENT'),
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Làm Đẹp",
                    'background' => '/images/categories/beauty.jpeg'
                ],
                [
                    'parent' => 5,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Mỹ phẩm",
                    'background' => '/images/categories/my-pham.jpeg'
                ],
                [
                    'parent' => 5,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Spa",
                    'background' => '/images/categories/spa.jpeg'
                ],
                [
                    'parent' => 5,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Nước Hoa",
                    'background' => '/images/categories/nuoc-hoa.jpeg'
                ],
                [
                    'parent' => 5,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Massage",
                    'background' => '/images/categories/massage.jpeg'
                ],

                











                ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                
                
                [
                    'parent' => Config::get('constant.CATEGORY__PARENT'),
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Máy Tính - Laptop - Phụ Kiện",
                    'background' => '/images/categories/may-tinh-laptop-phu-kien.jpeg'
                ],
                
                [
                    'parent' => 6,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Máy Tính",
                    'background' => '/images/categories/may-tinh.jpeg'
                ],
    
                [
                    'parent' => 6,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Laptop",
                    'background' => '/images/categories/laptop.jpeg'
                ],
    
                [
                    'parent' => 6,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Phụ Kiện",
                    'background' => '/images/categories/phu-kien-lap-top.jpeg'
                ],
    
                
    
                [
                    'parent' => Config::get('constant.CATEGORY__PARENT'),
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Điện Tử - Thiết Bị Số",
                    'background' => '/images/categories/dien-tu-thiet-bi-so.jpeg'
                ],
                
                [
                    'parent' => 7,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Đồ Điện Tử",
                    'background' => '/images/categories/do-dien-tu.jpeg'
                ],
    
                [
                    'parent' => 7,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Thiết Bị Số",
                    'background' => '/images/categories/thiet-bi-so.jpeg'
                ],
    
                [
                    'parent' => 7,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Linh Kiện",
                    'background' => '/images/categories/linh-kien-dien-tu.jpeg'
                ],
    
                
    
                [
                    'parent' => Config::get('constant.CATEGORY__PARENT'),
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Điện Máy",
                    'background' => '/images/categories/dien-may.jpeg'
                ],
    
                [
                    'parent' => 8,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Điện Gia Dụng",
                    'background' => '/images/categories/dien-gia-dung.jpeg'
                ],
    
                [
                    'parent' => 8,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Điện Lạnh",
                    'background' => '/images/categories/dien-lanh.jpeg'
                ],
    
                [
                    'parent' => 8,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Sửa Chữa - Thi Công",
                    'background' => '/images/categories/sua-chua-thi-cong-dien-may.jpeg'
                ],
    
                
    
                [
                    'parent' => Config::get('constant.CATEGORY__PARENT'),
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Xe Cộ",
                    'background' => '/images/categories/xe-co.jpeg'
                ],
                
                [
                    'parent' => 9,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Xe 2 Bánh",
                    'background' => '/images/categories/xe-may-2-banh.jpeg'
                ],
    
                [
                    'parent' => 9,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Xe 4 Bánh",
                    'background' => '/images/categories/oto.jpeg'
                ],
    
                [
                    'parent' => 9,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Cho Thuê",
                    'background' => '/images/categories/cho-thue-oto.jpeg'
                ],
    
                [
                    'parent' => 9,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Phụ Tùng - Dịch Vụ",
                    'background' => '/images/categories/phu-tung.jpeg'
                ],
    
                [
                    'parent' => 9,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Thảo Luận",
                    'background' => '/images/categories/hoi-thao.jpeg'
                ],
    
                
    
                [
                    'parent' => Config::get('constant.CATEGORY__PARENT'),
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Phong Thủy - Đồ Cổ - Cây Cảnh - Thú Nuôi",
                    'background' => '/images/categories/phong-thuy-do-co.jpeg'
                ],
                
                [
                    'parent' => 10,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Thú Nuôi",
                    'background' => '/images/categories/thu-nuoi.jpeg'
                ],
    
                [
                    'parent' => 10,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Đồ Phong Thủy",
                    'background' => '/images/categories/do-phong-thuy.jpeg'
                ],
    
                [
                    'parent' => 10,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Cây cảnh",
                    'background' => '/images/categories/van-nien-thanh.jpeg'
                ],
    
                [
                    'parent' => Config::get('constant.CATEGORY__PARENT'),
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Tuyển Dụng - Tìm Việc",
                    'background' => '/images/categories/thuyen-dung-tìm-viẹc.jpeg'
                ],
                
                [
                    'parent' => 11,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Tuyển Dụng",
                    'background' => '/images/categories/tuyen-dung.jpeg'
                ],
    
                [
                    'parent' => 11,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Tìm Việc",
                    'background' => '/images/categories/tim-viec.jpeg'
                ],
                
    
                [
                    'parent' => Config::get('constant.CATEGORY__PARENT'),
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Thanh Lý - Ve Chai - Tạp Hóa",
                    'background' => '/images/categories/thanh-ly-ve-chai-tap-hoa.jpeg'
                ],
                
                [
                    'parent' => 12,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Thanh Lý",
                    'background' => '/images/categories/thanh-ly.jpeg'
                ],
    
                [
                    'parent' => 12,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Ve chai",
                    'background' => '/images/categories/ve-chai.jpeg'
                ],
    
                [
                    'parent' => 12,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Tạp Hóa",
                    'background' => '/images/categories/tap-hoa.jpeg'
                ],
    
                
    
                [
                    'parent' => Config::get('constant.CATEGORY__PARENT'),
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Nội Thất - Ngoại Thất",
                    'background' => '/images/categories/noi-that-ngoai-that.jpeg'
                ],
                
                [
                    'parent' => 13,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Nội Thất",
                    'background' => '/images/categories/noi-that.jpeg'
                ],
    
                [
                    'parent' => 13,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Ngoại Thất",
                    'background' => '/images/categories/ngoai-that.jpeg'
                ],
    
                [
                    'parent' => 13,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Thi Công",
                    'background' => '/images/categories/thi-cong-nha.jpeg'
                ],
    
                
    
                [
                    'parent' => Config::get('constant.CATEGORY__PARENT'),
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Du Lịch - Ẩm Thực",
                    'background' => '/images/categories/du-lich-am-thuc.jpeg'
                ],
                
                [
                    'parent' => 14,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Địa Điểm Du Lịch",
                    'background' => '/images/categories/dia-diem-du-lich.jpeg'
                ],
    
                [
                    'parent' => 14,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Địa Điểm Ăn Uống",
                    'background' => '/images/categories/dia-diem-an-uong.jpeg'
                ],
    
                
    
                [
                    'parent' => Config::get('constant.CATEGORY__PARENT'),
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Chợ Game",
                    'background' => '/images/categories/cho-game.jpeg'
                ],
                
                [
                    'parent' => 15,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Mua Bán Thiết Bị",
                    'background' => '/images/categories/thiet-bi-game-thu.jpeg'
                ],
    
                [
                    'parent' => 15,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Nạp Game",
                    'background' => '/images/categories/nap-game.jpeg'
                ],
    
                
    
                








    
                
    
                [
                    'parent' => Config::get('constant.CATEGORY__PARENT'),
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Dịch Vụ - Sửa Chửa - Cài Đặt",
                    'background' => '/images/categories/icon-dich-vu-sua-chua.jpeg'
                ],
                
                [
                    'parent' => 16,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Dịch Vụ",
                    'background' => '/images/categories/cham-soc-khach-hang.jpeg'
                ],
    
                [
                    'parent' => 16,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Sửa Chữa",
                    'background' => '/images/categories/thiet-bi-sua-chua.jpeg'
                ],
    
                [
                    'parent' => 16,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Cài Đặt",
                    'background' => '/images/categories/cai-dat.jpeg'
                ],
    
                
    
                [
                    'parent' => Config::get('constant.CATEGORY__PARENT'),
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Nông - Lâm - Thủy Sản",
                    'background' => '/images/categories/nong-lam-thuy-san.jpeg'
                ],
                
                [
                    'parent' => 17,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Nông Sản",
                    'background' => '/images/categories/nong-san.jpeg'
                ],
    
                [
                    'parent' => 17,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Lâm Sản",
                    'background' => '/images/categories/lam-san.jpeg'
                ],
    
                [
                    'parent' => 17,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Thủy Sản",
                    'background' => '/images/categories/thuy-san.jpeg'
                ],
    
                
    
                [
                    'parent' => Config::get('constant.CATEGORY__PARENT'),
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Đào Tạo - Khóa Học",
                    'background' => '/images/categories/dao-tao.jpeg'
                ],
                
                [
                    'parent' => 18,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Đào Tạo",
                    'background' => '/images/categories/training.jpeg'
                ],
    
                [
                    'parent' => 18,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Giáo Dục",
                    'background' => '/images/categories/giao-duc.jpeg'
                ],
    
                [
                    'parent' => 18,
                    'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                    'name' => "Khóa Học",
                    'background' => '/images/categories/khoa-hoc.jpeg'
                ],
    
                
    
                // [
                //     'parent' => Config::get('constant.CATEGORY__PARENT'),
                //     'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                //     'name' => "Tổ Chức Sự Kiện",
                //     'background' => '/images/categories/event.jpeg'
                // ],
                
                // [
                //     'parent' => 20,
                //     'verify' => Config::get('constant.CATEGORY__VERIFY.OPTIONAL'),
                //     'name' => "Đơn Vị Tổ Chức",
                //     'background' => '/images/categories/beauty.jpeg'
                // ],
    
                



                
            ];
        
        $inserts = [];
        /// lần chạy đầu chỉ chạy cho parrent thôi lần thứ 2 chạy cho child
        foreach( $categories as $key => $value ){
         
            $value['slug']       = SupportString::createSlug($value['name']);
            $value['thumbnail']  = $value['background'];
            $value['created_at'] = date('Y-m-d H:i:s');
            $value['updated_at'] = date('Y-m-d H:i:s');

            $inserts[] = $value;
        }
        // $reversed = array_reverse( $categories );
        $parents = array_filter($inserts, function($item){ return $item['parent'] == Config::get('constant.CATEGORY__PARENT'); });
        $childs = array_filter($inserts, function($item){ return $item['parent'] != Config::get('constant.CATEGORY__PARENT'); });
        DB::table('categories')->insert($parents);
        DB::table('categories')->insert($childs);
    }
}
