<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class lands extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('lands')->insert(
            [
                [ 'name' => "thổ cư", 'type' => 1 ],
                [ 'name' => "đất nền dự án", 'type' => 1 ],
                [ 'name' => "đất công nghiệp", 'type' => 1 ],
                [ 'name' => "đất nông nghiệp", 'type' => 1 ],
                [ 'name' => "chung cư", 'type' => 2 ],
                [ 'name' => "duplex", 'type' => 2 ],
                [ 'name' => "penhouse", 'type' => 2 ],
                [ 'name' => "dịch vụ mini", 'type' => 2 ],
                [ 'name' => "cư xá", 'type' => 2 ],
                [ 'name' => "officetel", 'type' => 2 ]
            ]
        );
    }
}
