<?php

namespace App\Models;

use App\Helpers\SupportString;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function getName( $limit = 10, $ellipsis = '...' ){

        if( $this->name ){
            return SupportString::limitText( $this->name, $limit, $ellipsis );
        }
        return null;
    }

    /*
     * từ bảng user là 1 -> 1 role,
     * nghĩa là ta có 1 user (id, role_id,...) thì ta join = với roles(id, name , type) trong đó type quy định là user hay admin
     * ta lấy được roles tương ứng!
     * */
    public function role(){
        return $this->belongsTo(Role::class, 'role_id', 'id');
    }
    /*
     * từ bảng user chúng ta có thể check xem 1 role có quyền {name-permission} không?
     * **/
    public function checkPermission($permission){

        $role            = $this->role;
        if(!$role){
            return false;
        }
        $permission_data = $role->permission;

        // foreach($permission_data as $key => $value){
        //     $data[] = $value->name;
        // }
        // if(in_array($permission , $data)) 
        //     return true;
        if($permission_data->contains('name' , $permission)) 
            return true;
        return false;
    }
}
