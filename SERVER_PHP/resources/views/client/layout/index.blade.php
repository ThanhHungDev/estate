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
    <link rel="preload" as="script" href="{{ asset('js/app.min.js' . Config::get('app.version')) }}">
    
    {{-- <script rel="preload" as="script" src='{{ asset('js/library/jquery.min.js' . Config::get('app.version')) }}'></script> --}}
    {{-- <script rel="preload" as="script" src="{{ asset('js/app.min.js' . Config::get('app.version')) }}"></script> --}}
    @yield('preload')

  
    <link rel="stylesheet" href="{{ asset('css/library/bootstrap.min.css' . Config::get('app.version'))}}">
    {{-- <link rel="stylesheet" href="{{ asset('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' . Config::get('app.version'))}}"> --}}
    

    <link rel="stylesheet" href="{{ asset('css/animate.min.css' . Config::get('app.version'))}}">
    <link rel="stylesheet" href="{{ asset('css/awesome.min.css' . Config::get('app.version'))}}">
    <link rel="stylesheet" href="{{ asset('css/client.min.css' . Config::get('app.version'))}}">
    <link rel="stylesheet" href="{{ asset('css/library.min.css' . Config::get('app.version'))}}">
    {{-- <link rel="stylesheet" href="{{ asset('css/material.min.css' . Config::get('app.version'))}}"> --}}
    
    <link rel="stylesheet" href="{{ asset('css/library/tipped.css' . Config::get('app.version'))}}">
    
    <script async='async' defer='defer' src='{{ asset('js/library/lazysizes.min.js' . Config::get('app.version')) }}'></script>
    
    <link rel="icon" type="image/png" href="{{ asset('favicon.ico' . Config::get('app.version')) }}">
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
    <link rel="icon" type="image/x-icon" href="{{ asset('/favicon/favicon.ico' . Config::get('app.version')) }}">
    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('/favicon/favicon.ico' . Config::get('app.version')) }}"/>

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
        const GOOGLE_PLACES_API = `{{ env('GOOGLE_PLACES_API') }}`;
    </script>
    @php 
    $configApp = Config::get('app');
    $configApp['providers'] = [];
    $configApp['aliases'] = [];
    $configApp['API'] = [
        'UPDATE_VERIFY_PHONE' => Route('API.USER.PATCH_VERIFY_PHONE')
    ];
    $configApp['WEB'] = [
        'PATCH_VERIFY_PHONE' => Route('PATCH_VERIFY_PHONE'),
        'LOGOUT' => Route('LOGOUT')
    ];
    $configApp['CONSTANT'] = Config::get('constant');
    @endphp
    <script>
        const CONFIG_APP = `{!! json_encode($configApp) !!}`;
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



    <!-- Modal HTML embedded directly into document -->
    <div id="modal__notification" class="modal modal__notification">
        <div class="modal__header">
            <i class="icon far @if(Auth::check()) fa-bell-on @else fa-sign-in @endif"></i>
            <span class="title">Thông báo! </span>
            <a href="#" rel="modal:close">
                <i class="close fal fa-times"></i>
            </a>
        </div>
        <div class="modal__body">
            <div class="notification">
                @php $NOTIFICATIONS = SupportDBRealtime::getNotifications() @endphp
                @if (count($NOTIFICATIONS))
                @foreach ($NOTIFICATIONS as $noti)
                <a class="notification__content {{ $noti->read? 'read' : null }} {{ $noti->channel_id }}" href="#">
                    <div class="icon ">
                        <i class="fad fa-comments-alt"></i>
                    </div>
                    <div class="notification__item">
                        <h4 class="title">{{ $noti->title }}</h4>
                        <p class="info">{{ $noti->body }}</p>
                        @if(!$noti->read)
                            <span class="sticky__none-read"></span>
                        @endif
                    </div>
                </a>
                @endforeach
                @else
                <div class="notification__content-404">
                    không có thông báo
                </div>
                @endif
            </div>
        </div>
        <div class="modal__footer">
            <a class="btn btn__close" href="#" rel="modal:close">
                Hiện thị tất cả
            </a>
        </div>
    </div>
    <!-- Modal HTML embedded directly into document -->
    <div id="modal__messages" class="modal modal__notification">
        <div class="modal__header">
            <i class="icon far @if(Auth::check()) fa-bell-on @else fa-sign-in @endif"></i>
            <span class="title">Tin nhắn chưa đọc! </span>
            <a href="#" rel="modal:close">
                <i class="close fal fa-times"></i>
            </a>
        </div>
        <div class="modal__body">
            <div class="notification">
                @php $MESSAGES = SupportDBRealtime::getMessages() @endphp
                @if (count($MESSAGES))
                @foreach ($MESSAGES as $mess)
                <a class="notification__content {{ $mess->read? 'read' : null }}" href="#">
                    <div class="icon ">
                        <i class="fad fa-comments-alt"></i>
                    </div>
                    <div class="notification__item">
                        <h4 class="title">{{ $mess->body }}</h4>
                        <p class="info">{{ $mess->body }}</p>
                        @if(!$mess->read)
                            <span class="sticky__none-read"></span>
                        @endif
                    </div>
                </a>
                @endforeach
                @else
                <div class="notification__content-404">
                    không có tin nhắn mới
                </div>
                @endif
            </div>
        </div>
        <div class="modal__footer">
            <a class="btn btn__close" href="#" rel="modal:close">
                Hiện thị tất cả
            </a>
        </div>
    </div>



    <script src="{{ asset('js/library/jquery.min.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('js/library/tipped.min.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('js/library/modal.jquery.min.js' . Config::get('app.version')) }}"></script>
    {{-- <script src="{{ asset('js/library/slick.min.js' . Config::get('app.version')) }}"></script> --}}
    <script src="{{ asset('js/app.min.js' . Config::get('app.version')) }}"></script>
    
    @yield('javascripts')
    @yield('make-up-data')
    {{-- <script type="text/javascript">
        function generateEmailFormat(){
            const CHARACTERS = 'abcdefghijklmnopqrstuvwxyz1234567890';
            var email = '';
            for( var position = 0; position < 15; position ++ ){
                string += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
            }
            return email + '@' + window.location.hostname + '.gmail'
        }
        
        //// mới vào app luôn check xem cái localStorage tồn tại không? 
        if(typeof Storage !== "undefined") {
            // Trình duyệt này hỗ trợ LocalStorage
            const AUTH = localStorage.getItem('AUTH')
            if( !AUTH ){
                /// ngừoi dùng chưa login trình duyệt này
                /// không biết user này là ai nên phải tạo đại 1 cái user ảo
                var auth = {
                    email: generateEmailFormat(),
                    name : 'free user'
                }
                console.log(auth)
            }
        }
    </script> --}}
</body>
</html>