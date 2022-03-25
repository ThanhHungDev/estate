@extends('client.layout.index')

@section('title', 'Liên hệ - ' . Config::get("app.name"))
@section('description', 'Liên hệ - ' . Config::get("app.description"))


@section('stylesheets')
<link rel="stylesheet" type="text/css" href="{{ asset('css/contact.css' . Config::get('app.version'))}}"/>
@endsection 


@section('javascripts')
    <script type="text/javascript" src="{{ asset('js/library/jquery.validate.min.js' . Config::get('app.version')) }}"></script>
    <script type="text/javascript" src="{{ asset('js/contact.js' . Config::get('app.version')) }}"></script>
    <script type="text/javascript" src="{{ asset('js/validate.contact.js' . Config::get('app.version')) }}"></script>
@endsection
@section('content')
<div class="content">
    <div class="component-contact">

        {{-- <div>
            <video id="vid5v" poster="https://glpjt.s3.amazonaws.com/so/av/vid5.png" controls=true>
                <source src="https://drive.google.com/uc?export=download&id=1tSwKarHl4MjoJakEZ2jIM0oUm-vNHhmv" type='video/mp4'>
            </video>
        </div> --}}
        <div id="map-contact-canvas" class="map-contact"></div>
        <div class="form-contact">
    
            <h1 class="contact-intro">Công ty mua bán nhà đất tp.Bảo Lộc chuyên nghiệp</h1>
            <h2 class="title-contact">Thông Tin liên lạc</h2>
            <div class="left-infor">
                <h2 class="mycompany">{{ Config::get('app.company_name') }}</h2>
                <div class="contact-address">
                    <div class="company-name">
                        <i class="hero-icon hero-account-group-outline"></i>
                        <span>{{ Config::get('app.company_name') }}</span>
                    </div>
                    <div class="address">
                        <i class="hero-icon hero-home-map-marker"></i>
                        <span>{{ implode(',', [ Config::get("app.company_address_street"), Config::get("app.company_address_locality"), Config::get("app.company_address_region"), Config::get("app.company_address_country")]) }}</span>
                    </div>
                    <div class="phone">
                        <i class="hero-icon hero-cellphone-nfc"></i>
                        <span>
                            Số điện thoại: 
                            <a href="tel:{{ Config::get('app.phone') }}">
                                {{ Config::get('app.phone') }}
                            </a>
                        </span>
                    </div>
                    <div class="email">
                        <i class="hero-icon hero-card-account-mail-outline"></i>
                        <span>
                            <a href="mailto:{{ Config::get("app.company_mail") }}">
                                {{ Config::get("app.company_mail") }}
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            <div class="right-form-contact">
                <form class="js-validate-form" action="{{ Route('MAIL_CONTACT') }}" method="post">
                    {!! csrf_field() !!}
                    @if (Session::has(Config::get('constant.SAVE_ERROR')))
                    <div class="alert alert-danger">
                        {{ Session::get(Config::get('constant.SAVE_ERROR')) }}
                    </div>
                    @elseif (Session::has(Config::get('constant.SAVE_SUCCESS')))
                    <div class="alert alert-success">
                        Đã liên lạc với quản trị viên. Chúng tôi sẽ liên lạc với bạn sớm nhất có thể.
                    </div>
                    @endif
                    @if(!empty($errors->all()))
                        @foreach ($errors->all() as $error)
                        <div class="alert alert-warning">
                            {{ $error }}
                        </div>
                        @endforeach
                    @endif
                    <div class="form-input">
                        <label> Tên của bạn <i>✵</i></label>
                        <input onClick="this.setSelectionRange(0, this.value.length)" name="name" type="text" value="{{ old('name' ) }}"/>
                    </div>
                    <div class="form-input">
                        <label> Email của bạn <i>✵</i></label>
                        <input autocapitalize="off" onClick="this.setSelectionRange(0, this.value.length)" name="email" type="text" value="{{ old('email' ) }}"/>
                    </div>
                    <div class="form-input">
                        <label> Số điện thoại của bạn <i>✵</i></label>
                        <input onClick="this.setSelectionRange(0, this.value.length)" name="mobile" type="text" value="{{ old('mobile' ) }}" />
                    </div>
                    <div class="form-input">
                        <label> Tin nhắn tới Admin </label>
                        <textarea onClick="this.setSelectionRange(0, this.value.length)" name="message" class="" >{{ old('message' ) }}</textarea>
                    </div>
                    <div id="google__recaptcha" class="lazyload">
                        <!-- Google reCaptcha -->
                        <div class="g-recaptcha" id="feedback-recaptcha" data-sitekey="{{ env('GOOGLE_RECAPTCHA_KEY')  }}"></div>
                        <!-- End Google reCaptcha -->
                        <button class="btn-send-mail-contact">Gửi liên lạc</button>
                    </div>
                </form>
            </div>
        </div>
        
    </div>
</div>
@endsection