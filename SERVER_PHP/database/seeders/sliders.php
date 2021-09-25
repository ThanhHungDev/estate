<?php

namespace Database\Seeders;

use App\Helpers\SupportString;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class sliders extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sliders')->insert(
            [
                [
                    'src'        => '/img/slider/slider1.webp',
                    'alt'        => 'Uy tín minh bạch giấy tờ',
                    'topic'      => 'Uy tín minh bạch giấy tờ',
                    'excerpt'    => 'Chuyên tư vấn miễn phí về nhà đất, nhà ở, giấy phép, xây dựng, hoàn công, tranh chấp, lệ phí trước bạ nhà - đất, đáp ứng mọi quy mô bất động sản.',
                    'title'      => 'Thủ tục pháp lý rõ ràng minh bạch - uy tín dẫn đầu ở bảo lộc.',
                    'content'    => null,
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s')
                ],
                [
                    'src'        => '/img/slider/slider2.webp',
                    'alt'        => 'An tâm lựa chọn',
                    'topic'      => 'An tâm lựa chọn',
                    'excerpt'    => 'Khách hàng của Bất Động Sản Nhà Đất Bảo Lộc luôn được thành viên của công ty phục vụ bằng cái TÂM. Luôn thẳng thắn, chân thành để đem đến những giá trị tốt nhất cho Khách hàng của mình.',
                    'title'      => 'Đầu Tư phát triển dự án trên tinh thần khách hàng là chủ đạo.',
                    'content'    => null,
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s')
                ],
                [
                    'src'        => '/img/slider/slider3.webp',
                    'alt'        => 'Giá cả hợp lý',
                    'topic'      => 'Giá cả hợp lý',
                    'excerpt'    => 'Với một quy trình tư vấn chuyên nghiệp, chúng tôi Bất Động Sản nhà đất bảo lộc sẽ giúp khách hàng thẩm định và định giá được bất đông sản đáp ứng nhu cầu nhà ở của khách hàng nhanh nhất.',
                    'title'      => 'Giúp khách hàng có cái nhìn tổng quan và thẩm định được giá trị bất động sản',
                    'content'    => null,
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s')
                ],
            ]
        );
    }
}
