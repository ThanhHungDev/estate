<?php

namespace App\Http\Controllers;

use App\Http\Resources\LikeResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Cookie;

class ReactController extends Controller
{
    
    public function updateProductLikes(Request $request){

        $productID = $request->input('product_id', 0);
        $increment = $request->input('increment', 1);

        $product = Product::find(intval($productID));
        if( !$product ){
            /// nếu không tìm thấy product thì hiện thị lỗi not found
            return  response()
                    ->error(
                        'Không tìm thấy sản phẩm bạn đang thích', 
                        ['error' => 'product_not_found'],
                        Response::HTTP_NOT_FOUND
                    )
                    ->setStatusCode(Response::HTTP_NOT_FOUND);
        }
        $product->like = $product->like + $increment;
        $product->save();
        
        return response()
                    ->success(
                        'thành công',
                        new LikeResource($product, $increment > 0),
                        Response::HTTP_OK
                    )
                    ->setStatusCode(Response::HTTP_OK);
    }

}
