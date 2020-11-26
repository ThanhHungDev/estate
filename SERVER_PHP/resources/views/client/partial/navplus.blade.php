<div class="wrapper-navplus">
    <ul class="navplus count">
        @auth
        <li title='tài khoản <strong>{{ Auth::user()->name }}</strong> đang đăng nhập'
        class="navplus__link simple-tooltip {{ SupportRouter::fillClassActive('active', 'PROFILE') }}">
            <a href="{{ Route('PROFILE') }}">
                <img class="lazyload" src="{{ Config::get('app.lazyload') }}" data-src="{{ asset(Auth::user()->avatar . Config::get('app.version')) }}" alt="{{ Auth::user()->name }}"/>
                <span class="title">{{ Auth::user()->name }}</span>
            </a>
        </li>
        <li class="navplus__link simple-tooltip btn-logout-header" title="bấm để đăng xuất">
            <a href="{{ Route('LOGOUT') }}">
                <i class="fas fa-sign-out"></i>
                <span class="title">thoát</span>
            </a>
        </li>
        @endauth
        @guest
        <li title="bấm để đăng nhập"
        class="navplus__link simple-tooltip {{ SupportRouter::fillClassActive('active', 'VIEW_POST_ARTICLE') }}">
            <a  href="{{ Route('LOGIN') }}">
                <i class="fad fa-sign-in-alt"></i>
                <span class="title">đăng nhập</span>
            </a>
        </li>
        <li title="đăng kí thành viên"
        class="navplus__link simple-tooltip btn-register-header {{ SupportRouter::fillClassActive('active', 'VIEW_POST_ARTICLE') }}">
            <a href="{{ Route('VIEW_POST_ARTICLE') }}">
                <i class="fad fa-user-plus"></i>
                <span class="title">đăng ký</span>
            </a>
        </li>
        @endguest
        <li title="tin nhắn <br/> bạn có thể nhắn tin với người đăng bài"
        class="navplus__link simple-tooltip {{ SupportRouter::fillClassActive('active', 'VIEW_POST_ARTICLE') }}">
            <a href="{{ Route('VIEW_POST_ARTICLE') }}">
                <i class="fad fa-comment-dots"></i>
                <span id="js__count__mess" class="count__mess show">1</span>
            </a>
        </li>
        <li title="thông báo"
        class="navplus__link simple-tooltip {{ SupportRouter::fillClassActive('active', 'VIEW_POST_NEWS') }}">
            <a href="{{ Route('VIEW_POST_NEWS') }}">
                <i class="fad fa-bell"></i>
                <span id="js__count__noti" class="count__noti show">2+</span>
            </a>
        </li>
    </ul>
</div>
