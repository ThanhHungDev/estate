<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Commune extends Model
{
    protected $table = 'communes';
    public $timestamps = false;

    public function district(){

        return $this->belongsTo( District::class, 'district_id');
    }
}
