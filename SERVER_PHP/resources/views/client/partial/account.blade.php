<ul class="account">
    
    <li class="account__link avatar {{ SupportRouter::fillClassActive('active', 'PROFILE') }}">
        @auth
        <a title="hồ sơ của bạn"
        href="{{ Route('PROFILE') }}" class="avatar__link">
            <img class="avatar__link__img lazyload" src="{{ Config::get('app.lazyload') }}" data-src="{{ asset(Auth::user()->avatar . Config::get('app.version')) }}" alt="{{ Auth::user()->name }}"/>
            <span class="username">{{ Auth::user()->name }}</span>
        </a>
        @endauth
        @guest
        <a title="đăng nhập"
        href="{{ Route('LOGIN') }}" class="avatar__link">
            <img class="avatar__link__img lazyload" src="{{ Config::get('app.lazyload') }}" data-src="{{ asset(env('AVATAR_DEFAULT') . Config::get('app.version')) }}" alt="đăng nhập"/>
            <span class="username">đăng nhập</span>
        </a>
        @endguest
    </li>
    @guest
    <li title="đăng kí thành viên"
    class="account__link {{ SupportRouter::fillClassActive('active', 'VIEW_POST_ARTICLE') }}">
        <a href="{{ Route('VIEW_POST_ARTICLE') }}">
            <i class="fad fa-user-plus"></i>
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