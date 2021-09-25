<?php

namespace App\Models;

use App\Helpers\SupportString;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Iplogin extends Model
{
    protected $table = 'iplogins';

    protected $fillable = ['id', 'ip', 'block', 'mail' ];


    public function firstIploginByIp($ip){

        $filter = $this->where('ip', $ip )->first();
        return $filter;
    }

    public function updateIploginByIp($ip, $type = 0){
        /// nếu type = 0 => update block vê 0
        /// ngược lại block += 1
        $filter = $this;

        $filter = $filter->where('ip', $ip )->first();
        if($type){
            /// update += 1
            $filter->block += 1; 
        }else{
            $filter->block = 0;
        }
        $filter->save();
        return true;
    }

    public function updateMailNowIploginByIp($ip ){

        $filter = $this;

        $filter = $filter->where('ip', $ip )->first();
        $filter->mail = Carbon::now();
        $filter->save();
        return true;
    }
}
