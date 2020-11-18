@extends('client.layout.index')

@section('title', $post->title)
@section('description', $post->description_seo )
@section('keywords', $post->keyword_seo )

@section('meta-seo')
    <link rel="canonical" href="{{ asset('/') }}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{{ $post->title . " - " . Config::get("app.og_name") }}" />
    <meta property="og:description" content="{{ $post->description }}" />
    <meta property="og:url" content="{{ asset('/') }}" />
    <meta property="og:site_name" content="{{ $post->site_name }}" />
    <meta property="og:image" content="{{ $post->image_seo }}" />
    <meta property="og:image:secure_url" content="{{ Config::get("app.image") }}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content="{{ $post->description }}" />
    <meta name="twitter:title" content="{{ $post->title . " - " . Config::get("app.og_name") }}" />
    <meta name="twitter:site" content="{{ $post->site_name }}" />
    <meta name="twitter:image" content="{{ $post->image_seo }}" />
    <script type="application/ld+json">
    {
        "@context": "https://schema.org/",
        "@type": "Review",
        "itemReviewed": {
            "@type": "HowTo",
            "image": "{{ $post->image_seo }}",
            "name": "{{ $post->title }}",
            "telephone": "{{ Config::get("app.phone_one") }}",
            "address" :{
                "@type": "PostalAddress", 
                "addressLocality": "{{ Config::get("app.company_address_locality") }}",
                "addressCountry": "{{ Config::get("app.company_address_country") }}",
                "addressRegion": "{{ Config::get("app.company_address_region") }}",
                "postalCode":"{{ Config::get("app.company_postcode") }}",
                "streetAddress": "{{ Config::get("app.company_address_street") }}"
            }
        },
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": {{ $post->rate_value }},
            "worstRating": 1,
            "bestRating": 5
        },
        "name": "{{ $post->excerpt }}",
        @if($rateAuthor)
        "author": {
            "@type": "Person",
            "name": "{{$rateAuthor->username}}"
        }
        @endif
    }
    </script>
@endsection

@section('make-up-data')
@if($post->stylesheet)
{!! '<style>'. $post->stylesheet . '</style>' !!}
@endif
@if($post->javascript)
{!! '<script>'. $post->javascript . '</script>' !!}
@endif
@endsection

@section('javascripts')
    <script type="text/javascript" src="{{ asset('js/library/jquery.min.js' . Config::get('app.version')) }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/prism.min.js' . Config::get('app.version')) }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/jquery.rateit.min.js' . Config::get('app.version')) }}"></script>
    <script type="text/javascript" src="{{ asset('js/client/app.min.js' . Config::get('app.version')) }}"></script>
@endsection


@section('stylesheets')
<link rel="stylesheet" href="{{ asset('css/library/prism.min.css' . Config::get('app.version'))}}">
@endsection

@section('content')

<div class="headfull" style="background: url('{{ asset($post->background) }}') no-repeat center;">
    
    <div class="headfull__wrap_content">
        <h1 class="headfull__title">{{ $post->title }}</h1>
        <h2 class="headfull__excerpt">{{ $post->excerpt }}</h2>

        <form class="headfull__form_search" action="{{ Route('SEARCH_POST') }}" method="GET">
            
            <input class="form-control" name="q" placeholder="nhập nội dung tìm kiếm..">
            <button class="btn__search"><i class="hero-icon hero-magnify-scan"></i></button>
        </form>
    </div>
</div>


<div class="post">
    
    <div class="">


        <div class="publisher">
            <span>
                <i class="hero-icon hero-calendar-month-outline text-color-blue"></i>
                {{ date('Y-m-d', strtotime($post->created_at ))}}
            </span>
            <span>
                <i class="hero-icon hero-eye-outline text-color-blue"></i>
                {{ $post->view }} 表示モード
            </span>
        </div>
        <div class="catalogue">
            <div class="catalogue__title">
                目次 
                <span>
                [
                <a class="catalogue__btn" href="javascript:void(0)" data-toggle="1" 
                onclick="toggleCatalogue(this)">hide</a>
                ]
                </span>
            </div>
            <div class="catalogue__body">
                {!!  $post->catalogue  !!}
            </div>
        </div>
        @if($rateAuthor && $post->rate_value >= 4)
        <div class="rating__item">
            <div class="rateit" data-rateit-value="{{ $post->rate_value }}"  data-rateit-readonly="true"></div>
            <span>{{ $rateAuthor->username }}</span>
        </div>
        @endif

        <div class="main-view-theme-content">
            {!! $post->content !!}
        </div>

    </div>
    
</div>




@endsection
