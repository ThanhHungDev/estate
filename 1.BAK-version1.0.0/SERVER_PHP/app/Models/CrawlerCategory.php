<?php

namespace App\Models;

use App\Helpers\SupportString;
use Illuminate\Database\Eloquent\Model;

class CrawlerCategory extends Model
{
    /// table này để lưu dữ liệu của tất cả link và content link tương ứng 
    protected $table = 'crawlercategories';

    protected $fillable = ['fetch_link', 'content' ];
}
