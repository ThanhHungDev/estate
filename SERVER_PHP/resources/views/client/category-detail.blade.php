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
        <div class="row">
            @foreach ($products as $key => $product)
            <div class="col-6">
                <div class="p-1 h-100">
                    <div class="row p-2 h-100 bg-white border rounded">
                        <div class="col-md-3 mt-1">
                            <img class="img-fluid img-responsive rounded product-image"
                                src="{{ Route('IMAGE_RESIZE', [ 'size' => 'home-product' , 'type' => 'fit', 'imagePath' => $product->thumbnail ]) }}"
                                onerror="this.onerror=null;this.src='{{ Route('IMAGE_RESIZE', [ 'size' => 'home-product' , 'type' => 'fit', 'imagePath' => 'images/failed.jpg' ]) }}'"
                                alt="{{ $product->title }}" />
                        </div>
                        <div class="col-md-6 mt-1">
                            <h5 class="text-tile-cate">{{ $product->title }}</h5>
                            <div class="d-flex flex-row">
                                <div class="ratings mr-2"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><span>310</span>
                            </div>
                            <div class="mt-1 mb-1 spec-1"><span>100% cotton</span><span class="dot"></span><span>Light weight</span><span class="dot"></span><span>Best finish<br></span></div>
                            <div class="mt-1 mb-1 spec-1"><span>Unique design</span><span class="dot"></span><span>For men</span><span class="dot"></span><span>Casual<br></span></div>
                            <p class="text-justify text-truncate para mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br><br></p>
                        </div>
                        <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                            <div class="d-flex flex-row align-items-center">
                                <h4 class="mr-1">$13.99</h4><span class="strike-text">$20.99</span>
                            </div>
                            <h6 class="text-success">Free shipping</h6>
                            <div class="d-flex flex-column mt-4">
                                <a class="btn btn-primary btn-sm" href="{{ Route('PRODUCT_VIEW', ['slug' => $product->slug ]) }}">xem chi tieets</a>
                                <button class="btn btn-outline-primary btn-sm mt-2" type="button">Add to wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            @endforeach
        </div>
    </div>
    @endif

    
    @if (!!$relates && !$relates->isEmpty())
    <div class="pagecontainer mx-auto px-15px">
        <div class="row">
            @foreach ($relates as $key => $product)
            <div class="col-6">
                <div class="p-1">
                    <div class="row p-2 bg-white border rounded">
                        <div class="col-md-3 mt-1">
                            <img class="img-fluid img-responsive rounded product-image"
                                src="{{ Route('IMAGE_RESIZE', [ 'size' => 'home-product' , 'type' => 'fit', 'imagePath' => $product->thumbnail ]) }}"
                                onerror="this.onerror=null;this.src='{{ Route('IMAGE_RESIZE', [ 'size' => 'home-product' , 'type' => 'fit', 'imagePath' => 'images/failed.jpg' ]) }}'"
                                alt="{{ $product->title }}" />
                        </div>
                        <div class="col-md-6 mt-1">
                            <h5 class="text-truncate">{{ $product->title }}</h5>
                            <div class="d-flex flex-row">
                                <div class=" rating">
                                    <span class="item-star fa fa-star text-color-warning"></span>
                                    <span class="item-star fa fa-star text-color-warning"></span>
                                    <span class="item-star fa fa-star text-color-warning"></span>
                                    <span class="item-star fa fa-star"></span>
                                    <span class="item-star fa fa-star"></span>
                                </div>
                                <span>310</span>
                            </div>
                            <div class="mt-1 mb-1 spec-1"><span>100% cotton</span><span class="dot"></span><span>Light weight</span><span class="dot"></span><span>Best finish<br></span></div>
                            <div class="mt-1 mb-1 spec-1"><span>Unique design</span><span class="dot"></span><span>For men</span><span class="dot"></span><span>Casual<br></span></div>
                            <p class="text-justify text-truncate para mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br><br></p>
                        </div>
                        <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                            <div class="d-flex flex-row align-items-center">
                                <h4 class="mr-1">$13.99</h4><span class="strike-text">$20.99</span>
                            </div>
                            <h6 class="text-success">Free shipping</h6>
                            <div class="d-flex flex-column mt-4"><button class="btn btn-primary btn-sm" type="button">Details</button><button class="btn btn-outline-primary btn-sm mt-2" type="button">Add to wishlist</button></div>
                        </div>
                    </div>
                </div>
            </div>
            @endforeach
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