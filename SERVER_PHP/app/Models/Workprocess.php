<?php

namespace App\Models;

use App\Helpers\SupportString;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;

class Workprocess extends Model
{
    protected $table = 'workprocess';

    protected $fillable = ['id', 'title', 'type', 'excerpt_text', 'excerpt_html' ];

    public function getValue( $limit = 10, $ellipsis = '...' ){

        if( $this->title ){
            return SupportString::limitText( $this->title, $limit, $ellipsis );
        }
        return null;
    }

    public function getExcerpt( $limit = 300, $ellipsis = '...' ){

        if( $this->type == Config::get('constant.TYPE_OPTION.SINGLE') ){
            return SupportString::limitText( $this->excerpt_text, $limit, $ellipsis );
        }
        return $this->excerpt_html;
    }
}
