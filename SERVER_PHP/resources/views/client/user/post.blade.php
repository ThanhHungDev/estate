@extends('client.layout.index')

@section('title', "Hồ sơ cá nhân - " . $profile->name . " - đăng bài thông tin bất động sản")
@section('description', Config::get("app.description"))

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


@section('stylesheets')
    {{-- cái này là của laravel --}}
    <link rel="stylesheet" type="text/css" href="{{ asset('css/library/bootstrap.post.css' . Config::get('app.version'))}}"/>
    <link type="text/css" rel="stylesheet" href="{{ asset('css/user.post.css' . Config::get('app.version')) }}" /> 
@endsection

@section('javascripts')
    
    <script type="text/javascript" src="{{ asset('js/library/lightgallery.min.js' . Config::get('app.version')) }}"></script>
    <script type="text/javascript">
        lightGallery(document.getElementById('photos__responsive-images'));
        

        window.CONFIG_APP = `{!! json_encode(SupportHtml::getConfigReact()) !!}`;
        window.CATEGORIES = `{!! json_encode($categories ?? []) !!}`;
        window.PROVINCES  = `{!! json_encode(Config::get('province')) !!}`;
        window.JWT_TOKEN  = `{{ SupportDB::getJwtAuthentication() }}`;
        const KEY_CAPTCHA = "{{ env('GOOGLE_RECAPTCHA_KEY')  }}";
    </script>
    <script src="{{ asset('js/post.js'. Config::get('app.version')) }}"></script>
@endsection
@section('content')
    <div class="content custommer">
        <div id="react__root" class="post__root-react"></div>
    </div>
@endsection