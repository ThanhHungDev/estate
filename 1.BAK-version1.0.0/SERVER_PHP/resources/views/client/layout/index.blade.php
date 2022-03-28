<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="content-language" content="vi" />
    <meta name="robots" content="index, follow" />
    <title> @yield('title') </title>
    <meta name="description" content="@yield('description')">
    @php $csrf_token = csrf_token() @endphp
    <meta name="csrf-token" content="{{ $csrf_token }}" />
    <script>  window.csrf_token = "{{ $csrf_token }}" </script>

    @yield('meta-seo')

    <link rel="alternate" type="application/rss+xml" title="{{ Config::get('app.alternate_name') }}" href="" />

    @if (!Agent::isRobot() && Config::get('app.env') != 'local')
    {{-- <link rel="preload" as="font" href="/font/font-awe/webfonts/fa-brands-400.woff2" /> --}}
    {{-- <link rel="preload" as="style" href="{{ asset('css/library/tipped.css' . Config::get('app.version'))}}"/> --}}
    <link rel="preload" as="image" href="{{ asset('logo.png' . Config::get('app.version')) }}"/>
    <link rel="preload" as="script" href="{{ asset('js/library/lazysizes.min.js' . Config::get('app.version')) }}"/>
    <link rel="preload" as="script" href="{{ asset('js/library/jquery.min.js' . Config::get('app.version')) }}"/>
    <link rel="preload" as="script" href="{{ asset('js/library/tipped.min.js' . Config::get('app.version')) }}"/>
    <link rel="preload" as="script" href="{{ asset('js/library/modal.jquery.min.js' . Config::get('app.version')) }}"/>
    <link rel="preload" as="script" href="{{ asset('js/app.js' . Config::get('app.version')) }}"/>
    @yield('preload')
    @endif
    {{-- <link rel="stylesheet" href="{{ asset('css/library/tipped.css' . Config::get('app.version'))}}"/> --}}
    
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

    @if (!Agent::isRobot() && Config::get('app.env') != 'local' && $_SERVER['HTTP_HOST'] != 'localhost')
    <script>
        
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/service.js');
        }
    </script>
    @endif
    @if (Agent::isRobot())
    <script>
        (function() {
            var supportsPassive = eventListenerOptionsSupported();
            if (supportsPassive) {
                var addEvent = EventTarget.prototype.addEventListener;
                overwriteAddEvent(addEvent);
            }
            function overwriteAddEvent(superMethod) {
                var defaultOptions = {
                passive: true,
                capture: false
                };
                EventTarget.prototype.addEventListener = function(type, listener, options) {
                var usesListenerOptions = typeof options === 'object';
                var useCapture = usesListenerOptions ? options.capture : options;
                options = usesListenerOptions ? options : {};
                options.passive = options.passive !== undefined ? options.passive : defaultOptions.passive;
                options.capture = useCapture !== undefined ? useCapture : defaultOptions.capture;
                superMethod.call(this, type, listener, options);
                };
            }
            function eventListenerOptionsSupported() {
                var supported = false;
                try {
                var opts = Object.defineProperty({}, 'passive', {
                    get: function() {
                    supported = true;
                    }
                });
                window.addEventListener("test", null, opts);
                } catch (e) {}
                return supported;
            }
        })();
    </script>    
    @endif
    
    <script>
              window.IS_ROBOT        = "{{ Agent::isRobot() ? 1 : null }}";
        const CONFIG_COMPANY_NAME    = "{{ Config::get('app.company_name') }}";
        const CONFIG_COMPANY_ADDRESS = "{{ implode(',', [ Config::get('app.company_address_street'), Config::get('app.company_address_locality'), Config::get('app.company_address_region'), Config::get('app.company_address_country')]) }}";

        const MAP_LAT           = "{{ Config::get('app.map_lat') }}";
        const MAP_LONG          = "{{ Config::get('app.map_long') }}";
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
        {{-- nếu trang chat thì không cần hiện footer page --}}
        @if (!SupportRouter::isRouterActive('CHAT'))
            @include('client.partial.footer')
        @endif
    </div>
    @yield('modal')
    


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




{{-- 


gzip              on;
gzip_buffers      16 8k;
gzip_comp_level   4;
gzip_http_version 1.0;
gzip_min_length   1280;
gzip_types        text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
gzip_vary         on;







gzip on;
	gzip_disable "msie6";

	gzip_vary on;
	gzip_proxied any;
	gzip_comp_level 4;
	gzip_buffers 16 8k;
	gzip_http_version 1.0;
	gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript; --}}