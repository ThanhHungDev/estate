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
    <link rel="preload" as="image" href="{{  asset(Config::get('constant.BG_HOME_SEARCH') . Config::get('app.version')) }}">
    <link rel="preload" as="image" href="{{ asset('slick/ajax-loader.gif') }}">
    <link rel="preload" as="script" href="{{ asset('js/library/select2.min.js'. Config::get('app.version')) }}">
@endsection


@section('javascripts')
    <script src="{{ asset('js/library/select2.min.js' . Config::get('app.version')) }}"></script>
@endsection
@section('content')
    <div class="content">
        <div class="homepage__search"  style="background-image: url({{ asset(Config::get('constant.BG_HOME_SEARCH') . Config::get('app.version')) }});">
            <div class="homesearch">
                <h4 class="homesearch__title">Cách Tốt nhất để</h4>
                <h1 class="homesearch__main-title">Tìm Kiếm Bất Động Sản Hoàn Hảo</h1>
            </div>
            <div class="search__form">
                <form action="" class="form__homepage">

                    {{-- https://homepress.stylemixthemes.com/home-agent/
                    https://homepress.stylemixthemes.com/home-real-estate-v2/
                    https://homepress.stylemixthemes.com/home-search-over-image/ --}}
                    <select name="" id="" class="homesearch__select-category js__single-select">
                        <option value="">chọn loại hình</option>
                        @if(!$categories->isEmpty())
                        @foreach ($categories as $category)
                        <option value="{{ $category->slug }}">{{ $category->title }}</option>
                        @endforeach
                        @endif
                    </select>
                    <div class="input-group">
                        <input class="homesearch__input" type="text"  />
                    </div>
                </form>
            </div>
        </div>
        content page land
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi autem non magnam laborum sit voluptatum nisi, impedit corrupti, distinctio, quas nobis similique officia expedita numquam possimus quisquam adipisci excepturi aliquid.
    </div>
@endsection