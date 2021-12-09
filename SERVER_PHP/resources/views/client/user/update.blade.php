@extends('client.layout.index')

@section('title', 'Cập nhật - ' . Config::get("app.name"))
@section('description', 'Cập nhật - ' . Config::get("app.description"))

@section('meta-seo')
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Cập Nhật top bất động sản - {{ Config::get("app.og_name") }}" />
    <meta property="og:description" content="Cập Nhật top bất động sản - {{ Config::get("app.og_description") }}" />
    <meta property="og:site_name" content="Cập Nhật top bất động sản - {{ Config::get("app.og_name") }}" />
    <meta property="og:image" content="{{ Config::get("app.image") }}" />
    <meta property="og:image:secure_url" content="{{ Config::get("app.image") }}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content="Cập Nhật top bất động sản - {{ Config::get("app.description") }}" />
    <meta name="twitter:title" content="Cập Nhật top bất động sản - {{ Config::get("app.og_name") }}" />
    <meta name="twitter:site" content="{{ Config::get('site_fb') }}" />
    <meta name="twitter:image" content="{{ Config::get("app.image") }}" />
@endsection

@section('preload')
    <link rel="preload" as="image" href="{{ asset('/images/cityscape.jpg') }}">
@endsection
@section('stylesheets')
<link rel="stylesheet" type="text/css" href="{{ asset('css/register.css' . Config::get('app.version'))}}"/>
@endsection
@section('javascripts')
<script src="{{ asset('js/library/jquery.validate.min.js' . Config::get('app.version')) }}"></script>
<script src="{{ asset('js/validate.update.user.js' . Config::get('app.version')) }}"></script>
@endsection
@section('content')
    <div class="content">
        <div class="page page__register">
            <div class="page__register__bg"></div>
            @include('client.partial.form-update')
        </div>
    </div>
@endsection