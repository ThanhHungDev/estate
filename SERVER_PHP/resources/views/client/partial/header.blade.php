<div class="header">
    <a class="logo" href="{{ Route('HOME_PAGE') }}">
        <img class="logo__img lazyload" src="{{ Config::get('app.lazyload') }}" data-src="{{ asset('logo.png' . Config::get('app.version')) }}" alt="{{ env("APP_NAME_SIGN", "Topbds.vn") }}"/>
        <h3 class="logo__application_name d-none">{{ env("APP_NAME_SIGN", "Topbds.vn") }}</h3>
    </a>
    <div id="menu" class="menu">
        @include('client.partial.navigate')
        @include('client.partial.account')
        <div  class="menu__mobile_close">
            <i id="js_menu__mobile_close" class="menu__mobile_close__icon fad fa-window-close"></i>
        </div>
    </div>
    <i id="js_btn_header_toggle__menu" class="btn_header_toggle__menu fad fa-align-justify"></i>
</div>