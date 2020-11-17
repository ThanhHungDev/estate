<?php

use App\Helpers\SupportString;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class provinces extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        DB::table('provinces')->insert(
            [
                [  'id' => 1, 'name' => 'Thành phố Hà Nội', 'slug' => SupportString::createSlug("Thành phố Hà Nội"), 'latitude' => '21.0277644', 'longitude' => '105.8341598', 'type' => 'Thành phố Trung ương' ],
                [  'id' => 2, 'name' => 'Tỉnh Hà Giang', 'slug' => SupportString::createSlug("Tỉnh Hà Giang"), 'latitude' => '22.7662056', 'longitude' => '104.9388853', 'type' => 'Tỉnh' ],
                [  'id' => 4, 'name' => 'Tỉnh Cao Bằng', 'slug' => SupportString::createSlug("Tỉnh Cao Bằng"), 'latitude' => '22.635689', 'longitude' => '106.2522143', 'type' => 'Tỉnh' ],
                [  'id' => 6, 'name' => 'Tỉnh Bắc Kạn', 'slug' => SupportString::createSlug("Tỉnh Bắc Kạn"), 'latitude' => '22.3032923', 'longitude' => '105.876004', 'type' => 'Tỉnh' ],
                [  'id' => 8, 'name' => 'Tỉnh Tuyên Quang', 'slug' => SupportString::createSlug("Tỉnh Tuyên Quang"), 'latitude' => '22.1726708', 'longitude' => '105.3131185', 'type' => 'Tỉnh' ],
                [  'id' => 10, 'name' => 'Tỉnh Lào Cai', 'slug' => SupportString::createSlug("Tỉnh Lào Cai"), 'latitude' => '22.3380865', 'longitude' => '104.1487055', 'type' => 'Tỉnh' ],
                [  'id' => 11, 'name' => 'Tỉnh Điện Biên', 'slug' => SupportString::createSlug("Tỉnh Điện Biên"), 'latitude' => '21.8042309', 'longitude' => '103.1076525', 'type' => 'Tỉnh' ],
                [  'id' => 12, 'name' => 'Tỉnh Lai Châu', 'slug' => SupportString::createSlug("Tỉnh Lai Châu"), 'latitude' => '22.3686613', 'longitude' => '103.3119085', 'type' => 'Tỉnh' ],
                [  'id' => 14, 'name' => 'Tỉnh Sơn La', 'slug' => SupportString::createSlug("Tỉnh Sơn La"), 'latitude' => '21.1022284', 'longitude' => '103.7289167', 'type' => 'Tỉnh' ],
                [  'id' => 15, 'name' => 'Tỉnh Yên Bái', 'slug' => SupportString::createSlug("Tỉnh Yên Bái"), 'latitude' => '21.6837923', 'longitude' => '104.4551361', 'type' => 'Tỉnh' ],
                [  'id' => 17, 'name' => 'Tỉnh Hoà Bình', 'slug' => SupportString::createSlug("Tỉnh Hoà Bình"), 'latitude' => '20.6861265', 'longitude' => '105.3131185', 'type' => 'Tỉnh' ],
                [  'id' => 19, 'name' => 'Tỉnh Thái Nguyên', 'slug' => SupportString::createSlug("Tỉnh Thái Nguyên"), 'latitude' => '21.5613771', 'longitude' => '105.876004', 'type' => 'Tỉnh' ],
                [  'id' => 20, 'name' => 'Tỉnh Lạng Sơn', 'slug' => SupportString::createSlug("Tỉnh Lạng Sơn"), 'latitude' => '21.8563705', 'longitude' => '106.6291304', 'type' => 'Tỉnh' ],
                [  'id' => 22, 'name' => 'Tỉnh Quảng Ninh', 'slug' => SupportString::createSlug("Tỉnh Quảng Ninh"), 'latitude' => '21.006382', 'longitude' => '107.2925144', 'type' => 'Tỉnh' ],
                [  'id' => 24, 'name' => 'Tỉnh Bắc Giang', 'slug' => SupportString::createSlug("Tỉnh Bắc Giang"), 'latitude' => '21.3014947', 'longitude' => '106.6291304', 'type' => 'Tỉnh' ],
                [  'id' => 25, 'name' => 'Tỉnh Phú Thọ', 'slug' => SupportString::createSlug("Tỉnh Phú Thọ"), 'latitude' => '21.268443', 'longitude' => '105.2045573', 'type' => 'Tỉnh' ],
                [  'id' => 26, 'name' => 'Tỉnh Vĩnh Phúc', 'slug' => SupportString::createSlug("Tỉnh Vĩnh Phúc"), 'latitude' => '21.3608805', 'longitude' => '105.5474373', 'type' => 'Tỉnh' ],
                [  'id' => 27, 'name' => 'Tỉnh Bắc Ninh', 'slug' => SupportString::createSlug("Tỉnh Bắc Ninh"), 'latitude' => '21.121444', 'longitude' => '106.1110501', 'type' => 'Tỉnh' ],
                [  'id' => 30, 'name' => 'Tỉnh Hải Dương', 'slug' => SupportString::createSlug("Tỉnh Hải Dương"), 'latitude' => '20.9385958', 'longitude' => '106.3206861', 'type' => 'Tỉnh' ],
                [  'id' => 31, 'name' => 'Thành phố Hải Phòng', 'slug' => SupportString::createSlug("Thành phố Hải Phòng"), 'latitude' => '20.8449115', 'longitude' => '106.6880841', 'type' => 'Thành phố Trung ương' ],
                [  'id' => 33, 'name' => 'Tỉnh Hưng Yên', 'slug' => SupportString::createSlug("Tỉnh Hưng Yên"), 'latitude' => '20.8525711', 'longitude' => '106.0169971', 'type' => 'Tỉnh' ],
                [  'id' => 34, 'name' => 'Tỉnh Thái Bình', 'slug' => SupportString::createSlug("Tỉnh Thái Bình"), 'latitude' => '20.5386936', 'longitude' => '106.3934777', 'type' => 'Tỉnh' ],
                [  'id' => 35, 'name' => 'Tỉnh Hà Nam', 'slug' => SupportString::createSlug("Tỉnh Hà Nam"), 'latitude' => '20.5835196', 'longitude' => '105.92299', 'type' => 'Tỉnh' ],
                [  'id' => 36, 'name' => 'Tỉnh Nam Định', 'slug' => SupportString::createSlug("Tỉnh Nam Định"), 'latitude' => '20.2791804', 'longitude' => '106.2051484', 'type' => 'Tỉnh' ],
                [  'id' => 37, 'name' => 'Tỉnh Ninh Bình', 'slug' => SupportString::createSlug("Tỉnh Ninh Bình"), 'latitude' => '20.2129969', 'longitude' => '105.92299', 'type' => 'Tỉnh' ],
                [  'id' => 38, 'name' => 'Tỉnh Thanh Hóa', 'slug' => SupportString::createSlug("Tỉnh Thanh Hóa"), 'latitude' => '20.1291279', 'longitude' => '105.3131185', 'type' => 'Tỉnh' ],
                [  'id' => 40, 'name' => 'Tỉnh Nghệ An', 'slug' => SupportString::createSlug("Tỉnh Nghệ An"), 'latitude' => '19.2342489', 'longitude' => '104.9200365', 'type' => 'Tỉnh' ],
                [  'id' => 42, 'name' => 'Tỉnh Hà Tĩnh', 'slug' => SupportString::createSlug("Tỉnh Hà Tĩnh"), 'latitude' => '18.2943776', 'longitude' => '105.6745247', 'type' => 'Tỉnh' ],
                [  'id' => 44, 'name' => 'Tỉnh Quảng Bình', 'slug' => SupportString::createSlug("Tỉnh Quảng Bình"), 'latitude' => '17.6102715', 'longitude' => '106.3487474', 'type' => 'Tỉnh' ],
                [  'id' => 45, 'name' => 'Tỉnh Quảng Trị', 'slug' => SupportString::createSlug("Tỉnh Quảng Trị"), 'latitude' => '16.7943472', 'longitude' => '106.963409', 'type' => 'Tỉnh' ],
                [  'id' => 46, 'name' => 'Tỉnh Thừa Thiên Huế', 'slug' => SupportString::createSlug("Tỉnh Thừa Thiên Huế"), 'latitude' => '16.467397', 'longitude' => '107.5905326', 'type' => 'Tỉnh' ],
                [  'id' => 48, 'name' => 'Thành phố Đà Nẵng', 'slug' => SupportString::createSlug("Thành phố Đà Nẵng"), 'latitude' => '16.0544068', 'longitude' => '108.2021667', 'type' => 'Thành phố Trung ương' ],
                [  'id' => 49, 'name' => 'Tỉnh Quảng Nam', 'slug' => SupportString::createSlug("Tỉnh Quảng Nam"), 'latitude' => '15.5393538', 'longitude' => '108.019102', 'type' => 'Tỉnh' ],
                [  'id' => 51, 'name' => 'Tỉnh Quảng Ngãi', 'slug' => SupportString::createSlug("Tỉnh Quảng Ngãi"), 'latitude' => '15.0759838', 'longitude' => '108.7125791', 'type' => 'Tỉnh' ],
                [  'id' => 52, 'name' => 'Tỉnh Bình Định', 'slug' => SupportString::createSlug("Tỉnh Bình Định"), 'latitude' => '14.1665324', 'longitude' => '108.902683', 'type' => 'Tỉnh' ],
                [  'id' => 54, 'name' => 'Tỉnh Phú Yên', 'slug' => SupportString::createSlug("Tỉnh Phú Yên"), 'latitude' => '13.0881861', 'longitude' => '109.0928764', 'type' => 'Tỉnh' ],
                [  'id' => 56, 'name' => 'Tỉnh Khánh Hòa', 'slug' => SupportString::createSlug("Tỉnh Khánh Hòa"), 'latitude' => '12.2585098', 'longitude' => '109.0526076', 'type' => 'Tỉnh' ],
                [  'id' => 58, 'name' => 'Tỉnh Ninh Thuận', 'slug' => SupportString::createSlug("Tỉnh Ninh Thuận"), 'latitude' => '11.6738767', 'longitude' => '108.8629572', 'type' => 'Tỉnh' ],
                [  'id' => 60, 'name' => 'Tỉnh Bình Thuận', 'slug' => SupportString::createSlug("Tỉnh Bình Thuận"), 'latitude' => '11.0903703', 'longitude' => '108.0720781', 'type' => 'Tỉnh' ],
                [  'id' => 62, 'name' => 'Tỉnh Kon Tum', 'slug' => SupportString::createSlug("Tỉnh Kon Tum"), 'latitude' => '14.661167', 'longitude' => '107.83885', 'type' => 'Tỉnh' ],
                [  'id' => 64, 'name' => 'Tỉnh Gia Lai', 'slug' => SupportString::createSlug("Tỉnh Gia Lai"), 'latitude' => '13.8078943', 'longitude' => '108.109375', 'type' => 'Tỉnh' ],
                [  'id' => 66, 'name' => 'Tỉnh Đắk Lắk', 'slug' => SupportString::createSlug("Tỉnh Đắk Lắk"), 'latitude' => '12.7100116', 'longitude' => '108.2377519', 'type' => 'Tỉnh' ],
                [  'id' => 67, 'name' => 'Tỉnh Đắk Nông', 'slug' => SupportString::createSlug("Tỉnh Đắk Nông"), 'latitude' => '12.2646476', 'longitude' => '107.609806', 'type' => 'Tỉnh' ],
                [  'id' => 68, 'name' => 'Tỉnh Lâm Đồng', 'slug' => SupportString::createSlug("Tỉnh Lâm Đồng"), 'latitude' => '11.5752791', 'longitude' => '108.1428669', 'type' => 'Tỉnh' ],
                [  'id' => 70, 'name' => 'Tỉnh Bình Phước', 'slug' => SupportString::createSlug("Tỉnh Bình Phước"), 'latitude' => '11.7511894', 'longitude' => '106.7234639', 'type' => 'Tỉnh' ],
                [  'id' => 72, 'name' => 'Tỉnh Tây Ninh', 'slug' => SupportString::createSlug("Tỉnh Tây Ninh"), 'latitude' => '11.3494766', 'longitude' => '106.0640179', 'type' => 'Tỉnh' ],
                [  'id' => 74, 'name' => 'Tỉnh Bình Dương', 'slug' => SupportString::createSlug("Tỉnh Bình Dương"), 'latitude' => '11.3254024', 'longitude' => '106.477017', 'type' => 'Tỉnh' ],
                [  'id' => 75, 'name' => 'Tỉnh Đồng Nai', 'slug' => SupportString::createSlug("Tỉnh Đồng Nai"), 'latitude' => '11.0686305', 'longitude' => '107.1675976', 'type' => 'Tỉnh' ],
                [  'id' => 77, 'name' => 'Tỉnh Bà Rịa - Vũng Tàu', 'slug' => SupportString::createSlug("Tỉnh Bà Rịa - Vũng Tàu"), 'latitude' => '10.5417397', 'longitude' => '107.2429976', 'type' => 'Tỉnh' ],
                [  'id' => 79, 'name' => 'Thành phố Hồ Chí Minh', 'slug' => SupportString::createSlug("Thành phố Hồ Chí Minh"), 'latitude' => '10.8230989', 'longitude' => '106.6296638', 'type' => 'Thành phố Trung ương' ],
                [  'id' => 80, 'name' => 'Tỉnh Long An', 'slug' => SupportString::createSlug("Tỉnh Long An"), 'latitude' => '10.695572', 'longitude' => '106.2431205', 'type' => 'Tỉnh' ],
                [  'id' => 82, 'name' => 'Tỉnh Tiền Giang', 'slug' => SupportString::createSlug("Tỉnh Tiền Giang"), 'latitude' => '10.4493324', 'longitude' => '106.3420504', 'type' => 'Tỉnh' ],
                [  'id' => 83, 'name' => 'Tỉnh Bến Tre', 'slug' => SupportString::createSlug("Tỉnh Bến Tre"), 'latitude' => '10.1081553', 'longitude' => '106.4405872', 'type' => 'Tỉnh' ],
                [  'id' => 84, 'name' => 'Tỉnh Trà Vinh', 'slug' => SupportString::createSlug("Tỉnh Trà Vinh"), 'latitude' => '9.812741', 'longitude' => '106.2992912', 'type' => 'Tỉnh' ],
                [  'id' => 86, 'name' => 'Tỉnh Vĩnh Long', 'slug' => SupportString::createSlug("Tỉnh Vĩnh Long"), 'latitude' => '10.0861281', 'longitude' => '106.0169971', 'type' => 'Tỉnh' ],
                [  'id' => 87, 'name' => 'Tỉnh Đồng Tháp', 'slug' => SupportString::createSlug("Tỉnh Đồng Tháp"), 'latitude' => '10.4937989', 'longitude' => '105.6881788', 'type' => 'Tỉnh' ],
                [  'id' => 89, 'name' => 'Tỉnh An Giang', 'slug' => SupportString::createSlug("Tỉnh An Giang"), 'latitude' => '10.5215836', 'longitude' => '105.1258955', 'type' => 'Tỉnh' ],
                [  'id' => 91, 'name' => 'Tỉnh Kiên Giang', 'slug' => SupportString::createSlug("Tỉnh Kiên Giang"), 'latitude' => '9.8249587', 'longitude' => '105.1258955', 'type' => 'Tỉnh' ],
                [  'id' => 92, 'name' => 'Thành phố Cần Thơ', 'slug' => SupportString::createSlug("Thành phố Cần Thơ"), 'latitude' => '10.0451618', 'longitude' => '105.7468535', 'type' => 'Thành phố Trung ương' ],
                [  'id' => 93, 'name' => 'Tỉnh Hậu Giang', 'slug' => SupportString::createSlug("Tỉnh Hậu Giang"), 'latitude' => '9.757898', 'longitude' => '105.6412527', 'type' => 'Tỉnh' ],
                [  'id' => 94, 'name' => 'Tỉnh Sóc Trăng', 'slug' => SupportString::createSlug("Tỉnh Sóc Trăng"), 'latitude' => '9.6003688', 'longitude' => '105.9599539', 'type' => 'Tỉnh' ],
                [  'id' => 95, 'name' => 'Tỉnh Bạc Liêu', 'slug' => SupportString::createSlug("Tỉnh Bạc Liêu"), 'latitude' => '9.2515555', 'longitude' => '105.5136472', 'type' => 'Tỉnh' ],
                [  'id' => 96, 'name' => 'Tỉnh Cà Mau', 'slug' => SupportString::createSlug("Tỉnh Cà Mau"), 'latitude' => '8.9624099', 'longitude' => '105.1258955', 'type' => 'Tỉnh' ]
            ]
        );
    }
}


/// regex : \((\d+), '([^']+)', '([0-9 .]+)-([0-9 .]+)', '([^']+)'\)
/// replace : [  'id' => $1, 'name' => '$2', 'slug' => '$2', 'latitude' => '$3', 'longitude' => '$4', 'type' => '$5' ]
/// data: 
// INSERT INTO `tinh` (`id`, `name`, `location`, `type`) VALUES
// (1, 'Thành phố Hà Nội', '21.0277644-105.8341598', 'Thành phố Trung ương'),
// (2, 'Tỉnh Hà Giang', '22.7662056-104.9388853', 'Tỉnh'),
// (4, 'Tỉnh Cao Bằng', '22.635689-106.2522143', 'Tỉnh'),
// (6, 'Tỉnh Bắc Kạn', '22.3032923-105.876004', 'Tỉnh'),
// (8, 'Tỉnh Tuyên Quang', '22.1726708-105.3131185', 'Tỉnh'),
// (10, 'Tỉnh Lào Cai', '22.3380865-104.1487055', 'Tỉnh'),
// (11, 'Tỉnh Điện Biên', '21.8042309-103.1076525', 'Tỉnh'),
// (12, 'Tỉnh Lai Châu', '22.3686613-103.3119085', 'Tỉnh'),
// (14, 'Tỉnh Sơn La', '21.1022284-103.7289167', 'Tỉnh'),
// (15, 'Tỉnh Yên Bái', '21.6837923-104.4551361', 'Tỉnh'),
// (17, 'Tỉnh Hoà Bình', '20.6861265-105.3131185', 'Tỉnh'),
// (19, 'Tỉnh Thái Nguyên', '21.5613771-105.876004', 'Tỉnh'),
// (20, 'Tỉnh Lạng Sơn', '21.8563705-106.6291304', 'Tỉnh'),
// (22, 'Tỉnh Quảng Ninh', '21.006382-107.2925144', 'Tỉnh'),
// (24, 'Tỉnh Bắc Giang', '21.3014947-106.6291304', 'Tỉnh'),
// (25, 'Tỉnh Phú Thọ', '21.268443-105.2045573', 'Tỉnh'),
// (26, 'Tỉnh Vĩnh Phúc', '21.3608805-105.5474373', 'Tỉnh'),
// (27, 'Tỉnh Bắc Ninh', '21.121444-106.1110501', 'Tỉnh'),
// (30, 'Tỉnh Hải Dương', '20.9385958-106.3206861', 'Tỉnh'),
// (31, 'Thành phố Hải Phòng', '20.8449115-106.6880841', 'Thành phố Trung ương'),
// (33, 'Tỉnh Hưng Yên', '20.8525711-106.0169971', 'Tỉnh'),
// (34, 'Tỉnh Thái Bình', '20.5386936-106.3934777', 'Tỉnh'),
// (35, 'Tỉnh Hà Nam', '20.5835196-105.92299', 'Tỉnh'),
// (36, 'Tỉnh Nam Định', '20.2791804-106.2051484', 'Tỉnh'),
// (37, 'Tỉnh Ninh Bình', '20.2129969-105.92299', 'Tỉnh'),
// (38, 'Tỉnh Thanh Hóa', '20.1291279-105.3131185', 'Tỉnh'),
// (40, 'Tỉnh Nghệ An', '19.2342489-104.9200365', 'Tỉnh'),
// (42, 'Tỉnh Hà Tĩnh', '18.2943776-105.6745247', 'Tỉnh'),
// (44, 'Tỉnh Quảng Bình', '17.6102715-106.3487474', 'Tỉnh'),
// (45, 'Tỉnh Quảng Trị', '16.7943472-106.963409', 'Tỉnh'),
// (46, 'Tỉnh Thừa Thiên Huế', '16.467397-107.5905326', 'Tỉnh'),
// (48, 'Thành phố Đà Nẵng', '16.0544068-108.2021667', 'Thành phố Trung ương'),
// (49, 'Tỉnh Quảng Nam', '15.5393538-108.019102', 'Tỉnh'),
// (51, 'Tỉnh Quảng Ngãi', '15.0759838-108.7125791', 'Tỉnh'),
// (52, 'Tỉnh Bình Định', '14.1665324-108.902683', 'Tỉnh'),
// (54, 'Tỉnh Phú Yên', '13.0881861-109.0928764', 'Tỉnh'),
// (56, 'Tỉnh Khánh Hòa', '12.2585098-109.0526076', 'Tỉnh'),
// (58, 'Tỉnh Ninh Thuận', '11.6738767-108.8629572', 'Tỉnh'),
// (60, 'Tỉnh Bình Thuận', '11.0903703-108.0720781', 'Tỉnh'),
// (62, 'Tỉnh Kon Tum', '14.661167-107.83885', 'Tỉnh'),
// (64, 'Tỉnh Gia Lai', '13.8078943-108.109375', 'Tỉnh'),
// (66, 'Tỉnh Đắk Lắk', '12.7100116-108.2377519', 'Tỉnh'),
// (67, 'Tỉnh Đắk Nông', '12.2646476-107.609806', 'Tỉnh'),
// (68, 'Tỉnh Lâm Đồng', '11.5752791-108.1428669', 'Tỉnh'),
// (70, 'Tỉnh Bình Phước', '11.7511894-106.7234639', 'Tỉnh'),
// (72, 'Tỉnh Tây Ninh', '11.3494766-106.0640179', 'Tỉnh'),
// (74, 'Tỉnh Bình Dương', '11.3254024-106.477017', 'Tỉnh'),
// (75, 'Tỉnh Đồng Nai', '11.0686305-107.1675976', 'Tỉnh'),
// (77, 'Tỉnh Bà Rịa - Vũng Tàu', '10.5417397-107.2429976', 'Tỉnh'),
// (79, 'Thành phố Hồ Chí Minh', '10.8230989-106.6296638', 'Thành phố Trung ương'),
// (80, 'Tỉnh Long An', '10.695572-106.2431205', 'Tỉnh'),
// (82, 'Tỉnh Tiền Giang', '10.4493324-106.3420504', 'Tỉnh'),
// (83, 'Tỉnh Bến Tre', '10.1081553-106.4405872', 'Tỉnh'),
// (84, 'Tỉnh Trà Vinh', '9.812741-106.2992912', 'Tỉnh'),
// (86, 'Tỉnh Vĩnh Long', '10.0861281-106.0169971', 'Tỉnh'),
// (87, 'Tỉnh Đồng Tháp', '10.4937989-105.6881788', 'Tỉnh'),
// (89, 'Tỉnh An Giang', '10.5215836-105.1258955', 'Tỉnh'),
// (91, 'Tỉnh Kiên Giang', '9.8249587-105.1258955', 'Tỉnh'),
// (92, 'Thành phố Cần Thơ', '10.0451618-105.7468535', 'Thành phố Trung ương'),
// (93, 'Tỉnh Hậu Giang', '9.757898-105.6412527', 'Tỉnh'),
// (94, 'Tỉnh Sóc Trăng', '9.6003688-105.9599539', 'Tỉnh'),
// (95, 'Tỉnh Bạc Liêu', '9.2515555-105.5136472', 'Tỉnh'),
// (96, 'Tỉnh Cà Mau', '8.9624099-105.1258955', 'Tỉnh');