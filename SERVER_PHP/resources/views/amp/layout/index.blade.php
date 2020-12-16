<!doctype html>
<html amp lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="content-language" content="vi" />
    <meta name="robots" content="index, follow" />
    <title> @yield('title') </title>

    
    <link rel="alternate" media="handheld" href="{{ Route('HOME_PAGE') }}" />
    <link rel="alternate" media="only screen and (max-width: 761px)" href="{{ Route('HOME_PAGE') }}" />
    <link rel="amphtml"  href="{{ Route('AMP_HOME_PAGE') }}" />

    <meta name="description" content="@yield('description')">

    @yield('meta-seo')

    <link rel="alternate" type="application/rss+xml" title="{{ Config::get("app.alternate_name") }}" href="" />
    <link rel="preload" as="image" href="{{ asset('logo.png' . Config::get('app.version')) }}">
    
    @yield('preload')
    <link rel="icon" type="image/png" href="{{ asset('favicon.ico' . Config::get('app.version')) }}">


    <script type='application/ld+json'>
        {
            "@context":"https://schema.org/",
            "@type":"WebSite",
            "url":"{{ asset('/') }}",
            "name":"{{ Config::get("app.name") }}",
            "alternateName":"{{ Config::get("app.alternate_name") }}",
            "potentialAction":{
                "@type":"SearchAction",
                "target":"{{ Route('SEARCH') }}?q={search_term_string}",
                "query-input":"required name=search_term_string"
            }
        }
    </script>
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "{{ Config::get("app.company_name") }}",
            "alternateName": "{{ Config::get("app.alternate_name") }}",
            "url": "{{ asset('/') }}",
            "telephone": "[ {{ Config::get("app.phone_one") }} , {{ Config::get("app.phone_two") }} ]",
            "description": "{{ Config::get("app.description") }}",
            "priceRange": "{{ Config::get("app.price_range") }}",
            "logo": "{{ Config::get("app.logo") }}",
            "image":"{{ Config::get("app.image") }}",
            "hasMap": "{{ Config::get("app.map_link") }}", 
            "email": "mailto:{{ Config::get("app.company_mail") }}",
                "founder": "{{ Config::get("app.founder") }}",
                "address": {
                    "@type": "PostalAddress", 
                    "addressLocality": "{{ Config::get("app.company_address_locality") }}",
                    "addressCountry": "{{ Config::get("app.company_address_country") }}",
                    "addressRegion": "{{ Config::get("app.company_address_region") }}",
                    "postalCode":"{{ Config::get("app.company_postcode") }}",
                    "streetAddress": "{{ Config::get("app.company_address_street") }}"
                },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": {{ Config::get("app.map_lat") }},
                "longitude": {{ Config::get("app.map_long") }}
            }
        }
    </script>
    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>

    @yield('stylesheets')
</head>
<body>
    <div class="wrapper-page">
        {{-- @include('client.partial.tophead')
        @include('client.partial.header') --}}
        <div class="page-content-layout">
            @yield('content')
        </div>
        {{-- @include('client.partial.footer') --}}
    </div>
</body>
</html>