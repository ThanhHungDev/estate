<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Config;
use Tymon\JWTAuth\Facades\JWTAuth;

class ApartmentController extends Controller
{
    /**
     * post save user arpartment
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request){

        $input = $request->all();
        $token = $request->bearerToken(); 
        JWTAuth::setToken($token); //<-- set token and check
        if (! $claim = JWTAuth::getPayload()) {
            return  response()
                    ->error(
                        'Token user not found', 
                        ['error' => 'user_not_found'],
                        Response::HTTP_NOT_FOUND
                    )
                    ->setStatusCode(Response::HTTP_NOT_FOUND);
        }
        /// query db find user
        $user = User::findOrFail($claim['id']);
        if( !$user ){
            return  response()
                    ->error(
                        'Token user not found', 
                        ['error' => 'user_not_found'],
                        Response::HTTP_NOT_FOUND
                    )
                    ->setStatusCode(Response::HTTP_NOT_FOUND);
        }
        $user->commune_id   = $request->input('user_commune_id');
        $user->home_number  = $request->input('home_number');
        $user->street       = $request->input('street');
        $user->role         = $request->input('role', Config::get("constant.USER_TYPE.PERSON"));
        $user->save();

        // area: "120"
        // bathroom: 0
        // commune: 26554
        // content: "mô tả phần thông tiêu đề phần thông tin cá nhân\nssdf"
        // direction: 3
        // direction_balcony: 1
        // district: 748
        // home_number: "2344"
        // horizontal: "12"
        // images: [{…}]
        // name: "Trương người đăng"
        // negotiate: 1
        // phone_verify: "+818033870674"
        // price: "300000000"
        // project: {name: 'Nhà phố Shophouse D2Eight', id: 1356, slug: 'nha-pho-shophouse-d2eight', public: 1, type_id: 2, …}
        // province: 77
        // role: 1
        // room: 0
        // street: "343243243 nội dung tên đường"
        // title: "tiêu đề phần thông tin cá nhân"
        // type: "1"
        // vertical: "10"
        // videos: []
        // wc: 0

        /// save product
        ///setting data insert table product
        $productInput = $request->only(
            'category_id',
            'commune_id', /// thông qua project appartment
            'usertype', 
            'title', 
            'slug', 
            'excerpt', 
            'content', 
            'background', 
            'thumbnail', 
            'public', 
            'site_name', 
            'howto', 
            'showto',
            'image_seo', 
            'images', 
            'description_seo', 
            'type', 
            'stylesheet', 
            'javascript',
            'direction', 
            'direction_balcony', 
            'horizontal', 
            'area', 
            'price', 
            'unit_price', 
            'negotiate', 
            'extensions'
        );


        // {"status":200,"message":"","data":{"area":"12","price":"31230000","horizontal":"13","vertical":"1312313","role":"1","type":"1","project":{"name":"Chung cư 208 D2","id":1355,"slug":"chung-cu-208-d2","public":1,"type_id":1,"type":"Khu căn hộ","introduction":"<p><strong>1. Vị tr&iacute;:</strong></p><ul><li>Tọa lạc tại đường&nbsp;<em>D2</em>&nbsp;nối d&agrave;i, P.25, B&igrave;nh Thạnh.</li></ul><p><strong>2. Tiện &iacute;ch:</strong></p><ul><li>Vị tr&iacute; rất thuận tiện cho việc sinh hoạt, học tập v&agrave; đi lại; xung quanh c&oacute; nhiều trường đại học, gần c&aacute;c khu vực hiện đại như Q1, Q2, gần s&ocirc;ng s&agrave;i g&ograve;n, bến xe..</li></ul><p><strong>3. Chủ đầu tư:</strong></p><ul><li>Đang cập nhật&nbsp;</li></ul><p><strong>4. Ch&iacute;nh s&aacute;ch ưu đ&atilde;i:</strong></p><ul><li>Đang cập nhật&nbsp;</li></ul><p><strong>5. Quy m&ocirc;:</strong></p><ul><li>Đang cập nhật&nbsp;</li></ul><p><strong>6. Tiến độ dự &aacute;n:</strong></p><ul><li>Thời gian ho&agrave;n th&agrave;nh: đ&atilde; ho&agrave;n th&agrave;nh</li><li>Thời gian b&agrave;n giao: Đang cập nhật&nbsp;</li></ul>","short_introduction":"<p><strong>1. Vị tr&iacute;:</strong></p><ul><li>Tọa lạc tại đường&nbsp;<em>D2</em>&nbsp;nối d&agrave;i, P.25, B&igrave;nh Thạnh.</li></ul><p><strong>2. Tiện &iacute;ch:</strong></p><ul><li>Vị tr&iacute; rất thuận tiện cho việc sinh hoạt, học tập v&agrave; đi lại; xung quanh c&oacute; nhiều trường đại học, gần c&aacute;c khu vực hiện đại như Q1, Q2, gần s&ocirc;ng s&agrave;i g&ograve;n, bến xe..</li></ul><p><strong>3. Chủ đầu tư:</strong></p><ul><li>Đang cập nhật&nbsp;</li></ul><p><strong>4. Ch&iacute;nh s&aacute;ch ưu đ&atilde;i:</strong></p><ul><li>Đang cập nhật&nbsp;</li></ul><p><strong>5. Quy m&ocirc;:</strong></p><ul><li>Đang cập nhật&nbsp;</li></ul><p><strong>6. Tiến độ dự &aacute;n:</strong></p><ul><li>Thời gian ho&agrave;n th&agrave;nh: đ&atilde; ho&agrave;n th&agrave;nh</li><li>Thời gian b&agrave;n giao: Đang cập nhật&nbsp;</li></ul>","process":"Đã hoàn thành","area_total":null,"address":"Đường D2 nối dài, phường 25, quận Bình Thạnh, Tp. HCM","address2":"Quận Bình Thạnh, Tp Hồ Chí Minh","value":1355,"label":"Chung cư 208 D2","currentTarget":{"value":1355},"target":{"name":"project","value":1355}},"images":[{"root":"/uploads/images/post/1632881800tải xuống.jpeg","IMAGE_COMPRESS":"http://estate.com/compress/50//uploads/images/post/1632881800ta%CC%89i%20xuo%CC%82%CC%81ng.jpeg","IMAGE_RESIZE":"http://estate.com/resizes/small/fit//uploads/images/post/1632881800ta%CC%89i%20xuo%CC%82%CC%81ng.jpeg"},{"root":"/uploads/images/post/1632881800tải xuống (1).jpeg","IMAGE_COMPRESS":"http://estate.com/compress/50//uploads/images/post/1632881800ta%CC%89i%20xuo%CC%82%CC%81ng%20%281%29.jpeg","IMAGE_RESIZE":"http://estate.com/resizes/small/fit//uploads/images/post/1632881800ta%CC%89i%20xuo%CC%82%CC%81ng%20%281%29.jpeg"},{"root":"/uploads/images/post/1632881800istockphoto-682432560-612x612.jpeg","IMAGE_COMPRESS":"http://estate.com/compress/50//uploads/images/post/1632881800istockphoto-682432560-612x612.jpeg","IMAGE_RESIZE":"http://estate.com/resizes/small/fit//uploads/images/post/1632881800istockphoto-682432560-612x612.jpeg"},{"root":"/uploads/images/post/1632881800istockphoto-1054759884-612x612.jpeg","IMAGE_COMPRESS":"http://estate.com/compress/50//uploads/images/post/1632881800istockphoto-1054759884-612x612.jpeg","IMAGE_RESIZE":"http://estate.com/resizes/small/fit//uploads/images/post/1632881800istockphoto-1054759884-612x612.jpeg"},{"root":"/uploads/images/post/1632881800pexels-photo-126271.jpeg","IMAGE_COMPRESS":"http://estate.com/compress/50//uploads/images/post/1632881800pexels-photo-126271.jpeg","IMAGE_RESIZE":"http://estate.com/resizes/small/fit//uploads/images/post/1632881800pexels-photo-126271.jpeg"},{"root":"/uploads/images/post/1632881800photo-1505843513577-22bb7d21e455.jpeg","IMAGE_COMPRESS":"http://estate.com/compress/50//uploads/images/post/1632881800photo-1505843513577-22bb7d21e455.jpeg","IMAGE_RESIZE":"http://estate.com/resizes/small/fit//uploads/images/post/1632881800photo-1505843513577-22bb7d21e455.jpeg"},{"root":"/uploads/images/post/1632881800photo-1512917774080-9991f1c4c750.jpeg","IMAGE_COMPRESS":"http://estate.com/compress/50//uploads/images/post/1632881800photo-1512917774080-9991f1c4c750.jpeg","IMAGE_RESIZE":"http://estate.com/resizes/small/fit//uploads/images/post/1632881800photo-1512917774080-9991f1c4c750.jpeg"}],"videos":[]}}

        $response = array(
            'status' => Response::HTTP_OK,
            'message' => '',
            'data' => $request->only(
                'area', 'price', 'horizontal', 'vertical',
                'role',
                'type',
                'project',
                'images', 'videos'
            )
        );

        return response()
                ->success(
                    'create apartment thành công', 
                    $response,
                    Response::HTTP_OK
                )
                ->setStatusCode(Response::HTTP_OK);
    }
}
