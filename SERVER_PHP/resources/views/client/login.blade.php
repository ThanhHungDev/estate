@extends('client.layout.index')

@section('title', 'Đăng nhập - ' . Config::get('app.name'))
@section('description', 'Đăng nhập - ' . Config::get('app.description'))

@section('meta-seo')
    <link rel="canonical" href="{{ asset('/') }}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{{ Config::get('app.og_name') }}" />
    <meta property="og:description" content="{{ Config::get('app.og_description') }}" />
    <meta property="og:url" content="{{ asset('/') }}" />
    <meta property="og:site_name" content="{{ Config::get('app.og_name') }}" />
    <meta property="og:image" content="{{ Config::get('app.image') }}" />
    <meta property="og:image:secure_url" content="{{ Config::get('app.image') }}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content="{{ Config::get('app.description') }}" />
    <meta name="twitter:title" content="{{ Config::get('app.og_name') }}" />
    <meta name="twitter:site" content="{{ Config::get('site_fb') }}" />
    <meta name="twitter:image" content="{{ Config::get('app.image') }}" />
@endsection

@section('preload')
    <link rel="preload" as="image" href="{{ asset('/images/cityscape.jpg' . Config::get('app.version')) }}" />
@endsection


@section('stylesheets')
    <link rel="stylesheet" type="text/css" href="{{ asset('css/login.css' . Config::get('app.version')) }}" />
@endsection

@section('javascripts')
    <script>
        window.CONFIG_APP  = `{!! json_encode(SupportHtml::getConfigReact()) !!}`;
        window.KEY_CAPTCHA = "{{ env('GOOGLE_RECAPTCHA_KEY')  }}";

        // check is route Get Sms input
        @if (SupportRouter::isRouterActive('GET.SEND.CODE'))
            @if (Session::has(Config::get('constant.VERIFY_SMS_ERROR')))
            window.SESSION__VERIFY__CODE = "{{ Session::get(Config::get('constant.VERIFY_SMS_ERROR')) }}";
            @endif
            @if(!empty($errors->all()))
            @foreach ($errors->all() as $error)
            window.SESSION__VERIFY__CODE = '{{ $error }}';
            @endforeach
            @endif
        @endif
        

        @if (SupportRouter::isRouterActive('AUTHLOCAL'))
            @if (Session::has(Config::get('constant.LOGIN_ERROR')))
            window.SESSION__ACCOUNT__LOGIN__CODE = "{{ Session::get(Config::get('constant.LOGIN_ERROR')) }}";
            @endif
            @if(!empty($errors->all()))
            @foreach ($errors->all() as $error)
            window.SESSION__ACCOUNT__LOGIN__CODE = '{{ $error }}';
            @endforeach
            @endif
        @endif
        
    </script>
    <script src="{{ asset('js/account.js' . Config::get('app.version')) }}"></script>
    
@endsection

@section('content')
    <div class="content">
        <div class="page page__login">
            <div class="page__login__bg"></div>
            <div id="account__root"></div>
        </div>
    </div>
@endsection
