<ul class="navigate">
    <li  title="trang chủ"
    class="navigate__link {{ SupportRouter::fillClassActive('active', 'HOME_PAGE') }}">
        <a href="{{ Route('HOME_PAGE') }}">
            <i class="fal fa-home"></i>
        </a>
    </li>
    <li title="đăng bài bất động sản"
    class="navigate__link {{ SupportRouter::fillClassActive('active', 'VIEW_POST_ARTICLE') }}">
        <a href="{{ Route('VIEW_POST_ARTICLE') }}">
            <i class="fal fa-file-signature"></i>
        </a>
    </li>
    <li title="tin bất động sản"
    class="navigate__link {{ SupportRouter::fillClassActive('active', 'VIEW_POST_NEWS') }}">
        <a href="{{ Route('VIEW_POST_NEWS') }}">
            <i class="fal fa-newspaper"></i>
        </a>
    </li>
    <li title="bất động sản bạn đã thích"
    class="navigate__link {{ SupportRouter::fillClassActive('active', 'FAVOURITES') }}">
        <a href="{{ Route('FAVOURITES') }}">
            <i class="fal fa-heart"></i>
        </a>
    </li>
    <li title="liên hệ với chúng tôi"
    class="navigate__link {{ SupportRouter::fillClassActive('active', 'CONTACT_PAGE') }}">
        <a href="{{ Route('CONTACT_PAGE') }}">
            <i class="fal fa-phone-alt"></i>
        </a>
    </li>
</ul>

