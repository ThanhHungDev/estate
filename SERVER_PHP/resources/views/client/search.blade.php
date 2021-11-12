@extends('client.layout.index')

@section('title', Config::get("app.name"))
@section('description', Config::get("app.description"))


@section('stylesheets')
<link rel="stylesheet" type="text/css" href="{{ asset('css/home.css' . Config::get('app.version'))}}"/>
<link rel="stylesheet" type="text/css" href="{{ asset('css/library/slick.css' . Config::get('app.version')) }}"/>
<link rel="stylesheet" type="text/css" href="{{ asset('css/library/slick-theme.css' . Config::get('app.version')) }}"/>
<link rel="stylesheet" type="text/css" href="{{ asset('css/library/lightgallery.css' . Config::get('app.version')) }}" />
@endsection


@section('javascripts')

<script type="text/javascript" src="{{ asset('/js/library/carousel.min.js' . Config::get('app.version')) }}"></script>
<script type="text/javascript" src="{{ asset('js/library/wow.min.js' . Config::get('app.version')) }}"></script>
<script type="text/javascript" src="{{ asset('js/library/slick.min.js' . Config::get('app.version')) }}"></script>
<script type="text/javascript" src="{{ asset('js/library/lightgallery.min.js' . Config::get('app.version')) }}"></script>
<script>
    
    function showLightGaleries(e){
        $(e).closest('.item').find(".lightgallery img").click();
    }
    var lightgalleries = document.getElementsByClassName("lightgallery");
    for (var i = 0; i < lightgalleries.length; i++){
        lightGallery(lightgalleries[i]);
    }

	$(document).ready(function(){
        $('#slider').slick({
            dots: true,
            infinite: true,
            arrows: false,
            speed: 300,
            autoplay: true,
            autoplaySpeed: 10000,
            slidesToShow: 1,
            slidesToScroll: 1,
        });




        
        var rating__custommer = document.getElementById("rating__custommer");
        if(rating__custommer){
            
            rating__custommer.addEventListener('lazybeforeunveil', function(e){
                console.log("rating__custommer");
                
                $("#rating__comment-owl").owlCarousel({
                    items : 3,
                    slideSpeed : 700,
                    nav: true,
                    autoplay: true,
                    autoplayHoverPause: true,
                    dots: true,
                    loop: true,
                    lazyLoad: true,
                    responsiveRefreshRate : true,
                    navText: false,/// ["<",">"],
                    responsive:{
                        0:{
                            items: 1
                        },
                        320:{
                            items: 1
                        },
                        480:{
                            items: 2
                        },
                        768:{
                            items: 3
                        },
                        992:{
                            items: 3
                        }
                    }
                
                })
            })
        }

    });
</script>
@endsection
@section('content')
<div class="content pb-4">

    
    <div class="container my-5">
        <form class="row d-flex justify-content-center" action="{{ Route("PRODUCT_SEARCH") }}" autocomplete="off">
            <div class="col-md-10">
                <div class="card p-3 py-4">
                    <h2>Tìm kiếm bất động sản nhà đất bảo lộc</h2>
                    <div class="row g-3 mt-2">
                        <div class="col-md-3">
                            <div class="form-group">
                                <select class="form-control">
                                    <option value="">Chọn loại hình</option>
                                    @foreach ($categories as $category)
                                    <option value="{{ $category->id }}">{{ $category->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Nhập thông tin tìm kiếm..." name="q" autocomplete="off"/>
                        </div>
                        <div class="col-md-3">
                            <button class="btn btn-success btn-block" type="submit">Tìm kiếm</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
    
    <div class="productions">
        <div class="row-hero productions-fixrow">
            @foreach ($search as $key => $s)
            @php
            $product = \App\Models\Product::find($s->id);
            @endphp
            <div class="col-hero-xxl-2-4 col-hero-xl-3 col-hero-md-4 col-hero-sm-4 productions-fixcol">
                <div class="item" itemtype="https://schema.org/Product" itemscope >
                    <meta class="d-none" itemprop="position" content="{{ $key }}" />
                    <meta class="d-none" itemprop="url" content="{{ Route('PRODUCT_VIEW', ['slug' => $product->slug ]) }}" />
                    <meta class="d-none" itemprop="gtin14" content="{{ $product->id }}" />
                    <meta class="d-none" itemprop="name" content="{{ $product->title }}" />
                    @php $pics = $product->getImages()->get(); @endphp
                    @foreach ($pics as $key => $pic)
                    <link class="d-none" itemprop="image" href="{{ Route('IMAGE_RESIZE_RATIO', [ 'size' => 'home-product' , 'type' => 'fit', 'imagePath' => $product->thumbnail ]) }}" />
                    @endforeach
                    <meta class="d-none" itemprop="description" content="{{ $product->excerpt }}" />
                    <meta class="d-none" itemprop="sku" content="{{ $product->slug }}" />
                    <div class="d-none" itemprop="brand" itemtype="https://schema.org/Brand" itemscope>
                        <meta itemprop="name" content="{{ Config::get('app.company_name') }}" />
                    </div>
                    <div class="d-none" itemprop="aggregateRating" itemtype="https://schema.org/AggregateRating" itemscope>
                        <meta itemprop="reviewCount" content="{{ SupportString::createRateValueByDate($product->id) }}" />
                        <meta itemprop="ratingValue" content="{{ $product->rate_value }}" />
                        <meta itemprop="bestRating" content="5" />
                        <meta itemprop="worstRating" content="1" />
                    </div>
                    
                    <div class="d-none" itemprop="review" itemtype="https://schema.org/Review" itemscope>
                        <meta itemprop="datePublished" content="{{ Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $product->created_at)->format('Y-m-d') }}" />
                        <meta itemprop="reviewBody" content="{{ $product->rate_review_body }}" />
                        <div itemprop="author" itemtype="https://schema.org/Person" itemscope>
                            <meta itemprop="name" content="{{ $product->rateAuthor ? $product->rateAuthor->name : 'chưa xác định' }}" />
                        </div>
                        <div itemprop="reviewRating" itemtype="https://schema.org/Rating" itemscope>
                            <meta itemprop="ratingCount" content="{{ SupportString::createRateValueByDate($product->id) }}" />
                            <meta itemprop="bestRating" content="5" />
                            <meta itemprop="worstRating" content="1" />
                            <meta itemprop="ratingValue" content="{{ $product->rate_value }}" />
                        </div>
                    </div>
                    <div itemprop="offers" itemtype="https://schema.org/Offer" itemscope>
                        <meta itemprop="priceValidUntil" content="2022-08-25" />
                        <meta itemprop="price" content="{{ str_replace([".", "e", ","], "", $product->price ) }}" />
                        <meta itemprop="offerCount" content="2" />
                        <meta itemprop="priceCurrency" content="VND" />
                        <link property="availability" href="https://schema.org/InStock" />
                    </div>
                    
                    {{-- box-shadow: 0 1px 10px 0 rgb(0 0 0 / 12%); --}}
                    <div class="item__action">
                        <div class="item__image">
                            <img class="product-image"
                                src="{{ Route('IMAGE_RESIZE', [ 'size' => 'home-product' , 'type' => 'fit', 'imagePath' => $product->thumbnail ]) }}"
                                onerror="this.onerror=null;this.src='{{ Route('IMAGE_RESIZE', [ 'size' => 'home-product' , 'type' => 'fit', 'imagePath' => '/images/failed.jpg' ]) }}'"
                                alt="{{ $product->title }}">
                            <div class="hover__show-links">
                                <button type="button" onclick="showLightGaleries(this)"
                                class="btn-hero btn__view-detail px-4 py-1 itext-md">xem ảnh</button>
                            </div>
                            <div class="counter__galeries">{{ $pics->count(); }} <i class="far fa-image"></i> - {{ $product->view }} <i class="far fa-eye"></i></div>
                        </div>
                        <button type="button" class="item__action-react d-none"><i class="far fa-heart"></i></button>
                    </div>
                    
                    <div class="lightgallery d-none">
                        @foreach ($pics as $key => $pic)
                        <a class="img__dtl-item" href="{{ asset($pic->src) }}">
                            <img 
                                src="{{ asset($pic->src) }}"
                                onerror="this.onerror=null;this.src='{{ asset(Config::get('app.image_error')) }}';" />
                        </a>
                        @endforeach
                    </div>
                    <div class="detail">
                        <h4 class="">
                            <a class="productmain__item-price" href="{{ Route('PRODUCT_VIEW', ['slug' => $product->slug ]) }}">
                                <span title="Giá : {{ $product->getTooltipPrice() }}" class="price simple-tooltip text-truncate"> {{ $product->getStringPrice() }} &nbsp;</span>
                                <small title="Vị trí: {{ $product->getLocation() }}" class="people-time simple-tooltip text-truncate">{{ $product->getShortLocation() }}</small>
                            </a>
                        </h4>
                        
                        <div class="detail__info media">
                            <a class="detail__info-img" onclick="showLightGaleries(this)">
                                <img class="product-image"
                                src="{{ Route('IMAGE_RESIZE', [ 'size' => 'home-product' , 'type' => 'fit', 'imagePath' => $product->thumbnail ]) }}"
                                onerror="this.onerror=null;this.src='{{ Route('IMAGE_RESIZE', [ 'size' => 'home-product' , 'type' => 'fit', 'imagePath' => '/images/failed.jpg' ]) }}'"
                                alt="{{ $product->title }}"/>
                                <div class="counter__galeries">{{ $pics->count(); }} <i class="far fa-image"></i> - {{ $product->view }} <i class="far fa-eye"></i></div>
                            </a>
                            <div class="clearfix visible-sm"></div>
                            <div class="media-body">
                                <h3 class="detail-name">
                                    <a href="{{ Route('PRODUCT_VIEW', ['slug' => $product->slug ]) }}" class="detail-name-link" title="">{{ $product->getTitleLocateCategory(100)  }}</a>
                                </h3>
                                <ul class="list-inline productmain__item-property">
                                    {!! $product->getListExtensions() !!}
                                </ul>
                            </div>
                        </div>
                        <div class="tag">
                            <div class="tag__row">
                                <div class="tag__col simple-tooltip" title="Diện tích: {{ $product->area }} mét vuông">
                                    <i class="fal fa-line-height"></i>
                                    {{ $product->area }} m²
                                </div>
                                @php
                                    $direction = SupportString::getRecordByValueConfig(Config::get("constant.DIRECTION"), $product->direction) 
                                @endphp
                                <div class="tag__col simple-tooltip" title="Đường rộng: {{ $direction['TEXT_CLIENT'] }}">
                                    <i class="fal fa-road"></i>
                                    {{ $direction['TEXT_CLIENT'] }}
                                </div>
                            </div> 
                            <div class="tag__row">
                                <div class="tag__col simple-tooltip" title="Mặt tiền: {{ $product->horizontal }} mét">
                                    <i class="fad fa-house-flood"></i>
                                    {{ $product->getHorizontal() }}
                                </div>
                                <div class="tag__col simple-tooltip" title="">
                                    <i class="fal fa-compass"></i>
                                    {!! $product->negotiate == Config::get("constant.NEGOTIATE.YES.VALUE") ? 'có thể thương lượng thêm' : '&nbsp;' !!}
                                </div>
                            </div>
                            <div class="tag__row">
                                <div class="tag__col simple-tooltip" title="Đối tượng rao bán: {{ "Công ty bất động sản" }}">
                                    <i class="fal fa-user-shield"></i>
                                    Công ty bất động sản
                                </div>
                                <div class="tag__col simple-tooltip" title="Loại hình: {{ $product->category->name }}">
                                    <i class="fal fa-building"></i>
                                    {{ $product->category->name }}
                                </div>
                            </div>
                        </div>
                        <div class="detail__footer">
                            <div class="detail__footer-row">
                                <strong class="detail__footer-time">
                                    <i class="fad fa-calendar-alt"></i>
                                    <span> {{ Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $product->updated_at)->diffForHumans() }}</span>
                                </strong>
                                {{-- <span class="detail__footer-divider hidden-hero-decrement-xs">|</span>
                                <strong class="detail__footer-time hidden-hero-decrement-xs">
                                    <i class="fad fa-eye"></i>
                                    <span>4</span>
                                </strong> --}}
                                <a class="detail__footer-messager" href="tel:{{ Config::get('app.phone') }}">
                                    <i class="fal fa-comment-alt-lines"></i>
                                    Tư vấn
                                </a>
                                {{-- <a class="detail__footer-messager hidden-hero-increment-md" href="{{ Route('PRODUCT_VIEW', ['slug' => $product->slug ]) }}">
                                    <i class="fal fa-thumbs-up"></i>
                                    Thích
                                </a> --}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            @endforeach
        </div>
        
    </div>

    

</div>
@endsection