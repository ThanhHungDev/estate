<?php
namespace App\Repositories\District;

use App\Repositories\EloquentRepository;

class DistrictEloquentRepository extends EloquentRepository
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return \App\Models\District::class;
    }
}