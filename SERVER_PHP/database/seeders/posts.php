<?php

namespace Database\Seeders;

use App\Helpers\SupportString;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class posts extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $posts = [
            [
                'topic_id'        => rand ( 1 , 5 ),
                'title'           => "Chỉ có 6 dự án bất động sản, còn lại là “dự án ma”",
                'excerpt'         => 'Đây là nội dung thông tin chính mà UBND thành phố Bảo Lộc vừa báo cáo UBND tỉnh Lâm Đồng trước phản ánh của báo chí: “Bảo Lộc loạn bánh vẽ bất động sản”, tình hình quảng cáo bán đất dự án và đất không phải là dự án để xây dựng nhà ở. ',
                'content'         => '<h2>Đây là nội dung thông tin </h2> <p>chính mà UBND thành phố Bảo Lộc vừa báo cáo UBND tỉnh Lâm Đồng trước phản ánh của báo chí: “Bảo Lộc loạn bánh vẽ bất động sản”, tình hình quảng cáo bán đất dự án và đất không phải là dự án để xây dựng nhà ở. </p>',
                'view'            => rand(100 , 400),
                'background'      => '/images/mongo/mongodb-la-gi-2.jpg',
                'created_at'      => date('Y-m-d H:i:s'),
                'updated_at'      => date('Y-m-d H:i:s')
            ],
            [
                'topic_id'        => rand ( 1 , 5 ),
                'title'           => "Lâm Đồng duyệt quy hoạch phân khu 2 khu vực rộng hơn 300ha tại TP. Đà Lạt",
                'excerpt'         => 'Đây là nội dung thông tin chính mà UBND thành phố Bảo Lộc vừa báo cáo UBND tỉnh Lâm Đồng trước phản ánh của báo chí: “Bảo Lộc loạn bánh vẽ bất động sản”, tình hình quảng cáo bán đất dự án và đất không phải là dự án để xây dựng nhà ở. ',
                'content'         => '<h2>Đây là nội dung thông tin </h2> <p>chính mà UBND thành phố Bảo Lộc vừa báo cáo UBND tỉnh Lâm Đồng trước phản ánh của báo chí: “Bảo Lộc loạn bánh vẽ bất động sản”, tình hình quảng cáo bán đất dự án và đất không phải là dự án để xây dựng nhà ở. </p>',
                'view'            => rand(100 , 400),
                'background'      => '/images/mongo/mongodb-la-gi-2.jpg',
                'created_at'      => date('Y-m-d H:i:s'),
                'updated_at'      => date('Y-m-d H:i:s')
            ],
            [
                'topic_id'        => rand ( 1 , 5 ),
                'title'           => "Crystal Bay tài trợ lập quy hoạch dự án Khu du lịch hồ Prenn Đà Lạt",
                'excerpt'         => 'Đây là nội dung thông tin chính mà UBND thành phố Bảo Lộc vừa báo cáo UBND tỉnh Lâm Đồng trước phản ánh của báo chí: “Bảo Lộc loạn bánh vẽ bất động sản”, tình hình quảng cáo bán đất dự án và đất không phải là dự án để xây dựng nhà ở. ',
                'content'         => '<h2>Đây là nội dung thông tin </h2> <p>chính mà UBND thành phố Bảo Lộc vừa báo cáo UBND tỉnh Lâm Đồng trước phản ánh của báo chí: “Bảo Lộc loạn bánh vẽ bất động sản”, tình hình quảng cáo bán đất dự án và đất không phải là dự án để xây dựng nhà ở. </p>',
                'view'            => rand(100 , 400),
                'background'      => '/images/mongo/mongodb-la-gi-2.jpg',
                'created_at'      => date('Y-m-d H:i:s'),
                'updated_at'      => date('Y-m-d H:i:s')
            ],
            [
                'topic_id'        => rand ( 1 , 5 ),
                'title'           => "Loạt ông lớn ồ ạt đổ bộ, tương lai bất động sản Lâm Đồng về đâu?",
                'excerpt'         => 'Đây là nội dung thông tin chính mà UBND thành phố Bảo Lộc vừa báo cáo UBND tỉnh Lâm Đồng trước phản ánh của báo chí: “Bảo Lộc loạn bánh vẽ bất động sản”, tình hình quảng cáo bán đất dự án và đất không phải là dự án để xây dựng nhà ở. ',
                'content'         => '<h2>Đây là nội dung thông tin </h2> <p>chính mà UBND thành phố Bảo Lộc vừa báo cáo UBND tỉnh Lâm Đồng trước phản ánh của báo chí: “Bảo Lộc loạn bánh vẽ bất động sản”, tình hình quảng cáo bán đất dự án và đất không phải là dự án để xây dựng nhà ở. </p>',
                'view'            => rand(100 , 400),
                'background'      => '/images/mongo/mongodb-la-gi-2.jpg',
                'created_at'      => date('Y-m-d H:i:s'),
                'updated_at'      => date('Y-m-d H:i:s')
            ],
            [
                'topic_id'        => rand ( 1 , 5 ),
                'title'           => "Bất động sản nghỉ dưỡng Tây Nguyên \"nóng sốt\": Có nên đầu tư?",
                'excerpt'         => 'Đây là nội dung thông tin chính mà UBND thành phố Bảo Lộc vừa báo cáo UBND tỉnh Lâm Đồng trước phản ánh của báo chí: “Bảo Lộc loạn bánh vẽ bất động sản”, tình hình quảng cáo bán đất dự án và đất không phải là dự án để xây dựng nhà ở. ',
                'content'         => '<h2>Đây là nội dung thông tin </h2> <p>chính mà UBND thành phố Bảo Lộc vừa báo cáo UBND tỉnh Lâm Đồng trước phản ánh của báo chí: “Bảo Lộc loạn bánh vẽ bất động sản”, tình hình quảng cáo bán đất dự án và đất không phải là dự án để xây dựng nhà ở. </p>',
                'view'            => rand(100 , 400),
                'background'      => '/images/mongo/mongodb-la-gi-2.jpg',
                'created_at'      => date('Y-m-d H:i:s'),
                'updated_at'      => date('Y-m-d H:i:s')
            ],
        ];
        $inserts = [];
        foreach ($posts as $key => $post) {

            
            $post['slug'] = SupportString::createSlug($post['title']);
            $post['site_name'] = $post['title'];
            $post['description_seo'] = 'description_seo ' . $post['title'];

            $inserts[] = $post;
        }
        DB::table('posts')->insert( $inserts );
    }
}
