<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class roles extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert(
            [
                [  'id' => 1, 'name' => 'supper admin', 'type' => 'manager' ],
                [  'id' => 2, 'name' => 'admin', 'type' => 'admin' ],
                [  'id' => 3, 'name' => 'user sales', 'type' => 'outlet' ],
                [  'id' => 4, 'name' => 'user shopper', 'type' => 'custommer' ],
            ]
        );
    }
}
