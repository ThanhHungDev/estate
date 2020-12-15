<?php
return [
    
    'LOGIN_ADMIN_SUCCESS' => "LOGIN_ADMIN_SUCCESS",
    'LOGIN_ERROR'         => "LOGIN_ERROR",
    'REGISTER_ERROR'      => "LOGIN_ERROR",
    'FORGOT_ERROR'        => "FORGOT_ERROR",
    'SAVE_ERROR'          => "SAVE_ERROR",
    'SAVE_SUCCESS'        => "SAVE_SUCCESS",
    'TYPE_SAVE'           => [
        'PUBLIC'     => 1,
        'ADMIN_READ' => 2,
    ],
    'TYPE_OPTION'   => [
        'SINGLE' => 1,
        'TEXT-HTML' => 2
    ],
    'TYPE-POST' => [
        'PAGE' => 2,
        'POST'  => 1,
    ],
    'TYPE-PERMISSION' => [
        'SUPPER-ADMIN' => 'manager',
        'ADMIN'        => 'admin',
        'USER-SALES'   => 'user sales',
        'USER-SHOPPER' => 'custommer'
    ],
    'ROLE' => [
        'SALER' => 3,
        'CUSTOMMER' => 4,
    ],
    'BG_HOME_SEARCH' => '/images/slider/home-realtor-main-bg.jpg',

    'CACHES' => [
        'LOCATION' => [
            'PROVINCE' => 'PROVINCE',
            'DISTRICT' => 'DISTRICT',
            'COMMUNE'  => 'COMMUNE'
        ]
    ],
    'RANGE-PRICE' => [
        '2'  => [ 'text' => '&lt; 500 triệu', 'min' => null, 'max' => null ],
        '3'  => [ 'text' => '500 - 800 triệu', 'min' => null, 'max' => null ],
        '4'  => [ 'text' => '800 triệu - 1 tỷ', 'min' => null, 'max' => null ],
        '5'  => [ 'text' => '1 - 2 tỷ', 'min' => null, 'max' => null ],
        '6'  => [ 'text' => '2 - 3 tỷ', 'min' => null, 'max' => null ],
        '7'  => [ 'text' => '3 - 5 tỷ', 'min' => null, 'max' => null ],
        '8'  => [ 'text' => '5 - 7 tỷ', 'min' => null, 'max' => null ],
        '9'  => [ 'text' => '7 - 10 tỷ', 'min' => null, 'max' => null ],
        '10' => [ 'text' => '10 - 20 tỷ', 'min' => null, 'max' => null ],
    ],
    'RANGE-AREA' => [
        '0'  => [ 'text' => 'Chọn diện tích', 'min' => null, 'max' => null ],
        '1'  => [ 'text' => '&lt;= 30 m2', 'min' => null, 'max' => 30 ],
        '2'  => [ 'text' => '30 - 50 m2', 'min' => 30, 'max' => 50 ],
        '3'  => [ 'text' => '50 - 80 m2', 'min' => 50, 'max' => 80 ],
        '4'  => [ 'text' => '80 - 100 m2', 'min' => 80, 'max' => 100 ],
        '5'  => [ 'text' => '100 - 150 m2', 'min' => 100, 'max' => 150 ],
        '6'  => [ 'text' => '150 - 200 m2', 'min' => 150, 'max' => 200 ],
        '7'  => [ 'text' => '200 - 250 m2', 'min' => 200, 'max' => 250 ],
        '8'  => [ 'text' => '250 - 300 m2', 'min' => 250, 'max' => 300 ],
        '9'  => [ 'text' => '300 - 500 m2', 'min' => 300, 'max' => 500 ],
        '10' => [ 'text' => '&gt;= 500 m2', 'min' => 500, 'max' => null ],
    ] 
];