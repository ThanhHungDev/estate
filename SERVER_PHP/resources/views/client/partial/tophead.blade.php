<div class="tophead @if (SupportRouter::isRouterActive('CHAT')) pc @endif">
    <div class="social">
        <a class="social__link" href="{{ env('SITE_FB')}}" title="follow facebook với chúng tôi">
            @svg('font/font-awe/svgs/brands/facebook-f.svg')
            {{-- <i class="fab fa-facebook-f"></i> --}}
        </a>
        <a class="social__link" href="{{ env('SITE_YOUTUBE')}}" title="follow facebook với chúng tôi">
            {{-- <i class="fab fa-youtube"></i> --}}
            @svg('font/font-awe/svgs/brands/youtube.svg')
        </a>
        <a class="social__link" href="{{ env('SITE_INSTAGRAM')}}" title="follow instagram với chúng tôi">
            {{-- <i class="fab fa-instagram"></i> --}}
            @svg('font/font-awe/svgs/brands/instagram.svg')
        </a>
        <a class="social__link" href="{{ env('SITE_GOOGLE')}}" title="follow google với chúng tôi">
            {{-- <i class="fab fa-google-plus-g"></i> --}}
            @svg('font/font-awe/svgs/brands/google-plus-g.svg')
        </a>
    </div>
    <ul class="contact">
        <li>
            <a target="_blank" href="mailto:{{ env('COMPANY_MAIL') }}" class="infor">
                {{-- <i class="fad fa-info-square"></i> --}}
                @svg('font/font-awe/svgs/duotone/info-square.svg')
                <span>{{ env('COMPANY_MAIL') }}</span>
            </a>
        </li>
        <li>
            <a target="_blank" href="tel:{{ env('PHONE') }}" class="phone">
                {{-- <i class="fad fa-phone-square-alt"></i> --}}
                @svg('font/font-awe/svgs/duotone/phone-square-alt.svg')
                <span>{{ env('PHONE') }}</span>
            </a>
        </li>
    </ul>
</div>