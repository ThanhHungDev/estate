@extends('admin._layout')

@section('title', 'Xem sitemap')

@section('javascripts')
    <script src="{{ asset('js/library/jquery.min.js') }}"></script>
    <script src="{{ asset('js/admin/app.js') }}"></script>
    <link rel="stylesheet" href="{{ asset('css/library/prism.min.css' . Config::get('app.version'))}}">
    <script type="text/javascript" src="{{ asset('js/library/prism.min.js' . Config::get('app.version')) }}"></script>
@endsection


@section('page_title', "trang hiện thị sitemap" )

@section('content_admin')
<div class="page__permission admin-main-content">

    <div class="row block-content">
        <div class="col-12 bg-white shadows-1 px-3 py-3 table-list">
            <h1>bạn có {{ count($sitemap) }} sitemap</h1>
            @if ($sitemap)
            @foreach ($sitemap as $key => $item)
                <h2>sitemap vị trí {{ $key }}</h2>
                <div class="language-xml">
                    <pre><code>{{ $item }}</code></pre>
                </div>
            @endforeach
            @endif
        </div>
    </div>
</div>
@endsection
