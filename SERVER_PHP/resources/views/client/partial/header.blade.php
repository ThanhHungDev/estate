<div class="header">
    <a class="logo" href="{{ Route('HOME_PAGE') }}">
        <img class="logo__img lazyload" src="{{ Config::get('app.lazyload') }}" data-src="{{ asset('logo.png' . Config::get('app.version')) }}" alt="{{ env("APP_NAME_SIGN", "Topbds.vn") }}"/>
        <h3 class="logo__application_name d-none">{{ env("APP_NAME_SIGN", "Topbds.vn") }}</h3>
    </a>
    <div id="menu" class="menu">
        @include('client.partial.navigate')
        <ul class="menu__account">

        </ul>
    </div>
    <i id="js_btn_header_toggle__menu" class="d-none btn_header_toggle__menu fad fa-align-justify"></i>
</div>