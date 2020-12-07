<?php 

namespace App\Factory;

interface FactoryModelInterface
{
    
    public function createDBModel();

    public function createPostModel();

    public function createPostTagActiveModel();

    public function createTagModel();

    public function createUserModel();

    public function createOptionModel();

    public function createRoleModel();

    public function createPermissionModel();

    public function createPermissionRoleModel();

    public function createCategoriesModel();
}