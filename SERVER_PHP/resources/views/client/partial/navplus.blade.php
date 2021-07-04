<div class="wrapper-navplus">
    <ul class="navplus count">
        @auth
        <li title='tài khoản <strong>{{ Auth::user()->name }}</strong> đang đăng nhập'
        class="navplus__link simple-tooltip 
        {{ SupportRouter::fillClassActive('active', 'SALER_DASHBOARD') }}
        {{ SupportRouter::fillClassActive('active', 'CUSTOMER_DASHBOARD') }}">
        @php $PROFILE_ROUTE_NAME = Auth::user()->role_id == Config::get('constant.ROLE.SALER') ? 'SALER_DASHBOARD' : 'CUSTOMER_DASHBOARD'; @endphp
            <a href="{{ Route($PROFILE_ROUTE_NAME) }}">
                <img class="lazyload" src="{{ Config::get('app.lazyload') }}" data-src="{{ asset(Auth::user()->avatar . Config::get('app.version')) }}" alt="{{ Auth::user()->name }}"/>
                <span class="title">{{ Auth::user()->name }}</span>
            </a>
        </li>
        <li title="bấm để đăng xuất <br /> đăng xuất khỏi thiết bị sẽ giúp bạn bảo mật tài khoản hơn"
        class="navplus__link simple-tooltip btn-logout-header" >
            <a href="{{ Route('LOGOUT') }}">
                <i class="fas fa-sign-out"></i>
                <span class="title">thoát</span>
            </a>
        </li>
        @endauth
        @guest
        <li
        class="navplus__link simple-tooltip {{ SupportRouter::fillClassActive('active', 'VIEW_POST_ARTICLE') }}">
            <a href="{{ Route('LOGIN') }}" >
                <i class="fad fa-sign-in-alt"></i>
                <span class="title">đăng nhập</span>
            </a>
        </li>
        
        {{-- <li
        class="navplus__link simple-tooltip {{ SupportRouter::fillClassActive('active', 'REGISTER') }}">
            <a href="{{ Route('REGISTER') }}">
                <i class="fad fa-user-plus"></i>
            <span class="title">đăng ký</span>
            </a>
        </li> --}}
        @endguest
        <li title="Tin nhắn trò chuyện <br/> Bấm vào để đến trang trò chuyện."
        class="navplus__link simple-tooltip">
            <a data-modal="#modal__messages" onclick="showModalNoClose(this)">
                <i class="fad fa-comment-dots"></i>
                @php 
                $MESSAGES          = SupportDBRealtime::getMessages();
                $countMessNoneRead = $MESSAGES? $MESSAGES->where('read', '=', false)->count() : 0;
                if( $countMessNoneRead > Config::get('constant.MAX_COUNTER_MESSAGE')){
                    $countMessNoneRead = Config::get('constant.MAX_COUNTER_MESSAGE') . "+";
                }
                @endphp
                @if($countMessNoneRead)
                <span id="js__count__mess" class="count__mess show">{{ $countMessNoneRead }}</span>
                @endif
            </a>
        </li>
        <li title="thông báo"
        class="navplus__link simple-tooltip">
            <a data-modal="#modal__notification" onclick="showModalNoClose(this)">
                <i class="fad fa-bell"></i>
                @php 
                $NOTIFICATIONS     = SupportDBRealtime::getNotifications();
                $countNotiNoneRead = $NOTIFICATIONS ? $NOTIFICATIONS->where('read', '=', false)->count() : 0;

                if( $countNotiNoneRead > Config::get('constant.MAX_COUNTER_NOTIFY')){
                    $countNotiNoneRead = Config::get('constant.MAX_COUNTER_NOTIFY') . "+";
                }
                @endphp
                @if($countNotiNoneRead)
                <span id="js__count__noti" class="count__noti show">{{ $countNotiNoneRead }}</span>
                @endif
            </a>
        </li>
    </ul>
</div>
