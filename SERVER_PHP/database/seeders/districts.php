<?php

namespace Database\Seeders;

use App\Helpers\SupportString;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class districts extends Seeder
{
    /**
     * Run the database seeds.
     * 'slug' => '([\u00BF-\u1FFF\u2C00-\uD7FF\w \\'-]+)',
     * 'slug' => SupportString::createSlug("$1"),
     *
     * @return void
     */
    public function run()
    {
        DB::table('districts')->insert(
            [
                [  'id' => 747, 'name' => 'Thành phố Vũng Tàu', 'slug' => SupportString::createSlug("Thành phố Vũng Tàu"), 'latitude' => '10.4113797', 'longitude' => '107.136224', 'type' => 'Thành phố', 'province_id' => 77 ],
                [  'id' => 748, 'name' => 'Thành phố Bà Rịa', 'slug' => SupportString::createSlug("Thành phố Bà Rịa"), 'latitude' => '10.508928', 'longitude' => '107.1816257', 'type' => 'Thành phố', 'province_id' => 77 ],
                [  'id' => 750, 'name' => 'Huyện Châu Đức', 'slug' => SupportString::createSlug("Huyện Châu Đức"), 'latitude' => '10.6284702', 'longitude' => '107.2429976', 'type' => 'Huyện', 'province_id' => 77 ],
                [  'id' => 751, 'name' => 'Huyện Xuyên Mộc', 'slug' => SupportString::createSlug("Huyện Xuyên Mộc"), 'latitude' => '10.6177683', 'longitude' => '107.4321959', 'type' => 'Huyện', 'province_id' => 77 ],
                [  'id' => 752, 'name' => 'Huyện Long Điền', 'slug' => SupportString::createSlug("Huyện Long Điền"), 'latitude' => '10.4449241', 'longitude' => '107.2311774', 'type' => 'Huyện', 'province_id' => 77 ],
                [  'id' => 753, 'name' => 'Huyện Đất Đỏ', 'slug' => SupportString::createSlug("Huyện Đất Đỏ"), 'latitude' => '10.4728035', 'longitude' => '107.3139304', 'type' => 'Huyện', 'province_id' => 77 ],
                [  'id' => 754, 'name' => 'Huyện Tân Thành', 'slug' => SupportString::createSlug("Huyện Tân Thành"), 'latitude' => '10.5640726', 'longitude' => '107.0595233', 'type' => 'Huyện', 'province_id' => 77 ],
                [  'id' => 755, 'name' => 'Huyện Côn Đảo', 'slug' => SupportString::createSlug("Huyện Côn Đảo"), 'latitude' => '8.7009282', 'longitude' => '106.6114474', 'type' => 'Huyện', 'province_id' => 77 ],
            ]
        );
    }
}