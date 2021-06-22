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
    <div class="content">
        <div class="profile custommer">
            <div class="row-hero">
                <div class="col-hero-12">
                    <div class="profile__wrapper overflow-hidden">
                        <div class="profile__head">
                            <div class="pr-3 text-center">
                                <img src="{{ $profile->avatar }}" alt="{{ $profile->email }}" 
                                    class="avatar rounded mb-2 img-thumbnail"/>
                                <a href="#" class="btn btn-outline-dark btn-sm btn-block">chỉnh trang cá nhân</a>
                            </div>
                            <div class="profile__head-body">
                                <h4 class="my-0">{{ $profile->name }}</h4>
                                <p class="small hidden-hero-decrement-md">
                                    <i class="fal fa-address-card"></i>
                                    {{ $profile->email }}
                                </p>
                            </div>
                            <div class="profile__right">
                                <a href="#" class="btn btn-outline-dark btn-sm btn-block">
                                    <i class="fas fa-camera"></i>
                                    <span class="hidden-hero-decrement-md">Chỉnh sửa ảnh bìa</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-light p-4 d-flex justify-content-end text-center bg-red">
            <ul class="list-inline mb-0">
                <li class="list-inline-item">
                    <h5 class="font-weight-bold mb-0 d-block">215</h5>
                    <small class="text-muted">
                        <i class="fas fa-image mr-1"></i>
                        Photos
                    </small>
                </li>
                <li class="list-inline-item">
                    <h5 class="font-weight-bold mb-0 d-block">745</h5>
                    <small class="text-muted">
                        <i class="fas fa-user mr-1"></i>
                        Followers
                    </small>
                </li>
                <li class="list-inline-item">
                    <h5 class="font-weight-bold mb-0 d-block">340</h5>
                    <small class="text-muted">
                        <i class="fas fa-user mr-1"></i>
                        Following
                    </small>
                </li>
            </ul>
        </div>
    </div>
@endsection