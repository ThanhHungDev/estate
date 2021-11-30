@extends('client.layout.index')

@section('title', "Trò chuyện - " . Config::get("app.name"))
@section('description', "Trò chuyện - " . Config::get("app.description"))


@section('preload')

@endsection

@section('stylesheets')
<link rel="stylesheet" type="text/css" href="{{ asset('css/library/bootstrap.home.css' . Config::get('app.version'))}}"/>
<link rel="stylesheet" type="text/css" href="{{ asset('css/home.css' . Config::get('app.version'))}}"/>
@endsection


@section('javascripts')
<script>
    const CONFIG_APP = `{!! json_encode(SupportHtml::getConfigReact()) !!}`;
    const CATEGORIES = `{!! json_encode($categories ?? []) !!}`;
    const PROVINCES  = `{!! json_encode(Config::get('province')) !!}`;
    window.JWT_TOKEN  = `{{ SupportDB::getJwtAuthentication() }}`;
    const KEY_CAPTCHA = "{{ env('GOOGLE_RECAPTCHA_KEY')  }}";
</script>
<script type="text/javascript" src="{{ asset('js/chat.js' . Config::get('app.version')) }}"></script>
@endsection
@section('content')
<div class="content pb-4" id="react__root">
    page chat {{ $id }}
</div>
@endsection