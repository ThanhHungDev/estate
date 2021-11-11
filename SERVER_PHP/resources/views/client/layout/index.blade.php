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

    <link rel="alternate" type="application/rss+xml" title="{{ Config::get('app.alternate_name') }}" href="" />

    {{-- <link rel="preload" as="font" href="/font/font-awe/webfonts/fa-brands-400.woff2" /> --}}
    <link rel="preload" as="style" href="{{ asset('css/library/bootstrap.min.css' . Config::get('app.version'))}}"/>
    <link rel="preload" as="style" href="{{ asset('css/library/tipped.css' . Config::get('app.version'))}}"/>
    <link rel="preload" as="image" href="{{ asset('logo.png' . Config::get('app.version')) }}"/>
    <link rel="preload" as="script" href="{{ asset('js/library/lazysizes.min.js' . Config::get('app.version')) }}"/>
    <link rel="preload" as="script" href="{{ asset('js/library/jquery.min.js' . Config::get('app.version')) }}"/>
    <link rel="preload" as="script" href="{{ asset('js/library/tipped.min.js' . Config::get('app.version')) }}"/>
    <link rel="preload" as="script" href="{{ asset('js/library/modal.jquery.min.js' . Config::get('app.version')) }}"/>
    <link rel="preload" as="script" href="{{ asset('js/app.js' . Config::get('app.version')) }}"/>
    @yield('preload')
    <link rel="stylesheet" href="{{ asset('css/library/bootstrap.min.css' . Config::get('app.version'))}}"/>
    <link rel="stylesheet" href="{{ asset('css/library/tipped.css' . Config::get('app.version'))}}"/>
    
    @yield('stylesheets')
    
    <script async='async' defer='defer' src="{{ asset('js/library/lazysizes.min.js' . Config::get('app.version')) }}"></script>
    
    <link rel="icon" type="image/png" href="{{ asset('favicon.ico' . Config::get('app.version')) }}">
    @if (!Agent::isRobot())
    <link rel="apple-touch-icon" sizes="57x57" href="{{ asset('/favicon/apple-icon-57x57.png' . Config::get('app.version')) }}">
    <link rel="apple-touch-icon" sizes="60x60" href="{{ asset('/favicon/apple-icon-60x60.png' . Config::get('app.version')) }}">
    <link rel="apple-touch-icon" sizes="72x72" href="{{ asset('/favicon/apple-icon-72x72.png' . Config::get('app.version')) }}">
    <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('/favicon/apple-icon-76x76.png' . Config::get('app.version')) }}">
    <link rel="apple-touch-icon" sizes="114x114" href="{{ asset('/favicon/apple-icon-114x114.png' . Config::get('app.version')) }}">
    <link rel="apple-touch-icon" sizes="120x120" href="{{ asset('/favicon/apple-icon-120x120.png' . Config::get('app.version')) }}">
    <link rel="apple-touch-icon" sizes="144x144" href="{{ asset('/favicon/apple-icon-144x144.png' . Config::get('app.version')) }}">
    <link rel="apple-touch-icon" sizes="152x152" href="{{ asset('/favicon/apple-icon-152x152.png' . Config::get('app.version')) }}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('/favicon/apple-icon-180x180.png' . Config::get('app.version')) }}">
    <link rel="icon" type="image/png" sizes="192x192"  href="{{ asset('/favicon/android-icon-192x192.png' . Config::get('app.version')) }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('/favicon/favicon-32x32.png' . Config::get('app.version')) }}">
    <link rel="icon" type="image/png" sizes="96x96" href="{{ asset('/favicon/favicon-96x96.png' . Config::get('app.version')) }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('/favicon/favicon-16x16.png' . Config::get('app.version')) }}">
    <link rel="manifest" href="{{ asset('/favicon/manifest.json' . Config::get('app.version')) }}">
    <meta name="msapplication-TileColor" content="#62854F">
    <meta name="msapplication-TileImage" content="{{ asset('/favicon/ms-icon-144x144.png' . Config::get('app.version')) }}">
    <meta name="theme-color" content="#62854F">
    {{-- dành cho bing search --}}
    @endif
    <link rel="icon" type="image/x-icon" href="{{ asset('/favicon/favicon.ico' . Config::get('app.version')) }}">
    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('/favicon/favicon.ico' . Config::get('app.version')) }}"/>

    @if (!Agent::isRobot())
    <script>
        
        if ('serviceWorker' in navigator) {
            console.log("có hộ trợ run service");
            navigator.serviceWorker.register('/service-v2.js');
        }
    </script>
    @endif
    
    <script>
        const CONFIG_COMPANY_NAME    = "{{ Config::get('app.company_name') }}";
        const CONFIG_COMPANY_ADDRESS = "{{ implode(',', [ Config::get('app.company_address_street'), Config::get('app.company_address_locality'), Config::get('app.company_address_region'), Config::get('app.company_address_country')]) }}";

        const MAP_LAT  = "{{ Config::get('app.map_lat') }}";
        const MAP_LONG = "{{ Config::get('app.map_long') }}";
        const GOOGLE_PLACES_API = `{{ env('GOOGLE_PLACES_API') }}`;
    </script>
    
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



    <script type="text/javascript" src="{{ asset('js/library/jquery.min.js' . Config::get('app.version')) }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/tipped.min.js' . Config::get('app.version')) }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/modal.jquery.min.js' . Config::get('app.version')) }}"></script>
    <script type="text/javascript" src="{{ asset('js/app.js' . Config::get('app.version')) }}"></script>
    
    @yield('javascripts')
    @yield('make-up-data')


    @php $analatic_key = Config::get("app.analatic") @endphp
    @if($analatic_key && !Agent::isRobot())
    <script async src="https://www.googletagmanager.com/gtag/js?id={{ $analatic_key }}"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', "{{ $analatic_key }}");
    </script>
    @endif
</body>
</html>