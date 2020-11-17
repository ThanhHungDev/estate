<?php

namespace App\Factory;

use App\Factory\FactoryModelInterface;
use App\Repositories\DB\DBEloquentRepository;
use App\Repositories\Option\OptionEloquentRepository;
use App\Repositories\Permission\PermissionEloquentRepository;
use App\Repositories\PermissionRole\PermissionRoleEloquentRepository;
use App\Repositories\Post\PostEloquentRepository;
use App\Repositories\PostTagActive\PostTagActiveEloquentRepository;
use App\Repositories\Rating\RatingEloquentRepository;
use App\Repositories\Role\RoleEloquentRepository;
use App\Repositories\Tag\TagEloquentRepository;
use App\Repositories\Topic\TopicEloquentRepository;
use App\Repositories\User\UserEloquentRepository;

class BaseModel implements FactoryModelInterface{

    
    public static $DBModel;
    public static $PostModel;
    public static $PostTagActiveModel;
    public static $RatingModel;
    public static $TagModel;
    public static $TopicModel;
    public static $UserModel;
    public static $OptionModel;
    public static $RoleModel;
    public static $PermissionModel;
    public static $PermissionRoleModel;



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

    public function createRatingModel(){
        
        if(!self::$RatingModel){
            self::$RatingModel = new RatingEloquentRepository();
        }
        return self::$RatingModel;
    }

    public function createTagModel(){
        
        if(!self::$TagModel){
            self::$TagModel = new TagEloquentRepository();
        }
        return self::$TagModel;
    }


    public function createTopicModel(){

        if(!self::$TopicModel){
            self::$TopicModel = new TopicEloquentRepository();
        }
        
        return self::$TopicModel;
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
}