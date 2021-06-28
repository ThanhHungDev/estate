<div class="wrapper-navigate">
    <div  class="menu__mobile_close">
        <i id="js_menu__mobile_close" class="menu__mobile_close__icon fad fa-window-close"></i>
    </div>
    <ul class="navigate">
        <li class="navigate__link {{ SupportRouter::fillClassActive('active', 'HOME_PAGE') }}">
            <a href="{{ Route('HOME_PAGE') }}">
                <i class="fal fa-home"></i>
                <span class="title">Trang Chủ</span>
            </a>
        </li>
        <li class="navigate__link {{ SupportRouter::fillClassActive('active', 'VIEW_POST_NEWS') }}">
            <a href="{{ Route('VIEW_POST_NEWS') }}">
                <i class="fal fa-newspaper"></i>
                <span class="title">Tin Tức</span>
            </a>
        </li>
        <li class="navigate__link {{ SupportRouter::fillClassActive('active', 'FAVOURITES') }}">
            <a href="{{ Route('FAVOURITES') }}">
                <i class="fal fa-heart"></i>
                <span class="title">Đã Thích</span>
            </a>
        </li>
        <li class="navigate__link {{ SupportRouter::fillClassActive('active', 'CONTACT_PAGE') }}">
            <a href="{{ Route('CONTACT_PAGE') }}">
                <i class="fal fa-layer-plus"></i>
                <span class="title">Đăng bài</span>
            </a>
        </li>
        @auth
        <li class="navigate__link btn-logout-header">
            <a href="{{ Route('LOGOUT') }}">
                <i class="fal fa-sign-out-alt"></i>
                <span class="title">đăng xuất</span>
            </a>
        </li>
        @endauth
        @guest
        <li class="navigate__link {{ SupportRouter::fillClassActive('active', 'REGISTER') }}">
            <a href="{{ Route('REGISTER') }}">
                <i class="fal fa-user-plus"></i>
                <span class="title">đăng ký</span>
            </a>
        </li>
        @endguest
    </ul>
    @include('client.partial.submenu')
</div>

