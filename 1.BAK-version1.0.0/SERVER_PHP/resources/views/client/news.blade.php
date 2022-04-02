@extends('client.layout.index')

@section('title', 'Tìm kiếm bài viết Nhà đất tp.Bảo lộc | ' . Config::get("app.name"))
@php $description = !$posts->isEmpty() ? $posts->first()->description_seo : ''; @endphp
@section('description', Config::get("app.name") . ", " . $description)
@php $thumbnailPage = !$posts->isEmpty() ? $posts->first()->thumbnail : Config::get("app.image"); @endphp
@section('meta-seo')
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{{ Config::get("app.og_name") }}" />
    <meta property="og:description" content="{{ Config::get("app.og_description") }}" />
    <meta property="og:site_name" content="{{ Config::get("app.og_name") }}" />
    <meta property="og:image" content="{{ asset($thumbnailPage) }}" />
    <meta property="og:image:secure_url" content="{{ asset($thumbnailPage) }}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content="{{ Config::get("app.description") }}" />
    <meta name="twitter:title" content="{{ Config::get("app.og_name") }}" />
    <meta name="twitter:site" content="{{ Config::get('site_fb') }}" />
    <meta name="twitter:image" content="{{ asset($thumbnailPage) }}" />
@endsection

@section('stylesheets')
{{-- <link rel="stylesheet" type="text/css" href="{{ asset('css/home.css' . Config::get('app.version'))}}"/> --}}
<link rel="stylesheet" type="text/css" href="{{ asset('css/product.detail.css' . Config::get('app.version')) }}" />
{{-- <link rel="stylesheet" type="text/css" href="{{ asset('css/library/slick.css' . Config::get('app.version')) }}"/>
<link rel="stylesheet" type="text/css" href="{{ asset('css/library/slick-theme.css' . Config::get('app.version')) }}"/> --}}
@endsection

@section('preload')

@endsection
@section('javascripts')
<script type="text/javascript" src="{{ asset('/js/library/select2.full.min.js' . Config::get('app.version')) }}"></script>
{{-- <script type="text/javascript" src="{{ asset('/js/library/carousel.min.js' . Config::get('app.version')) }}"></script> --}}
{{-- <script type="text/javascript" src="{{ asset('js/library/slick.min.js' . Config::get('app.version')) }}"></script> --}}
<script type="text/javascript" src="{{ asset('js/product.detail.js' . Config::get('app.version')) }}"></script>
{{-- <script type="text/javascript" src="{{ asset('js/library/lightgallery.min.js' . Config::get('app.version')) }}"></script> --}}
<script>

    $(document).ready(function(){
        
        @if (Session::has(Config::get('constant.SAVE_ERROR')) || !empty($errors->all()) )
            $('html, body').animate({
                scrollTop: $('#contact').offset().top
            }, 'slow');
        @endif
    });
    

</script>
@endsection

















@section('content')
    <div class="content">
        <div class="container py-5">
            <form class="row d-flex justify-content-center" action="{{ Route("POST_SEARCH") }}" autocomplete="off">
                <div class="col-md-10">
                    <div class="card p-3 py-4">
                        <h2>Tìm kiếm bài viết nhà đất bảo lộc</h2>
                        <div class="row g-3 mt-2">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <select class="form-control">
                                        <option value="">Chọn chủ đề bài </option>
                                        @foreach ($topics as $topic)
                                        <option value="{{ $topic->id }}">{{ $topic->name }}</option>
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
        
    
        @if (!$posts->isEmpty())
        <div class="news py-4">
            <h3 class="news-title" title="💥 Tin tức bất động sản nhà đất tp.Bảo lộc">Tin tức bất động sản</h3>
            
            @foreach ($posts as $key => $post)
            <div class="news__wrapper">
                <div class="news__item">
                    <div class="news__item-left">
                        <div class="img__cover" style="background-image: url({{ $post->background }});
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
                            <a href="{{ Route('POST_VIEW', ['slug' => $post->slug ]) }}">{!! $post->title !!}</a>
                        </h3>
                        <p class="news__item-des">
                            <a href="{{ Route('POST_VIEW', ['slug' => $post->slug ]) }}"> {{ $post->excerpt }} </a>
                        </p>
                    </div>
                </div>
            </div>
            @endforeach
            
            
            
        </div>
        <div class="news text-center pt-3">
            <div class="pagi">
                {{ $posts->onEachSide(3)->links("pagination::default") }}
            </div>
        </div>
        
        @endif
        
    

   

        <div class="content__product product bg__product--detail pt-0" itemscope itemtype="https://schema.org/Article">

            <div class="product__container">
                <div class="product__row py-3">
                    <div class="product__left">


                        <div class="product__data">
                            
                            <div class="block">
                                <h3 class="block__title"> Nhận Tư Vấn Mua nhà đất bảo lộc Miễn Phí </h3>
                                <div class="form">
                                    <form id="contact" class="form__wrapper" action="{{ Route('MAIL_CONTACT_PRODUCT') }}" method="POST">
                                        {!! csrf_field() !!}
                                        <input name="slug" type="hidden" value="{{ $topic->slug }}" />
                                        @if (Session::has(Config::get('constant.SAVE_ERROR')))
                                        <div class="alert alert-danger">
                                            {{ Session::get(Config::get('constant.SAVE_ERROR')) }}
                                        </div>
                                        @elseif (Session::has(Config::get('constant.SAVE_SUCCESS')))
                                        <div class="alert alert-success">
                                            Đã liên lạc với quản trị viên. Chúng tôi sẽ liên lạc với bạn sớm nhất có thể.
                                        </div>
                                        @endif
                                        @if(!empty($errors->all()))
                                            @foreach ($errors->all() as $error)
                                            <div class="alert alert-warning">
                                                {{ $error }}
                                            </div>
                                            @endforeach
                                        @endif
                                        <div class="contact">
                                            <div class="contact__left">
                                                <input name="name" type="text" placeholder="Tên" class="contact__left-input" value="{{ old('name' ) }}"/>
                                                <input name="mobile" type="text" placeholder="Số điện thoại" class="contact__left-input" value="{{ old('mobile' ) }}"/>
                                            </div>
                                            <div class="contact__right">
                                                <textarea name="message" class="contact__right-textarea" cols="54" rows="2" title="Tin nhắn" placeholder="Tin nhắn yêu cầu tư vấn (không bắt buộc nhập)">{{ old('message' ) }}</textarea>
                                            </div>
                                        </div>
                                        
                                        <div class="bottom">
                                            <div id="google__recaptcha" class="lazyload">
                                                <!-- Google reCaptcha -->
                                                <div class="g-recaptcha" id="feedback-recaptcha" data-sitekey="{{ env('GOOGLE_RECAPTCHA_KEY')  }}"></div>
                                                <!-- End Google reCaptcha -->
                                                <button class="btn-send-mail-contact">Gửi liên lạc</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>




                        @if (!$productsNew->isEmpty())
                        <div class="product__data">
                            
                            <div class="block">
                                <h3 class="block__title"> Bất Động Sản Mới nhất </h3>
                                <div class="productions px-0 py-0">
                                    <div class="row-hero productions-fixrow">
                                        @foreach ($productsNew as $key => $product)
                                        <div class="col-hero-md-4 col-hero-sm-4 productions-fixcol">
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
                                                            onerror="this.onerror=null;this.src='{{ Route('IMAGE_RESIZE', [ 'size' => 'home-product' , 'type' => 'fit', 'imagePath' => 'images/failed.jpg' ]) }}'"
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
                                                            onerror="this.onerror=null;this.src='{{ Route('IMAGE_RESIZE', [ 'size' => 'home-product' , 'type' => 'fit', 'imagePath' => 'images/failed.jpg' ]) }}'"
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
                        </div>
                        @endif


                    </div>





                    <div class="product__right">
                        @if (!$categories->isEmpty())
                        <aside class="categories">
                            <h3 class="category__title">Danh mục bds</h3>
                            <ul>
                                @foreach ($categories as $key => $category)
                                <li class="category__title-item">
                                    <a class="text-truncate" href="{{ Route('CATEGORY_VIEW', ['slug' => $category->slug ]) }}">{{ $category->name }}</a>
                                </li>
                                @endforeach
                            </ul>
                        </aside>
                        @endif

                        <aside class="categories">
                            <h3 class="category__title">Tìm kiếm</h3>
                            <div class="search">
                                <form class="search__wrapper" action="{{ Route('MAIL_CONTACT_PRODUCT') }}" method="POST">
                                    {!! csrf_field() !!}
                                    <input name="q" type="text" placeholder="Từ khoá" class="search__input" value="{{ old('q' ) }}"/>
                                    @if (!$districts->isEmpty())
                                    <select name="district" class="search__district"
                                        onchange="changeDistrict(this)">
                                        <option value="0">Chọn Quận / Huyện</option>
                                        @foreach ($districts as $district)
                                        <option value="{{ $district->id }}">{{ $district->name }}</option>
                                        @endforeach
                                    </select>
                                    @endif
                                    @if (!$communes->isEmpty())
                                    <select name="district" class="search__district" id="js__select-commune">
                                        <option value="0">Chọn Phường / Xã </option>
                                        @foreach ($communes as $commune)
                                        <option value="{{ $commune->id }}">{{ $commune->name }}</option>
                                        @endforeach
                                    </select>
                                    @endif
                                    
                                    <button class="btn__search">Tìm kiếm</button>
                                </form>
                            </div>
                        </aside>
                        
                    </div>
                </div>
            </div>
        </div>

    </div>


@endsection
