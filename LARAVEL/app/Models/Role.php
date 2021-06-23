<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $table = 'roles';
    /*
     * lấy dữ liệu permission
     * */
    public function permission(){
        return $this->belongsToMany(Permission::class , 'permission_roles', 'role_id', 'permission_id');
    }
    
}
