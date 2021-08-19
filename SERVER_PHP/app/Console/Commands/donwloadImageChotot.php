<?php

namespace App\Console\Commands;

use App\Models\ApartmentProject;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class donwloadImageChotot extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:download-image';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Download image cho tot';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $description = ' Command Run Download image cho tot';
        $apartmentProject = ApartmentProject::whereNotNull('images')->first();
        $images = json_decode($apartmentProject->images);
        if( count($images) > 0 ){
            /// download image to storage
            $urls = array_map(function( $item ) { return $item->url; }, $images);

            $publicPath = '/apartment/';
            $savedDir = public_path($publicPath);

            if(!File::isDirectory($savedDir)){

                File::makeDirectory($savedDir, 0755, true, true);
            }
            
            //// add wwrong
            $filesName = $this->multipleDownload($urls, $savedDir);
            /// update
            for ($i=0; $i < count($images); $i++) { 
                # code...
                if(getimagesize(public_path($publicPath. '/' . $filesName[$i]))){
                    $images[$i]->url = $publicPath. '/' . $filesName[$i];
                    $images[$i]->downloaded = 1;
                }else{
                    $images[$i]->downloaded = 0;
                }
            }
        }
        
        $this->info( $this->signature . "\n". $description);
    }

    
    function multipleDownload(array $urls, $save_path = '/tmp') {

        $multi_handle = curl_multi_init();
        $file_pointers = [];
        $curl_handles = [];

        $filesName = [];

        // Add curl multi handles, one per file we don't already have
        foreach ($urls as $key => $url) {
            $file = $save_path . '/' . basename($url);
            $filesName[$key] = basename($url);

            /// check file exist
            if(File::isFile($file)){
                // remove file
                File::delete($file);
            }
            $curl_handles[$key] = curl_init($url);
            $file_pointers[$key] = fopen($file, "w");
            curl_setopt($curl_handles[$key], CURLOPT_FILE, $file_pointers[$key]);
            curl_setopt($curl_handles[$key], CURLOPT_HEADER, 0);
            curl_setopt($curl_handles[$key], CURLOPT_CONNECTTIMEOUT, 60);
            curl_multi_add_handle($multi_handle,$curl_handles[$key]);
        }

        // Download the files
        do {
            curl_multi_exec($multi_handle,$running);
        } while ($running > 0);

        // Free up objects
        foreach ($urls as $key => $url) {
            curl_multi_remove_handle($multi_handle, $curl_handles[$key]);
            curl_close($curl_handles[$key]);
            fclose ($file_pointers[$key]);
        }
        curl_multi_close($multi_handle);
        return $filesName;
    }
}