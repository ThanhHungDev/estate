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
    
    /**
     * @return array
     */
    public function getJWTCustomClaims() {
        $commune  = null;
        $province = null;
        $district = null;
        if( $this->commune_id ){
            // lấy ra district nhưng chưa chắc là có
            $commune  = $this->commune()->select(['id', 'name as text'])->first();
            $district = $this->commune->district()->select(['id', 'name as text'])->first();
            $province = $this->commune->district->province()->select(['id', 'name as text'])->first();
        }
        return [
            "iss"          => "http://localhost",
            'id'           => $this->id,
            'name'         => $this->name,
            'email'        => $this->email,
            'avatar'       => $this->avatar,
            'role_id'      => $this->role_id,
            'sale_type'    => $this->sale_type,
            'phone_verify' => $this->phone_verify,
            'commune_id'   => $this->commune_id,
            'district_id'  => $district ? $district->id : 0,
            'province_id'  => $province ? $province->id : 0,
            'commune'      => $commune  ? $commune->toArray()  : null,
            'district'     => $district ? $district->toArray() : null,
            'province'     => $province ? $province->toArray() : null,
            'street'       => $this->street,
            'home_number'  => $this->home_number,
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
        'commune_id', 'home_number', 'street', 'role', 'phone'
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
        $slug = SupportString::createSlug($this->name);
        return '@' . str_replace('-', '_', $slug);
    }

    public function getTypeUser(){
        if( $this->role_id == Config::get('constant.ROLE.USER') ){
            /// người mua
            return 'Khách hàng';
        }
        if( $this->role_id == Config::get('constant.ROLE.ADMIN') ){
            return 'Admin';
        }
        return null;
    }

    public function commune(){

        return $this->belongsTo( Commune::class, 'commune_id');
    }
}
