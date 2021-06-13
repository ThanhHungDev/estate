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


@section('javascripts')
    <script src="{{ asset('/js/library/nouislider.min.js' . Config::get('app.version')) }}"></script>
    <script>
        const PROVINCES = JSON.parse(`{!! $provinces !!}`);
        
        const ROUTE_DISTRICTS = "{{ Route('DISTRICTS') }}";
        const ROUTE_COMMUNES  = "{{ Route('COMMUNES') }}";
    </script>
    <script src="{{ asset('js/library/select2.full.min.js' . Config::get('app.version')) }}"></script>
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
        
        
    </div>
@endsection