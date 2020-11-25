<div class="wrapper-navplus">
    <ul class="navplus">
        @auth
        <li class="navplus__link {{ SupportRouter::fillClassActive('active', 'PROFILE') }}">
            <a href="{{ Route('PROFILE') }}">
                <img class="lazyload" src="{{ Config::get('app.lazyload') }}" data-src="{{ asset(Auth::user()->avatar . Config::get('app.version')) }}" alt="{{ Auth::user()->name }}"/>
                <span class="title">{{ Auth::user()->name }}</span>
            </a>
        </li>
        <li class="navplus__link">
            <a href="{{ Route('LOGOUT') }}">
                <i class="fas fa-sign-out"></i>
                <span class="title">logout</span>
            </a>
        </li>
        @endauth
        @guest
        <li class="navplus__link {{ SupportRouter::fillClassActive('active', 'VIEW_POST_ARTICLE') }}">
            <a  href="{{ Route('LOGIN') }}">
                <img class="lazyload" src="{{ Config::get('app.lazyload') }}" data-src="{{ asset(env('AVATAR_DEFAULT') . Config::get('app.version')) }}" alt="đăng nhập"/>
                <span class="title">đăng nhập</span>
            </a>
        </li>
        <li title="đăng kí thành viên"
        class="navplus__link {{ SupportRouter::fillClassActive('active', 'VIEW_POST_ARTICLE') }}">
            <a href="{{ Route('VIEW_POST_ARTICLE') }}">
                <i class="fad fa-user-plus"></i>
                <span class="title">đăng ký</span>
            </a>
        </li>
        @endguest
        <li title="tin nhắn"
        class="navplus__link {{ SupportRouter::fillClassActive('active', 'VIEW_POST_ARTICLE') }}">
            <a href="{{ Route('VIEW_POST_ARTICLE') }}">
                <i class="fad fa-comment-dots"></i>
            </a>
        </li>
        <li title="thông báo"
        class="navplus__link {{ SupportRouter::fillClassActive('active', 'VIEW_POST_NEWS') }}">
            <a href="{{ Route('VIEW_POST_NEWS') }}">
                <i class="fad fa-bell"></i>
            </a>
        </li>
    </ul>
</div>
