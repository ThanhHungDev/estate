<div class="wrapper-navigate">

    
    <ul class="navigate">
        <li class="navigate__link search">
            @include('client.partial.formsearch')
        </li>
        <li class="navigate__link text-right mobile">
            <i id="js_menu__mobile_close" class="burger active">
                <span></span>
            </i>
        </li>
        <li class="navigate__link {{ SupportRouter::fillClassActive('active', 'HOME_PAGE') }}">
            <a href="{{ Route('HOME_PAGE') }}">
                <span class="title">Trang Chủ</span>
            </a>
        </li>
        <li class="navigate__link {{ SupportRouter::fillClassActive('active', 'NEWS_PAGE') }}">
            <a href="{{ Route('NEWS_PAGE') }}">
                <span class="title">Tin Tức</span>
            </a>
        </li>
        <li class="navigate__link {{ SupportRouter::fillClassActive('active', 'CONTACT_PAGE') }}">
            <a href="{{ Route('CONTACT_PAGE') }}">
                <span class="title">Liên Hệ</span>
            </a>
        </li>
        @auth
        <li class="navigate__link {{ SupportRouter::fillClassActive('active', 'USER_DASHBOARD') }}">
            <a href="{{ Route('USER_DASHBOARD') }}">
                <span class="title">Profile</span>
            </a>
        </li>
        <li class="navigate__link {{ SupportRouter::fillClassActive('active', 'LOGOUT') }}">
            <a href="{{ Route('LOGOUT') }}">
                <span class="title">logout</span>
            </a>
        </li>
        @else
        <li class="navigate__link {{ SupportRouter::fillClassActive('active', 'REGISTER') }}">
            <a href="{{ Route('REGISTER') }}">
                <span class="title">Đăng ký</span>
            </a>
        </li>
        <li class="navigate__link {{ SupportRouter::fillClassActive('active', 'LOGIN') }}">
            <a href="{{ Route('LOGIN') }}">
                <span class="title">Đăng nhập</span>
            </a>
        </li>
        @endauth
        
        <li class="navigate__link--btn btn-hero--fix navigate__link {{ SupportRouter::fillClassActive('active', 'USER_POST') }}">
            <a href="{{ Route('USER_POST') }}">
                <span class="title">Đăng tin</span>
            </a>
        </li>

    </ul>
</div>

