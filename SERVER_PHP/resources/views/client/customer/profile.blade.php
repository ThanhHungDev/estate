@extends('client.layout.index')

@section('title', "Hồ sơ cá nhân - " . $profile->name . " - đăng bài thông tin bất động sản")
@section('description', Config::get("app.description"))

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

@section('content')
    <div class="content custommer profile">
        <div class="container profile__head">
            <div class="profile__head-img" style="
            background-image: linear-gradient(150deg, rgba(63, 174, 255, .3)15%, rgba(63, 174, 255, .3)70%, rgba(63, 174, 255, .3)94%), 
            url({{ $profile->background }});"></div>
            <div class="card social-prof">
                <div class="card-body">
                    <div class="wrapper">
                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" class="user-profile">
                        <h3>Jane Smith</h3>
                        <p>Web Developer</p>
                    </div>
                    <div class="row ">
                        <div class="col-lg-12">
                            <ul class=" nav nav-tabs justify-content-center s-nav">
                                <li><a class="active" href="#">Timeline</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Friends</a></li>
                                <li><a href="#">Photos</a></li>
                                <li><a href="#">Videos</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection