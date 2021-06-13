@extends('client.layout.index')

@section('title', 'Quên Mật khẩu - ' . Config::get("app.name"))
@section('description', 'Quên Mật khẩu - ' . Config::get("app.description"))

@section('meta-seo')
    <link rel="canonical" href="{{ asset('/') }}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{{ Config::get("app.og_name") }}" />
    <meta property="og:description" content="{{ Config::get("app.og_description") }}" />
    <meta property="og:url" content="{{ asset('/') }}" />
    <meta property="og:site_name" content="{{ Config::get("app.og_name") }}" />
    <meta property="og:image" content="{{ Config::get("app.image") }}" />
    <meta property="og:image:secure_url" content="{{ Config::get("app.image") }}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content="{{ Config::get("app.description") }}" />
    <meta name="twitter:title" content="{{ Config::get("app.og_name") }}" />
    <meta name="twitter:site" content="{{ Config::get('site_fb') }}" />
    <meta name="twitter:image" content="{{ Config::get("app.image") }}" />
@endsection

@section('javascripts')
@if(!RemoteInfor::isRobot())
<script src="https://www.google.com/recaptcha/api.js?hl=vi"></script>
@endif
@endsection
@section('content')
    <div class="content">
        <div class="page page__forgot">
            <div class="page__forgot__bg"></div>
            <form action="{{ 1 }}" class="page__forgot__form form">
                {!! csrf_field() !!}
                @if (Session::has(Config::get('constant.FORGOT_ERROR')))
                <div class="alert alert-warning">
                    {{ Session::get(Config::get('constant.FORGOT_ERROR')) }}
                </div>
                @endif
                @if($errors->any())
                <div class="alert alert-danger">
                    đã có lỗi, vui lòng kiểm tra lại
                </div>
                @endif
                <h2 class="form__title">Quên Mật Khẩu</h2>
                
                <div class="form-group">
            
                    <div class="input-group">
                        <i class="icon fad fa-envelope"></i>
                        <input name="email" ref="email" type="text" autoCorrect="off" autoCapitalize="none" class="input-control" placeholder="Địa chỉ email" />
                    </div>
                    @if($errors->has('email'))
                        <div class="text-color-danger text-left">{{ $errors->first('email') }}</div>
                    @endif
                    @if(!RemoteInfor::isRobot())
                    <!-- Google reCaptcha -->
                    <div class="g-recaptcha" id="feedback-recaptcha" data-sitekey="{{ env('GOOGLE_RECAPTCHA_KEY')  }}"></div>
                    <!-- End Google reCaptcha -->
                    @endif
                    <button type="submit" class="btn btn-forgot aqua-gradient-rgba">
                        Báo Quản Trị Viên
                    </button>
                </div>
                <h4 class="description">
                    Bạn đã nhớ tài khoản của mình? Bạn muốn
                    <a href="{{ Route('LOGIN') }}" class="login-inline">
                        đăng nhập
                    </a>
                </h4>
            </form>
        </div>
    </div>
@endsection