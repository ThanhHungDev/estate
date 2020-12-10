<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(users::class);
        $this->call(provinces::class);
        $this->call(districts::class);
        $this->call(communes::class);
        // $this->call(options::class);
        // $this->call(permissions::class);
        // $this->call(roles::class);
        // $this->call(permission_roles::class);
        // $this->call(categories::class);
        // $this->call(lands::class);
        // $this->call(tags::class);
    }
}
