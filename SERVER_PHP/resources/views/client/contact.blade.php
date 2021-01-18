@extends('client.layout.index')

@section('title', Config::get("app.name"))
@section('description', Config::get("app.description"))

@section('meta-seo')
    <link rel="canonical" href="{{ asset('/') }}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{{ Config::get("app.og_name") }}" />
    <meta property="og:description" content="{{ Config::get("app.og_description") }}" />
    <meta property="og:url" content="{{ asset('/') }}" />
    <meta property="og:site_name" content="{{ Config::get("app.og_name") }}" />
    <meta property="og:image" content="{{ Config::get("app.image") }}" />
    <meta property="og:image:secure_url" content="{{ Config::get("app.image") }}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content="{{ Config::get("app.description") }}" />
    <meta name="twitter:title" content="{{ Config::get("app.og_name") }}" />
    <meta name="twitter:site" content="{{ Config::get('site_fb') }}" />
    <meta name="twitter:image" content="{{ Config::get("app.image") }}" />
@endsection

@section('preload')
    <link rel="preload" as="script" href="{{ asset('js/library/select2.full.min.js'. Config::get('app.version')) }}">
@endsection


@section('javascripts')
    <script src="{{ asset('/js/library/nouislider.min.js' . Config::get('app.version')) }}"></script>
    <script>
        const PROVINCES = JSON.parse(`{!! $provinces !!}`);
        
        const ROUTE_DISTRICTS = "{{ Route('DISTRICTS') }}";
        const ROUTE_COMMUNES  = "{{ Route('COMMUNES') }}";
    </script>
    <script src="{{ asset('js/library/select2.full.min.js' . Config::get('app.version')) }}"></script>
@endsection
@section('content')
    <div class="content">
        <div class="page page__contact">
            page__contact
        </div>
    </div>
@endsection