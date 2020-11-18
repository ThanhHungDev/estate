<?php
namespace App\Repositories\DB;

use App\Repositories\EloquentRepository;
use Illuminate\Support\Facades\DB;

class DBEloquentRepository extends EloquentRepository
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return DB::class;
    }
    

    
}