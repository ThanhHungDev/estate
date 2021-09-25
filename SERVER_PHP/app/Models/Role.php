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
        return $this->belongsToMany(Permission::class , 'permission_role', 'role_id', 'permission_id');
    }
    /*
     * laays list id permission thông qua bảng permission_role
     * */
    // public function arr_id_permission(){
    //     return $this->hasMany(PermissionRole::class , 'role_id');
    // }
}
