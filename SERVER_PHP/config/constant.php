<?php

return [

    'TYPE_SAVE'           => [
        'PUBLIC'     => 1,
        'ADMIN_READ' => 2,
    ],
    'TYPE_OPTION'   => [
        'SINGLE'    => 1,
        'TEXT-HTML' => 2
    ],
    'TYPE-POST' => [
        'PAGE' => 2,
        'POST' => 1,
    ],
    'TYPE-PRODUCT' => [
        'HOUSE' => 2,
        'LAND' => 1,
    ],
    'SALE_TYPE' => [
        'DEFAULT' => 1,
        'STAFF'   => 2,
        'OWNER'   => 3,
    ],
    /// xài trong react
    'USER_TYPE' => [
        'PERSON'  => 1,
        'COMPANY' => 2,
    ],
    /// xài trong react
    'POST_TYPE' => [
        'BUY'   => 1,
        'SALE'  => 2,
        'LEASE' => 3,
        'RENT'  => 4
    ],
    'LDJSON' => [
        'HIDE' => 1,
        'SHOW' => 2,
    ],
    'MIN-SHOW-RATING-STAR' => 4,
    'TYPE-PERMISSION' => [
        'ADMIN' => 'admin',
        'USER'  => 'user'
    ],

    'LOGIN_ADMIN_SUCCESS' => "LOGIN_ADMIN_SUCCESS",
    'LOGIN_ERROR'         => "LOGIN_ERROR",
    'REGISTER_ERROR'      => "REGISTER_ERROR",
    'REGISTER_SUCCESS'    => "REGISTER_SUCCESS",
    'UPDATE_USER_ERROR'   => "UPDATE_USER_ERROR",
    'UPDATE_USER_SUCCESS' => "UPDATE_USER_SUCCESS",
    'FORGOT_ERROR'        => "FORGOT_ERROR",
    'SAVE_ERROR'          => "SAVE_ERROR",
    'SAVE_SUCCESS'        => "SAVE_SUCCESS",

    'SESSION__REDIRECT--URL'   => "SAVE_SUCCESS",
    'SESSION__REDIRECT--ROUTE' => "SAVE_SUCCESS",
    /*
    |--------------------------------------------------------------------------
    | Role of user
    |--------------------------------------------------------------------------
    |
    */
    'ID_ADMIN' => 1,
    'ROLE' => [
        'ADMIN'    => 1,
        'USER'     => 2,
    ],
    'TYPE_OPTION'   => [
        'SINGLE' => 1,
        'TEXT-HTML' => 2
    ],
    'GALARIES' => [
        'DEFAULT' => 1,
        'POST'    => 2,
        'PRODUCT' => 3,
    ],
    'LIMIT'               => 10,
    'MAX_COUNTER_NOTIFY'  => 5,
    'MAX_COUNTER_MESSAGE' => 9,
    'TOKEN_COOKIE_NAME'   => 'TOKEN_COOKIE_NAME',

    'NEGOTIATE' => [
        'YES' => [ 'VALUE' => 1, 'TEXT' => 'Có thương lượng' ],
        'NO' => [ 'VALUE' => 2, 'TEXT' => 'Không thương lượng' ],
    ],

    'FLOORS' => [
        'DEFAULT' => [ 'VALUE' => 0, 'TEXT' => 'Chọn số lầu', 'TEXT_CLIENT' => '---' ],
        'ONE'     => [ 'VALUE' => 1, 'TEXT' => 'Một lầu', 'TEXT_CLIENT' => 'Một lầu'  ],   /// đông
        'TWO'     => [ 'VALUE' => 2, 'TEXT' => 'Hai Lầu', 'TEXT_CLIENT' => 'Hai Lầu'  ],   // đông bắc
        'THREE'   => [ 'VALUE' => 3, 'TEXT' => 'Ba lầu', 'TEXT_CLIENT' => 'Ba lầu'  ],     // đông nam
        'FOUR'    => [ 'VALUE' => 4, 'TEXT' => 'Bốn lầu', 'TEXT_CLIENT' => 'Bốn lầu'  ],   /// tây
        'FIVE'    => [ 'VALUE' => 5, 'TEXT' => 'Năm lầu', 'TEXT_CLIENT' => 'Năm lầu'  ],   // tây bắc
    ],
    'WC' => [
        'DEFAULT' => [ 'VALUE' => 0, 'TEXT' => 'Chọn nhà vệ sinh', 'TEXT_CLIENT' => '---' ],
        'ONE'     => [ 'VALUE' => 1, 'TEXT' => 'Một nhà vệ sinh', 'TEXT_CLIENT' => 'Một nhà vệ sinh'  ],   /// đông
        'TWO'     => [ 'VALUE' => 2, 'TEXT' => 'Hai nhà vệ sinh', 'TEXT_CLIENT' => 'Hai nhà vệ sinh'  ],   // đông bắc
        'THREE'   => [ 'VALUE' => 3, 'TEXT' => 'Ba nhà vệ sinh', 'TEXT_CLIENT' => 'Ba nhà vệ sinh'  ],     // đông nam
        'FOUR'    => [ 'VALUE' => 4, 'TEXT' => 'Bốn nhà vệ sinh', 'TEXT_CLIENT' => 'Bốn nhà vệ sinh'  ],   /// tây
        'FIVE'    => [ 'VALUE' => 5, 'TEXT' => 'Năm nhà vệ sinh', 'TEXT_CLIENT' => 'Năm nhà vệ sinh'  ],   // tây bắc
    ],
    'BATHROOM' => [
        'DEFAULT' => [ 'VALUE' => 0, 'TEXT' => 'Chọn nhà tắm', 'TEXT_CLIENT' => '---' ],
        'ONE'     => [ 'VALUE' => 1, 'TEXT' => 'Một nhà tắm', 'TEXT_CLIENT' => 'Một nhà tắm'  ],
        'TWO'     => [ 'VALUE' => 2, 'TEXT' => 'Hai nhà tắm', 'TEXT_CLIENT' => 'Hai nhà tắm'  ],
        'THREE'   => [ 'VALUE' => 3, 'TEXT' => 'Ba nhà tắm', 'TEXT_CLIENT' => 'Ba nhà tắm'  ],
        'FOUR'    => [ 'VALUE' => 4, 'TEXT' => 'Bốn nhà tắm', 'TEXT_CLIENT' => 'Bốn nhà tắm'  ],
        'FIVE'    => [ 'VALUE' => 5, 'TEXT' => 'Năm nhà tắm', 'TEXT_CLIENT' => 'Năm nhà tắm'  ],
    ],

    'ROOM' => [
        'DEFAULT' => [ 'VALUE' => 0, 'TEXT' => 'Chọn số phòng ngủ', 'TEXT_CLIENT' => '---' ],
        'ONE'     => [ 'VALUE' => 1, 'TEXT' => 'Một phòng ngủ', 'TEXT_CLIENT' => 'Một phòng ngủ'  ],   /// đông
        'TWO'     => [ 'VALUE' => 2, 'TEXT' => 'Hai phòng ngủ', 'TEXT_CLIENT' => 'Hai phòng ngủ'  ],   // đông bắc
        'THREE'   => [ 'VALUE' => 3, 'TEXT' => 'Ba phòng ngủ', 'TEXT_CLIENT' => 'Ba phòng ngủ'  ],     // đông nam
        'FOUR'    => [ 'VALUE' => 4, 'TEXT' => 'Bốn phòng ngủ', 'TEXT_CLIENT' => 'Bốn phòng ngủ'  ],   /// tây
        'FIVE'    => [ 'VALUE' => 5, 'TEXT' => 'Năm phòng ngủ', 'TEXT_CLIENT' => 'Năm phòng ngủ'  ],   // tây bắc
    ],

    'LEGAL' => [
        'DEFAULT' => [ 'VALUE' => 0, 'TEXT' => 'Chưa có sổ', 'TEXT_CLIENT' => '---' ],
        'YES'     => [ 'VALUE' => 1, 'TEXT' => 'Đã có sổ hồng / đỏ', 'TEXT_CLIENT' => 'Đã có sổ hồng / đỏ'  ],   /// đông
    ],

    'RESIDENCE' => [
        'DEFAULT' => [ 'VALUE' => 0, 'TEXT' => 'Chưa có thổ cư', 'TEXT_CLIENT' => '---' ],
        'YES'     => [ 'VALUE' => 1, 'TEXT' => 'Đã có thổ cư', 'TEXT_CLIENT' => 'Đã có thổ cư'  ],   /// thổ cư
    ],

    'NOTARIZE' => [
        'DEFAULT' => [ 'VALUE' => 0, 'TEXT' => 'Thỏa thuận', 'TEXT_CLIENT' => '---' ],
        'YES'     => [ 'VALUE' => 1, 'TEXT' => 'Bao công chứng', 'TEXT_CLIENT' => 'Bao công chứng'  ],   /// thổ cư
    ],

    'DIRECTION' => [
        'DEFAULT'    => [ 'VALUE' => 1, 'TEXT' => 'Chọn hướng', 'TEXT_CLIENT' => '---' ],
        'EAST'       => [ 'VALUE' => 2, 'TEXT' => 'Hướng Đông', 'TEXT_CLIENT' => 'Hướng Đông'  ],   /// đông
        'NORTH_EAST' => [ 'VALUE' => 3, 'TEXT' => 'Hướng Đông Bắc', 'TEXT_CLIENT' => 'Hướng Đông Bắc'  ], // đông bắc
        'SOUTH_EAST' => [ 'VALUE' => 4, 'TEXT' => 'Hướng Đông Nam', 'TEXT_CLIENT' => 'Hướng Đông Nam'  ],   // đông nam
        'WEST'       => [ 'VALUE' => 5, 'TEXT' => 'Hướng Tây', 'TEXT_CLIENT' => 'Hướng Tây'  ],   /// tây
        'NORTH_WEST' => [ 'VALUE' => 6, 'TEXT' => 'Hướng Tây Bắc', 'TEXT_CLIENT' => 'Hướng Tây Bắc'  ],   // tây bắc
        'SOUTH_WEST' => [ 'VALUE' => 7, 'TEXT' => 'Hướng Tây Nam', 'TEXT_CLIENT' => 'Hướng Tây Nam'  ],   // tây nam,
        'SOUTH'      => [ 'VALUE' => 8, 'TEXT' => 'Hướng Nam', 'TEXT_CLIENT' => 'Hướng Nam'  ],    /// nam
        'NORTH'      => [ 'VALUE' => 9, 'TEXT' => 'Hướng Bắc', 'TEXT_CLIENT' => 'Hướng Bắc'  ],   /// bắc
    ],
    'BALCONY' => [
        'DEFAULT'    => [ 'VALUE' => 1, 'TEXT' => 'Chọn hướng', 'TEXT_CLIENT' => '---' ],
        'EAST'       => [ 'VALUE' => 2, 'TEXT' => 'Hướng Đông', 'TEXT_CLIENT' => 'Hướng Đông'  ],   /// đông
        'NORTH_EAST' => [ 'VALUE' => 3, 'TEXT' => 'Hướng Đông Bắc', 'TEXT_CLIENT' => 'Hướng Đông Bắc'  ], // đông bắc
        'SOUTH_EAST' => [ 'VALUE' => 4, 'TEXT' => 'Hướng Đông Nam', 'TEXT_CLIENT' => 'Hướng Đông Nam'  ],   // đông nam
        'WEST'       => [ 'VALUE' => 5, 'TEXT' => 'Hướng Tây', 'TEXT_CLIENT' => 'Hướng Tây'  ],   /// tây
        'NORTH_WEST' => [ 'VALUE' => 6, 'TEXT' => 'Hướng Tây Bắc', 'TEXT_CLIENT' => 'Hướng Tây Bắc'  ],   // tây bắc
        'SOUTH_WEST' => [ 'VALUE' => 7, 'TEXT' => 'Hướng Tây Nam', 'TEXT_CLIENT' => 'Hướng Tây Nam'  ],   // tây nam,
        'SOUTH'      => [ 'VALUE' => 8, 'TEXT' => 'Hướng Nam', 'TEXT_CLIENT' => 'Hướng Nam'  ],    /// nam
        'NORTH'      => [ 'VALUE' => 9, 'TEXT' => 'Hướng Bắc', 'TEXT_CLIENT' => 'Hướng Bắc'  ],   /// bắc
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
    'ACTIVITY' => [
        'DEACTIVE' => 1,
        'ACTIVE' => 2,
    ],
    /// message fetch in react
    'STATE__STATUS' => [ 
        'LOADDING' => 0,
        'SUSSESS'  => 1,
        'ERROR'    => 2,
    ]
];
