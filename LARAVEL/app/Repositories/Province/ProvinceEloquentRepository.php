<?php
namespace App\Repositories\Province;

use App\Repositories\EloquentRepository;

class ProvinceEloquentRepository extends EloquentRepository
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return \App\Models\Province::class;
    }
}