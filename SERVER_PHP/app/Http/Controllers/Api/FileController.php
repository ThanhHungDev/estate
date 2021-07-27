<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UPLOAD_FILE_REQUEST;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Config;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class FileController extends Controller
{    
    public static $ROOT_UPLOAD = "/uploads";
    /**
     * isUploadImage kiểm tra xem cái upload có phải là upload image không
     *
     * @param  mixed $request
     * @return boolean
     */
    public static function isUploadImage(Request $request){
        /// type image
        $TYPE_IMAGE = Config::get('image.UPLOAD');
        /// input data 
        $type = $request->input('type');
        /// check người dùng đẩy lên upload có phải image hông
        if(in_array($type, array_values($TYPE_IMAGE))){
            /// đang upload image
            return true;
        }
        return false;
    }
    public function store(UPLOAD_FILE_REQUEST $request){

        /// đang mặc định là upload file
        // $rules = array( 'file' => 'mimes:doc,docx' );
        // $message = array( 'file.mimes' => 'lỗi file upload không đúng định dạng' );

        $rules = array( 
            'file' => [ "required", "array", "min:1", "max:4" ],
            'file.*' => 'required|mimes:doc,docx|max:2048'
        );
        $message = array( 
            'file.required' => 'lỗi không tìm thấy file',
            'file.array' => 'lỗi file không phải array',
            'file.min' => 'array ít nhất là 1',
            'file.max' => 'array nhiều nhất là 4',
            'file.*.mimes' => 'Không đúng định dạng cần thiết',
            'file.*.max' => 'file không được vượt quá 2048Byte',
        );
        /// check người dùng đẩy lên upload có phải image hông
        if(FileController::isUploadImage($request)){
            /// đang upload image
            // $rules = [
            //     'file' => 'required|mimes:jpeg,png,jpg,gif,svg'
            // ];
            // $message = [
            //     'file.mimes' => 'lỗi image upload không đúng định dạng',
            //     'file.required' => 'lỗi image required'
            // ];
            $rules = array( 
                'file' => [ "required" ], // , "array", "min:1", "max:6"
                'file.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
            );
            $message = array( 
                'file.required' => 'lỗi không tìm thấy file',
                'file.array' => 'lỗi file không phải array',
                'file.min' => 'array ít nhất là 1',
                'file.max' => 'array nhiều nhất là 4',
                'file.*.mimes' => 'Không đúng định dạng cần thiết',
                'file.*.image' => 'Không đúng định dạng ảnh',
                'file.*.max' => 'file không được vượt quá 2048Byte',
            );
        }
        // validator Rules
        $validator = Validator::make($request->all(), $rules, $message);

        // Check validation fail
        if ($validator->fails()){
            //Error do your staff
            $error = $validator->errors()->getMessages();
            // $error = [
            //     'error' => $validator->messages(),
            // ];
            return response()
                    ->error('có lỗi validate trong controller', $error)
                    ->setStatusCode(Response::HTTP_BAD_REQUEST);
        }
        
        if(FileController::isUploadImage($request)){
            /// đang upload image
            // cho upload image
            $urls = $this->storeImage($request);
            $links = array_map(function($item){
                return [
                    "root" => $item,
                    'IMAGE_COMPRESS' => Route('IMAGE_COMPRESS', ['quality' => '50', 'imagePath' => $item ]),
                    'IMAGE_RESIZE' => Route('IMAGE_RESIZE', [ "size" => 'small', "type" => 'fit', 'imagePath' => $item ]),
                ];
            }, $urls );
        }else{
            $url = $this->storeFile($request); /// path file
            $links = $url;
        }
        return response()
                ->success('lưu trữ thành công', $links)
                ->setStatusCode(Response::HTTP_OK);
    }


    public static function storeImage(Request $request){

        $ROOT_IMAGE = "/images/";

        /// input data
        $type = $request->input('type');

        if(!$type){
            /// set default type 
            $type = Config::get('image.UPLOAD.MIXED');
        }
        
        $urlStorage = FileController::$ROOT_UPLOAD . $ROOT_IMAGE . strtolower($type) . "/";
        $savedDir   = public_path($urlStorage);

        if(!File::isDirectory($savedDir)){

            File::makeDirectory($savedDir, 0755, true, true);
        }

        $urls = [];

        if($request->has('file')) {
            foreach($request->file('file') as $file) {
                $fileName   = time().$file->getClientOriginalName();       /// $image->getClientOriginalExtension()
                $file->move($savedDir, $fileName);
                $urls[] = $urlStorage . $fileName;
            }
        }

        return $urls;
    }

    public static function storeFile(Request $request){

        $ROOT_FILE = "/files/";


        /// input data
        $type = $request->input('type');

        if(!$type){
            /// set default type 
            $type = Config::get('file.UPLOAD.MIXED');
        }
        
        $urlStorage = FileController::$ROOT_UPLOAD . $ROOT_FILE . strtolower($type) . "/";
        $savedDir   = public_path($urlStorage);
        
        if(!File::isDirectory($savedDir)){

            File::makeDirectory($savedDir, 0755, true, true);
        }

        $urls = [];
        if($request->has('file')) {
            foreach($request->file('file') as $file) {
                $fileName   = time().$file->getClientOriginalName();       /// $image->getClientOriginalExtension()
                $file->move($savedDir, $fileName);
                $urls[] = $urlStorage . $fileName;
            }
        }

        return $urls;
    }
}
