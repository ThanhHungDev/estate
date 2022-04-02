<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Google_Client;
use Google_Service_Drive;
use League\Flysystem\Filesystem;
use Hypweb\Flysystem\GoogleDrive\GoogleDriveAdapter;
use Illuminate\Support\Facades\Storage;

class GoogleDriveServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        Storage::extend('google', function($app, $config) {
            $client = new Google_Client();
            $client->setClientId($config['clientId']);
            $client->setClientSecret($config['clientSecret']);
            $client->refreshToken($config['refreshToken']);
            $service = new Google_Service_Drive($client);
 
            $options = [];
            if (isset($config['teamDriveId'])) {
                $options['teamDriveId'] = $config['teamDriveId'];
            }
 
            $adapter = new GoogleDriveAdapter($service, $config['folderId'], $options);
 
            return new Filesystem($adapter);
        });
        // \Storage::extend('google', function ($app, $config) {
        //     $client = new \Google_Client();
        //     $client->setClientId($config['clientId']);
        //     $client->setClientSecret($config['clientSecret']);
        //     $client->refreshToken($config['refreshToken']);

        //     return new \Google_Service_Drive($client);
        // });
        // Get files

        // Để get files thì chúng ta cần có fileId của file trên google drive. 
        // Việc get files này thì có thể get được tất cả các loại file từ định dạng image, doc, excel.

        // $driveService = Storage::disk('google');
        // $file = $driveService->files->get($fileId);

        // Get list files

        // Để get list files từ một folder cụ thể. $folderId sẽ là ID của folder chứa các files mà bạn muốn lấy về.

        // $driveService = Storage::disk('google');
        // $query = "'" . $folderId . "' in parents and trashed=false";

        // $optParams = [
        //     'fields' => 'nextPageToken, files(id, name)',
        //     'q' => $query
        // ];

        // $results = $driveService->files->listFiles($optParams);
    }
}
