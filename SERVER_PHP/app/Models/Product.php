<?php

namespace App\Models;

use App\Helpers\ReadMoney;
use App\Helpers\SupportString;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;

class Product extends Model
{
    protected $table = 'products';
    protected $primaryKey = "id";
    public $incrementing = true;

    protected $fillable = ['id', 'user_id', 'category_id', 'commune_id', 'rating_id', 'rate_value', 'rate_review_body', 'title', 'slug', 'excerpt', 
        'content', 'background', 'thumbnail', 'public', 'site_name', 'ldjson', 'showto', 'howto',
        'image_seo', 'description_seo', 'type', 'stylesheet', 'javascript',
        'direction', 'direction_balcony', 'horizontal', 'square', 'price', 'unit_price', 'negotiate', 'extensions',
        'likes', //// danh sách user id đang likes
        'project_id', 'vertical', 'area', 'posttype',
    ];

    protected $casts = [
        'ldjson'     => 'array',
        'extensions' => 'array',
        'likes'      => 'array',
    ];

    public function getType(){

        if( $this->type && $this->type == Config::get('constant.TYPE-POST.POST') ){
            return 'POST';
        }
        return 'PAGE';
    }

    public function getTitleLocateCategory( $limit = 10, $ellipsis = '...' ){

        $title = $this->title;
        $commune = $this->commune;
        if( $commune ){
            $title = $title . " # " . $commune->name . ' ';
            $district = $commune->district;
            if( $district ){
                $title .= $district->name;
            }
        }else if( $category = $this->category ){
            $title = $title . " # " . $category->name ;
        }else{
            $title = $title . " # không có cate ";
        }

        if( $title ){
            return SupportString::limitText( $title, $limit, $ellipsis );
        }
        return null;
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

    public function getImages(){

        return Picture::where('key', $this->id)->where( 'gallery', Config::get("constant.GALARIES.PRODUCT") );
    }

    public function getStringNegotiate(){
        if( $this->negotiate == Config::get("constant.NEGOTIATE.YES.VALUE") ){
            return Config::get("constant.NEGOTIATE.YES.TEXT");
        }
        return Config::get("constant.NEGOTIATE.NO.TEXT");
    }

    public function getTooltipPrice(){
        if( $this->price ){
            $price = str_replace([".", "e", ","], "", $this->price );
            $unitPrice = SupportString::getRecordByValueConfig(Config::get("unit.PRICE"), $this->unit_price);

            if( $unitPrice['VALUE'] == Config::get("unit.PRICE.DEFAULT.VALUE") ){
                return ReadMoney::readDigit($price) . " " . $unitPrice['TEXT_CLIENT'];
            }
            return ReadMoney::readDigit( $price * $this->square ) . " " . $unitPrice['TEXT'];
        }
        return null;
    }

    public function getStringPrice(){
        if( $this->price ){
            $price = str_replace([".", "e", ","], "", $this->price );
            $unitPrice = SupportString::getRecordByValueConfig(Config::get("unit.PRICE"), $this->unit_price);

            if( $unitPrice['VALUE'] == Config::get("unit.PRICE.DEFAULT.VALUE") ){
                return number_format($price, 0, ',', ' ') . " " . $unitPrice['TEXT_CLIENT'];
            }
            return number_format($price * $this->square, 0, ',', ' ') . $unitPrice['TEXT'];
        }
        return null;
    }

    public function getPriceUnit( $ellipsis = null ){
        if( $this->price ){
            $price = str_replace([".", "e", ","], "", $this->price );
            $unitPrice = SupportString::getRecordByValueConfig(Config::get("unit.PRICE"), $this->unit_price);

            if( $unitPrice['VALUE'] == Config::get("unit.PRICE.DEFAULT.VALUE") ){
                return ReadMoney::readDigitToMoney($price) . " " . $unitPrice['TEXT_CLIENT'];
            }
            return ReadMoney::readDigitToMoney( $price * $this->square ) . " " . $unitPrice['TEXT'];
        }
        return $ellipsis;
    }

    public function getLocation($ellipsis = null){
        
        if( $this->commune_id ){
            return $this->commune->district->name . " " . $this->commune->name;
        }
        return $ellipsis;
    }
    public function getShortLocation(){
        
        if( $this->commune_id ){
            return $this->commune->name;
        }
        return null;
    }


    
    public function getDirection(){
        
        if( $this->direction  ){
            $direction = SupportString::getRecordByValueConfig(Config::get("constant.DIRECTION"), $this->direction);

            return $direction['TEXT_CLIENT'];
        }
        return "---";
    }
    // direction_balcony

    public function getHorizontal(){
        
        if( $this->horizontal ){
            return $this->horizontal . " mét";
        }
        return "---";
    }

    public function getNegotiate(){
        
        if( $this->negotiate && $this->negotiate == Config::get("constant.NEGOTIATE.YES.VALUE") ){
            return "Có thể thương lượng";
        }
        return "---";
    }
    

    public function getListExtensions($limit = 3 ){
        
        $lists = [];
        if( $this->extensions ){
            $extensions = $this->extensions;
            if( $this->type == Config::get('constant.TYPE-PRODUCT.LAND') ){
                unset($extensions['floors']);
                unset($extensions['wc']);
                unset($extensions['room']);
            }else{
                unset($extensions['residence']);
            }

            $index = 0;
            foreach ($extensions as $key => $extension) {
                $unsetListCss = '';
                if( $index ){
                    $unsetListCss = '<li style="list-style: none">|</li>';
                }
                if( $index == $limit ) break;
                $index++;
                $row = SupportString::getRecordByValueConfig(Config::get("constant.". strtoupper($key)), $extension);
                $lists[] = $unsetListCss . "<li>" . $row['TEXT_CLIENT'] . "</li>";
            }
            return join(" ", $lists);
        }
        for ($i=0; $i < 20; $i++) { 
            $lists[] = '<li> &nbsp;</li>';
        }
        return '<li style="list-style: none"> --- ' . join(" ", $lists) . ' </li>';
    }

    

    // public static function boot(){
        
    //     parent::boot();

    //     static::updating(function ($instance) {
    //         // update cache content
    //         $keys = [ static::class , $instance->slug ];
    //         Cache::put(implode(".", $keys ),$instance);
    //     });

    //     static::deleting(function ($instance) {
    //         // delete post cache
    //         $keys = [ static::class , $instance->slug ];
    //         Cache::forget(implode(".", $keys ));
    //     });
    // }

    /**
     * là mối quan hệ dạng nhiều nhiều
     */
    public function ptags(){

        return $this->belongsToMany( Ptag::class, 'product_tag_actives', 'product_id', 'ptag_id');
    }

    public function rateAuthor(){

        return $this->belongsTo( Rating::class, 'rating_id');
    }

    /**
     * là mối quan hệ dạng nhiều tới 1 ví dụ : 
     */
    public function category(){

        return $this->belongsTo( Category::class, 'category_id');
    }

    /**
     * là mối quan hệ dạng nhiều tới 1 ví dụ : 
     */
    public function commune(){

        return $this->belongsTo( Commune::class, 'commune_id');
    }


    















    public function getProductById( $id, $select = array() ){

        $filter = $this;

        if(!empty($select)){
            $filter = $filter->select($select);
        }
        
        $filter = $filter->where('id', $id )->first();
        return $filter;
    }

    public function getProductBySlug( $slug ){
        
        return $this->where('slug', $slug )->select([
            DB::raw("ldjson->>'showto' as showto"),
            DB::raw("ldjson->>'howto' as howto"),
            '*'
        ])->first();
    }

    public function getProductByCondition( $condition ){

        $mainTable = 'products';
        $filter = $this ->join('categories', 'products.category_id', "=", "categories.id")
                                ->select(["$mainTable.*", 'categories.name as category_name']);
        if( isset($condition['ignore']) ){

            $filter = $filter->whereNotIn("$mainTable.id", $condition['ignore'] );
        }
        if( isset($condition['public']) ){

            $filter = $filter->where("$mainTable.public", $condition['public']);
        }
        if( isset($condition['user_id']) ){

            $filter = $filter->where("$mainTable.user_id", $condition['user_id']);
        }
        
        if( isset($condition['category_id']) ){

            $filter = $filter->where('category_id', $condition['category_id'])
                                ->orderBy("category_id", "DESC")
                                ->orderBy("sort", "DESC");
        }
        if( isset($condition['orderby']) ){
            
            $filter = $filter->orderBy($mainTable . "." . $condition['orderby']['field'], $condition['orderby']['type']);
        }
        if( isset($condition['product']) ){

            $filter = $filter->where(function($query) use ($condition, $mainTable){
                $query->where("$mainTable.slug", $condition['product']);
                $query->orWhere("$mainTable.id", intval($condition['product']));
            });
        }
        if( isset($condition['category']) ){

            $filter = $filter->where('categories.id', intval($condition['category']));
        }

        return $filter;
    }

    public function getProductActiveByCondition(){

        return $this->where('public', Config::get('constant.TYPE_SAVE.PUBLIC'));
    }


    public function getProductRelationProductId( $ids ){

        return $this
        ->join('product_tag_actives as pta1', 'products.id', '=', 'pta1.product_id')
        ->join('product_tag_actives as pta2', 'pta1.ptag_id', '=', 'pta2.ptag_id')
        ->whereIn('pta2.product_id', $ids )
        ->whereNotIn('products.id', $ids )
        ->groupby('products.id')
        ->where('products.public', 1)
        ->orderBy('products.view', 'DESC')
        ->select("products.*");
    }


}
