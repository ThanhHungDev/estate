<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="content-language" content="vi" />
    <meta name="robots" content="index, follow" />
    <title> @yield('title') </title>
    <meta name="description" content="@yield('description')">

    @yield('meta-seo')

    <link rel="alternate" type="application/rss+xml" title="{{ Config::get("app.alternate_name") }}" href="" />


    {{-- <link rel="preload" href="/font/font-awe/webfonts/fa-brands-400.woff2" as="font" />
    <link rel="preload" href="/font/font-awe/webfonts/fa-duotone-900.woff2" as="font" />
    <link rel="preload" href="/font/font-awe/webfonts/fa-light-300.woff2" as="font" />
    <link rel="preload" href="/font/font-awe/webfonts/fa-regular-400.woff2" as="font" />
    <link rel="preload" href="/font/font-awe/webfonts/fa-solid-900.woff2" as="font" /> --}}
    <link rel="preload" as="style" href="{{ asset('css/awesome.min.css' . Config::get('app.version')) }}">
    <link rel="preload" as="style" href="{{ asset('css/client.min.css' . Config::get('app.version')) }}">
    <link rel="preload" as="style" href="{{ asset('css/library.min.css' . Config::get('app.version')) }}">
    <link rel="preload" as="image" href="{{ asset('logo.png' . Config::get('app.version')) }}">
    
    
    {{-- <script rel="preload" as="script" src='{{ asset('js/library/jquery.min.js' . Config::get('app.version')) }}'></script> --}}
    {{-- <script rel="preload" as="script" src="{{ asset('js/client/app.min.js' . Config::get('app.version')) }}"></script> --}}
    @yield('preload')

  



    {{-- <link rel="stylesheet" href="{{ asset('css/animate.min.css' . Config::get('app.version'))}}"> --}}
    <link rel="stylesheet" href="{{ asset('css/awesome.min.css' . Config::get('app.version'))}}">
    <link rel="stylesheet" href="{{ asset('css/client.min.css' . Config::get('app.version'))}}">
    <link rel="stylesheet" href="{{ asset('css/library.min.css' . Config::get('app.version'))}}">
    {{-- <link rel="stylesheet" href="{{ asset('css/material.min.css' . Config::get('app.version'))}}"> --}}
    
    <link rel="stylesheet" href="{{ asset('css/library/tipped.css' . Config::get('app.version'))}}">
    
    <script async='async' defer='defer' src='{{ asset('js/library/lazysizes.min.js' . Config::get('app.version')) }}'></script>
    <link rel="icon" type="image/png" href="{{ asset('favicon.ico' . Config::get('app.version')) }}">
    {{-- <script>
        
        if ('serviceWorker' in navigator) {
            console.log("có hộ trợ run service");
            navigator.serviceWorker.register('/service.js');
        }
    </script> --}}

    <script type='application/ld+json'>
        {
            "@context":"https://schema.org/",
            "@type":"WebSite",
            "url":"{{ asset('/') }}",
            "name":"{{ Config::get("app.name") }}",
            "alternateName":"{{ Config::get("app.alternate_name") }}",
            "potentialAction":{
                "@type":"SearchAction",
                "target":"{{ Route('SEARCH') }}?q={search_term_string}",
                "query-input":"required name=search_term_string"
            }
        }
    </script>
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "{{ Config::get("app.company_name") }}",
            "alternateName": "{{ Config::get("app.alternate_name") }}",
            "url": "{{ asset('/') }}",
            "telephone": "[ {{ Config::get("app.phone_one") }} , {{ Config::get("app.phone_two") }} ]",
            "description": "{{ Config::get("app.description") }}",
            "priceRange": "{{ Config::get("app.price_range") }}",
            "logo": "{{ Config::get("app.logo") }}",
            "image":"{{ Config::get("app.image") }}",
            "hasMap": "{{ Config::get("app.map_link") }}", 
            "email": "mailto:{{ Config::get("app.company_mail") }}",
                "founder": "{{ Config::get("app.founder") }}",
                "address": {
                    "@type": "PostalAddress", 
                    "addressLocality": "{{ Config::get("app.company_address_locality") }}",
                    "addressCountry": "{{ Config::get("app.company_address_country") }}",
                    "addressRegion": "{{ Config::get("app.company_address_region") }}",
                    "postalCode":"{{ Config::get("app.company_postcode") }}",
                    "streetAddress": "{{ Config::get("app.company_address_street") }}"
                },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": {{ Config::get("app.map_lat") }},
                "longitude": {{ Config::get("app.map_long") }}
            }
        }
    </script>

    <script>
        const CONFIG_COMPANY_NAME    = "{{ Config::get("app.company_name") }}";
        const CONFIG_COMPANY_ADDRESS = "{{ implode(',', [ Config::get("app.company_address_street"), Config::get("app.company_address_locality"), Config::get("app.company_address_region"), Config::get("app.company_address_country")]) }}";

        const MAP_LAT  = "{{ Config::get('app.map_lat') }}";
        const MAP_LONG = "{{ Config::get('app.map_long') }}";
        const GOOGLE_PLACES_API = "{{ env('GOOGLE_PLACES_API') }}";

        const IS_DESKTOP = parseInt("{{ RemoteInfor::isDesktop() ? 1 : 0 }}");
        const IS_MOBILE  = parseInt("{{ RemoteInfor::isMobile() ? 1 : 0 }}");
        const IS_ROBOT   = parseInt("{{ RemoteInfor::isRobot() ? 1 : 0 }}");
    </script>

    {{-- @php $analatic_key = Config::get("app.analatic") @endphp
    @if($analatic_key)
    <script async src="https://www.googletagmanager.com/gtag/js?id={{ $analatic_key }}"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', "{{ $analatic_key }}");
    </script>
    @endif --}}

    @yield('stylesheets')
</head>
<body>
    
    <div class="wrapper-page">
        @include('client.partial.tophead')
        @include('client.partial.header')
        <div class="page-content-layout">
            @yield('content')
        </div>
        @include('client.partial.footer')
    </div>
    <script defer src="{{ asset('js/library/jquery.min.js' . Config::get('app.version')) }}"></script>
    <script defer src="{{ asset('js/library/tipped.min.js' . Config::get('app.version')) }}"></script>
    <script defer src="{{ asset('js/library/modal.jquery.min.js' . Config::get('app.version')) }}"></script>
    <script defer src="{{ asset('js/library/slick.min.js' . Config::get('app.version')) }}"></script>
    <script defer src="{{ asset('js/client/app.min.js' . Config::get('app.version')) }}"></script>
    
    @yield('javascripts')
    @yield('make-up-data')
    
</body>
</html>