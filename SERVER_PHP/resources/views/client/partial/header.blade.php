<div class="header">
    <a class="logo" href="{{ Route('HOME_PAGE') }}">
        logo
        <h3 class="app-name">{{ env("APP_NAME_SIGN", "Hdev") }}</h3>
    </a>
    <div id="menu" class="menu">
        @include('client.partial.navigate')
    </div>
    <i id="js_btn_header_toggle__menu" class="btn_header_toggle__menu fad fa-align-justify"></i>
</div>