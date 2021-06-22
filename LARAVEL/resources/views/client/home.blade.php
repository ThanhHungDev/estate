@extends('client.layout.index')

@section('title', Config::get("app.name"))
@section('description', Config::get("app.description"))

@section('meta-seo')
    <link rel="canonical" href="{{ asset('/') }}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{{ Config::get("app.og_name") }}" />
    <meta property="og:description" content="{{ Config::get("app.og_description") }}" />
    <meta property="og:url" content="{{ asset('/') }}" />
    <meta property="og:site_name" content="{{ Config::get("app.og_name") }}" />
    <meta property="og:image" content="{{ Config::get("app.image") }}" />
    <meta property="og:image:secure_url" content="{{ Config::get("app.image") }}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content="{{ Config::get("app.description") }}" />
    <meta name="twitter:title" content="{{ Config::get("app.og_name") }}" />
    <meta name="twitter:site" content="{{ Config::get('site_fb') }}" />
    <meta name="twitter:image" content="{{ Config::get("app.image") }}" />
@endsection

@section('preload')
    <link rel="preload" as="script" href="{{ asset('js/library/select2.full.min.js'. Config::get('app.version')) }}">
@endsection

@section('stylesheets')
    <link type="text/css" rel="stylesheet" href="{{ asset('css/library/lightgallery.css' . Config::get('app.version')) }}" />
@endsection

@section('javascripts')
    <script src="{{ asset('/js/library/nouislider.min.js' . Config::get('app.version')) }}"></script>
    <script>
        const PROVINCES = JSON.parse(`{!! $provinces !!}`);
        /// để select 2 trong app.js có thể nạp lên thanh search của homepage
        const ROUTE_DISTRICTS = "{{ Route('DISTRICTS') }}";
        const ROUTE_COMMUNES  = "{{ Route('COMMUNES') }}";
    </script>
    <script src="{{ asset('js/library/select2.full.min.js' . Config::get('app.version')) }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/lightgallery.min.js' . Config::get('app.version')) }}"></script>
    <script type="text/javascript">
        var lightgalleries = document.getElementsByClassName("lightgallery");
        for (var i = 0; i < lightgalleries.length; i++){
            lightGallery(lightgalleries[i]);
        }
    </script>
@endsection
@section('content')
    <div class="content">
        <div class="homepage__search position-relative">
            <div class="homepage__search-bg"></div>
            <div class="homesearch">
                <h4 class="homesearch__title">Cách tốt nhất để</h4>
                <h1 class="homesearch__main-title">Tìm Kiếm Bất Động Sản Phù Hợp</h1>
            </div>
            <div class="search__form">
                <form action="" class="form">
                    <div class="wrapper-head-form">
                        <div class="wrapper-select">
                            <select name="" class="form__select-category js__single-select">
                                <option value="0">chọn loại hình</option>
                                @if(!$categories->isEmpty())
                                @foreach ($categories as $category)
                                <option value="{{ $category->slug }}">{{ $category->title }}</option>
                                @endforeach
                                @endif
                            </select>
                        </div>
                        <div class="input-group">
                            <input class="form__input" type="text"  placeholder="Nhập từ khóa tìm kiếm"/>
                        </div>
                        <div class="wrapper-search-btn">
                            <button class="btn__search">Tìm Kiếm</button>
                        </div>
                    </div>
                    <div class="search__locations">
                        <div class="wrapper-bottom-form">
                            <div class="wrapper-select select2__home-bottom">
                                <select name="" id="js__select-province" class="form__select-category">
                                    <option value="0">chọn tỉnh</option>
                                </select>
                            </div>
                            <div class="wrapper-select select2__home-bottom">
                                <select name="" id="js__select-district"  class="form__select-category">
                                    <option value="0">chọn huyện</option>
                                </select>
                            </div>
                            <div class="wrapper-select select2__home-bottom">
                                <select name="" id="js__select-commune" class="form__select-category">
                                    <option value="0">chọn xã</option>
                                </select>
                            </div>
                        </div>
                        <div class="wrapper__more">
                            <a id="js__toggle-advanced-search" onclick="toggleAdvancedSearch()" href="javascript:void(0)" class="btn__search-more"> 
                                Công cụ khác &nbsp; <i class="icon fad fa-chevron-double-right"></i> 
                            </a>
                        </div>
                    </div>
                    <div id="js__advanced-search" class="wrapper-bottom-form advanced-search d-none">
                        <div class="wrapper-select select2__home-bottom">
                            @php
                            $RANGES_PRICE = Config::get('constant.RANGE-PRICE');
                            @endphp
                            <select name="" id="js__select-price" class="form__select-category">
                                <option value="0">chọn giá</option>
                                @foreach ($RANGES_PRICE as $key => $range)
                                <option value="{{ $key }}">{{ $range['text'] }}</option>
                                @endforeach
                            </select>
                            <input type="hidden" id="js__price-range-input">
                        </div>
                        <div class="wrapper-select select2__home-bottom">
                            @php
                            $RANGE_AREA = Config::get('constant.RANGE-AREA');
                            @endphp
                            <select name="" id="js__select-area" class="form__select-category" >
                                
                                @foreach ($RANGE_AREA as $key => $range)
                                <option value="{{ $key }}">{{ $range['text'] }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="wrapper-select select2__home-bottom">
                            @php
                            $DIRECTIONS = Config::get('constant.DIRECTION');
                            @endphp
                            <select name="" id="js__select-direction" class="form__select-category">
                                @foreach ($DIRECTIONS as $key => $direction)
                                <option value="{{ $direction['VALUE'] }}">{{ $direction['TEXT'] }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="wrapper-select select2__home-bottom">
                            @php
                            $FACADE = Config::get('constant.FACADE');
                            @endphp
                            <select name="" id="js__select-facade" class="form__select-category">
                                @foreach ($FACADE as $key => $facade)
                                <option value="{{ $key }}">{{ $facade }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="homeimportant">
            <h3 class="homeimportant__title">
                Điều khoản dịch vụ
            </h3>
            <div class="homeimportant__content">
                <a class="homeimportant__content-des" href="{{ asset('/') }}">
                    Chúng tôi, Công ty TNHH Hùng Thịnh - topbds.vn tạo ra 1 nền tảng tìm kiếm bất động sản phù hợp và hoàn toàn miễn phí.
                    <span class="hidden-mobile text-color-grey">
                        Với tiêu chí kết nối bất động sản đến với mọi người. Chúng tôi đã cung cấp các tiện ích để người sử dụng có thể trò chuyện trực tuyến với nhau.
                    </span>
                </a>
                <a class="homeimportant__content-btn hover__push-right" href="{{ asset('/') }}">
                    <i class="fas fa-long-arrow-alt-right"></i>
                </a>
            </div>
        </div>
        {{-- <div class="productmain bg-color-grey-x">
            <h2 class="productmain__title">Bất động sản dành cho bạn</h2>
            <p >Dựa trên ip truy cập vào website mình sẽ detect ra localtion ở đâu, khi đó chúng ta sẽ query bất động sản theo khu vực</p>
            <div class="productmain__container">
                
                <div class="row">
                    @for ($i = 0; $i < 10; $i++)
                    <div class="col-lg-4 col-sm-6 col-xs-12 productmain__container-fixpadding"> 
                        <div class="productmain__item property-listing">
                            <div class="media">
                                <a class="pull-left" href="#">
                                    <img alt="image" class="img-responsive" 
                                        src="https://ebudezain.com/resizes/category/fit//upload/images/front-end/thumbnail-gulp.jpg?v=1.1.26">
                                </a>
                                <!-- <div class="clearfix visible-sm"></div> -->
    
                                <div class="media-body productmain__item-smaller">
                                    
                                    <h4 class="media-heading my-0">
                                        <a class="productmain__item-price" href="#">
                                            $1,975,000 
                                            <small class="pull-right">609 W Gravers Ln</small>
                                        </a>
                                    </h4>

                                    <ul class="list-inline productmain__item-property">
                                        <li>4,820 SqFt</li>
                                        <li style="list-style: none">|</li>
                                        <li>5 Beds</li>
                                        <li style="list-style: none">|</li>
                                        <li>5 Baths</li>
                                    </ul>
                                    <h5 class="productmain__item-title hidden-small-mobile">
                                        Situated between fairmount
                                    park and the prestigious philadelphia cricket
                                    club, this beautiful 2+ acre property is t hùng ox & Roach-Chestnu</h5>
                                    <span class="productmain__item-moreinfo fnt-smaller fnt-lighter fnt-arial">
                                        Courtesy of HS Fox & Roach-Chestnut Hill Evergreen
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    @endfor
                </div><!-- End row -->
            </div>
        </div> --}}
        

        {{-- danh sách product --}}
        <div class="productions">
            <div class="row-hero productions-fixrow">
                @for ($i = 0; $i < 12; $i++)
                <div class="col-hero-xl-3 col-hero-md-4 col-hero-sm-4 productions-fixcol">
                    <div class="item">
                        <div class="item__action">
                            <div class="item__image">
                                <img class="product-image"
                                src="{{ Route('IMAGE_RESIZE', [ 'size' => 'post' , 'type' => 'fit', 'imagePath' => "images/productions/multipurpose.jpeg" ]) }}"
                                    alt="M">
                                <div class="hover__show-links">
                                    <button type="button" onclick="showLightGaleries(this)"
                                    class="btn-hero btn__view-detail px-4 py-1 itext-md">xem ảnh</button>
                                </div>
                                <div class="counter__galeries">4 <i class="far fa-image"></i> - 20 <i class="far fa-eye"></i></div>
                            </div>
                            <button type="button" class="item__action-react"><i class="far fa-heart"></i></button>
                        </div>
                        <div class="lightgallery d-none">
                            <a class="img__dtl-item" href="{{ asset("/images/productions/multipurpose.jpeg") }}">
                                <img 
                                    src="{{ asset("/images/productions/multipurpose.jpeg") }}"
                                    onerror="this.onerror=null;this.src='{{ asset(Config::get('app.image_error')) }}';" />
                            </a>
                            <a class="img__dtl-item" href="{{ asset("/images/productions/multipurpose.jpeg") }}">
                                <img 
                                    src="{{ asset("/images/productions/multipurpose.jpeg") }}"
                                    onerror="this.onerror=null;this.src='{{ asset(Config::get('app.image_error')) }}';" />
                            </a>
                        </div>
                        <div class="detail">
                            <h4 class="">
                                <a class="productmain__item-price" href="#">
                                    <span class="price">$1,975,000 </span>
                                    <small class="people-time">609 W Gravers Ln6</small>
                                </a>
                            </h4>
                            
                            <div class="detail__info media">
                                <a class="detail__info-img" onclick="showLightGaleries(this)">
                                    <img class="product-image"
                                        src="{{ Route('IMAGE_RESIZE', [ 'size' => 'small' , 'type' => 'fit', 'imagePath' => "images/productions/multipurpose.jpeg" ]) }}"
                                        alt="M">
                                    <div class="counter__galeries">4 <i class="far fa-image"></i> - 20 <i class="far fa-eye"></i></div>
                                </a>
                                <div class="clearfix visible-sm"></div>
                                <div class="media-body">
                                    <h3 class="detail-name">
                                        <a href="#" class="detail-name-link" title="">
                                            Multipurpose Intense - #1 HTML Bootstrap Website Templateose Intense - #1 HTML Bootstrap Website
                                        </a>
                                    </h3>
                                    <ul class="list-inline productmain__item-property">
                                        <li>4,820 SqFt</li>
                                        <li style="list-style: none">|</li>
                                        <li>5 Beds</li>
                                        <li style="list-style: none">|</li>
                                        <li>5 Baths</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="tag">
                                <div class="tag__row">
                                    <div class="tag__col simple-tooltip" title="Diện tích: {{ "12.4 mét vuông" }}">
                                        <i class="fal fa-line-height"></i>
                                        12.4 m²
                                    </div>
                                    <div class="tag__col simple-tooltip" title="Đường rộng: {{ "3 ngõ ô tô tránh" }}">
                                        <i class="fal fa-road"></i>
                                        3 ngõ ô tô tránh
                                    </div>
                                </div>
                                <div class="tag__row">
                                    <div class="tag__col simple-tooltip" title="Mặt tiền: {{ "5 mét" }}">
                                        <i class="fad fa-house-flood"></i>
                                        5 mét
                                    </div>
                                    <div class="tag__col simple-tooltip" title="Hướng: {{ "Đông Bắc" }}">
                                        <i class="fal fa-compass"></i>
                                        Đông Bắc
                                    </div>
                                </div>
                                <div class="tag__row">
                                    <div class="tag__col simple-tooltip" title="Đối tượng rao bán: {{ "Công ty bất động sản" }}">
                                        <i class="fal fa-user-shield"></i>
                                        Công ty bất động sản
                                    </div>
                                    <div class="tag__col simple-tooltip" title="Loại hình: {{ "Đất nền" }}">
                                        <i class="fal fa-building"></i>
                                        Đất nền
                                    </div>
                                </div>
                            </div>
                            <div class="detail__footer">
                                <div class="detail__footer-row">
                                    <strong class="detail__footer-time">
                                        <i class="fad fa-calendar-alt"></i>
                                        <span>37 phút trước</span>
                                    </strong>
                                    {{-- <span class="detail__footer-divider hidden-hero-decrement-xs">|</span>
                                    <strong class="detail__footer-time hidden-hero-decrement-xs">
                                        <i class="fad fa-eye"></i>
                                        <span>4</span>
                                    </strong> --}}
                                    <a class="detail__footer-messager" href="#">
                                        <i class="fal fa-comment-alt-lines"></i>
                                        Trò chuyện
                                    </a>
                                    <a class="detail__footer-messager hidden-hero-increment-md" href="#">
                                        <i class="fal fa-thumbs-up"></i>
                                        Thích
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                @endfor
            </div>
            
        </div>
        
    </div>
@endsection