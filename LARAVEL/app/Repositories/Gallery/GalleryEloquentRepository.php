<?php
namespace App\Repositories\Gallery;

use App\Repositories\EloquentRepository;

class GalleryEloquentRepository extends EloquentRepository
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return \App\Models\Gallery::class;
    }
    
    
}