<?php
namespace App\Repositories\Role;

use App\Repositories\EloquentRepository;

class RoleEloquentRepository extends EloquentRepository
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return \App\Models\Role::class;
    }
    
}