<?php
namespace App\Repositories\Commune;

use App\Repositories\EloquentRepository;

class CommuneEloquentRepository extends EloquentRepository
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return \App\Models\Commune::class;
    }
}