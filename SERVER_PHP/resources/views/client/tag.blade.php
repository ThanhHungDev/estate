@extends('client.layout.index')

@section('title', $tag->name)
@section('description', $tag->description_seo )
@section('keywords', $tag->keyword_seo )

@section('meta-seo')
    <link rel="canonical" href="{{ asset('/') }}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{{ $tag->name . " - " . Config::get("app.og_name") }}" />
    <meta property="og:description" content="{{ $tag->description }}" />
    <meta property="og:url" content="{{ asset('/') }}" />
    <meta property="og:site_name" content="{{ $tag->site_name }}" />
    <meta property="og:image" content="{{ $tag->image_seo }}" />
    <meta property="og:image:secure_url" content="{{ Config::get("app.image") }}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content="{{ $tag->description }}" />
    <meta name="twitter:title" content="{{ $tag->name . " - " . Config::get("app.og_name") }}" />
    <meta name="twitter:site" content="{{ $tag->site_name }}" />
    <meta name="twitter:image" content="{{ $tag->image_seo }}" />
@endsection

@section('javascripts')
    <script src="{{ asset('js/library/jquery.min.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('js/client/app.min.js' . Config::get('app.version')) }}"></script>
@endsection

@section('content')

<div class="headfull" style="background: url('{{ asset($tag->image_seo) }}') no-repeat center;">
    
    <div class="headfull__wrap_content">
        <h3 class="headfull__excerpt">
            {{ $tag->excerpt }}
        </h3>
        <form class="headfull__form_search" action="{{ Route('SEARCH_POST') }}" method="GET">
            
            <input class="form-control" name="q" placeholder="nhập nội dung tìm kiếm..">
            <button class="btn__search"><i class="hero-icon hero-magnify-scan"></i></button>
        </form>
    </div>
</div>


<div class="topic">
    
    <div class="topic__content">
        <div class="topic__content__left">
            <h1 class="topic__name">
                {{ $tag->name }}
            </h1>
            <div class="publisher">
                <span>
                    <i class="hero-icon hero-calendar-month-outline text-color-blue"></i>
                    {{ date('Y-m-d', strtotime($tag->created_at ))}}
                </span>
                <span>
                    <i class="hero-icon hero-eye-outline text-color-blue"></i>
                    {{ $tag->view }} lượt xem
                </span>
            </div>
            <div class="catalogue">
                <div class="catalogue__title">
                    Mục lục 
                    <span>
                    [
                    <a class="catalogue__btn" href="javascript:void(0)" data-toggle="1" 
                    onclick="toggleCatalogue(this)">hide</a>
                    ]
                    </span>
                </div>
                <div class="catalogue__body">
                    {!!  $tag->catalogue  !!}
                </div>
            </div>
            
            <div class="topic__view_content fix-content-css">
                {!! $tag->content !!}
            </div>
        </div>
        
        <div class="topic__content__right">

            @if($tags)
            <div class="wrapper__right-item">
                <div class="title">
                    <i class="hero-icon hero-scatter-plot-outline"></i>những chủ đề khác
                </div>
                <div class="topic__items">

                    @foreach ($tags as $tag)
                    <div class="topic__item">
                        <div class="topic__item__background">
                            <a href="{{ Route('TAG_VIEW', ['slug' => $tag->slug ]) }}">
                                <img src="{{ $tag->background }}" alt="{{ $tag->name }}">
                            </a>
                        </div>
                        <div class="topic__item__content">
                            <h4 class="topic__item__name">
                                <a href="{{ Route('TAG_VIEW', ['slug' => $tag->slug ]) }}">
                                    {{ $tag->name }}
                                </a>
                            </h4>
                            <h5 class="topic__item__create">
                                <i class="hero-icon hero-calendar"></i>
                                <i>{{ date('Y-m-d', strtotime($tag->created_at ))}}</i>
                            </h5>
                            <h6 class="topic__item__excerpt">
                                <a href="{{ Route('TAG_VIEW', ['slug' => $tag->slug ]) }}">
                                    {{ SupportString::limitText( $tag->excerpt, 50, "..." ) }}
                                </a>
                            </h6>
                        </div>
                    </div>
                    @endforeach
                    
                </div>
            </div>
            @endif





            @if($posts_in_tag)
            <div class="wrapper__right-item">
                <div class="title">
                    <i class="hero-icon hero-scatter-plot-outline"></i>bài viết trong chủ đề
                </div>
                <div class="topic__items">

                    @foreach ($posts_in_tag as $post)
                    <div class="topic__item">
                        <div class="topic__item__background">
                            <a href="{{ Route('POST_VIEW', ['slug' => $post->slug ]) }}">
                                <img src="{{ $post->background }}" alt="{{ $post->name }}">
                            </a>
                        </div>
                        <div class="topic__item__content">
                            <h4 class="topic__item__name">
                                <a href="{{ Route('POST_VIEW', ['slug' => $post->slug ]) }}">
                                    {{ $post->title }}
                                </a>
                            </h4>
                            <h5 class="topic__item__create">
                                <i class="hero-icon hero-calendar"></i>
                                <i>{{ date('Y-m-d', strtotime($post->created_at ))}}</i>
                            </h5>
                            <h6 class="topic__item__excerpt">
                                <a href="{{ Route('POST_VIEW', ['slug' => $post->slug ]) }}">
                                    {{ SupportString::limitText( $post->excerpt, 50, "..." ) }}
                                </a>
                            </h6>
                        </div>
                    </div>
                    @endforeach
                    
                </div>
            </div>
            @endif

        </div>
    </div>
</div>

<div class="relation">
    <div class="title">bài viết có liên quan</div>
    <div class="relation__content">

        @if(!$posts_relation->isEmpty())
        @foreach ($posts_relation as $post)
        <div class="relation__item">
            <div class="relation__item__wrapper">
                <div class="relation__background">
                    <a href="{{ Route('POST_VIEW', ['slug' => $post->slug ]) }}">
                        <img src="{{ $post->background }}" alt="{{ $post->name }}">
                    </a>
                </div>
                <div class="relation__content_text">
                    <h4 class="relation__content__title">
                        <a href="{{ Route('POST_VIEW', ['slug' => $post->slug ]) }}">
                            
                            {{ $post->title }}
                        </a>
                    </h4>
                    <h5 class="relation__content__create">
                        <i class="hero-icon hero-calendar"></i>
                        <i>{{ date('Y-m-d', strtotime($post->created_at ))}}</i>
                    </h5>
                    <h6 class="relation__content__excerpt">
                        <a href="{{ Route('POST_VIEW', ['slug' => $post->slug ]) }}">
                            {{ SupportString::limitText( $post->excerpt, 40, "..." ) }}
                        </a>
                    </h6>
                </div>
            </div>
        </div>
        @endforeach
        @endif
    </div>
</div>


@endsection