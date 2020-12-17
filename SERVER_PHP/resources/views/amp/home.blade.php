@extends('amp.layout.index')

@section('title', Config::get("app.name"))
@section('description', Config::get("app.description"))

@section('meta-seo')
    <link rel="canonical" href="{{ Route('HOME_PAGE') }}">
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



@section('stylesheets')

<style amp-custom>
    {!!  file_get_contents(public_path('css/animate.min.css')) !!}
    {!!  file_get_contents(public_path('css/awesome.min.css')) !!}
    {!!  file_get_contents(public_path('css/client.min.css')) !!}
    {!!  file_get_contents(public_path('css/library.min.css')) !!}
</style>
@endsection
@section('api-javascripts')
<script async custom-element="amp-bind" src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"></script>
<script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
@endsection


@section('content')
<div class="content">
    <div class="homepage__search" 
    style="
        background: url('{{ asset(Config::get('constant.BG_HOME_SEARCH').Config::get('app.version')) }}');
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        -o-background-size: cover;
        -moz-background-size: cover;
        -webkit-background-size: cover;
    "
    > 
        <div class="homesearch">
            <h4 class="homesearch__title">Cách tốt nhất để</h4>
            <h1 class="homesearch__main-title">Tìm Kiếm Bất Động Sản Phù Hợp</h1>
        </div>
        <div class="search__form">
            <form  method="post" action-xhr="https://example.com/subscribe" class="form">
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
                        <a id="js__toggle-advanced-search" on="tap:AMP.setState({toggleAdvancedSearch: !toggleAdvancedSearch})" class="btn__search-more"> 
                            Công cụ khác &nbsp; <i [class]="'icon fad ' +(toggleAdvancedSearch ? 'fa-chevron-double-down' : 'fa-chevron-double-right')" class="icon fad fa-chevron-double-right"></i> 
                        </a>
                    </div>
                </div>
                <div id="js__advanced-search" [class]="'wrapper-bottom-form advanced-search ' +(toggleAdvancedSearch ? ' ' : 'd-none')"  class="wrapper-bottom-form advanced-search d-none">
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
                        $DIRECTION = Config::get('constant.DIRECTION');
                        @endphp
                        <select name="" id="js__select-direction" class="form__select-category">
                            @foreach ($DIRECTION as $key => $direction)
                            <option value="{{ $key }}">{{ $direction }}</option>
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
    <div class="intro">
        <div class="myservice">
            <div class="block">
                <div class="block__head">
                    <amp-img alt="Mua bán nhà đất"
                        src="{{ asset('/images/home/byer.png' . Config::get('app.version')) }}"
                        width="1" height="1" layout="responsive"></amp-img>
                    <h3 class="title">Mua bán nhà đất</h3>
                </div>
                <div class="block__content">
                    <div class="block__content__item">
                        <a href="{{ asset('/') }}" class="count__icon">
                            <amp-img alt="chart-icon-color số lượng bài đăng"
                                src="{{ asset('/images/home/chart-icon-color.png' . Config::get('app.version')) }}"
                                width="1" height="1" layout="responsive"></amp-img>
                        </a>
                        <a href="{{ asset('/') }}" class="count__text">
                            <h5 class="count">12.111.343</h5>
                            <h5 class="texttype">bài đăng</h5>
                        </a>
                    </div>
                    <div class="block__content__item">
                        <a href="{{ asset('/') }}" class="count__icon">
                            <amp-img alt="chart-icon-color số lượng bài đăng"
                                src="{{ asset('/images/home/bar-chart-icon.png' . Config::get('app.version')) }}"
                                width="1" height="1" layout="responsive"></amp-img>
                        </a>
                        <a href="{{ asset('/') }}" class="count__text">
                            <h5 class="count">14,113 Tin</h5>
                            <h5 class="texttype">Tin mới trong 24h</h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="myservice">
            <div class="block">
                <div class="block__head">
                    <amp-img src="{{ asset('/images/home/rent.png' . Config::get('app.version')) }}" alt="Thuê, cho thuê nhà đất" width="1" height="1" layout="responsive"></amp-img>
                    <h3 class="title">Thuê, cho thuê nhà đất</h3>
                </div>
                <div class="block__content">
                    <div class="block__content__item">
                        <a href="{{ asset('/') }}" class="count__icon">
                            <amp-img src="{{ asset('/images/home/chart-icon-color.png' . Config::get('app.version')) }}" alt="chart-icon-color số lượng bài đăng" width="1" height="1" layout="responsive"></amp-img>
                        </a>
                        <a href="{{ asset('/') }}" class="count__text">
                            <h5 class="count">12.111.343</h5>
                            <h5 class="texttype">bài đăng</h5>
                        </a>
                    </div>
                    <div class="block__content__item">
                        <a href="{{ asset('/') }}" class="count__icon">
                            <amp-img src="{{ asset('/images/home/bar-chart-icon.png' . Config::get('app.version')) }}" alt="chart-icon-color số lượng bài đăng" width="1" height="1" layout="responsive"></amp-img>
                        </a>
                        <a href="{{ asset('/') }}" class="count__text">
                            <h5 class="count">14,113 Tin</h5>
                            <h5 class="texttype">Tin mới trong 24h</h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="myservice">
            <div class="block">
                <div class="block__head">
                    <amp-img src="{{ asset('/images/home/hand.png' . Config::get('app.version')) }}" alt="sang nhượng" width="1" height="1" layout="responsive"></amp-img>
                    <h3 class="title">Sang nhượng</h3>
                </div>
                <div class="block__content">
                    <div class="block__content__item">
                        <a href="{{ asset('/') }}" class="count__icon">
                            <amp-img src="{{ asset('/images/home/chart-icon-color.png' . Config::get('app.version')) }}" alt="chart-icon-color số lượng bài đăng" width="1" height="1" layout="responsive"></amp-img>
                        </a>
                        <a href="{{ asset('/') }}" class="count__text">
                            <h5 class="count">12.111.343</h5>
                            <h5 class="texttype">bài đăng</h5>
                        </a>
                    </div>
                    <div class="block__content__item">
                        <a href="{{ asset('/') }}" class="count__icon">
                            <amp-img src="{{ asset('/images/home/bar-chart-icon.png' . Config::get('app.version')) }}" alt="chart-icon-color số lượng bài đăng" width="1" height="1" layout="responsive"></amp-img>
                        </a>
                        <a href="{{ asset('/') }}" class="count__text">
                            <h5 class="count">14,113 Tin</h5>
                            <h5 class="texttype">Tin mới trong 24h</h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>
@endsection