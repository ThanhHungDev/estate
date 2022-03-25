<?php

namespace Database\Seeders;

use App\Helpers\SupportString;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class communes extends Seeder
{
    /**
     * Run the database seeds.
     *
     * 'slug' => '([\u00BF-\u1FFF\u2C00-\uD7FF\w \\'-]+)',
     * 'slug' => SupportString::createSlug("$1"),
     * @return void
     * 
     * UPDATE communes as cm
     * SET slug = concat(REPLACE(dt.slug, 'huyen-', '' ), '-', REPLACE(cm.slug, 'xa-', '' ))
     * FROM districts as dt
     * WHERE cm.district_id = dt.id;
     */
    public function run()
    {
        $communes = [
            [  'id' => 26506, 'name' => 'Phường 1', 'slug' => SupportString::createSlug("Phường 1"), 'latitude' => '10.3522829', 'longitude' => '107.0701844', 'type' => 'Phường', 'district_id' => 747 ],
            [  'id' => 26508, 'name' => 'Phường Thắng Tam', 'slug' => SupportString::createSlug("Phường Thắng Tam"), 'latitude' => '10.3434329', 'longitude' => '107.0914726', 'type' => 'Phường', 'district_id' => 747 ],
            [  'id' => 26509, 'name' => 'Phường 2', 'slug' => SupportString::createSlug("Phường 2"), 'latitude' => '10.3340595', 'longitude' => '107.0851934', 'type' => 'Phường', 'district_id' => 747 ],
            [  'id' => 26512, 'name' => 'Phường 3', 'slug' => SupportString::createSlug("Phường 3"), 'latitude' => '10.3489365', 'longitude' => '107.0819968', 'type' => 'Phường', 'district_id' => 747 ],
            [  'id' => 26515, 'name' => 'Phường 4', 'slug' => SupportString::createSlug("Phường 4"), 'latitude' => '10.3545069', 'longitude' => '107.0790436', 'type' => 'Phường', 'district_id' => 747 ],
            [  'id' => 26518, 'name' => 'Phường 5', 'slug' => SupportString::createSlug("Phường 5"), 'latitude' => '10.3756812', 'longitude' => '107.062802', 'type' => 'Phường', 'district_id' => 747 ],
            [  'id' => 26521, 'name' => 'Phường Thắng Nhì', 'slug' => SupportString::createSlug("Phường Thắng Nhì"), 'latitude' => '10.3723385', 'longitude' => '107.0723668', 'type' => 'Phường', 'district_id' => 747 ],
            [  'id' => 26524, 'name' => 'Phường 7', 'slug' => SupportString::createSlug("Phường 7"), 'latitude' => '10.3638951', 'longitude' => '107.0805202', 'type' => 'Phường', 'district_id' => 747 ],
            [  'id' => 26526, 'name' => 'Phường Nguyễn An Ninh', 'slug' => SupportString::createSlug("Phường Nguyễn An Ninh"), 'latitude' => '10.3621958', 'longitude' => '107.0949818', 'type' => 'Phường', 'district_id' => 747 ],
            [  'id' => 26527, 'name' => 'Phường 8', 'slug' => SupportString::createSlug("Phường 8"), 'latitude' => '10.3564094', 'longitude' => '107.0938097', 'type' => 'Phường', 'district_id' => 747 ],
            [  'id' => 26530, 'name' => 'Phường 9', 'slug' => SupportString::createSlug("Phường 9"), 'latitude' => '10.3740741', 'longitude' => '107.0923331', 'type' => 'Phường', 'district_id' => 747 ],
            [  'id' => 26533, 'name' => 'Phường Thắng Nhất', 'slug' => SupportString::createSlug("Phường Thắng Nhất"), 'latitude' => '10.3891035', 'longitude' => '107.1016716', 'type' => 'Phường', 'district_id' => 747 ],
            [  'id' => 26535, 'name' => 'Phường Rạch Dừa', 'slug' => SupportString::createSlug("Phường Rạch Dừa"), 'latitude' => '10.4009204', 'longitude' => '107.1159559', 'type' => 'Phường', 'district_id' => 747 ],
            [  'id' => 26536, 'name' => 'Phường 10', 'slug' => SupportString::createSlug("Phường 10"), 'latitude' => '10.3778746', 'longitude' => '107.1218678', 'type' => 'Phường', 'district_id' => 747 ],
            [  'id' => 26539, 'name' => 'Phường 11', 'slug' => SupportString::createSlug("Phường 11"), 'latitude' => '10.4017412', 'longitude' => '107.1307289', 'type' => 'Phường', 'district_id' => 747 ],
            [  'id' => 26542, 'name' => 'Phường 12', 'slug' => SupportString::createSlug("Phường 12"), 'latitude' => '10.4214457', 'longitude' => '107.1661766', 'type' => 'Phường', 'district_id' => 747 ],
            [  'id' => 26545, 'name' => 'Xã Long Sơn', 'slug' => SupportString::createSlug("Xã Long Sơn"), 'latitude' => '10.4532541', 'longitude' => '107.0956304', 'type' => 'Xã', 'district_id' => 747 ],
            [  'id' => 26548, 'name' => 'Phường Phước Hưng', 'slug' => SupportString::createSlug("Phường Phước Hưng"), 'latitude' => '10.5153943', 'longitude' => '107.180948', 'type' => 'Phường', 'district_id' => 748 ],
            [  'id' => 26551, 'name' => 'Phường Phước Hiệp', 'slug' => SupportString::createSlug("Phường Phước Hiệp"), 'latitude' => '10.4983607', 'longitude' => '107.1706079', 'type' => 'Phường', 'district_id' => 748 ],
            [  'id' => 26554, 'name' => 'Phường Phước Nguyên', 'slug' => SupportString::createSlug("Phường Phước Nguyên"), 'latitude' => '10.4991423', 'longitude' => '107.180948', 'type' => 'Phường', 'district_id' => 748 ],
            [  'id' => 26557, 'name' => 'Phường Long Toàn', 'slug' => SupportString::createSlug("Phường Long Toàn"), 'latitude' => '10.4916352', 'longitude' => '107.194243', 'type' => 'Phường', 'district_id' => 748 ],
            [  'id' => 26558, 'name' => 'Phường Long Tâm', 'slug' => SupportString::createSlug("Phường Long Tâm"), 'latitude' => '10.5035763', 'longitude' => '107.1986748', 'type' => 'Phường', 'district_id' => 748 ],
            [  'id' => 26560, 'name' => 'Phường Phước Trung', 'slug' => SupportString::createSlug("Phường Phước Trung"), 'latitude' => '10.4857647', 'longitude' => '107.1779936', 'type' => 'Phường', 'district_id' => 748 ],
            [  'id' => 26563, 'name' => 'Phường Long Hương', 'slug' => SupportString::createSlug("Phường Long Hương"), 'latitude' => '10.4950334', 'longitude' => '107.1573142', 'type' => 'Phường', 'district_id' => 748 ],
            [  'id' => 26566, 'name' => 'Phường Kim Dinh', 'slug' => SupportString::createSlug("Phường Kim Dinh"), 'latitude' => '10.4999931', 'longitude' => '107.1375927', 'type' => 'Phường', 'district_id' => 748 ],
            [  'id' => 26567, 'name' => 'Xã Tân Hưng', 'slug' => SupportString::createSlug("Xã Tân Hưng"), 'latitude' => '10.5319776', 'longitude' => '107.1750393', 'type' => 'Xã', 'district_id' => 748 ],
            [  'id' => 26569, 'name' => 'Xã Long Phước', 'slug' => SupportString::createSlug("Xã Long Phước"), 'latitude' => '10.5156408', 'longitude' => '107.2252675', 'type' => 'Xã', 'district_id' => 748 ],
            [  'id' => 26572, 'name' => 'Xã Hoà Long', 'slug' => SupportString::createSlug("Xã Hoà Long"), 'latitude' => '10.5277905', 'longitude' => '107.2016295', 'type' => 'Xã', 'district_id' => 748 ],
            [  'id' => 26574, 'name' => 'Xã Bàu Chinh', 'slug' => SupportString::createSlug("Xã Bàu Chinh"), 'latitude' => '10.678295', 'longitude' => '107.2252675', 'type' => 'Xã', 'district_id' => 750 ],
            [  'id' => 26575, 'name' => 'Thị trấn Ngãi Giao', 'slug' => SupportString::createSlug("Thị trấn Ngãi Giao"), 'latitude' => '10.6559243', 'longitude' => '107.2370874', 'type' => 'Thị trấn', 'district_id' => 750 ],
            [  'id' => 26578, 'name' => 'Xã Bình Ba', 'slug' => SupportString::createSlug("Xã Bình Ba"), 'latitude' => '10.6182884', 'longitude' => '107.2311774', 'type' => 'Xã', 'district_id' => 750 ],
            [  'id' => 26581, 'name' => 'Xã Suối Nghệ', 'slug' => SupportString::createSlug("Xã Suối Nghệ"), 'latitude' => '10.6043384', 'longitude' => '107.1898113', 'type' => 'Xã', 'district_id' => 750 ],
            [  'id' => 26584, 'name' => 'Xã Xuân Sơn', 'slug' => SupportString::createSlug("Xã Xuân Sơn"), 'latitude' => '10.6404024', 'longitude' => '107.3198424', 'type' => 'Xã', 'district_id' => 750 ],
            [  'id' => 26587, 'name' => 'Xã Sơn Bình', 'slug' => SupportString::createSlug("Xã Sơn Bình"), 'latitude' => '10.649907', 'longitude' => '107.3434916', 'type' => 'Xã', 'district_id' => 750 ],
            [  'id' => 26590, 'name' => 'Xã Bình Giã', 'slug' => SupportString::createSlug("Xã Bình Giã"), 'latitude' => '10.6437421', 'longitude' => '107.2607289', 'type' => 'Xã', 'district_id' => 750 ],
            [  'id' => 26593, 'name' => 'Xã Bình Trung', 'slug' => SupportString::createSlug("Xã Bình Trung"), 'latitude' => '10.6424077', 'longitude' => '107.2843726', 'type' => 'Xã', 'district_id' => 750 ],
            [  'id' => 26596, 'name' => 'Xã Xà Bang', 'slug' => SupportString::createSlug("Xã Xà Bang"), 'latitude' => '10.7319088', 'longitude' => '107.2370874', 'type' => 'Xã', 'district_id' => 750 ],
            [  'id' => 26599, 'name' => 'Xã Cù Bị', 'slug' => SupportString::createSlug("Xã Cù Bị"), 'latitude' => '10.7294922', 'longitude' => '107.1839024', 'type' => 'Xã', 'district_id' => 750 ],
            [  'id' => 26602, 'name' => 'Xã Láng Lớn', 'slug' => SupportString::createSlug("Xã Láng Lớn"), 'latitude' => '10.6592505', 'longitude' => '107.1779936', 'type' => 'Xã', 'district_id' => 750 ],
            [  'id' => 26605, 'name' => 'Xã Quảng Thành', 'slug' => SupportString::createSlug("Xã Quảng Thành"), 'latitude' => '10.694576', 'longitude' => '107.2782896', 'type' => 'Xã', 'district_id' => 750 ],
            [  'id' => 26608, 'name' => 'Xã Kim Long', 'slug' => SupportString::createSlug("Xã Kim Long"), 'latitude' => '10.7050987', 'longitude' => '107.2311774', 'type' => 'Xã', 'district_id' => 750 ],
            [  'id' => 26611, 'name' => 'Xã Suối Rao', 'slug' => SupportString::createSlug("Xã Suối Rao"), 'latitude' => '10.5912828', 'longitude' => '107.3257545', 'type' => 'Xã', 'district_id' => 750 ],
            [  'id' => 26614, 'name' => 'Xã Đá Bạc', 'slug' => SupportString::createSlug("Xã Đá Bạc"), 'latitude' => '10.5939448', 'longitude' => '107.2784615', 'type' => 'Xã', 'district_id' => 750 ],
            [  'id' => 26617, 'name' => 'Xã Nghĩa Thành', 'slug' => SupportString::createSlug("Xã Nghĩa Thành"), 'latitude' => '10.5718057', 'longitude' => '107.1898113', 'type' => 'Xã', 'district_id' => 750 ],
            [  'id' => 26620, 'name' => 'Thị trấn Phước Bửu', 'slug' => SupportString::createSlug("Thị trấn Phước Bửu"), 'latitude' => '10.5353285', 'longitude' => '107.4055814', 'type' => 'Thị trấn', 'district_id' => 751 ],
            [  'id' => 26623, 'name' => 'Xã Phước Thuận', 'slug' => SupportString::createSlug("Xã Phước Thuận"), 'latitude' => '10.4790005', 'longitude' => '107.3967105', 'type' => 'Xã', 'district_id' => 751 ],
            [  'id' => 26626, 'name' => 'Xã Phước Tân', 'slug' => SupportString::createSlug("Xã Phước Tân"), 'latitude' => '10.5669449', 'longitude' => '107.3730563', 'type' => 'Xã', 'district_id' => 751 ],
            [  'id' => 26629, 'name' => 'Xã Xuyên Mộc', 'slug' => SupportString::createSlug("Xã Xuyên Mộc"), 'latitude' => '10.5585237', 'longitude' => '107.4262813', 'type' => 'Xã', 'district_id' => 751 ],
            [  'id' => 26632, 'name' => 'Xã Bông Trang', 'slug' => SupportString::createSlug("Xã Bông Trang"), 'latitude' => '10.5355319', 'longitude' => '107.4499404', 'type' => 'Xã', 'district_id' => 751 ],
            [  'id' => 26635, 'name' => 'Xã Tân Lâm', 'slug' => SupportString::createSlug("Xã Tân Lâm"), 'latitude' => '10.7377268', 'longitude' => '107.4203669', 'type' => 'Xã', 'district_id' => 751 ],
            [  'id' => 26638, 'name' => 'Xã Bàu Lâm', 'slug' => SupportString::createSlug("Xã Bàu Lâm"), 'latitude' => '10.6970348', 'longitude' => '107.3730563', 'type' => 'Xã', 'district_id' => 751 ],
            [  'id' => 26641, 'name' => 'Xã Hòa Bình', 'slug' => SupportString::createSlug("Xã Hòa Bình"), 'latitude' => '10.6089467', 'longitude' => '107.3967105', 'type' => 'Xã', 'district_id' => 751 ],
            [  'id' => 26644, 'name' => 'Xã Hòa Hưng', 'slug' => SupportString::createSlug("Xã Hòa Hưng"), 'latitude' => '10.6573892', 'longitude' => '107.4026244', 'type' => 'Xã', 'district_id' => 751 ],
            [  'id' => 26647, 'name' => 'Xã Hòa Hiệp', 'slug' => SupportString::createSlug("Xã Hòa Hiệp"), 'latitude' => '10.6787414', 'longitude' => '107.5031811', 'type' => 'Xã', 'district_id' => 751 ],
            [  'id' => 26650, 'name' => 'Xã Hòa Hội', 'slug' => SupportString::createSlug("Xã Hòa Hội"), 'latitude' => '10.6279317', 'longitude' => '107.4440254', 'type' => 'Xã', 'district_id' => 751 ],
            [  'id' => 26653, 'name' => 'Xã Bưng Riềng', 'slug' => SupportString::createSlug("Xã Bưng Riềng"), 'latitude' => '10.538601', 'longitude' => '107.4913489', 'type' => 'Xã', 'district_id' => 751 ],
            [  'id' => 26656, 'name' => 'Xã Bình Châu', 'slug' => SupportString::createSlug("Xã Bình Châu"), 'latitude' => '10.57921', 'longitude' => '107.5386809', 'type' => 'Xã', 'district_id' => 751 ],
            [  'id' => 26659, 'name' => 'Thị trấn Long Điền', 'slug' => SupportString::createSlug("Thị trấn Long Điền"), 'latitude' => '10.4812576', 'longitude' => '107.2104935', 'type' => 'Thị trấn', 'district_id' => 752 ],
            [  'id' => 26662, 'name' => 'Thị trấn Long Hải', 'slug' => SupportString::createSlug("Thị trấn Long Hải"), 'latitude' => '10.395902', 'longitude' => '107.2370874', 'type' => 'Thị trấn', 'district_id' => 752 ],
            [  'id' => 26665, 'name' => 'Xã An Ngãi', 'slug' => SupportString::createSlug("Xã An Ngãi"), 'latitude' => '10.4513168', 'longitude' => '107.2134482', 'type' => 'Xã', 'district_id' => 752 ],
            [  'id' => 26668, 'name' => 'Xã Tam Phước', 'slug' => SupportString::createSlug("Xã Tam Phước"), 'latitude' => '10.4608351', 'longitude' => '107.2370874', 'type' => 'Xã', 'district_id' => 752 ],
            [  'id' => 26671, 'name' => 'Xã An Nhứt', 'slug' => SupportString::createSlug("Xã An Nhứt"), 'latitude' => '10.4901197', 'longitude' => '107.2459527', 'type' => 'Xã', 'district_id' => 752 ],
            [  'id' => 26674, 'name' => 'Xã Phước Tỉnh', 'slug' => SupportString::createSlug("Xã Phước Tỉnh"), 'latitude' => '10.4118663', 'longitude' => '107.1927658', 'type' => 'Xã', 'district_id' => 752 ],
            [  'id' => 26677, 'name' => 'Xã Phước Hưng', 'slug' => SupportString::createSlug("Xã Phước Hưng"), 'latitude' => '10.4283624', 'longitude' => '107.2370874', 'type' => 'Xã', 'district_id' => 752 ],
            [  'id' => 26680, 'name' => 'Thị trấn Đất Đỏ', 'slug' => SupportString::createSlug("Thị trấn Đất Đỏ"), 'latitude' => '10.4913475', 'longitude' => '107.2725505', 'type' => 'Thị trấn', 'district_id' => 753 ],
            [  'id' => 26683, 'name' => 'Xã Phước Long Thọ', 'slug' => SupportString::createSlug("Xã Phước Long Thọ"), 'latitude' => '10.5059422', 'longitude' => '107.3021069', 'type' => 'Xã', 'district_id' => 753 ],
            [  'id' => 26686, 'name' => 'Xã Phước Hội', 'slug' => SupportString::createSlug("Xã Phước Hội"), 'latitude' => '10.4575', 'longitude' => '107.2961111', 'type' => 'Xã', 'district_id' => 753 ],
            [  'id' => 26689, 'name' => 'Xã Long Mỹ', 'slug' => SupportString::createSlug("Xã Long Mỹ"), 'latitude' => '10.4372227', 'longitude' => '107.2725505', 'type' => 'Xã', 'district_id' => 753 ],
            [  'id' => 26692, 'name' => 'Thị trấn Phước Hải', 'slug' => SupportString::createSlug("Thị trấn Phước Hải"), 'latitude' => '10.4054168', 'longitude' => '107.2607289', 'type' => 'Thị trấn', 'district_id' => 753 ],
            [  'id' => 26695, 'name' => 'Xã Long Tân', 'slug' => SupportString::createSlug("Xã Long Tân"), 'latitude' => '10.5505926', 'longitude' => '107.2784615', 'type' => 'Xã', 'district_id' => 753 ],
            [  'id' => 26698, 'name' => 'Xã Láng Dài', 'slug' => SupportString::createSlug("Xã Láng Dài"), 'latitude' => '10.5249522', 'longitude' => '107.3494043', 'type' => 'Xã', 'district_id' => 753 ],
            [  'id' => 26701, 'name' => 'Xã Lộc An', 'slug' => SupportString::createSlug("Xã Lộc An"), 'latitude' => '10.4765664', 'longitude' => '107.3434916', 'type' => 'Xã', 'district_id' => 753 ],
            [  'id' => 26704, 'name' => 'Thị trấn Phú Mỹ', 'slug' => SupportString::createSlug("Thị trấn Phú Mỹ"), 'latitude' => '10.5905345', 'longitude' => '107.0480378', 'type' => 'Thị trấn', 'district_id' => 754 ],
            [  'id' => 26707, 'name' => 'Xã Tân Hoà', 'slug' => SupportString::createSlug("Xã Tân Hoà"), 'latitude' => '10.5330334', 'longitude' => '107.1071', 'type' => 'Xã', 'district_id' => 754 ],
            [  'id' => 26710, 'name' => 'Xã Tân Hải', 'slug' => SupportString::createSlug("Xã Tân Hải"), 'latitude' => '10.5005153', 'longitude' => '107.1071', 'type' => 'Xã', 'district_id' => 754 ],
            [  'id' => 26713, 'name' => 'Xã Phước Hoà', 'slug' => SupportString::createSlug("Xã Phước Hoà"), 'latitude' => '10.5146084', 'longitude' => '107.0480378', 'type' => 'Xã', 'district_id' => 754 ],
            [  'id' => 26716, 'name' => 'Xã Tân Phước', 'slug' => SupportString::createSlug("Xã Tân Phước"), 'latitude' => '10.5639613', 'longitude' => '107.0744052', 'type' => 'Xã', 'district_id' => 754 ],
            [  'id' => 26719, 'name' => 'Xã Mỹ Xuân', 'slug' => SupportString::createSlug("Xã Mỹ Xuân"), 'latitude' => '10.6288504', 'longitude' => '107.0421324', 'type' => 'Xã', 'district_id' => 754 ],
            [  'id' => 26722, 'name' => 'Xã Sông Xoài', 'slug' => SupportString::createSlug("Xã Sông Xoài"), 'latitude' => '10.6605776', 'longitude' => '107.1543601', 'type' => 'Xã', 'district_id' => 754 ],
            [  'id' => 26725, 'name' => 'Xã Hắc Dịch', 'slug' => SupportString::createSlug("Xã Hắc Dịch"), 'latitude' => '10.6466114', 'longitude' => '107.113007', 'type' => 'Xã', 'district_id' => 754 ],
            [  'id' => 26728, 'name' => 'Xã Châu Pha', 'slug' => SupportString::createSlug("Xã Châu Pha"), 'latitude' => '10.5737817', 'longitude' => '107.1543601', 'type' => 'Xã', 'district_id' => 754 ],
            [  'id' => 26731, 'name' => 'Xã Tóc Tiên', 'slug' => SupportString::createSlug("Xã Tóc Tiên"), 'latitude' => '10.6032018', 'longitude' => '107.113007', 'type' => 'Xã', 'district_id' => 754 ],
        ];

        $chunkeds = array_chunk($communes,5000,true);

        foreach ($chunkeds as $records)
        {
            DB::table('communes')->insert( $records );
        }
    }
}