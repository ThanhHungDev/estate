<?php
namespace App\Repositories\PostTagActive;

use App\Repositories\EloquentRepository;

class PostTagActiveEloquentRepository extends EloquentRepository
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return \App\Models\PostTagActive::class;
    }

    
}