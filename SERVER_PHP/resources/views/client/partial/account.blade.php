<ul class="account">
    @auth
    <li class="account__link group-show {{ SupportRouter::fillClassActive('active', 'PROFILE') }}">
        <a title="hồ sơ của bạn" href="{{ Route('PROFILE') }}">
            <img class="lazyload" src="{{ Config::get('app.lazyload') }}" data-src="{{ asset(Auth::user()->avatar . Config::get('app.version')) }}" alt="{{ Auth::user()->name }}"/>
            <span class="text">{{ Auth::user()->name }}</span>
        </a>
    </li>
    <li title="đăng xuất"
    class="account__link group-show">
        <a href="{{ Route('LOGOUT') }}">
            <i class="fas fa-sign-out"></i>
            <span class="text">logout</span>
        </a>
    </li>
    @endauth
    @guest
    <li title="đăng nhập"
    class="account__link group-show {{ SupportRouter::fillClassActive('active', 'VIEW_POST_ARTICLE') }}">
        <a  href="{{ Route('LOGIN') }}">
            <img class="lazyload" src="{{ Config::get('app.lazyload') }}" data-src="{{ asset(env('AVATAR_DEFAULT') . Config::get('app.version')) }}" alt="đăng nhập"/>
            <span class="text">đăng nhập</span>
        </a>
    </li>
    <li title="đăng kí thành viên"
    class="account__link group-show {{ SupportRouter::fillClassActive('active', 'VIEW_POST_ARTICLE') }}">
        <a href="{{ Route('VIEW_POST_ARTICLE') }}">
            <i class="fad fa-user-plus"></i>
            <span class="text">đăng ký</span>
        </a>
    </li>
    @endguest
    <li title="tin nhắn"
    class="account__link {{ SupportRouter::fillClassActive('active', 'VIEW_POST_ARTICLE') }}">
        <a href="{{ Route('VIEW_POST_ARTICLE') }}">
            <i class="fad fa-comment-dots"></i>
        </a>
    </li>
    <li title="thông báo"
    class="account__link {{ SupportRouter::fillClassActive('active', 'VIEW_POST_NEWS') }}">
        <a href="{{ Route('VIEW_POST_NEWS') }}">
            <i class="fad fa-bell"></i>
        </a>
    </li>
</ul>
