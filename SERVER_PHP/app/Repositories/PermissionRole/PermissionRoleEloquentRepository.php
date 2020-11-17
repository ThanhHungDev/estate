<?php
namespace App\Repositories\PermissionRole;

use App\Repositories\EloquentRepository;

class PermissionRoleEloquentRepository extends EloquentRepository
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return \App\Models\PermissionRole::class;
    }

}