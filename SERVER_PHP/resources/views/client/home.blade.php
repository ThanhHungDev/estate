@extends('client.layout.index')

@section('title', Config::get("app.name"))
@section('description', Config::get("app.description"))


@section('preload')
{{-- <link rel="preload" as="font" href="{{ asset('/font/font-awe/webfonts/fa-duotone-900.woff2')}}" />
<link rel="preload" as="font" href="{{ asset('/font/font-awe/webfonts/fa-regular-400.woff2')}}" />
<link rel="preload" as="font" href="{{ asset('/font/font-awe/webfonts/fa-light-300.woff2')}}" />
<link rel="preload" as="font" href="{{ asset('/font/font-awe/webfonts/fa-solid-900.woff2')}}" /> --}}
{{-- <link rel="preload" as="font" href="{{ asset('/css/library/fonts/slick.woff')}}" /> --}}
<link rel="preload" as="image" href="{{ asset('/css/library/ajax-loader.gif') }}"/>

<link rel="preload" as="style" href="{{ asset('css/home.css' . Config::get('app.version'))}}"/>
<link rel="preload" as="style" href="{{ asset('css/library/slick.css' . Config::get('app.version')) }}"/>
<link rel="preload" as="style" href="{{ asset('css/library/slick-theme.css' . Config::get('app.version')) }}"/>
@foreach ($sliders as $key => $slider)
<link rel="preload" as="image" href="{{ $slider->src }}"/>
@endforeach
{{-- @foreach ($categories as $cat)
<link rel="preload" as="image" href="{{ Route('IMAGE_CONVERTOR', [ 'quality' => SupportAgent::getQuanlityByDevice(), 'imagePath' => trim($cat->thumbnail, '/') . Config::get('image.EXTENTION_CONVERTOR') ]) }}"/>
@endforeach --}}
<link rel="preload" as="style" href="{{ asset('css/library/bootstrap.home.css' . Config::get('app.version'))}}"/>
<link rel="preload" as="script" href="{{ asset('/js/library/carousel.min.js' . Config::get('app.version')) }}"/>
<link rel="preload" as="script" href="{{ asset('js/library/wow.min.js' . Config::get('app.version')) }}"/>
<link rel="preload" as="script" href="{{ asset('js/library/slick.min.js' . Config::get('app.version')) }}"/>
@endsection

@section('stylesheets')
<link rel="stylesheet" type="text/css" href="{{ asset('css/library/bootstrap.home.css' . Config::get('app.version'))}}"/>
<link rel="stylesheet" type="text/css" href="{{ asset('css/home.css' . Config::get('app.version'))}}"/>
<link rel="stylesheet" type="text/css" href="{{ asset('css/library/slick.css' . Config::get('app.version')) }}"/>
<link rel="stylesheet" type="text/css" href="{{ asset('css/library/slick-theme.css' . Config::get('app.version')) }}"/>
@endsection


@section('javascripts')

<script type="text/javascript" src="{{ asset('/js/library/carousel.min.js' . Config::get('app.version')) }}"></script>
<script type="text/javascript" src="{{ asset('js/library/wow.min.js' . Config::get('app.version')) }}"></script>
<script type="text/javascript" src="{{ asset('js/library/slick.min.js' . Config::get('app.version')) }}"></script>
<script>
    window.AJAX_TOGGLE_LIKE_PRODUCT = "{{ Route('USER_AJAX_LIKE_PRODUCT') }}";
	$(document).ready(function(){
        $('#slider').slick({
            dots: true,
            infinite: true,
            arrows: false,
            speed: 300,
            autoplay: true,
            autoplaySpeed: 10000,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
        $('#slider .js__onload--show').removeClass('d-none');
    });
</script>
@endsection
@section('content')
<div class="content pb-4">
    <div class="container-hero">
        <div class="row-hero">
            <div class="col-12 homeslider">
                <div id="slider" class="slider">
                    @foreach ($sliders as $key => $slider)
                    <div class="js__onload--show {{ !$key ?? 'd-none'}}">
                        <div class="slider__item">
                            <div class="slider__item-img">
                                <img src="{{ $slider->src }}" alt="{{ $slider->alt }}" width="200" height="175"/>
                            </div>
                            <div class="slider__item-content">
                                <div>
                                    <h4 class="slider__item-topic">
                                        {{ $slider->topic }}
                                        <time datetime="2008-02-14 20:00">— {{ Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $slider->updated_at)->diffForHumans() }}</time>
                                    </h4>
                                    <h3 class="slider__item-title">
                                        {{ $slider->title }}
                                    </h3>
                                </div>
                                <div class="slider__item-des">{{ $slider->excerpt }}</div>
                                <div class="action py-3">
                                    <a class="btn-hero btn-hero-light-green itext-sm" href="tel:{{ Config::get('app.phone') }}">
                                        {{ Config::get('app.phone') }}
                                    </a>
                                    <a class="btn-hero btn-hero-outline-light-green itext-sm" href="{{ Route('CONTACT_PAGE') }}">
                                        Gửi Yêu Cầu Tư Vấn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>










    @isset($categories)
        @foreach ($categories as $cat)
        <div class="categories wow fadeInLeft" data-wow-duration="1s">
            <div class="categories__wrapper">
                <h3 id="categories" class="categories__title {{ $cat->id }}" tabindex="1" title="💥 {{ $cat->name }}" >{{ $cat->name }}</h3>
                <div class="container">
                    <div class="row categories__row">
                        @php $childs = $cat->childs @endphp
                        @isset($childs)
                            @if (!$childs->isEmpty())
                                @foreach ($childs as $child)
                                <div class="categories__item">
                                    <a class="categories__item-link-img" href="{{ Route('CATEGORY_VIEW', ['slug' => $child->slug ]) }}">
                                        <img 
                                        class="lazyload"
                                        src="{{ Config::get('app.lazyload_base64') }}"
                                        onerror="this.onerror=null;this.src='{{ asset('/images/failed.jpg') }}';"
                                        data-src="{{ Route('IMAGE_CONVERTOR', [ 'quality' => SupportAgent::getQuanlityByDevice(), 'imagePath' => trim($child->thumbnail, '/') . Config::get('image.EXTENTION_CONVERTOR') ]) }}" 
                                        alt="{{ $child->name }}" width="300" height="300"/>
                                    </a>
                                    <a href="{{ Route('CATEGORY_VIEW', ['slug' => $child->slug ]) }}">
                                        <h5 class="categories__item-link-text">{{ $child->name }}</h5>
                                    </a>
                                </div>
                                @endforeach
                            @endif
                        @endisset
                    </div>
                </div>
            </div>
        </div>
        @endforeach
    @endisset







    <div class="selectus wow fadeInUp" data-wow-duration="1s">
        <div class="selectus__wrapper">
            <h3 id="selectus" class="selectus__title" tabindex="0" title="💥 Vì Sao bạn nên chọn {{ Config::get('app.name') }}" >
                Các bất động sản đang có
            </h3>
        </div>
    </div>
    <div class="estate">
        <div class="estate__row">
            @foreach ($products as $key => $product)
            @php $pics = $product->getImages()->get(); @endphp
            <div class="estate__col">
                <div class="position-relative">
                    <span class="view">
                        <strong class="position-relative">
                            <i class="counter">{{ $product->view }}</i>
                            @svg('font/font-awe/svgs/duotone/external-link-square-alt.svg')
                        </strong>
                    </span>
                    <span class="photo">
                        <strong class="position-relative">
                            @svg('font/font-awe/svgs/duotone/camera-home-page.svg')
                            @php $countPics = $pics->count() @endphp
                            <i class="counter">{{ $countPics > 99 ? '99+' : $countPics }}</i>
                        </strong>
                    </span>
                    <a href="{{ Route('PRODUCT_VIEW', ['slug' => $product->slug ]) }}" class="d-block" title="">
                        <img class="product-image lazyload"
                            width="350" height="350"
                            src="{{ Config::get('app.lazyload') }}" 
                            {{-- src="{{ Route('IMAGE_RESIZE', [ 'size' => 'home-product' , 'type' => 'fit', 'imagePath' => $product->thumbnail ]) }}" --}}
                            onerror="this.onerror=null;this.src='{{ Route('IMAGE_RESIZE', [ 'size' => 'home-product' , 'type' => 'fit', 'imagePath' => '/images/failed.jpg' ]) }}'"
                            data-src="{{ Route('IMAGE_RESIZE', [ 'size' => 'home-product' , 'type' => 'fit', 'imagePath' => trim($product->thumbnail, "/") ]) }}"
                            alt="{{ $product->title }}"
                        />
                    </a>
                </div>
                <h3 class="title">
                    <a href="{{ Route('PRODUCT_VIEW', ['slug' => $product->slug ]) }}" class="title-link" title="">{{ $product->getTitleLocateCategory(100)  }}</a>
                </h3>
                <p class="price text-truncate text-color-red">
                    @svg('font/font-awe/svgs/duotone/usd-square.svg')
                    {{ $product->getPriceUnit('---') }}
                </p>
                <p class="location text-truncate text-color-grey">
                    @svg('font/font-awe/svgs/duotone/compass.svg')
                    {{ $product->getLocation('---') }}
                </p>
                <p class="calendar text-truncate text-color-grey">
                    @svg('font/font-awe/svgs/duotone/history.svg')
                    {{ Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $product->updated_at)->diffForHumans() }}
                </p>
                <div class="estate__col--bottom">
                    <button class="hero-btn btn__action {{ $product->getClassCounterLikeActive() }}" 
                        {{-- data-counter để tính toán số lượng like trong js --}}
                        data-counter="{{ $product->getCounterLike() }}"
                        onclick="toggleLikePost(this, {{ Auth::user()->id ?? 0 }} , {{ $product->id ?? 0 }})">
                        @svg('font/font-awe/svgs/regular/thumbs-up.svg') 
                        <span>Thích</span>
                        <span class="js__counter">{{ $product->getStrCounterLike() }}</span>
                    </button>
                    <a class="btn__advise" href="{{ Route('CHAT', ['id' => Auth::user() && $product->user_id == Auth::user()->id ? null : $product->user_id ]) }}">
                        @svg('font/font-awe/svgs/regular/comment-alt-dots.svg')
                        <span>Tư vấn</span>                        
                    </a>
                </div>
            </div>
            @endforeach
            
        </div>
    </div>


















    @if (!$posts->isEmpty())
    <div class="news">
        <h3 class="news-title" title="💥 Tin tức bất động sản">Tin tức bất động sản</h3>
        
        @foreach ($posts as $key => $post)
        <div class="news__wrapper">
            <div class="news__item">
                <div class="news__item-left">
                    <div class="img__cover" style="background-image: url({{ Route('IMAGE_CONVERTOR', [ 'quality' => SupportAgent::getQuanlityByDevice(), 'imagePath' => trim($post->background, '/') . Config::get('image.EXTENTION_CONVERTOR') ]) }});
                    background-repeat: no-repeat;
                    background-size:cover; "></div>
                </div>
                <div class="news__item-right">
                    <h4 class="news__item-topic">
                        <a href="{{ Route('POST_VIEW', ['slug' => $post->slug ]) }}">
                            @php $topic = $post->topic;   @endphp
                            {{ $topic['name'] }}
                            <time datetime="2008-02-14 20:00">
                                - 
                                <i class="d-none">{{ Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $post->created_at)->diffForHumans() }}</i>
                                <i>{{ Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $post->updated_at)->diffForHumans() }}</i>
                            </time>
                        </a>
                    </h4>
                    <h3 class="news__item-title">
                        <a href="{{ Route('POST_VIEW', ['slug' => $post->slug ]) }}">{{ $post->title }}</a>
                    </h3>
                    <p class="news__item-des">
                        <a href="{{ Route('POST_VIEW', ['slug' => $post->slug ]) }}"> {{ $post->excerpt }} </a>
                    </p>
                </div>
            </div>
        </div>
        @endforeach
        
        
    </div>
    @endif
    




    {{-- <div class="FAQPage">
        <div itemscope="" itemtype="https://schema.org/FAQPage" class="faq_page"> 
            <p class="faqmain">Những câu hỏi thường gặp</p> 
                    <div itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question" class="faq_list"> 
                <h3 itemprop="name" class="faq_title" val_id="914" val_show="0">
                    ❖ Chi phí lên thổ cư đất trồng cây lâu năm là bao nhiêu?            </h3> 
                <div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" class="answer answer914" style="display: none;"> 
                    <div itemprop="text"> 
                        Tiền phải nộp khi chuyển từ đất trồng cây lâu năm sang đất ở sẽ được tính như sau: 50% * (giá đất ở - giá đất nông nghiệp)/m<sup>2</sup>. Tùy vào từng khu vực thì giá thổ cư sẽ qui định khác nhau.&nbsp;                </div> 
                </div> 
            </div>
                    <div itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question" class="faq_list"> 
                <h3 itemprop="name" class="faq_title" val_id="915" val_show="0">
                    ❖ Datnenonline.vn có hỗ trợ ký gửi BĐS hay môi giới không?            </h3> 
                <div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" class="answer answer915" style="display: none;"> 
                    <div itemprop="text"> 
                        Trang website Datnenonline.vn là một sàn thương mại hỗ trợ khách hàng đăng tin bán sản phẩm bất động sản của mình cũng như tìm kiếm các lô đất giá rẻ, Đầu tư sinh lợi cao.&nbsp;                </div> 
                </div> 
            </div>
             
        </div>
    </div> --}}

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