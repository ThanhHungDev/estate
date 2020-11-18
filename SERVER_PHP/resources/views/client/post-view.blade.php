@extends('client.layout.index')

@section('title', $post->title)
@section('description', $post->description_seo )
@section('keywords', $post->keyword_seo )

@section('meta-seo')
    <link rel="canonical" href="{{ asset('/') }}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{{ $post->title . " - " . Config::get("app.og_name") }}" />
    <meta property="og:description" content="{{ $post->description }}" />
    <meta property="og:url" content="{{ asset('/') }}" />
    <meta property="og:site_name" content="{{ $post->site_name }}" />
    <meta property="og:image" content="{{ $post->image_seo }}" />
    <meta property="og:image:secure_url" content="{{ Config::get("app.image") }}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content="{{ $post->description }}" />
    <meta name="twitter:title" content="{{ $post->title . " - " . Config::get("app.og_name") }}" />
    <meta name="twitter:site" content="{{ $post->site_name }}" />
    <meta name="twitter:image" content="{{ $post->image_seo }}" />
    <script type="application/ld+json">
        {
            "@context": "https://schema.org/",
            "@type": "Review",
            "itemReviewed": {
                "@type": "HowTo",
                "image": "{{ $post->image_seo }}",
                "name": "{{ $post->title }}",
                "telephone": "{{ Config::get("app.phone_one") }}",
                "address" :{
                    "@type": "PostalAddress", 
                    "addressLocality": "{{ Config::get("app.company_address_locality") }}",
                    "addressCountry": "{{ Config::get("app.company_address_country") }}",
                    "addressRegion": "{{ Config::get("app.company_address_region") }}",
                    "postalCode":"{{ Config::get("app.company_postcode") }}",
                    "streetAddress": "{{ Config::get("app.company_address_street") }}"
                }
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": {{ $post->rate_value }},
                "worstRating": 1,
                "bestRating": 5
            },
            "name": "{{ $post->excerpt }}",
            @if($rateAuthor)
            "author": {
                "@type": "Person",
                "name": "{{$rateAuthor->username}}"
            }
            @endif
        }
        </script>
@endsection

@section('make-up-data')
@if($post->stylesheet)
{!! '<style>'. $post->stylesheet . '</style>' !!}
@endif
@if($post->javscript)
{!! '<script>'. $post->javscript . '</script>' !!}
@endif
@endsection

@section('javascripts')
    <script type="text/javascript" src="{{ asset('js/library/jquery.min.js' . Config::get('app.version')) }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/prism.min.js' . Config::get('app.version')) }}"></script>
    <script type="text/javascript" src="{{ asset('js/library/jquery.rateit.min.js' . Config::get('app.version')) }}"></script>
    <script type="text/javascript" src="{{ asset('js/client/app.min.js' . Config::get('app.version')) }}"></script>
@endsection

@section('stylesheets')
<link rel="stylesheet" href="{{ asset('css/library/prism.min.css' . Config::get('app.version'))}}">
@endsection

@section('content')

<div class="headfull" style="background: url('{{ asset($post->background) }}') no-repeat center;">
    
    <div class="headfull__wrap_content">
        <h3 class="headfull__excerpt">
            {{ $post->excerpt }}
        </h3>
        <form class="headfull__form_search" action="{{ Route('SEARCH_POST') }}" method="GET">
            
            <input class="form-control" name="q" placeholder="nhập nội dung tìm kiếm..">
            <button class="btn__search"><i class="hero-icon hero-magnify-scan"></i></button>
        </form>
    </div>
</div>


<div class="post">
    
    <div class="post__content">
        <div class="post__content__left">

            <h1 class="post__title">
                {{ $post->title }}
            </h1>
            <div class="publisher">
                <span>
                    <i class="hero-icon hero-calendar-month-outline text-color-blue"></i>
                    {{ date('Y-m-d', strtotime($post->created_at ))}}
                </span>
                <span>
                    <i class="hero-icon hero-eye-outline text-color-blue"></i>
                    {{ $post->view }} lượt xem
                </span>
            </div>
            @if($rateAuthor)
            <div class="rating__item">
                <div class="rateit" data-rateit-value="{{ $post->rate_value }}"  data-rateit-readonly="true"></div>
                <span>{{ $rateAuthor->username }}</span>
            </div>
            @endif
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
                    {!!  $post->catalogue  !!}
                </div>
            </div>
            
            <div class="post__view_content fix-content-css">
                {!! $post->content !!}
            </div>
        </div>
        
        <div class="post__content__right">

            @if($topic)
            <div class="wrapper__right-item">
                <div class="title">
                    <i class="hero-icon hero-scatter-plot-outline"></i>chủ đề
                </div>
                <div class="topic__items">

                    <div class="topic__item">
                        <div class="topic__item__background">
                            <a href="{{ Route('TOPIC_VIEW', ['slug' => $topic->slug ]) }}">
                                <img src="{{ $topic->background }}" alt="{{ $topic->name }}">
                            </a>
                        </div>
                        <div class="topic__item__content">
                            <h4 class="topic__item__name">
                                <a href="{{ Route('TOPIC_VIEW', ['slug' => $topic->slug ]) }}">
                                    {{ $topic->name }}
                                </a>
                            </h4>
                            <h5 class="topic__item__create">
                                <i class="hero-icon hero-calendar"></i>
                                <i>{{ date('Y-m-d', strtotime($topic->created_at ))}}</i>
                            </h5>
                            <h6 class="topic__item__excerpt">
                                <a href="{{ Route('TOPIC_VIEW', ['slug' => $topic->slug ]) }}">
                                    {{ SupportString::limitText( $topic->excerpt, 50, "..." ) }}
                                </a>
                            </h6>
                        </div>
                    </div>
                    
                </div>
            </div>
            @endif


            @if(!$tags->isEmpty())
            <div class="wrapper__right-item">
                <div class="title">
                    <i class="hero-icon hero-scatter-plot-outline"></i>những tag
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





            @if($posts_in_topic) 
            <div class="wrapper__right-item">
                <div class="title">
                    <i class="hero-icon hero-scatter-plot-outline"></i>bài viết trong chủ đề
                </div>
                <div class="topic__items">

                    @foreach ($posts_in_topic as $post)
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

@if(!$postMaxView->isEmpty()) 
<div class="relation">
    <div class="title">bài viết có liên quan</div>
    <div class="relation__content">

        
        @foreach ($postMaxView as $post)
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
        
    </div>
</div>
@endif




@endsection