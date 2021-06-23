<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Image Driver
    |--------------------------------------------------------------------------
    |
    | Intervention Image supports "GD Library" and "Imagick" to process images
    | internally. You may choose one of them according to your PHP
    | configuration. By default PHP's "GD Library" implementation is used.
    |
    | Supported: "gd", "imagick"
    |
    */

    'driver' => 'gd',
    
    'GALARIES' => [
        "default" => 1 ,
        "posts" => 2,
    ],
    'SIZES' => [
        'icon' => [35, 35],
        'logo' => [50, 50],
        'thumbnail' => [150, 150],
        'medium' => [300, 300],
        'largest' => [600, 600],
    ]

];
