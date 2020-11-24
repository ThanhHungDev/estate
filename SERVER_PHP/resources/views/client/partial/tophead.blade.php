<div class="tophead">
    <div class="social">
        <a class="social__link" href="{{ env('SITE_FB')}}" title="follow facebook với chúng tôi">
            <i class="fab fa-facebook-f"></i>
        </a>
        <a class="social__link" href="{{ env('SITE_YOUTUBE')}}" title="follow facebook với chúng tôi">
            <i class="fab fa-youtube"></i>
        </a>
        <a class="social__link" href="{{ env('SITE_INSTAGRAM')}}" title="follow instagram với chúng tôi">
            <i class="fab fa-instagram"></i>
        </a>
        <a class="social__link" href="{{ env('SITE_GOOGLE')}}" title="follow google với chúng tôi">
            <i class="fab fa-google-plus-g"></i>
        </a>
    </div>
    <ul class="contact">
        <li>
            <a target="_blank" href="https://maps.google.com/?q={{ env('COMPANY_MAP_SEARCH')}}" class="map">
                <i class="far fa-map-marker-smile"></i>
                <span>{{ env('COMPANY_MAP_SEARCH')}}</span>
            </a>
        </li>
        <li>
            <a target="_blank" href="mailto:{{ env('COMPANY_INFO') }}" class="infor">
                <i class="fad fa-info-square"></i>
                <span>{{ env('COMPANY_INFO') }}</span>
            </a>
        </li>
        <li>
            <a target="_blank" href="tell:{{ env('PHONE') }}" class="phone">
                <i class="fad fa-phone-square-alt"></i>
                <span>{{ env('PHONE') }}</span>
            </a>
        </li>
    </ul>
</div>