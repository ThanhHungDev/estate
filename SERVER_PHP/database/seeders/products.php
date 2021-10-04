<?php

namespace Database\Seeders;

use App\Helpers\SupportString;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;

class products extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $products = [
            [
                'title' => 'Nhà mới xây tp.Bảo lộc',
                'location' => 'Phan đình phùng, Tp.Bảo Lộc ',
                'price-memo' => 'Giá chỉ từ 2.4 tỷ',
                'bed-room' => 3,
                'wc' => 2,
                'tho-cu' => 1,
                'long' => 21, 
                'lat' => 5,
                'direction' => 'nam',
                'short-intro' => '
                Nhà hướng nam, 
                                Diện tích mặt tiền 5 mét, 
                                chiều dài 21 mét. 
                                3 phòng ngủ , 2 WC, phòng bếp, phòng khách , phòng thờ , sân rộng , cửa cuốn, giếng khoan, và nhiều tiện ích khác.
                                Đã có giấy phép xây dựng <i class="text-color-red">Hoàn công</i>
                ',
                'image' => '/img/nha-moi-xay-2ty4.png'
            ],
            [
                'title' => 'Nhà mới xây 4 phòng ngủ 3 tỷ 8',
                'location' => 'Phan đình phùng, Tp.Bảo Lộc ',
                'price-memo' => 'Giá 3.8 tỷ',
                'bed-room' => 4,
                'wc' => 2,
                'tho-cu' => 1,
                'long' => 20.5,
                'lat' => 5,
                'direction' => 'nam',
                'short-intro' => '
                Nhà hướng nam, 
                                Diện tích mặt tiền 5 mét, 
                                chiều dài 21 mét. 
                                3 phòng ngủ , 2 WC, phòng bếp, phòng khách , phòng thờ , sân rộng , cửa cuốn, giếng khoan, và nhiều tiện ích khác.
                                Đã có giấy phép xây dựng <i class="text-color-red">Hoàn công</i>
                ',
                'image' => '/img/ban-nha-moi-xay-mat-tien.jpeg'
            ],
            [
                'title' => 'bán nhà hẻm 368, Phan Đình Phùng, TP Bảo Lộc',
                'location' => 'Phan đình phùng, Tp.Bảo Lộc ',
                'price-memo' => 'Giá 2.8 tỷ',
                'bed-room' => 4,
                'wc' => 2,
                'tho-cu' => 1,
                'long' => 17,
                'lat' => 10,
                'direction' => 'nam',
                'short-intro' => '
                Nhà hướng nam, có chỗ đậu ô tô, sinh hoạt rộng, Đường ô tô rộng rãi, phòng ngủ , WC, phòng bếp, phòng khách , phòng thờ , sân rộng , cửa cuốn, giếng khoan, và nhiều tiện ích khác.
                                Đã có giấy phép xây dựng <i class="text-color-red">Hoàn công</i>
                ',
                'image' => '/img/ban-nha-moi-xay-mat-tien.jpeg'
            ],
            [
                'title' => 'bán đất hướng Đông Nam 2 mặt tiền TP Bảo Lộc',
                'location' => 'HẺM 402 , PHAN ĐÌNH PHÙNG, PHƯỜNG LỘC TIẾN, TP BẢO LỘC',
                'price-memo' => 'Giá 2.6 tỷ',
                'bed-room' => 0,
                'wc' => 0,
                'tho-cu' => 1,
                'long' => 21,
                'lat' => 7,
                'direction' => 'đông nam',
                'short-intro' => '
                Đất 2 mặt tiền, Hẻm rộng, 2 ô tô tránh nhau, khu dân cư văn minh.
                Đã full thổ cư
                ',
                'image' => '/dat/dat-mat-tien-tp-bao-loc.jpg'
            ],
            [
                'title' => 'bán 2 lô đất hướng Nam 2 mặt tiền TP Bảo Lộc',
                'location' => 'HẺM 402 , PHAN ĐÌNH PHÙNG, PHƯỜNG LỘC TIẾN, TP BẢO LỘC',
                'price-memo' => '2 lô giá 3 tỷ 1',
                'bed-room' => 0,
                'wc' => 0,
                'tho-cu' => 1,
                'long' => 22.5,
                'lat' => 10,
                'direction' => 'Nam',
                'short-intro' => '
                Đất 2 mặt tiền, Hẻm rộng.
                Đã full thổ cư. 1 lô giá 2 tỷ 6. Lô còn lại giá 1 tỷ 6. Mua 2 lô giá 3 tỷ 1
                ',
                'image' => '/dat/dat-nha-o.jpg'
            ]
        
        ];

        $inserts = [];
        foreach ($products as $key => $product) {
            $inserts[] = [
                'category_id'     => rand ( 1 , 6 ),
                'commune_id'      => rand ( 1 , 6 ),
                'user_id'         => Config::get("constant.ID_ADMIN"),
                'title'           => $product['title'],
                'slug'            => SupportString::createSlug($product['title']),
                'excerpt'         => 'excerpt ' . $product['location'] . $product['price-memo'] . $product['bed-room'] . $product['wc'] ,
                'content'         => 'content ' . $product['location'] . $product['price-memo'] . $product['bed-room'] . $product['wc'] . $product['direction'] . $product['short-intro'], 
                'price'           => '1.000.000.000',
                'area'            => rand ( 1 , 100 ) . "00",
                'commune_id'      => 24814,
                'description_seo' => 'description_seo ' . $product['title'],
                'view'            => rand(10 , 50),
                'background'      => $product['image'],
                'thumbnail'       => $product['image'],
                'created_at'      => date('Y-m-d H:i:s'),
                'updated_at'      => date('Y-m-d H:i:s')
            ];
        }
        DB::table('products')->insert($inserts);
    }
}
