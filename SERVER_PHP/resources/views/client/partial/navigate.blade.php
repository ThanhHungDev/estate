<div  class="menu__mobile_close">
    <i id="js_menu__mobile_close" class="menu__mobile_close__icon fad fa-window-close"></i>
</div>
<ul class="navigate">
    <li class="navigate__link 
    {{ SupportRouter::fillClassActive('active', 'TOPIC_VIEW', ['slug' => 'php']) }}
    {{ SupportRouter::fillClassActive('active', 'TOPIC_VIEW', ['slug' => 'php-core']) }}
    {{ SupportRouter::fillClassActive('active', 'TOPIC_VIEW', ['slug' => 'laravel']) }}
    ">
        <a href="{{ Route('TOPIC_VIEW', ['slug' => 'php']) }}">php</a>
        <i class='navigate__link__icon_plus hero-icon hero-plus-outline'></i>
        <ul class="dropdown-menu">
            <li>
                <a href="{{ Route('TOPIC_VIEW', ['slug' => 'php-core']) }}">
                    php core
                </a>
            </li>
            <li>
                <a href="{{ Route('TOPIC_VIEW', ['slug' => 'laravel']) }}">
                    laravel
                </a>
            </li>
        </ul>
    </li>
    <li class="navigate__link 
    {{ SupportRouter::fillClassActive('active', 'TOPIC_VIEW', ['slug' => 'java']) }}
    {{ SupportRouter::fillClassActive('active', 'TOPIC_VIEW', ['slug' => 'java-core']) }}
    {{ SupportRouter::fillClassActive('active', 'TOPIC_VIEW', ['slug' => 'android']) }}
    ">
        <a href="{{ Route('TOPIC_VIEW', ['slug' => 'java']) }}">Java</a>
        <i class='navigate__link__icon_plus hero-icon hero-plus-outline'></i>
        <ul class="dropdown-menu">
            <li>
                <a href="{{ Route('TOPIC_VIEW', ['slug' => 'java-core']) }}">
                    java core
                </a>
            </li>
            <li>
                <a href="{{ Route('TOPIC_VIEW', ['slug' => 'android']) }}">
                    android
                </a>
            </li>
        </ul>
    </li>
    <li class="navigate__link {{ SupportRouter::fillClassActive('active', 'TOPIC_VIEW', ['slug' => 'design-pattern']) }}">
        <a href="{{ Route('TOPIC_VIEW', ['slug' => 'design-pattern']) }}">design pattern</a>
    </li>
    <li class="navigate__link {{ Route::is('CONTACT_PAGE') ? 'active' : null }}">
        <a href="{{ Route('CONTACT_PAGE') }}">liên hệ</a>
    </li>
    <li class="navigate__link">
        <a href="{{ Route('POST_VIEW', ['slug' => 'doi-tac']) }}">đối tác</a>
    </li>
    <li class="navigate__link search_header">
        <i id="js_btn_toggle_search" class="btn_toggle_search fad fa-search-plus"></i>
        <form id="js_search_header__form" class="search_header__form" action="{{ Route("SEARCH_POST") }}" autocomplete="off">
            <input type="text" placeholder="tìm kiếm..." name="q" autocomplete="off">
            <button class="search_header__form__btn" type="submit">
                <i class="fad fa-search-plus"></i>
            </button>
        </form>
    </li>
</ul>