<?php

namespace Database\Seeders;

use App\Helpers\SupportString;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class workprocess extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('workprocess')->insert(
            [
                [
                    'title'        => 'Khách hàng gửi yêu cầu',
                    'excerpt_text' => 'Khi bạn gửi yêu cầu cho chúng tôi, chúng tôi sẽ phân tích và phản hồi góp ý nếu có. Trao đổi chốt chức năng, chốt thời gian hoàn thiện.',
                    'type'         => 1,
                    'created_at'   => date('Y-m-d H:i:s'),
                    'updated_at'   => date('Y-m-d H:i:s')
                ],
                [
                    'title'        => 'Khách hàng đặt cọc',
                    'excerpt_text' => 'Sau khi chốt các chức năng và giao diện, khách hàng sẽ bắt đầu đặt cọc để có thể bắt đầu tiến hành xây dựng website',
                    'type'         => 1,
                    'created_at'   => date('Y-m-d H:i:s'),
                    'updated_at'   => date('Y-m-d H:i:s')
                ],
                [
                    'title'        => 'Kỹ sư phần mềm tiến hành xây dựng web',
                    'excerpt_text' => 'Kỹ sư sẽ xây dựng website theo yêu cầu đã được chốt. Đồng thời cập nhật tiến độ liên tục để khách hàng có thể theo dõi được.',
                    'type'         => 1,
                    'created_at'   => date('Y-m-d H:i:s'),
                    'updated_at'   => date('Y-m-d H:i:s')
                ],
                [
                    'title'        => 'Bàn giao',
                    'excerpt_text' => 'Hướng dẫn cách sử dụng website nếu có. Thanh toán các khoản phí từ các thoả thuận trước đó đề ra.',
                    'type'         => 1,
                    'created_at'   => date('Y-m-d H:i:s'),
                    'updated_at'   => date('Y-m-d H:i:s')
                ],
                [
                    'title'        => 'Hộ trợ các vấn đề của khách hàng',
                    'excerpt_text' => 'Khách hàng đôi lúc sẽ gặp nhiều vấn đề cần có sự giúp đỡ. Chúng tôi là đơn vị thiết kế website uy tín và chúng tôi luôn sẵn lòng giúp đỡ khách hàng trong các vấn đề gặp phải trở ngại.',
                    'type'         => 1,
                    'created_at'   => date('Y-m-d H:i:s'),
                    'updated_at'   => date('Y-m-d H:i:s')
                ],
            ]
        );
    }
}
