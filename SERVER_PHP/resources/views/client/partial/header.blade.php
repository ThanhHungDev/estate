<div id="header__sticky" class="headerpage">
    <div class="header">
        <a class="logo" href="{{ Route('HOME_PAGE') }}">
            <img 
                class="logo__img lazyload" 
                src="{{ Config::get('app.lazyload') }}" 
                data-src="{{ asset('logo.png' . Config::get('app.version')) }}" 
                alt="{{ env("APP_NAME_SIGN", "muanhadatbaoloc.com") }}"/>
            <h3 class="logo__application_name d-none">{{ env("APP_NAME_SIGN", "muanhadatbaoloc.com") }}</h3>
        </a>
        <div id="menu" class="menu">
            <div class="d-flex justify-content-center">
                <div class="form-search-grow mobile">
                    <div class="position-relative">
                        @include('client.partial.formsearch')
                    </div>
                </div>
                <i id="js_btn_header_toggle__menu" class="burger float-right mx-3">
                    <span></span>
                </i>
            </div>
            @include('client.partial.navigate')
        </div>
    </div>
</div>