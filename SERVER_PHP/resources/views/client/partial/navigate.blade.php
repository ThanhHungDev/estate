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
        <li class="navigate__link {{ SupportRouter::fillClassActive('active', 'PTAG_VIEW_SEARCH') }}">
            <a href="{{ Route('PTAG_VIEW_SEARCH', ['slug' => SupportString::createSlug(SupportDB::getOption('menu-tag-one')) ]) }}">
                <span class="title">{{ SupportDB::getOption('menu-tag-one') }}</span>
            </a>
        </li>
        <li class="navigate__link {{ SupportRouter::fillClassActive('active', 'USER_POST') }}">
            <a href="{{ Route('PTAG_VIEW_SEARCH', ['slug' => SupportString::createSlug(SupportDB::getOption('menu-tag-two')) ]) }}">
                <span class="title">{{ SupportDB::getOption('menu-tag-two') }}</span>
            </a>
        </li>
        <li class="navigate__link {{ SupportRouter::fillClassActive('active', 'USER_POST') }}">
            <a href="{{ Route('PTAG_VIEW_SEARCH', ['slug' => SupportString::createSlug(SupportDB::getOption('menu-tag-three')) ]) }}">
                <span class="title">{{ SupportDB::getOption('menu-tag-three') }}</span>
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
    </ul>
</div>

