@extends('client.layout.index')

@section('title', "Trò chuyện - " . Config::get("app.name"))
@section('description', "Trò chuyện - " . Config::get("app.description"))


@section('preload')

@endsection


@section('stylesheets')
    {{-- cái này là của laravel --}}
    <link rel="stylesheet" type="text/css" href="{{ asset('css/library/bootstrap.chat.css' . Config::get('app.version'))}}"/>
    <link type="text/css" rel="stylesheet" href="{{ asset('css/user.chat.css' . Config::get('app.version')) }}" /> 
@endsection


@section('javascripts')
<script>
    window.CONFIG_APP = `{!! json_encode(SupportHtml::getConfigReact()) !!}`;
    window.CATEGORIES = `{!! json_encode($categories ?? []) !!}`;
    window.PROVINCES  = `{!! json_encode(Config::get('province')) !!}`;
    window.JWT_TOKEN  = `{{ SupportDB::getJwtAuthentication() }}`;
    const KEY_CAPTCHA = "{{ env('GOOGLE_RECAPTCHA_KEY')  }}";
</script>
<script type="text/javascript" src="{{ asset('js/chat.js' . Config::get('app.version')) }}"></script>
@endsection
@section('content')
<div class="content custommer">
    <div id="react__root" class="chat__root-react"></div>
</div>
@endsection