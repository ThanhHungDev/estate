<div class="component-footer wrapper-footer-page">
    <div class="container head-footer">
        <div class="row">
            <div class="col-12">
                <h3 class="footer-title">
                    footer-title
                </h3>
                <div class="des-footer">
                    description-footer
                </div>
            </div>
        </div>
    </div>
    
    <div class="component-footer-content ">
        <div class="about-us animated fadeIn">
            <h3 class="title">
                <a href="{{ env('DOMAIN_MAIN', 'https://ebudezain.com') }}" target="_blank" rel="noopener noreferrer">{{ Config::get('app.company_name') }}</a>
            </h3>
            <div class="intro__ebudezain">
                description-footer-intro
            </div>
        </div>
        <div class="dev_infor animated fadeDown">
            
            <div class="information">
                <div class="information__item information__address">
                    <i class="information__item__icon fas fa-map-marker-alt"></i>
                    <h3 class="information__item__des">
                        {{ implode(',', [ Config::get("app.company_address_street"), Config::get("app.company_address_locality")]) }}
                        <strong class="text-base font-bold">
                            {{ implode(',', [ Config::get("app.company_address_region"), Config::get("app.company_address_country")]) }}
                        </strong>
                    </h3>
                </div>
                <div class="information__item information__phone">
                    <i class="information__item__icon fal fa-phone-alt"></i>
                    <h3 class="information__item__des">
                        <a href="tel:{{ Config::get('app.phone_one') }}">
                            {{ Config::get('app.phone_one') }}
                        </a>
                    </h3>
                </div>
                <div class="information__item information__email">
                    <i class="information__item__icon fal fa-envelope"></i>
                    <h3 class="information__item__des">
                        <a href="mail:{{ Config::get("app.company_mail") }}">
                            {{ Config::get("app.company_mail") }}
                        </a>
                    </h3>
                </div>
            </div>
        </div>
        
        <div id="map-canvas" class="map-us"></div>
    </div>
    {{-- @include('client.partial.backtop')
    @include('client.partial.alo-now') --}}
</div>
