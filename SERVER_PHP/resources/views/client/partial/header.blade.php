<div class="header">
    <a class="logo" href="{{ Route('HOME_PAGE') }}">
        <img class="logo__img lazyload" src="{{ Config::get('app.lazyload') }}" data-src="{{ asset('logo.png' . Config::get('app.version')) }}" alt="{{ env("APP_NAME_SIGN", "Topbds.vn") }}"/>
        <h3 class="logo__application_name d-none">{{ env("APP_NAME_SIGN", "Topbds.vn") }}</h3>
    </a>
    <div id="menu" class="menu">
        <i id="js_btn_header_toggle__menu" class="btn_header_toggle__menu fad fa-align-justify"></i>
        @include('client.partial.navplus')
        @include('client.partial.navigate')
    </div>
    
</div>