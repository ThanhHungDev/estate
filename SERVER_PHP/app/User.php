<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Config;

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
