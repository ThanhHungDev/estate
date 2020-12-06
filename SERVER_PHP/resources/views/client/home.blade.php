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
    <link rel="preload" as="image" href="{{ asset('slick/ajax-loader.gif') }}">
    @php
    $sliders = Config::get('constant.HOME_SLIDER');
    if(!RemoteInfor::isDesktop()){
        $sliders = Config::get('constant.HOME_SLIDER_MOBILE');
    }
    @endphp
    @foreach ($sliders as $slider)
    <link rel="preload" as="image" href="{{ asset($slider['src'])}}">
    @endforeach
@endsection


@section('javascripts')
    
@endsection
@section('content')
    <div class="content">
        <div class="slider">
            
            @foreach ($sliders as $key => $slider)
            <div class="slider__item @if($key) {{ 'd-none' }} @endif">
                <div class="slider__content" >
                    <div class="@isset($slider['animation']) {{ $slider['animation'] }} @endisset">
                        <h4 class="slider__content-title">{{ $slider['title'] }}</h4>
                        <h5 class="slider__content-subtitle">{{ $slider['description'] }}</h5>
                    </div>
                    
                </div>
                <img class="slider__item-background" src="{{ asset($slider['src'])}}" alt="{{ $slider['alt'] }}" />
            </div>
            @endforeach


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