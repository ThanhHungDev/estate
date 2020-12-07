<?php
namespace App\Repositories\Category;

use App\Repositories\EloquentRepository;

class CategoryEloquentRepository extends EloquentRepository
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return \App\Models\Category::class;
    }
}