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
          
          window.CATEGORIES    = `{!! json_encode($categories ?? []) !!}`;
          window.DISTRICT     = `{!! json_encode(Config::get('district')) !!}`;
          window.COMMUNES     = `{!! json_encode(Config::get('communes')) !!}`;
          window.JWT_TOKEN     = `{{ SupportDB::getJwtAuthentication() }}`;
          window.CONVERSATIONS = `{!! addslashes(json_encode($conversations)) !!}`;
          window.CONFIG_APP    = `{!! json_encode(SupportHtml::getConfigReact()) !!}`;
    const KEY_CAPTCHA          = "{{ env('GOOGLE_RECAPTCHA_KEY')  }}";
</script>
<script type="text/javascript" src="{{ asset('js/chat.js' . Config::get('app.version')) }}"></script>
@endsection
@section('content')
<div class="content custommer">
    <div id="react__root" class="chat__root-react"></div>
</div>
@endsection