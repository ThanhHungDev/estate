@extends('client.layout.index')

@section('title', Config::get("app.name"))
@section('description', Config::get("app.description"))


@section('preload')
{{-- <link rel="preload" as="font" href="{{ asset('/font/font-awe/webfonts/fa-duotone-900.woff2')}}" />
<link rel="preload" as="font" href="{{ asset('/font/font-awe/webfonts/fa-regular-400.woff2')}}" />
<link rel="preload" as="font" href="{{ asset('/font/font-awe/webfonts/fa-light-300.woff2')}}" />
<link rel="preload" as="font" href="{{ asset('/font/font-awe/webfonts/fa-solid-900.woff2')}}" /> --}}
{{-- <link rel="preload" as="font" href="{{ asset('/css/library/fonts/slick.woff')}}" /> --}}
<link rel="preload" as="image" href="{{ asset('/css/library/ajax-loader.gif') }}"/>

<link rel="preload" as="style" href="{{ asset('css/home.css' . Config::get('app.version'))}}"/>
<link rel="preload" as="style" href="{{ asset('css/library/slick.css' . Config::get('app.version')) }}"/>
<link rel="preload" as="style" href="{{ asset('css/library/slick-theme.css' . Config::get('app.version')) }}"/>
<link rel="preload" as="style" href="{{ asset('css/library/lightgallery.css' . Config::get('app.version')) }}" />
@foreach ($sliders as $key => $slider)
<link rel="preload" as="image" href="{{ $slider->src }}"/>
@endforeach
{{-- @foreach ($categories as $cat)
<link rel="preload" as="image" href="{{ Route('IMAGE_CONVERTOR', [ 'quality' => SupportAgent::getQuanlityByDevice(), 'imagePath' => trim($cat->thumbnail, '/') . Config::get('image.EXTENTION_CONVERTOR') ]) }}"/>
@endforeach --}}
<link rel="preload" as="style" href="{{ asset('css/library/bootstrap.home.css' . Config::get('app.version'))}}"/>
<link rel="preload" as="script" href="{{ asset('/js/library/carousel.min.js' . Config::get('app.version')) }}"/>
<link rel="preload" as="script" href="{{ asset('js/library/wow.min.js' . Config::get('app.version')) }}"/>
<link rel="preload" as="script" href="{{ asset('js/library/slick.min.js' . Config::get('app.version')) }}"/>
<link rel="preload" as="script" href="{{ asset('js/library/lightgallery.min.js' . Config::get('app.version')) }}"/>
@endsection

@section('stylesheets')
<link rel="stylesheet" type="text/css" href="{{ asset('css/library/bootstrap.home.css' . Config::get('app.version'))}}"/>
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
        console.log("vòa đây nh")
        $(e).closest('.item').find(".lightgallery img").click()
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
        $('#slider .js__onload--show').removeClass('d-none')




        //// home page review custommer
        var rating__custommer = document.getElementById("rating__custommer")
        if(rating__custommer){
            
            rating__custommer.addEventListener('lazybeforeunveil', function(e){
                console.log("rating__custommer")
                /// slider home page
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
    <div class="container-hero">
        <div class="row-hero">
            <div class="col-12 homeslider">
                <div id="slider" class="slider">
                    @foreach ($sliders as $key => $slider)
                    <div class="js__onload--show {{ !$key ?? 'd-none'}}">
                        <div class="slider__item">
                            <div class="slider__item-img">
                                <img src="{{ $slider->src }}" alt="{{ $slider->alt }}" width="200" height="175"/>
                            </div>
                            <div class="slider__item-content">
                                <div>
                                    <h4 class="slider__item-topic">
                                        {{ $slider->topic }}
                                        <time datetime="2008-02-14 20:00">— {{ Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $slider->updated_at)->diffForHumans() }}</time>
                                    </h4>
                                    <h3 class="slider__item-title">
                                        {{ $slider->title }}
                                    </h3>
                                </div>
                                <div class="slider__item-des">{{ $slider->excerpt }}</div>
                                <div class="action py-3">
                                    <a class="btn-hero btn-hero-light-green itext-sm" href="tel:{{ Config::get('app.phone') }}">
                                        {{ Config::get('app.phone') }}
                                    </a>
                                    <a class="btn-hero btn-hero-outline-light-green itext-sm" href="{{ Route('CONTACT_PAGE') }}">
                                        Gửi Yêu Cầu Tư Vấn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>











    <div class="categories wow fadeInLeft" data-wow-duration="1s">
        <div class="categories__wrapper">
            <h3 id="categories" class="categories__title" tabindex="1" title="💥 Mẫu giao diện theo ngành hàng" >
                <span class="text-color-pink">{{ Config::get('app.name') }}</span>
                Gồm có các dịch vụ sau
            </h3>
            <div class="container">
                <div class="row categories__row">
                    @isset($categories)
                        @if (!$categories->isEmpty())
                            @foreach ($categories as $cat)
                            <div class="categories__item">
                                <a class="categories__item-link-img" href="{{ Route('CATEGORY_VIEW', ['slug' => $cat->slug ]) }}">
                                    <img 
                                    class="lazyload"
                                    src="{{ Config::get('app.lazyload_base64') }}"
                                    onerror="this.onerror=null;this.src='{{ asset('/images/failed.jpg') }}';"
                                    data-src="{{ Route('IMAGE_CONVERTOR', [ 'quality' => SupportAgent::getQuanlityByDevice(), 'imagePath' => trim($cat->thumbnail, '/') . Config::get('image.EXTENTION_CONVERTOR') ]) }}" 
                                    {{-- src="{{ Route('IMAGE_CONVERTOR', [ 'quality' => SupportAgent::getQuanlityByDevice(), 'imagePath' => trim($cat->thumbnail, '/') . Config::get('image.EXTENTION_CONVERTOR') ]) }}"  --}}
                                    alt="{{ $cat->name }}" width="300" height="300"/>
                                </a>
                                <a href="{{ Route('CATEGORY_VIEW', ['slug' => $cat->slug ]) }}">
                                    <h5 class="categories__item-link-text">{{ $cat->name }}</h5>
                                </a>
                            </div>
                            @endforeach
                        @endif
                    @endisset
                    
                </div>
            </div>
        </div>
    </div>








    <div class="selectus wow fadeInUp" data-wow-duration="1s">
        <div class="selectus__wrapper">
            <h3 id="selectus" class="selectus__title" tabindex="0" title="💥 Vì Sao bạn nên chọn {{ Config::get('app.name') }}" >
                Sản phẩm Mua Bán Nhà Đất Tp Bảo Lộc đang có
            </h3>
        </div>
    </div>

    <div class="productions">
        <div class="row-hero productions-fixrow">
            @foreach ($products as $key => $product)
            <div class="col-hero-xxl-2-4 col-hero-xl-3 col-hero-md-4 col-hero-sm-4 productions-fixcol">
                <div class="item" itemtype="https://schema.org/Product" itemscope >
                    <meta class="d-none" itemprop="position" content="{{ $key }}" />
                    <meta class="d-none" itemprop="url" content="{{ Route('PRODUCT_VIEW', ['slug' => $product->slug ]) }}" />
                    <meta class="d-none" itemprop="gtin14" content="{{ $product->id }}" />
                    <meta class="d-none" itemprop="name" content="{{ $product->title }}" />
                    @php $pics = $product->getImages()->get(); @endphp
                    @if (!$pics->isEmpty())
                    @foreach ($pics as $key => $pic)
                    <link class="d-none" itemprop="image" href="{{ Route('IMAGE_RESIZE_RATIO', [ 'size' => 'home-product' , 'type' => 'fit', 'imagePath' => $product->thumbnail ]) }}" />
                    @endforeach
                    @else
                    <link class="d-none" itemprop="image" href="{{ Route('IMAGE_RESIZE_RATIO', [ 'size' => 'home-product' , 'type' => 'fit', 'imagePath' => env('IMAGE_DEFAULT_PRODUCT') ]) }}" />
                    @endif
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
                            <img class="product-image lazyload"
                                width="350" height="250"
                                src="{{ Config::get('app.lazyload') }}" 
                                {{-- src="{{ Route('IMAGE_RESIZE', [ 'size' => 'home-product' , 'type' => 'fit', 'imagePath' => $product->thumbnail ]) }}" --}}
                                onerror="this.onerror=null;this.src='{{ Route('IMAGE_RESIZE', [ 'size' => 'home-product' , 'type' => 'fit', 'imagePath' => '/images/failed.jpg' ]) }}'"
                                data-src="{{ Route('IMAGE_RESIZE', [ 'size' => 'home-product' , 'type' => 'fit', 'imagePath' => trim($product->thumbnail, "/") ]) }}"
                                alt="{{ $product->title }}"
                            />
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
                            <img class="lazyload"
                                src="{{ Config::get('app.lazyload') }}"
                                onerror="this.onerror=null;this.src='{{ asset(Config::get('app.image_error')) }}';"
                                data-src="{{ asset($pic->src) }}"
                                alt="{{ $product->title }}"
                            />
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
                                <img class="product-image lazyload"
                                    width="80" height="56"
                                    src="{{ Config::get('app.lazyload') }}" 
                                    {{-- src="{{ Route('IMAGE_RESIZE', [ 'size' => 'home-product' , 'type' => 'fit', 'imagePath' => $product->thumbnail ]) }}" --}}
                                    onerror="this.onerror=null;this.src='{{ Route('IMAGE_RESIZE', [ 'size' => 'home-product' , 'type' => 'fit', 'imagePath' => '/images/failed.jpg' ]) }}'"
                                    data-src="{{ Route('IMAGE_RESIZE', [ 'size' => 'home-product' , 'type' => 'fit', 'imagePath' => trim($product->thumbnail, "/") ]) }}"
                                    alt="{{ $product->title }}"
                                />
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
                                <div class="tag__col simple-tooltip" title="Hướng: {{ $product->getDirection() }}">
                                    <i class="fal fa-road"></i>
                                    {{ $product->getDirection() }} &nbsp;
                                </div>
                                <div class="tag__col simple-tooltip" title="Mặt tiền: {{ $product->getHorizontal() }}">
                                    <i class="fal fa-compass"></i>
                                    {{-- <i class="fad fa-house-flood"></i> --}}
                                    {{ $product->getHorizontal() }} &nbsp;
                                </div>
                                <div class="tag__col simple-tooltip" title="Loại hình: {{ $product->category->name }}">
                                    <i class="fal fa-building"></i>
                                    {{ $product->category->name }} &nbsp;
                                </div>
                                <div class="tag__col simple-tooltip" title="{{ $product->getNegotiate() }}">
                                    <i class="fal fa-user-shield"></i>
                                    {{ $product->getNegotiate() }} &nbsp;
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

















    @if (!$posts->isEmpty())
    <div class="news">
        <h3 class="news-title" title="💥 Tin tức bất động sản">Tin tức bất động sản</h3>
        
        @foreach ($posts as $key => $post)
        <div class="news__wrapper">
            <div class="news__item">
                <div class="news__item-left">
                    <div class="img__cover" style="background-image: url({{ Route('IMAGE_CONVERTOR', [ 'quality' => SupportAgent::getQuanlityByDevice(), 'imagePath' => trim($post->background, '/') . Config::get('image.EXTENTION_CONVERTOR') ]) }});
                    background-repeat: no-repeat;
                    background-size:cover; "></div>
                </div>
                <div class="news__item-right">
                    <h4 class="news__item-topic">
                        <a href="{{ Route('POST_VIEW', ['slug' => $post->slug ]) }}">
                            @php $topic = $post->topic;   @endphp
                            {{ $topic['name'] }}
                            <time datetime="2008-02-14 20:00">
                                - 
                                <i class="d-none">{{ Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $post->created_at)->diffForHumans() }}</i>
                                <i>{{ Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $post->updated_at)->diffForHumans() }}</i>
                            </time>
                        </a>
                    </h4>
                    <h3 class="news__item-title">
                        <a href="{{ Route('POST_VIEW', ['slug' => $post->slug ]) }}">{{ $post->title }}</a>
                    </h3>
                    <p class="news__item-des">
                        <a href="{{ Route('POST_VIEW', ['slug' => $post->slug ]) }}"> {{ $post->excerpt }} </a>
                    </p>
                </div>
            </div>
        </div>
        @endforeach
        
        
    </div>
    @endif
    




    {{-- <div class="FAQPage">
        <div itemscope="" itemtype="https://schema.org/FAQPage" class="faq_page"> 
            <p class="faqmain">Những câu hỏi thường gặp</p> 
                    <div itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question" class="faq_list"> 
                <h3 itemprop="name" class="faq_title" val_id="914" val_show="0">
                    ❖ Chi phí lên thổ cư đất trồng cây lâu năm là bao nhiêu?            </h3> 
                <div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" class="answer answer914" style="display: none;"> 
                    <div itemprop="text"> 
                        Tiền phải nộp khi chuyển từ đất trồng cây lâu năm sang đất ở sẽ được tính như sau: 50% * (giá đất ở - giá đất nông nghiệp)/m<sup>2</sup>. Tùy vào từng khu vực thì giá thổ cư sẽ qui định khác nhau.&nbsp;                </div> 
                </div> 
            </div>
                    <div itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question" class="faq_list"> 
                <h3 itemprop="name" class="faq_title" val_id="915" val_show="0">
                    ❖ Datnenonline.vn có hỗ trợ ký gửi BĐS hay môi giới không?            </h3> 
                <div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" class="answer answer915" style="display: none;"> 
                    <div itemprop="text"> 
                        Trang website Datnenonline.vn là một sàn thương mại hỗ trợ khách hàng đăng tin bán sản phẩm bất động sản của mình cũng như tìm kiếm các lô đất giá rẻ, Đầu tư sinh lợi cao.&nbsp;                </div> 
                </div> 
            </div>
             
        </div>
    </div> --}}

</div>
@endsection