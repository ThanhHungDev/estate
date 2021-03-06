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
    <link rel="preload" as="style" href="{{ asset('css/animate.min.css' . Config::get('app.version')) }}">
    <link rel="preload" as="style" href="{{ asset('css/awesome.min.css' . Config::get('app.version')) }}">
    <link rel="preload" as="style" href="{{ asset('css/client.min.css' . Config::get('app.version')) }}">
    <link rel="preload" as="style" href="{{ asset('css/library.min.css' . Config::get('app.version')) }}">
    <link rel="preload" as="image" href="{{ asset('logo.png' . Config::get('app.version')) }}">
    
    <link rel="preload" as="script" href="{{ asset('js/library/jquery.min.js' . Config::get('app.version')) }}">
    <link rel="preload" as="script" href="{{ asset('js/library/tipped.min.js' . Config::get('app.version')) }}">
    <link rel="preload" as="script" href="{{ asset('js/library/modal.jquery.min.js' . Config::get('app.version')) }}">
    {{-- <link rel="preload" as="script" href="{{ asset('js/library/slick.min.js' . Config::get('app.version')) }}"> --}}
    <link rel="preload" as="script" href="{{ asset('js/client/app.min.js' . Config::get('app.version')) }}">
    
    {{-- <script rel="preload" as="script" src='{{ asset('js/library/jquery.min.js' . Config::get('app.version')) }}'></script> --}}
    {{-- <script rel="preload" as="script" src="{{ asset('js/client/app.min.js' . Config::get('app.version')) }}"></script> --}}
    @yield('preload')

  



    <link rel="stylesheet" href="{{ asset('css/animate.min.css' . Config::get('app.version'))}}">
    <link rel="stylesheet" href="{{ asset('css/awesome.min.css' . Config::get('app.version'))}}">
    <link rel="stylesheet" href="{{ asset('css/client.min.css' . Config::get('app.version'))}}">
    <link rel="stylesheet" href="{{ asset('css/library.min.css' . Config::get('app.version'))}}">
    {{-- <link rel="stylesheet" href="{{ asset('css/material.min.css' . Config::get('app.version'))}}"> --}}
    
    <link rel="stylesheet" href="{{ asset('css/library/tipped.css' . Config::get('app.version'))}}">
    
    <script async='async' defer='defer' src='{{ asset('js/library/lazysizes.min.js' . Config::get('app.version')) }}'></script>
    
    <link rel="apple-touch-icon" sizes="57x57" href="{{ asset('/favicon/apple-icon-57x57.png' . Config::get('app.version')) }}">
    <link rel="apple-touch-icon" sizes="60x60" href="{{ asset('/favicon/apple-icon-60x60.png' . Config::get('app.version')) }}">
    <link rel="apple-touch-icon" sizes="72x72" href="{{ asset('/favicon/apple-icon-72x72.png' . Config::get('app.version')) }}">
    <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('/favicon/apple-icon-76x76.png' . Config::get('app.version')) }}">
    <link rel="apple-touch-icon" sizes="114x114" href="{{ asset('/favicon/apple-icon-114x114.png' . Config::get('app.version')) }}">
    <link rel="apple-touch-icon" sizes="120x120" href="{{ asset('/favicon/apple-icon-120x120.png' . Config::get('app.version')) }}">
    <link rel="apple-touch-icon" sizes="144x144" href="{{ asset('/favicon/apple-icon-144x144.png' . Config::get('app.version')) }}">
    <link rel="apple-touch-icon" sizes="152x152" href="{{ asset('/favicon/apple-icon-152x152.pn' . Config::get('app.version')) }}g">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('/favicon/apple-icon-180x180.png' . Config::get('app.version')) }}">
    <link rel="icon" type="image/png" sizes="192x192"  href="{{ asset('/favicon/android-icon-192x192.png' . Config::get('app.version')) }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('/favicon/favicon-32x32.png' . Config::get('app.version')) }}">
    <link rel="icon" type="image/png" sizes="96x96" href="{{ asset('/favicon/favicon-96x96.png' . Config::get('app.version')) }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('/favicon/favicon-16x16.png' . Config::get('app.version')) }}">
    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#62854F">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#62854F">

    {{-- <script>
        
        if ('serviceWorker' in navigator) {
            console.log("có hộ trợ run service");
            navigator.serviceWorker.register('/service.js');
        }
    </script> --}}
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
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit aspernatur sequi sunt voluptas, odio exercitationem consectetur autem cumque incidunt, hic consequuntur omnis. Cupiditate deleniti laborum molestias aperiam necessitatibus ad qui.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit aspernatur sequi sunt voluptas, odio exercitationem consectetur autem cumque incidunt, hic consequuntur omnis. Cupiditate deleniti laborum molestias aperiam necessitatibus ad qui.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit aspernatur sequi sunt voluptas, odio exercitationem consectetur autem cumque incidunt, hic consequuntur omnis. Cupiditate deleniti laborum molestias aperiam necessitatibus ad qui.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit aspernatur sequi sunt voluptas, odio exercitationem consectetur autem cumque incidunt, hic consequuntur omnis. Cupiditate deleniti laborum molestias aperiam necessitatibus ad qui.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit aspernatur sequi sunt voluptas, odio exercitationem consectetur autem cumque incidunt, hic consequuntur omnis. Cupiditate deleniti laborum molestias aperiam necessitatibus ad qui.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit aspernatur sequi sunt voluptas, odio exercitationem consectetur autem cumque incidunt, hic consequuntur omnis. Cupiditate deleniti laborum molestias aperiam necessitatibus ad qui.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit aspernatur sequi sunt voluptas, odio exercitationem consectetur autem cumque incidunt, hic consequuntur omnis. Cupiditate deleniti laborum molestias aperiam necessitatibus ad qui.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit aspernatur sequi sunt voluptas, odio exercitationem consectetur autem cumque incidunt, hic consequuntur omnis. Cupiditate deleniti laborum molestias aperiam necessitatibus ad qui.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit aspernatur sequi sunt voluptas, odio exercitationem consectetur autem cumque incidunt, hic consequuntur omnis. Cupiditate deleniti laborum molestias aperiam necessitatibus ad qui.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit aspernatur sequi sunt voluptas, odio exercitationem consectetur autem cumque incidunt, hic consequuntur omnis. Cupiditate deleniti laborum molestias aperiam necessitatibus ad qui.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit aspernatur sequi sunt voluptas, odio exercitationem consectetur autem cumque incidunt, hic consequuntur omnis. Cupiditate deleniti laborum molestias aperiam necessitatibus ad qui.
            </div>
        </div>
        @include('client.partial.footer')
    </div>
    <script src="{{ asset('js/library/jquery.min.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('js/library/tipped.min.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('js/library/modal.jquery.min.js' . Config::get('app.version')) }}"></script>
    {{-- <script src="{{ asset('js/library/slick.min.js' . Config::get('app.version')) }}"></script> --}}
    <script src="{{ asset('js/client/app.min.js' . Config::get('app.version')) }}"></script>
    
    @yield('javascripts')
    @yield('make-up-data')
    
</body>
</html>