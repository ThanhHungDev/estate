<?php
namespace App\Repositories\Picture;

use App\Repositories\EloquentRepository;

class PictureEloquentRepository extends EloquentRepository
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return \App\Models\Picture::class;
    }
    
    public function findPictureKey( $key ){

        return $this->_model->where('key', trim($key))->first();
    }
}