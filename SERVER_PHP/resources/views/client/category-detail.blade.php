@extends('client.layout.index')

@section('title', $category->name)
@section('description', $category->description_seo )


@section('preload')
<link rel="preload" as="style" href="{{ asset('css/category.css' . Config::get('app.version')) }}"/>
@endsection

@section('stylesheets')
{{-- <link rel="stylesheet" type="text/css" href="{{ asset('css/library/bootstrap.home.css' . Config::get('app.version'))}}"/> --}}
{{-- <link rel="stylesheet" type="text/css" href="{{ 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css' . Config::get('app.version') }}"/> --}}
<link rel="stylesheet" type="text/css" href="{{ asset('css/library/bootstrap.min.css' . Config::get('app.version'))}}"/>
<link rel="stylesheet" type="text/css" href="{{ asset('css/category.css' . Config::get('app.version')) }}" />
@endsection


@section('javascripts')
<script type="text/javascript" src="{{ asset('js/product.detail.js' . Config::get('app.version')) }}"></script>
<script>
    window.AJAX_TOGGLE_LIKE_PRODUCT = "{{ Route('USER_AJAX_LIKE_PRODUCT') }}";
</script>
@endsection
@section('content')
<div class="content pb-4">
    <div class="content">
        @isset($relateCategories)
            @if (!$relateCategories->isEmpty())
                <div class="categories">
                    <div class="categories__wrapper">
                        <div class="pagecontainer mx-auto px-15px">
                            <div class="row categories__row">
                                @foreach ($relateCategories as $child)
                                <div class="categories__item">
                                    <a class="categories__item-link-img" href="{{ Route('CATEGORY_VIEW', ['slug' => $child->slug ]) }}">
                                        <img 
                                        class="lazyload"
                                        src="{{ Config::get('app.lazyload_base64') }}"
                                        onerror="this.onerror=null;this.src='{{ asset('images/failed.jpg') }}';"
                                        data-src="{{ Route('IMAGE_CONVERTOR', [ 'quality' => SupportAgent::getQuanlityByDevice(), 'imagePath' => trim($child->thumbnail, '/') . Config::get('image.EXTENTION_CONVERTOR') ]) }}" 
                                        alt="{{ $child->name }}" width="300" height="300"/>
                                    </a>
                                    <a href="{{ Route('CATEGORY_VIEW', ['slug' => $child->slug ]) }}">
                                        <h5 class="categories__item-link-text">{{ $child->name }}</h5>
                                    </a>
                                </div>
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            @endif
        @endisset
    </div>




    @if (!!$products && !$products->isEmpty())
    <div class="pagecontainer mx-auto px-15px">
        <div class="cproduct">
            <h3 class="cproduct-title" title="💥 Bài viết trong chủ đề">Bài viết trong chủ đề</h3>
            
            @foreach ($products as $key => $product)
            @include('client.partial.item.product', compact('product'))
            @endforeach
        </div>
        <div class="pagi py-2 text-right">
            {{ $products->onEachSide(3)->links("pagination::default") }}
        </div>
    </div>
    @endif

    
    @if (!!$relates && !$relates->isEmpty())
    <div class="pagecontainer mx-auto px-15px">
        <div class="cproduct">
            <h3 class="cproduct-title pt-4" title="💥 Bài viết liên quan">Bài viết liên quan</h3>
            
            @foreach ($relates as $key => $product)
            @include('client.partial.item.product', compact('product'))
            @endforeach
        </div>
        <div class="pagi py-2 text-right">
            {{ $relates->onEachSide(3)->links("pagination::default") }}
        </div>
    </div>
    @endif

    
</div>
@endsection



@section('modal')
    <!-- Modal HTML embedded directly into document -->
    <div id="modal__notification" class="modal modal__notification">
        <div class="modal__header">
            @svg('font/font-awe/svgs/duotone/bell-on.svg')
            <span class="title">Yêu cầu đăng nhập!</span>
        </div>
        <div class="modal__body">
            <p class="h5 text-color-orange">Bạn chưa đăng nhập! </p>
            <div class="notification">
                Sau khi đăng nhập thành công bạn mới có thể thực hiện <span class="text-color-red">thích</span> bài đăng.
            </div>
        </div>
        <div class="modal__footer">
            <a class="btn btn__close" rel="modal:close">
                Huỷ thực hiện
            </a>
            <a class="btn btn__login" href="{{ Route('LOGIN') }}?rredirect=1">
                Đăng nhập
            </a>
        </div>
    </div>
    <!-- Modal HTML embedded directly into document -->
    <div id="modal__error" class="modal modal__notification">
        <div class="modal__header">
            @svg('font/font-awe/svgs/duotone/bug.svg')
            <span class="title js__title"></span>
        </div>
        <div class="modal__body">
            <p class="h5 text-color-orange js__header--content"></p>
            <div class="notification js__body--content"></div>
        </div>
        <div class="modal__footer">
            <a class="btn btn__close" rel="modal:close">
                Đóng
            </a>
        </div>
    </div>
@endsection