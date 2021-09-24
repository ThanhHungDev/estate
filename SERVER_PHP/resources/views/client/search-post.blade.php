@extends('client.layout.index')

@section('title', 'Tìm kiếm bài viết Nhà đất tp.Bảo lộc | ' . Config::get("app.name"))
@php $description = !$search->isEmpty() ? $search->first()->description_seo : ''; @endphp
@section('description', Config::get("app.name") . ", " . $query . ", " . $description)
@php $thumbnailPage = !$search->isEmpty() ? $search->first()->thumbnail : Config::get("app.image"); @endphp
@section('meta-seo')
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{{ Config::get("app.og_name") }}" />
    <meta property="og:description" content="{{ Config::get("app.og_description") }}" />
    <meta property="og:site_name" content="{{ Config::get("app.og_name") }}" />
    <meta property="og:image" content="{{ asset($thumbnailPage) }}" />
    <meta property="og:image:secure_url" content="{{ asset($thumbnailPage) }}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content="{{ Config::get("app.description") }}" />
    <meta name="twitter:title" content="{{ Config::get("app.og_name") }}" />
    <meta name="twitter:site" content="{{ Config::get('site_fb') }}" />
    <meta name="twitter:image" content="{{ asset($thumbnailPage) }}" />
@endsection



@section('stylesheets')
<link rel="stylesheet" type="text/css" href="{{ asset('css/home.css' . Config::get('app.version'))}}"/>
{{-- <link rel="stylesheet" type="text/css" href="{{ asset('css/library/slick.css' . Config::get('app.version')) }}"/>
<link rel="stylesheet" type="text/css" href="{{ asset('css/library/slick-theme.css' . Config::get('app.version')) }}"/> --}}
@endsection


@section('preload')

@endsection


@section('javascripts')

@endsection


@section('content')
<div class="content">
    <div class="container my-5">
        <form class="row d-flex justify-content-center" action="{{ Route("POST_SEARCH") }}" autocomplete="off">
            <div class="col-md-10">
                <div class="card p-3 py-4">
                    <h2>Tìm kiếm bài viết nhà đất bảo lộc</h2>
                    <div class="row g-3 mt-2">
                        <div class="col-md-3">
                            <div class="form-group">
                                <select class="form-control">
                                    <option value="">Chọn chủ đề bài </option>
                                    @foreach ($topics as $topic)
                                    <option value="{{ $topic->id }}">{{ $topic->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Nhập thông tin tìm kiếm..." name="q" autocomplete="off"/>
                        </div>
                        <div class="col-md-3">
                            <button class="btn btn-success btn-block" type="submit">Tìm kiếm</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
    

    @if (!$search->isEmpty())
    <div class="news py-4">
        <h3 class="news-title" title="💥 Tin tức bất động sản nhà đất tp.Bảo lộc">Tin tức bất động sản</h3>
        
        @foreach ($search as $key => $post)
        <div class="news__wrapper">
            <div class="news__item">
                <div class="news__item-left">
                    <div class="img__cover" style="background-image: url({{ $post->background }});
                    background-repeat: no-repeat;
                    background-size:cover; "></div>
                </div>
                <div class="news__item-right">
                    <h4 class="news__item-topic">
                        <a href="{{ Route('POST_VIEW', ['slug' => $post->slug ]) }}">
                            @php $topic = $post->topic;   @endphp
                            {{ $topic->name }}
                            <time datetime="2008-02-14 20:00">
                                - 
                                <i class="d-none">{{ Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $post->created_at)->diffForHumans() }}</i>
                                <i>{{ Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $post->updated_at)->diffForHumans() }}</i>
                            </time>
                        </a>
                    </h4>
                    <h3 class="news__item-title">
                        <a href="{{ Route('POST_VIEW', ['slug' => $post->slug ]) }}">{!! $post->title !!}</a>
                    </h3>
                    <p class="news__item-des">
                        <a href="{{ Route('POST_VIEW', ['slug' => $post->slug ]) }}"> {{ $post->excerpt }} </a>
                    </p>
                </div>
            </div>
        </div>
        @endforeach
        
        
        
    </div>
    <div class="news text-center py-3">
        <div class="pagi">
            {{ $search->onEachSide(3)->links("pagination::default") }}
        </div>
    </div>
    
    @endif
    


</div>

@endsection