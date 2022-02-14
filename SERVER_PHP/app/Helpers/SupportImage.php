<?php 
namespace App\Helpers;

use Illuminate\Support\Facades\File;

class SupportImage{

    public static function multipleDownload(array $images, $publicPath = '/tmp') {

        
        $savedDir = public_path($publicPath);
        
        if(!File::isDirectory($savedDir)){

            File::makeDirectory($savedDir, 0755, true, true);
        }
        $multi_handle = curl_multi_init();
        $file_pointers = [];
        $curl_handles = [];
        // Add curl multi handles, one per file we don't already have
        foreach ($images as $key => $image) {
            $image->url = preg_replace('/^(http:\/\/|https:\/\/)(.+)(http:\/\/|https:\/\/)(.+)/i', '$1$4', $image->url);
            $image->basename = basename($image->url); /// basename là tên file edit lại để lất extention
            if (preg_match('/^https:\/\/cvt.vn\/(.+).(\d+)\/$/i', strtolower($image->url))){
                /// nếu image của cvt thì có dạng đặc biệt ví dụ: https://cvt.vn/threads/tex-pro-liquid-men-tieu-hoa-dang-nuoc-cho-tom-ca.1037624/
                /// nên sẽ lấy link là alt hoặc title gắn tạm vào
                $image->basename = basename($image->alt);
                
            }
            if (!pathinfo(strtolower($image->basename), PATHINFO_EXTENSION)) $image->basename .= ".jpeg";
            if(strpos($image->basename, "?") !== false) $image->basename = preg_replace('/\?.*/', '', $image->basename);
            $image->link = $publicPath . '/' . $image->basename;
            $file        = $savedDir . '/' . $image->basename;
            /// check file exist
            if(File::isFile($file)){
                // remove file
                File::delete($file);
            }
            // echo "Download image root : $image->url parse basename to : $image->basename \n";
            $curl_handles[$key] = curl_init($image->url);
            $file_pointers[$key] = fopen($file, "w");
            curl_setopt($curl_handles[$key], CURLOPT_FILE, $file_pointers[$key]);
            curl_setopt($curl_handles[$key], CURLOPT_HEADER, 0);
            curl_setopt($curl_handles[$key], CURLOPT_CONNECTTIMEOUT, 30);
            curl_multi_add_handle($multi_handle,$curl_handles[$key]);
        }
        // Download the files
        do {
            curl_multi_exec($multi_handle,$running);
        } while ($running > 0);
        // Free up objects
        foreach ($images as $key => $image) {
            curl_multi_remove_handle($multi_handle, $curl_handles[$key]);
            curl_close($curl_handles[$key]);
            fclose ($file_pointers[$key]);
        }
        curl_multi_close($multi_handle);
        return $images;
    }
}


