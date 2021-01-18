<div class="submenu">
    <div  class="menu__mobile_close_pc">
        <i id="js_menu__mobile_close_pc" class="menu__mobile_close__icon_pc fad fa-window-close"></i>
    </div>
    <ul class="subnavigate">
        <li class="subnavigate__link {{ SupportRouter::fillClassActive('active', 'HOME_PAGE') }}">
            <a href="{{ Route('HOME_PAGE') }}">
                <i class="fal fa-home"></i>
                <span class="title">Thêm</span>
            </a>
        </li>
        
        <li class="subnavigate__link {{ SupportRouter::fillClassActive('active', 'VIEW_POST_NEWS') }}">
            <a href="{{ Route('VIEW_POST_NEWS') }}">
                <i class="fal fa-newspaper"></i>
                <span class="title">bán đất thêm</span>
            </a>
        </li>

        <li class="subnavigate__link {{ SupportRouter::fillClassActive('active', 'LOGOUT') }}">
            <a href="{{ Route('LOGOUT') }}">
                <i class="fal fa-newspaper"></i>
                <span class="title">bán nhà thêm</span>
            </a>
        </li>

        <li class="subnavigate__link {{ SupportRouter::fillClassActive('active', 'REGISTER') }}">
            <a href="{{ Route('REGISTER') }}">
                <i class="fal fa-newspaper"></i>
                <span class="title">Đăng ký - người mua</span>
            </a>
        </li>
        
        <li class="subnavigate__link {{ SupportRouter::fillClassActive('active', 'CONTACT_PAGE') }}">
            <a href="{{ Route('CONTACT_PAGE') }}">
                <i class="fad fa-headset"></i>
                <span class="title"> Liên hệ </span>
            </a>
        </li>

    </ul>
</div>