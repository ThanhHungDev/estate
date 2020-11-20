<?php
namespace App\Repositories\User;

use App\Repositories\EloquentRepository;

class UserEloquentRepository extends EloquentRepository
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return \App\Models\User::class;
    }


    
    public function getUserByEmail( $email ){
        
        return $this->_model->where('email', $email )->first();
    }

    public function getUserByCondition( $condition ){

        
        $filter = $this->_model->select(["*"]);
        if( isset($condition['ignore']) ){

            $filter = $filter->whereNotIn("id", $condition['ignore'] );
        }
        if( isset($condition['user']) ){

            $filter = $filter->where("email", $condition['user'])
                                ->orWhere("id", $condition['user']);
        }
        
        if( isset($condition['orderby']) ){
            
            $filter = $filter->orderBy($condition['orderby']['field'], $condition['orderby']['type']);
        }
        if( isset($condition['role']) ){

            $filter = $filter->where('role_id', $condition['role']);
        }
        
        return $filter;
    }
    
}