<?php

return [
    'LOGIN_ADMIN_SUCCESS' => "LOGIN_ADMIN_SUCCESS",
    'LOGIN_ERROR'         => "LOGIN_ERROR",
    'REGISTER_ERROR'      => "LOGIN_ERROR",
    'FORGOT_ERROR'        => "FORGOT_ERROR",
    'SAVE_ERROR'          => "SAVE_ERROR",
    'SAVE_SUCCESS'        => "SAVE_SUCCESS",
    /*
    |--------------------------------------------------------------------------
    | Role of user
    |--------------------------------------------------------------------------
    |
    */
    'SALE_TYPE' => [
        'DEFAULT' => 1,
        'STAFF'   => 2,
        'OWNER'   => 3,
    ],
    'ROLE' => [
        'ADMIN'    => 1,
        'USER'     => 2,
    ],
    'USER_TYPE' => [
        'PERSON'  => 1,
        'COMPANY' => 2,
    ],
    'POST_TYPE' => [
        'BUY'   => 1,
        'SALE'  => 2,
        'LEASE' => 3,
        'RENT'  => 4
    ],
    'GALARIES' => [
        'DEFAULT' => 1,
        'POST'    => 2,
    ],

    'LIMIT' => 10,
    'MAX_COUNTER_NOTIFY' => 5,
    'MAX_COUNTER_MESSAGE' => 9,
    'TOKEN_COOKIE_NAME' => 'TOKEN_COOKIE_NAME',

    'DIRECTION' => [
        'DEFAULT'    => [ 'VALUE' => 1, 'TEXT' => 'Chọn hướng' ],
        'EAST'       => [ 'VALUE' => 2, 'TEXT' => 'Hướng Đông' ],1,   /// đông
        'NORTH_EAST' => [ 'VALUE' => 3, 'TEXT' => 'Hướng Đông Bắc' ], // đông bắc
        'SOUTH_EAST' => [ 'VALUE' => 4, 'TEXT' => 'Hướng Đông Nam' ],   // đông nam
        'WEST'       => [ 'VALUE' => 5, 'TEXT' => 'Hướng Tây' ],   /// tây
        'NORTH_WEST' => [ 'VALUE' => 6, 'TEXT' => 'Hướng Tây Bắc' ],   // tây bắc
        'SOUTH_WEST' => [ 'VALUE' => 7, 'TEXT' => 'Hướng Tây Nam' ],   // tây nam,
        'SOUTH'      => [ 'VALUE' => 8, 'TEXT' => 'Hướng Nam' ],    /// nam
        'NORTH'      => [ 'VALUE' => 9, 'TEXT' => 'Hướng Bắc' ],   /// bắc
    ],
    'BALCONY' => [
        'DEFAULT'    => [ 'VALUE' => 1, 'TEXT' => 'Chọn hướng' ],
        'EAST'       => [ 'VALUE' => 2, 'TEXT' => 'Hướng Đông' ],1,   /// đông
        'NORTH_EAST' => [ 'VALUE' => 3, 'TEXT' => 'Hướng Đông Bắc' ], // đông bắc
        'SOUTH_EAST' => [ 'VALUE' => 4, 'TEXT' => 'Hướng Đông Nam' ],   // đông nam
        'WEST'       => [ 'VALUE' => 5, 'TEXT' => 'Hướng Tây' ],   /// tây
        'NORTH_WEST' => [ 'VALUE' => 6, 'TEXT' => 'Hướng Tây Bắc' ],   // tây bắc
        'SOUTH_WEST' => [ 'VALUE' => 7, 'TEXT' => 'Hướng Tây Nam' ],   // tây nam,
        'SOUTH'      => [ 'VALUE' => 8, 'TEXT' => 'Hướng Nam' ],    /// nam
        'NORTH'      => [ 'VALUE' => 9, 'TEXT' => 'Hướng Bắc' ],   /// bắc
    ],


    'RANGE-PRICE' => [
        '1'  => [ 'text' => 'Khoảng giá', 'min' => null, 'max' => null ],
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
    ],
    'FACADE' => [
        '0' => 'Chọn diện tích mặt tiền',
        '1' => '3 - 4 m',
        '2' => '4 - 5 m',
        '3' => '5 - 6 m',
        '4' => '6 - 7 m',
        '5' => '7 - 8 m',
        '6' => '8 - 9 m',
        '7' => '9 - 10 m',
        '8' => '10 - 15 m',
        '9' => '15 - 20 m',
        '10' => '20 - 30 m',
        '11' => '30 - 50 m',
        '12' => '>= 50 m'
    ],
];
