@extends('client.layout.index')

@section('title', 'Tìm kiếm | ' . Config::get("app.name"))
@section('description', 'Tìm kiếm | ' . Config::get("app.name") . ", " . $query . ", " . implode( ", ", $tags->pluck('name')->toArray()))


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

@section('javascripts')
    <script type="text/javascript" src="{{ asset('js/library/jquery.min.js' . Config::get('app.version')) }}"></script>
    <script type="text/javascript" src="{{ asset('js/client/app.min.js' . Config::get('app.version')) }}"></script>
@endsection


@section('content')


<div class="headfull" style="background: url('{{ Config::get("app.image") }}') no-repeat center;">
    
    <div class="headfull__wrap_content">
        <h3 class="headfull__excerpt">
            nhập từ khoá bạn muốn tìm kiếm
        </h3>
        <form class="headfull__form_search" action="{{ Route('SEARCH_POST') }}" method="GET">
            
            <input class="form-control" name="q" placeholder="nhập nội dung tìm kiếm.." value="{{$query}}">
            <button class="btn__search"><i class="hero-icon hero-magnify-scan"></i></button>
        </form>
    </div>
</div>

<div class="search-detail">
    <div class="topic-website-selector">
        <div class="title">kết quả tìm kiếm </div>
    </div>
    <div class="result-search">
        <div class="result-search__left">
            @if($search->isEmpty())
                không tìm thấy bài viết phù hợp với từ khoá của bạn
            @else
            @foreach ($search as $post)
            <div class="wrapper-search-detail-block">
                <div class="background">
                    <a href="{{ Route('POST_VIEW', ['slug' => $post->slug]) }}">
                        <img src="{{ $post->background }}" alt="background-theme-{{ $post->title }}">
                    </a>
                </div>
                <div class="infor-theme-search">
                    <h3>
                        <a class="title-search-detail" href="{{ Route('POST_VIEW', ['slug' => $post->slug]) }}">
                            {!! $post->title !!}
                        </a>
                    </h3>
                    <small class="create-search-detail">
                        <span>
                            <i class="hero-icon hero-calendar"></i>
                            <i>{{ date('Y-m-d', strtotime($post->created_at ))}}</i>
                        </span>
                    </small>
                    <h6 class="content-search-document">
                        {!! $post->search_document !!}
                    </h6>                    
                </div>
            </div>
            @endforeach
            <div class="pagination">
                {{ $search->onEachSide(3)->links() }}
            </div>
            @endif
            
        </div>
        
        <div class="result-search__right">
            @if(!$tags->isEmpty())
            <div class="wrapper__right-item">
                <div class="title__right-item">
                    <i class="hero-icon hero-tag-heart"></i>関連タグ
                </div>
                <div class="description__r-tag">
                    @foreach ($tags as $tag)
                    <div class="tag__relate">
                        <div class="background__relate-tag">
                            <a href="{{ Route('TAG_VIEW', ['slug' => $tag->slug ]) }}">
                                <img src="{{ $tag->background }}" alt="bg-tag-theme-{{ $tag->name }}">
                            </a>
                        </div>
                        <div class="content__relate-tag">
                            <h4 class="title_content__relate-tag">
                                <a href="{{ Route('TAG_VIEW', ['slug' => $tag->slug ]) }}">
                                    {{-- {!! $tag->icon !!}  --}}
                                    {{ $tag->name }}
                                </a>
                            </h4>
                            <h5 class="create__relate-tag">
                                <i class="hero-icon hero-calendar"></i>
                                <i>{{ date('Y-m-d', strtotime($tag->created_at ))}}</i>
                            </h5>
                            <h6 class="excerpt_content__relate-tag">
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

            @if(!$postMaxView->isEmpty())
            <div class="wrapper__right-item">
                <div class="title__right-item">
                    <i class="hero-icon hero-file-document-edit-outline"></i>bài viết có thể bạn quan tâm
                </div>
                <div class="description__r-tag">
                    @foreach ($postMaxView as $post)
                    <div class="tag__relate">
                        <div class="background__relate-tag">
                            <a href="{{ Route('POST_VIEW', ['slug' => $post->slug ]) }}">
                                <img src="{{ $post->background }}" alt="bg-tag-theme-{{ $post->name }}">
                            </a>
                        </div>
                        <div class="content__relate-tag">
                            <h4 class="title_content__relate-tag">
                                <a href="{{ Route('POST_VIEW', ['slug' => $post->slug ]) }}">
                                    {{-- {!! $tag->icon !!}  --}}
                                    {{ $post->title }}
                                </a>
                            </h4>
                            <h5 class="create__relate-tag">
                                <i class="hero-icon hero-calendar"></i>
                                <i>{{ date('Y-m-d', strtotime($post->created_at ))}}</i>
                            </h5>
                            <h6 class="excerpt_content__relate-tag">
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

@endsection