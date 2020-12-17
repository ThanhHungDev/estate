<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;

class ImageController extends Controller
{
    const TYPE__FIT  = "fit";
    const TYPE__FILL = "fill";
 
    public function resize($size, $type = self::TYPE__FIT, $imagePath)
    {
        /// http://land.vn/resizes/icon/fit/images/commun.jpg?v=12345678

        $imageFullPath = public_path($imagePath);
        $sizes = Config::get('image.SIZES');

        if(!File::isFile($imageFullPath) || !isset($sizes[$size])){

            abort(404);
        }
    
        $savedPath = public_path('resizes/' . $size . '/' . $type . '/' . $imagePath);
        $savedDir  = dirname($savedPath);

        if(!File::isDirectory($savedDir)){

            File::makeDirectory($savedDir, 0777, true, true);
        }
    
        list($width, $height) = $sizes[$size];
    
        if($type == self::TYPE__FILL){

            // create empty canvas
            $background = Image::canvas($width, $height);
            // fill image with color
            $background->fill('#cccccc');

            $image = Image::make($imageFullPath)->resize($width, $height, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            });

            // insert resized image centered into background
            $background->insert($image, 'center');

            // save or do whatever you like
            $background->save($savedPath);

            return $background->response();
        }
        
        $image = Image::make($imageFullPath)->$type($width, $height)->save($savedPath);

        return $image->response();
    }
}
