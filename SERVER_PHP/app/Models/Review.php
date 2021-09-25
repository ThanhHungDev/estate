<?php

namespace App\Models;

use App\Helpers\SupportString;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $table = 'reviews';

    protected $fillable = ['id', 'avatar', 'topic', 'excerpt', 'author' ];


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
