<?php

namespace App\Models;

use App\Helpers\SupportString;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;

class Post extends Model
{
    protected $table = 'posts';

    protected $fillable = ['id', 'title', 'slug', 'stylesheet', 'javascript'];

    public function getType(){

        if( $this->type && $this->type == Config::get('constant.TYPE-POST.POST') ){
            return 'POST';
        }
        return 'PAGE';
    }

    public function getTitle( $limit = 10, $ellipsis = '...' ){

        if( $this->title ){
            return SupportString::limitText( $this->title, $limit, $ellipsis );
        }
        return null;
    }

    public function getDescriptionSeo( $limit = 10, $ellipsis = '...' ){

        if( $this->description_seo ){
            return SupportString::limitText( $this->description_seo, $limit, $ellipsis );
        }
        return null;
    }
}
