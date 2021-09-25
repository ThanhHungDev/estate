<?php

namespace App\Models;

use App\Helpers\SupportString;
use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
    protected $table = 'sliders';

    protected $fillable = ['id', 'src', 'alt', 'topic', 'excerpt', 'title', 'content' ];


    public function getName( $limit = 10, $ellipsis = '...' ){

        if( $this->title ){
            return SupportString::limitText( $this->title, $limit, $ellipsis );
        }
        return null;
    }

    public function getExcerpt( $limit = 10, $ellipsis = '...' ){

        if( $this->excerpt ){
            return SupportString::limitText( $this->excerpt, $limit, $ellipsis );
        }
        return null;
    }

}
