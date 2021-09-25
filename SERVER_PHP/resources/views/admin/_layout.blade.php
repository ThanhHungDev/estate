


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> @yield('title') </title>
    {{-- <meta name="robots" content="index, follow" /> --}}
    <meta name="robots" content="noindex" />
    <meta name="googlebot" content="noindex" />

    <meta http-equiv="content-language" content="vi" />
    <meta property="og:title" content="@yield('title')" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{{ asset('/') }}" />
    <meta property="og:image" content="@yield('image_seo')" />
    <meta property="og:description" content="@yield('description')" />
    <meta name="description" content="@yield('description')">

    
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
    <link rel="manifest" href="/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#62854F">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#62854F">
    
    {{-- <link rel="stylesheet" href="{{ asset('css/animate.min.css' . Config::get('app.version'))}}">
    <link rel="stylesheet" href="{{ asset('css/awesome.min.css' . Config::get('app.version'))}}">
    <link rel="stylesheet" href="{{ asset('css/client.min.css' . Config::get('app.version'))}}">
    <link rel="stylesheet" href="{{ asset('css/library.min.css' . Config::get('app.version'))}}">
    <link rel="stylesheet" href="{{ asset('css/material.min.css' . Config::get('app.version'))}}"> --}}
    <link rel="stylesheet" href="{{ asset('css/admin.css' . Config::get('app.version'))}}">

    <script async='async' defer='defer' src='{{ asset('js/library/lazysizes.min.js' . Config::get('app.version')) }}'></script>
    @yield('stylesheets')

    <script>
        const ACTION_CHECK_SLUG = "{{ Route('ADMIN_GET_SLUG', ['slug' => '/'] ) }}";
        const GOOGLE_PLACES_API = "{{ env('GOOGLE_PLACES_API') }}";
    </script>

</head>
<body>
    <div class="wrapper-page">
        

        @include ("admin._sidebar")
        <div id="js_right_content" class="right_content_page">
            @include ('admin._header')
            <div class="admin_content_body">
                @yield('content_admin')
            </div>
            @include ('admin._footer')
        </div>
    </div>
    @yield('javascripts')
</body>
</html>