<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Role of user
    |--------------------------------------------------------------------------
    |
    */

    'ROLE' => [
        'ADMIN'  => 1,
        'POSTER' => 2,
        'FINDER' => 3,
    ],
    'GALARIES' => [
        'DEFAULT' => 1,
        'POST'    => 2,
    ],

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
];
