<?php 

namespace App\Factory;

interface FactoryModelInterface
{
    
    public function createDBModel();

    public function createPostModel();

    public function createPostTagActiveModel();

    public function createRatingModel();

    public function createTagModel();

    public function createTopicModel();

    public function createUserModel();

    public function createOptionModel();

    public function createRoleModel();

    public function createPermissionModel();

    public function createPermissionRoleModel();
}