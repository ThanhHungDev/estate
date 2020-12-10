<?php

namespace App\Factory;

use App\Factory\FactoryModelInterface;
use App\Repositories\Category\CategoryEloquentRepository;
use App\Repositories\Commune\CommuneEloquentRepository;
use App\Repositories\DB\DBEloquentRepository;
use App\Repositories\District\DistrictEloquentRepository;
use App\Repositories\Option\OptionEloquentRepository;
use App\Repositories\Permission\PermissionEloquentRepository;
use App\Repositories\PermissionRole\PermissionRoleEloquentRepository;
use App\Repositories\Post\PostEloquentRepository;
use App\Repositories\PostTagActive\PostTagActiveEloquentRepository;
use App\Repositories\Province\ProvinceEloquentRepository;
use App\Repositories\Rating\RatingEloquentRepository;
use App\Repositories\Role\RoleEloquentRepository;
use App\Repositories\Tag\TagEloquentRepository;
use App\Repositories\Topic\TopicEloquentRepository;
use App\Repositories\User\UserEloquentRepository;

class BaseModel implements FactoryModelInterface{

    
    public static $DBModel;
    public static $PostModel;
    public static $PostTagActiveModel;
    public static $TagModel;
    public static $UserModel;
    public static $OptionModel;
    public static $RoleModel;
    public static $PermissionModel;
    public static $PermissionRoleModel;
    public static $CategoryModel;
    public static $ProvinceModel;
    public static $CommuneModel;
    public static $DistrictModel;



    public function createDBModel(){

        if(!self::$DBModel){
            self::$DBModel = new DBEloquentRepository();
        }
        
        return self::$DBModel;
    }

    public function createPostModel(){
        
        if(!self::$PostModel){
            self::$PostModel = new PostEloquentRepository();
        }
        return self::$PostModel;
    }

    public function createPostTagActiveModel(){
        
        if(!self::$PostTagActiveModel){
            self::$PostTagActiveModel = new PostTagActiveEloquentRepository();
        }
        return self::$PostTagActiveModel;
    }

    public function createTagModel(){
        
        if(!self::$TagModel){
            self::$TagModel = new TagEloquentRepository();
        }
        return self::$TagModel;
    }


    public function createUserModel(){
        
        if(!self::$UserModel){
            self::$UserModel = new UserEloquentRepository();
        }
        return self::$UserModel;
    }


    public function createOptionModel(){
        
        if(!self::$OptionModel){
            self::$OptionModel = new OptionEloquentRepository();
        }
        return self::$OptionModel;
    }

    public function createRoleModel(){
        
        if(!self::$RoleModel){
            self::$RoleModel = new RoleEloquentRepository();
        }
        return self::$RoleModel;
    }

    public function createPermissionModel(){
        
        if(!self::$PermissionModel){
            self::$PermissionModel = new PermissionEloquentRepository();
        }
        return self::$PermissionModel;
    }

    public function createPermissionRoleModel()
    {
        
        if(!self::$PermissionRoleModel){
            self::$PermissionRoleModel = new PermissionRoleEloquentRepository();
        }
        return self::$PermissionRoleModel;
    }

    public function createCategoriesModel()
    {
        
        if(!self::$CategoryModel){
            self::$CategoryModel = new CategoryEloquentRepository();
        }
        return self::$CategoryModel;
    }

    // public function createLocationModel(){

    //     if(!self::$LocationModel){
    //         self::$LocationModel = new LocationEloquentRepository();
    //     }
    //     return self::$LocationModel;
    // }

    public function createProvinceModel()
    {
        
        if(!self::$ProvinceModel){
            self::$ProvinceModel = new ProvinceEloquentRepository();
        }
        return self::$ProvinceModel;
    }

    public function createCommuneModel()
    {
        
        if(!self::$CommuneModel){
            self::$CommuneModel = new CommuneEloquentRepository();
        }
        return self::$CommuneModel;
    }

    public function createDistrictModel()
    {
        
        if(!self::$DistrictModel){
            self::$DistrictModel = new DistrictEloquentRepository();
        }
        return self::$DistrictModel;
    }
}