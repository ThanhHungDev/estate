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
@section('javascripts')
    
@endsection
@section('content')
    <div class="content">
        <div class="slider">
            <div class="slider__item">
                <img src="{{ asset('/images/slider-hight.jpg')}}" />
            </div>
            <div class="slider__item d-none">
                <img src="{{ asset('/images/slider-find-hight.jpg')}}" />
            </div>
            <div class="slider__item d-none">
                <img src="{{ asset('/images/slider-sales.jpg')}}" />
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