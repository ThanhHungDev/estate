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
    <link type="text/css" rel="stylesheet" href="{{ asset('css/user.post.css' . Config::get('app.version')) }}" /> 
@endsection
@php 
$configApp = Config::get('app');
$configApp['providers'] = [];
$configApp['aliases'] = [];
$configApp['API'] = [
    'UPDATE_VERIFY_PHONE'      => Route('API.USER.PATCH_VERIFY_PHONE'),
    'DISTRICTS'                => Route('DISTRICTS'),
    'COMMUNES'                 => Route('COMMUNES'),
    'PROVINCES'                => Route('PROVINCES'),
    'API_UPLOAD_FILE'          => Route('API_UPLOAD_FILE'),
    'APARTMENT_PROJECTS'       => Route('APARTMENT_PROJECTS'),
    'APARTMENT_PROJECT_DETAIL' => Route('APARTMENT_PROJECT_DETAIL', [ 'id' => null ]),
    'PRODUCT_SHOW'  	       => trim(Route('product.show', [ 'product' => '__________' ]), "__________"),
];
$configApp['WEB'] = [
    'PATCH_VERIFY_PHONE' => Route('PATCH_VERIFY_PHONE'),
    'STORE_APARTMENT'    => Route('STORE_APARTMENT'),
    'LOGOUT'             => Route('LOGOUT'),
    'USER_POST'          => Route('USER_POST', ['path' => null ], false ),
];
$configApp['CONSTANT'] = Config::get('constant');
$configApp['CLIENT']   = Config::get('client');
$configApp['UNIT']     = Config::get('unit');
$configApp['IMAGE']    = Config::get('image.UPLOAD');
$configApp['VIDEO']    = Config::get('video.UPLOAD');
@endphp

@section('javascripts')
    
    <script type="text/javascript" src="{{ asset('js/library/lightgallery.min.js' . Config::get('app.version')) }}"></script>
    <script type="text/javascript">
        /// setting show image
        lightGallery(document.getElementById('photos__responsive-images'));
        

        const CONFIG_APP = `{!! json_encode($configApp) !!}`;
        const CATEGORIES = `{!! json_encode($categories ?? []) !!}`;
        const PROVINCES  = `{!! json_encode(Config::get('province')) !!}`;
        const JWT_TOKEN  = `{{ Cookie::get(Config::get('constant.TOKEN_COOKIE_NAME')) }}`;
        // const KEY_CAPTCHA = "{{ env('GOOGLE_RECAPTCHA_KEY')  }}";
    </script>
    <script src="{{ asset('js/post.js'. Config::get('app.version')) }}"></script>
@endsection
@section('content')
    <div class="content custommer">
        <div id="react__root" class="post__root-react"></div>
    </div>
@endsection