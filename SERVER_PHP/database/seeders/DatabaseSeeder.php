<?php

namespace Database\Seeders;

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
        // \App\Models\User::factory(10)->create();
        $this->call(sliders::class);
        $this->call(workprocess::class);
        $this->call(reviews::class);
        $this->call(users::class);
        $this->call(districts::class);
        $this->call(communes::class);
        $this->call(categories::class);
        $this->call(products::class);
        $this->call(ptags::class);
        $this->call(product_tag_actives::class);
        $this->call(pictures::class);
        
        $this->call(options::class);
        $this->call(topics::class);
        $this->call(tags::class);
        $this->call(posts::class);
        $this->call(post_tag_actives::class);
        $this->call(ratings::class);
        $this->call(dummy::class);
    }
}
