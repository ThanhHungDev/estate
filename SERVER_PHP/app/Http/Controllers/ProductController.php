<?php 
/**
 * @package    App\Console\Commands
 * @subpackage ProductController
 * @copyright  Copyright (c) 2020 RiverCrane! Corporation. All Rights Reserved.
 * @author     Nguyen A<nguyen.a@rivercrane.vn>
 */
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Log;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $conditions = array(
            ...
        );
        // 
        $modelProduct     = new Product;
        // return 1M record id
        $prodIds = $modelProduct->getProducts($conditions); // select id from products where ... ;
    }
}

