<?php 
namespace App\Helpers;

class SupportHtml{

    public static function style($path = null) {

        if(!$path){
            return null;
        }

        $filePath = public_path($path);
        $phpOutput = null;
        if (file_exists($filePath)){
            // ob_start();
            // echo('Hello, World!');
            // $php_output = ob_get_contents();
            // ob_end_clean();
            $phpOutput = file_get_contents($filePath);
        }
        return "<style>" .$filePath  . $phpOutput . "</style>";
        
    }
}


