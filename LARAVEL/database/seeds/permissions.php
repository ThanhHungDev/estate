<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class permissions extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('permissions')->insert(
            [
                [  'id' => 1, 'name' => 'view' ],
                [  'id' => 2, 'name' => 'insert' ],
                [  'id' => 3, 'name' => 'edit' ],
                [  'id' => 4, 'name' => 'delete' ],
                [  'id' => 5, 'name' => 'censor' ],
                [  'id' => 6, 'name' => 'permission' ],
                [  'id' => 7, 'name' => 'outlet' ],
                [  'id' => 8, 'name' => 'custommer' ]
            ]
        );
    }
}
