<?php

namespace Database\Seeders;

use App\Helpers\SupportString;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class reviews extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('reviews')->insert(
            [
                [
                    'avatar'     => '/images/avatar/avatar__bds-phuong.jpg',
                    'topic'      => 'Bán hàng chuyên nghiệp',
                    'excerpt'    => 'Kênh bán hàng mà Hùng Thịnh đã tạo cho tôi đã hộ trợ tôi rất nhiều trong việc bán hàng online. Ngoài ra 
                                            công ty còn hộ trợ tôi trong ý tưởng từ khi mới thành lập.                  ',
                    'author'     => 'Chị: <strong>Trần Thị Phương</strong> - chuyên gia bất động sản',
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s')
                ],
                [
                    'avatar'     => '/images/avatar/avatar__gv-thuy-trang.jpg',
                    'topic'      => 'Hỗ trợ hiệu quả',
                    'excerpt'    => 'Giao dịch và trao đổi tất cả qua internet. Khi làm việc tôi hoàn 
                                        toàn bị thuyết phục bởi Hùng Thịnh với cách làm việc chuyên nghiệp, chuyên môn nghiệp vụ rất tốt. ',
                    'author'     => 'Giáo viên - Giảng viên: <strong>Trương Thị Thuỳ trang</strong>',
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s')
                ],
                [
                    'avatar'     => '/images/avatar/avatar__english-tu.jpg',
                    'topic'      => 'Giao diện phong phú',
                    'excerpt'    => 'Với kho giao diện phong phú của Hùng Thịnh, tôi rất hài lòng và đã chọn cho mình 1 mẫu giao diện
                                        đem lại hiệu quả kinh doanh không tưởng. Tôi cũng rất hài lòng với nhân viên công ty',
                    'author'     => 'Chị: <strong>Hoàng Cẩm Tú</strong> chuyên viên trung tâm anh ngữ',
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s')
                ],
                [
                    'avatar'     => '/images/avatar/avatar__tung.jpg',
                    'topic'      => 'Chi phí hợp lý',
                    'excerpt'    => 'Với mức chi phí thấp nhưng mình vẫn được các bạn nhân viên tư vấn rất nhiệt tình.
                                        Thật tuyệt vời kể từ khi hợp tác với Hùng Thịnh. Mình đã có những lợi nhuận đáng kể từ website.',
                    'author'     => 'Anh: <strong>Phạm Tùng</strong> founder nhật ngữ',
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s')
                ],
            ]
        );
    }
}
