<?php

namespace App\Http\Controllers;

use App\Factory\FactoryModelInterface;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected $model = null;
    
    public function __construct(FactoryModelInterface $_model) 
    {
        $this->model = $_model;
    }

    protected function checkSlugExist( $slug = '' ){

        $exist = false;
        
        $exist = $this->model->createPostModel()->getBySlug( $slug );
        
        if( !$exist ){
            
            $exist = $this->model->createTagModel()->getBySlug($slug);
        }
        return $exist;
    }

    protected function checkEmailExist( $email = '' ){

        $exist = false;
        
        $exist = $this->model->createUserModel()->getUserByEmail( $email );
        return $exist;
    }

    public function slug($slug = null ){

        $exist = $this->checkSlugExist( $slug );
        
        $status = 404;
        $data = array(
            'message'   => 'chưa tồn tại slug: ' . $slug,
            'internal'  => 'chưa tồn tại slug'
        );
        if( $exist ){
            $status = 200;
            $data = array(
                'message'   => 'exist slug: ' . $slug,
                'internal'  => 'exist slug'
            );
        }
        return response()->json($data, $status);
    }
}
