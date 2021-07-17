<?php

namespace App\Models;

use App\Helpers\SupportString;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Config;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;

     /**
     * @return int
     */
    public function getJWTIdentifier() {
        
        return $this->getKey();
    }
    
    /**
     * @return array
     */
    public function getJWTCustomClaims() {
        return [
            "iss"          => "http://localhost",
            'id'           => $this->id,
            'name'         => $this->name,
            'email'        => $this->email,
            'avatar'       => $this->avatar,
            'role_id'      => $this->role_id,
            'sale_type'    => $this->sale_type,
            'phone_verify' => $this->phone_verify,
            'time_verify'  => $this->time_verify,
        ];
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
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

    // /*
    //  * từ bảng user là 1 -> 1 role,
    //  * nghĩa là ta có 1 user (id, role_id,...) thì ta join = với roles(id, name , type) trong đó type quy định là user hay admin
    //  * ta lấy được roles tương ứng!
    //  * */
    // public function role(){
    //     return $this->belongsTo(Role::class, 'role_id', 'id');
    // }
    // /*
    //  * từ bảng user chúng ta có thể check xem 1 role có quyền {name-permission} không?
    //  * **/
    // public function checkPermission($permission){

    //     $role            = $this->role;
    //     if(!$role){
    //         return false;
    //     }
    //     $permission_data = $role->permission;

    //     // foreach($permission_data as $key => $value){
    //     //     $data[] = $value->name;
    //     // }
    //     // if(in_array($permission , $data)) 
    //     //     return true;
    //     if($permission_data->contains('name' , $permission)) 
    //         return true;
    //     return false;
    // }

    public function getNameTagLimited(){
        return '@' . str_replace(' ', '_', $this->name);
    }

    public function getTypeUser(){
        if( $this->role_id == Config::get('constant.ROLE.CUSTOMER') ){
            /// người mua
            return 'Khách hàng';
        }
        if( $this->role_id == Config::get('constant.ROLE.ADMIN') ){
            return 'Admin';
        }
        if( $this->role_id == Config::get('constant.ROLE.SALER') ){

            if( $this->role_id == Config::get('constant.SALE_TYPE.DEFAULT') ){
                return 'Chưa thiết lập';
            }
            if( $this->role_id == Config::get('constant.SALE_TYPE.STAFF') ){
                return 'Nhân viên bds';
            }
            if( $this->role_id == Config::get('constant.SALE_TYPE.OWNER') ){
                return 'Chủ nhà';
            }
        }
        return null;
    }
}
