<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class RequestTime extends Model
{
    protected $table = 'request_times';

    public $timestamps = false;

    protected $fillable = ['id', 'at_time', 'router', 'method', 'referer', 'uri' ,'route', 'request_id'];


    /**
     * là mối quan hệ dạng nhiều tới 1 ví dụ : 
     */
    public function request(){

        return $this->belongsTo( RequestInformation::class, 'request_id');
    }


    public function firstByRequestId($id){

        $filter = $this;
        $filter = $filter->where('request_id', $id);
        return $filter->first();
    }

    public function getRequestByDay($isGetRouterAdmin = 0 ){

        $filter = $this;
        $filter = $filter->select([
            '*',
            DB::raw("
            case 
                    when at_time >= (current_date - interval '1 day') then 1
                    when at_time >= (current_date - interval '6 day') then 7
                    when at_time >= (current_date - interval '29 day') then 30
                    else 100 end as bucket 
            ")
        ])
        ->leftjoin('request_informations', 'request_informations.id', '=', 'request_times.request_id')
        ->where('robot', '=', 0)
        ->orderBy('at_time', 'desc')
        ->orderBy('bucket', 'asc')
        ->orderBy('uri');

        if( !$isGetRouterAdmin ){
            /// nếu không get admin 
            $filter->where('router', 'NOT LIKE', '%ADMIN_%');
        }
        return $filter;
    }
}
