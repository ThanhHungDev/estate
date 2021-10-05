@extends('client.layout.index')

@section('title', Config::get('app.name'))
@section('description', Config::get('app.description'))


@section('stylesheets')
    <link rel="stylesheet" type="text/css" href="{{ asset('css/library/lightgallery.css' . Config::get('app.version')) }}" />
    <link rel="stylesheet" type="text/css" href="{{ asset('css/product.detail.css' . Config::get('app.version')) }}" />
    <link rel="stylesheet" type="text/css" href="{{ asset('css/library/slick.css' . Config::get('app.version')) }}" />
    <link rel="stylesheet" type="text/css" href="{{ asset('css/library/slick-theme.css' . Config::get('app.version')) }}" />
    <link rel='stylesheet' id='realestate-open-sans-css'  href='https://fonts.googleapis.com/css?family=Open+Sans%3A300%2C400%2C600%2C700%2C800&#038;subset=latin%2Clatin-ext' type='text/css' media='all' />
    <link rel='stylesheet' id='realestate-libre-baskerville-css'  href='https://fonts.googleapis.com/css?family=Libre+Baskerville%3A400italic&#038;subset=latin%2Clatin-ext' type='text/css' media='all' />
@endsection


@section('javascripts')
    <script type="text/javascript" src="{{ asset('js/library/slick.min.js' . Config::get('app.version')) }}"></script>
    <script type="text/javascript" src="{{ asset('js/product.detail.js' . Config::get('app.version')) }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/lightgallery.min.js' . Config::get('app.version')) }}"></script>
    <script>
        function showLightGaleries(e){
            
            $(e).closest('.item').find(".lightgallery img").click()
        }
        var lightgalleries = document.getElementsByClassName("lightgallery");
        for (var i = 0; i < lightgalleries.length; i++){
            lightGallery(lightgalleries[i]);
        }
        $(document).ready(function(){
            $('#slider').slick({
                infinite: true,
                slidesToShow: 3,
                centerMode: true,
                asNavFor: '#slider__nav'
            });
            $('#slider__nav').slick({
                slidesToShow: 5,
                asNavFor: '#slider',
                centerMode: true,
                focusOnSelect: true
            });
            
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
        <div class="tz-Breadcrumb"
            style="background-image: url({{ asset('/images/background/product-breadcrumb.jpeg') }})">
            <div class="tzOverlayBreadcrumb">
                <div class="container">
                    <h1>{{ $product->title }}</h1>
                    <div class="tz-breadcrumb-navxt" itemscope itemtype="https://schema.org/BreadcrumbList">
                        <!--Breadcrumbs-->

                        <span itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                            <a itemprop="item"  title="{{ Config::get('app.name') }}"
                                href="{{ asset('/') }}" class="home">
                                <span itemprop="name"> Trang chủ </span>
                            </a>
                            <meta itemprop="position" content="1" />
                        </span> &gt;

                        <span itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                            <a itemprop="item"  title="{{ Config::get('app.name') }}"
                                href="{{ asset('/') }}" class="post post-property-archive">
                                <span itemprop="name"> {{ $product->category->name }} </span>
                            </a>
                            <meta itemprop="position" content="2" />
                        </span> &gt;

                        @foreach ($product->ptags as $key => $tag)
                            <span itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                                <a itemprop="item" 
                                    title="{{ Config::get('app.name') }}" href="{{ asset('/') }}"
                                    class="post post-property-archive">
                                    <span itemprop="name"> {{ $tag->name }} </span>
                                </a>
                                <meta itemprop="position" content="3" />
                            </span>,
                        @endforeach
                        <span itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                            <a itemprop="item"  title="{{ Config::get('app.name') }}"
                                href="{{ Route('PRODUCT_VIEW', ['slug' => $product->slug]) }}" class="post post-property current-item">
                                <span itemprop="name"> {{ $product->title }} </span>
                            </a>
                            <meta property="url" content="{{ Route('PRODUCT_VIEW', ['slug' => $product->slug]) }}">
                            <meta itemprop="position" content="4" />
                        </span>
                    </div>
                </div><!-- end class container -->
            </div>
        </div>
    </div>

   

    <div class="content__product product bg__product--detail">
        
        <div class="product__container">
            <div class="product__row py-3">
                <div class="product__left">

                    <div class="itemscope__article" itemscope itemtype="https://schema.org/Article">

                        <div class="d-none" itemtype="https://schema.org/AggregateRating" itemscope>
                            <meta itemprop="reviewCount" content="{{ SupportString::createRateValueByDate($product->id) }}" />
                            <meta itemprop="ratingValue" content="{{ $product->rate_value }}" />
                            <meta itemprop="bestRating" content="5" />
                            <meta itemprop="worstRating" content="1" />
                        </div>
                        
                        {{-- <div class="d-none" itemprop="review" itemtype="https://schema.org/Review" itemscope>
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
                        </div> --}}
                        <div itemprop="offers" itemtype="https://schema.org/Offer" itemscope>
                            <meta itemprop="priceValidUntil" content="2022-08-25" />
                            <meta itemprop="price" content="{{ str_replace([".", "e", ","], "", $product->price ) }}" />
                            <meta itemprop="offerCount" content="2" />
                            <meta itemprop="priceCurrency" content="VND" />
                            <link property="availability" href="https://schema.org/InStock" />
                        </div>

                            
                        <div class="product__title">
                            <h2 class="product__title--negotive" itemprop="name">
                                {{ $product->getTitleLocateCategory(100)  }}
                                <span class="for-negotive ">
                                    {{ $product->getStringNegotiate() }}
                                </span>
                            </h2>
                            <div title="Giá: {{ $product->getTooltipPrice() }}" class="product__title--price simple-tooltip"> {{ $product->getStringPrice() }}&nbsp; </div>
                            <div class="product__title--address">
                                <i class="fal fa-street-view"></i>
                                {{ $product->getLocation() }}
                            </div>
                        </div>




                        <div class="product__information">
                            <div class="product__information--author" itemprop="author" itemtype="https://schema.org/Person" itemscope>
                                <span class="text">
                                    Được đăng bởi
                                    <a href="{{ asset('/') }}" itemprop="name">{{ Config::get('app.company') }}</a>
                                </span>
                            </div>

                            <div class="product__information--datepublished">
                                <i class="fal fa-calendar-check"></i>
                                <span class="text" itemprop="datePublished" >{{ Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $product->created_at)->format('Y-m-d') }}</span>
                            </div>
                            <div class="product__information--view">
                                <i class="fal fa-eye"></i>
                                <span class="text">{{ $product->view }} lượt xem</span>
                            </div>
                        </div>




                        @php $pics = $product->getImages()->get(); @endphp
                        @if (!$pics->isEmpty())
                        <div class="product__slider">
                            <div id="slider" class="slider">
                                
                                @foreach ($pics as $key => $pic)
                                <div>
                                    <div class="slider__item">
                                        <img src="{{ Route('IMAGE_RESIZE', [ 'size' => 'home-product' , 'type' => 'fit', 'imagePath' => $pic->src ]) }}"/>
                                    </div>
                                </div>
                                @endforeach
                            </div>
                            <div id="slider__nav" class="slider__nav">
                                @php $pics = $product->getImages()->get(); @endphp
                                @foreach ($pics as $key => $pic)
                                <div>
                                    <div class="slider__nav--item">
                                        <div class="wrapper">
                                            <img src="{{ Route('IMAGE_RESIZE', [ 'size' => 'home-product' , 'type' => 'fit', 'imagePath' => $pic->src ]) }}"/>
                                        </div>
                                    </div>
                                </div>
                                @endforeach
                            </div>
                        </div>
                        @endif
                        





                        <div class="product__data">
                            <div class="block">
                                <h3 class="block__title"> Thông tin mô tả </h3>
                                <div class="block__data--content">
                                    {!! $product->content !!}
                                </div>
                            </div>
                        </div>
                        
                        <div class="product__data">
                            
                            <div class="block">
                                <h3 class="block__title"> Đơn vị đăng bán </h3>
                                <div class="company">
                                    <div class="company-left">
                                        <div class="img__cover" style="background-image: url({{ SupportDB::getOption('product-detail-company-image') }}); background-repeat: no-repeat; background-size:cover; "></div>
                                    </div>
                                    <div class="company-right">
                                        <div class="company-right--content">
                                            <div class="title">
                                                <h4 class="text-truncate">
                                                    <a class="text-truncate" href="{{ asset('/') }}">{{ SupportDB::getOption('product-detail-company-name') }}</a>
                                                </h4>
                                                <p class="position text-truncate">{{ SupportDB::getOption('product-detail-company-description') }}</p>
                                            </div>
                                            <div class="description">{{ SupportDB::getOption('product-detail-company-content') }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="product__data">
                            
                            <div class="block">
                                <h3 class="block__title"> Nhận Tư Vấn Miễn Phí </h3>
                                <div class="form">
                                    <form id="contact" class="form__wrapper" action="{{ Route('MAIL_CONTACT_PRODUCT') }}" method="POST">
                                        {!! csrf_field() !!}
                                        <input name="slug" type="hidden" value="{{ $product->slug }}" />
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


                    </div>


                    @if (!$relates->isEmpty())
                    <div class="product__data">
                        
                        <div class="block">
                            <h3 class="block__title"> Bất Động Sản liên quan  </h3>
                            <div class="productions px-0 py-0">
                                <div class="row-hero productions-fixrow">
                                    @foreach ($relates as $key => $product)
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
                    </div>
                    @endif


                </div>





                <div class="product__right">
                    @if (!$categories->isEmpty())
                    <aside class="categories">
                        <h3 class="category__title">Danh mục</h3>
                        <ul>
                            @foreach ($categories as $key => $category)
                            <li class="category__title-item">
                                <a class="text-truncate" href="{{ Route('CATEGORY_VIEW', ['slug' => $category->slug ]) }}">{{ $category->name }}</a>
                            </li>
                            @endforeach
                        </ul>
                    </aside>
                    @endif

                    @if (!$product->ptags->isEmpty())
                    <aside class="categories">
                        <h3 class="category__title">Tag Liên quan</h3>
                        <ul>
                            @foreach ($product->ptags as $key => $tag)
                            <li class="category__title-item">
                                <a class="text-truncate" href="{{ Route('PTAG_VIEW_SEARCH', ['slug' => $tag->slug ]) }}">{{ $tag->name }}</a>
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




@endsection
