<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\DB;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;


    protected function checkSlugExist( $slug = '' ){

        $schemas = DB::table(DB::raw("INFORMATION_SCHEMA.COLUMNS"))->where(function ($query) {
            $query->where('column_name', '=', 'slug')
                  ->orWhere('column_name', '=', 'x___slug');
        })->where('table_schema', 'public')->select(['table_name', 'column_name'])->get();
        
        // 
        // table_name:"provinces"
        // column_name:"slug"

        foreach( $schemas as $schema ){
            if( 
                DB::table(DB::raw($schema->table_name))
                    ->where(DB::raw($schema->column_name), $slug )
                    ->first() 
            ){
                /// đúng => tồn tại
                return $schema;
            }
        }
        return false;
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
