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
    <link rel="preload" as="image" href="{{ asset('/images/home/rent.png' . Config::get('app.version')) }}"/>
    <link rel="preload" as="image" href="{{ asset('/images/home/hand.png' . Config::get('app.version')) }}"/>
    <link rel="preload" as="image" href="{{ asset('/images/home/byer.png' . Config::get('app.version')) }}"/>

    <link rel="preload" as="image" href="{{ asset('/images/home/chart-icon-color.png' . Config::get('app.version')) }}"/>
    {{-- <link rel="preload" as="image" href="{{  asset(Config::get('constant.BG_HOME_SEARCH') . Config::get('app.version')) }}"> --}}
    {{-- <link rel="preload" as="image" href="{{ asset('slick/ajax-loader.gif') }}"> --}}
    <link rel="preload" as="script" href="{{ asset('js/library/select2.full.min.js'. Config::get('app.version')) }}">
@endsection


@section('javascripts')
    <script>
        const PROVINCES = JSON.parse(`{!! $provinces !!}`);
        
        const ROUTE_DISTRICTS = "{{ Route('DISTRICTS') }}";
        const ROUTE_COMMUNES  = "{{ Route('COMMUNES') }}";
    </script>
    <script src="{{ asset('js/library/select2.full.min.js' . Config::get('app.version')) }}"></script>
@endsection
@section('content')
    <div class="content">
        <div class="homepage__search" 
        style="background-color: #b7b7b7; 
        background-image: url('{{ asset(Config::get('constant.BG_HOME_SEARCH').Config::get('app.version')) }}');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        "
        >
            <div class="homesearch">
                <h4 class="homesearch__title">Cách tốt nhất để</h4>
                <h1 class="homesearch__main-title">Tìm Kiếm Bất Động Sản Hoàn Hảo</h1>
            </div>
            <div class="search__form">
                <form action="" class="form">
                    <div class="wrapper-head-form">
                        <div class="wrapper-select">
                            <select name="" class="form__select-category js__single-select">
                                <option value="">chọn loại hình</option>
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
                </form>
            </div>
        </div>
        <div class="intro">
            <div class="myservice">
                <div class="block">
                    <div class="block__head">
                        <img src="{{ asset('/images/home/byer.png' . Config::get('app.version')) }}" alt="Mua bán nhà đất"/>
                        <h3 class="title">Mua bán nhà đất</h3>
                    </div>
                    <div class="block__content">
                        <div class="block__content__item">
                            <a href="{{ asset('/') }}" class="count__icon">
                                <img  src="{{ asset('/images/home/chart-icon-color.png' . Config::get('app.version')) }}" alt="chart-icon-color số lượng bài đăng"/>
                            </a>
                            <a href="{{ asset('/') }}" class="count__text">
                                <h5 class="count">12.111.343</h5>
                                <h5 class="texttype">bài đăng</h5>
                            </a>
                        </div>
                        <div class="block__content__item">
                            <a href="{{ asset('/') }}" class="count__icon">
                                <img  src="{{ asset('/images/home/bar-chart-icon.png' . Config::get('app.version')) }}" alt="chart-icon-color số lượng bài đăng"/>
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
                        <img src="{{ asset('/images/home/rent.png' . Config::get('app.version')) }}" alt="Thuê, cho thuê nhà đất"/>
                        <h3 class="title">Thuê, cho thuê nhà đất</h3>
                    </div>
                    <div class="block__content">
                        <div class="block__content__item">
                            <a href="{{ asset('/') }}" class="count__icon">
                                <img  src="{{ asset('/images/home/chart-icon-color.png' . Config::get('app.version')) }}" alt="chart-icon-color số lượng bài đăng"/>
                            </a>
                            <a href="{{ asset('/') }}" class="count__text">
                                <h5 class="count">12.111.343</h5>
                                <h5 class="texttype">bài đăng</h5>
                            </a>
                        </div>
                        <div class="block__content__item">
                            <a href="{{ asset('/') }}" class="count__icon">
                                <img  src="{{ asset('/images/home/bar-chart-icon.png' . Config::get('app.version')) }}" alt="chart-icon-color số lượng bài đăng"/>
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
                        <img src="{{ asset('/images/home/hand.png' . Config::get('app.version')) }}" alt="sang nhượng"/>
                        <h3 class="title">Sang nhượng</h3>
                    </div>
                    <div class="block__content">
                        <div class="block__content__item">
                            <a href="{{ asset('/') }}" class="count__icon">
                                <img  src="{{ asset('/images/home/chart-icon-color.png' . Config::get('app.version')) }}" alt="chart-icon-color số lượng bài đăng"/>
                            </a>
                            <a href="{{ asset('/') }}" class="count__text">
                                <h5 class="count">12.111.343</h5>
                                <h5 class="texttype">bài đăng</h5>
                            </a>
                        </div>
                        <div class="block__content__item">
                            <a href="{{ asset('/') }}" class="count__icon">
                                <img  src="{{ asset('/images/home/bar-chart-icon.png' . Config::get('app.version')) }}" alt="chart-icon-color số lượng bài đăng"/>
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