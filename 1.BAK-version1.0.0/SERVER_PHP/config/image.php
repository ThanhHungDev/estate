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

    'SIZES' => [
        'icon'            => [35, 35],
        'logo'            => [50, 50],
        'post'        => [ 300, 150 ],
        'small'        => [ 120, 80 ],
        'home-product' => [ 400, 400 ],
    ],
    'AVATAR' => env('AVATAR_DEFAULT', '/images/avatar.jpg'),
    'BACKGROUND' => env('BACKGROUND_DEFAULT', '/images/background/flores-amarillas-wallpaper.jpeg'),
    'UPLOAD' => [
        'AVATAR'     => 'avatar',
        'POST'       => 'post',
        'BACKGROUND' => 'background',
        'MIXED'      => 'mixed',
        'CHAT'       => 'chat',
    ],
    'EXTENTION_CONVERTOR' => '.webp',


];

