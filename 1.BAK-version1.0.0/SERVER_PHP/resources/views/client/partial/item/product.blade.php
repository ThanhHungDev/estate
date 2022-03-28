<div class="cproduct__wrapper">
    <div class="cproduct__item">
        <div class="cproduct__item-left p-2">
            <img class="img-fluid img-responsive rounded product-image"
                src="{{ Route('IMAGE_RESIZE', [ 'size' => 'home-product' , 'type' => 'fit', 'imagePath' => $product->thumbnail ]) }}"
                onerror="this.onerror=null;this.src='{{ Route('IMAGE_RESIZE', [ 'size' => 'home-product' , 'type' => 'fit', 'imagePath' => 'images/failed.jpg' ]) }}'"
                alt="{{ $product->title }}" />
        </div>
        <div class="cproduct__item-center py-2">
            <h4 class="cproduct__item-topic">
                <a href="{{ Route('PRODUCT_VIEW', ['slug' => $product->slug ]) }}">
                    {{ $category->name }}
                    <time datetime="2008-02-14 20:00">
                        - 
                        <i class="d-none">{{ Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $product->created_at)->diffForHumans() }}</i>
                        <i>{{ Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $product->updated_at)->diffForHumans() }}</i>
                    </time>
                </a>
            </h4>
            <h3 class="cproduct__item-title ">
                <a class="d-block text-truncate" href="{{ Route('PRODUCT_VIEW', ['slug' => $product->slug ]) }}">{{ $product->title }}</a>
            </h3>
            <p class="cproduct__item-member">
                <a href="{{ Route('MEMBER_VIEW', ['id' => $product->user->id ]) }}">
                    {{ $product->user->name }}
                </a>
                <a class="btn btn__advise" href="{{ Route('CHAT', ['id' => Auth::user() && $product->user_id == Auth::user()->id ? null : $product->user_id ]) }}">
                    @svg('font/font-awe/svgs/regular/comment-alt-dots.svg')
                    <span>Tư vấn</span>                        
                </a>
                <button class="ml-2 btn btn__react--like"
                    data-react-like="{{ $product->id ?? 0 }}"
                    onclick="toggleLikePost(this, {{ $product->id ?? 0 }})">
                    <span>Thích</span>
                    <span class="js__counter">{{ $product->like ? "($product->like)" : null }}</span>
                </button>
                <a href="{{ Route('PRODUCT_VIEW', ['slug' => $product->slug ]) }}" class="ml-2 btn btn__react--viewer">chi tiết</a>
            </p>
            {{-- <p class="cproduct__item-des">
                <a href="{{ Route('PRODUCT_VIEW', ['slug' => $product->slug ]) }}"> {{ $product->excerpt }} </a>
            </p> --}}
        </div>
        <div class="cproduct__item-right py-3 px-2">
            <div class="cproduct__item-wrapper h-100 px-2">
                <ul class="p-0 text-xs text-center">
                    <li class="">{{ $product->view }} <br /> lượt xem</li>
                </ul>
            </div>
        </div>
    </div>
</div>