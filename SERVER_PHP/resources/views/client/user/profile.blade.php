@extends('client.layout.index')

@section('title', "Hồ sơ cá nhân - " . $profile->name . " - đăng bài thông tin bất động sản")
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

@section('stylesheets')
<link rel="stylesheet" type="text/css" href="{{ asset('css/profile.css' . Config::get('app.version'))}}"/>
<link rel="stylesheet" type="text/css" href="{{ asset('css/library/lightgallery.css' . Config::get('app.version')) }}" />
@endsection

@section('javascripts')
    
    <script type="text/javascript" src="{{ asset('js/library/lightgallery.min.js' . Config::get('app.version')) }}"></script>
    <script type="text/javascript">
        lightGallery(document.getElementById('photos__responsive-images')); 
    </script>
    <script>
        const jwt = `{{ SupportDB::getJwtAuthentication() }}`;
    </script>
@endsection

@section('content')
    <div class="content custommer">
        @include('client.user.header')
        <div class="timeline">
            <div class="container">
                <div class="row">
                    <div class="information timeline__information col-reset-px-0-sm col-lg-3">
                        <div class="card">
                            <div class="information__card-body">
                                <div id="example"></div>
                                <h5 class="information__title">
                                    <span class="text-capitalize d-inline-block">Thông Tin cơ bản</span>
                                    <a href="{{ Route('USER_INFORMATION') }}" class="btn btn-edit text-blue"><i class="fad fa-edit"></i></a>
                                </h5>
                                <div class="h6 text-blue">{{ $profile->getNameTagLimited() }}</div>
                                <div class="h7 text-truncate">
                                    <strong>Chức vụ: </strong>
                                    <span class="text-color-pink">{{ $profile->getTypeUser() }}</span>
                                </div>
                                <div class="h7 text-truncate-2line">
                                    <strong>Giới Thiệu: </strong>
                                    <span  class="text-color-grey">Developer of web applications, JavaScript, PHP, Java, Python, Ruby, Java, Node.js, etc.</span>
                                </div>
                            </div>
                            <ul class="information__card-group">
                                <li class="information__card-item">
                                    <div class=" text-muted"><i class="text-blue fas fa-thumbs-up"></i> Thích</div>
                                    <div class="">100 like</div>
                                </li>
                                <li class="information__card-item">
                                    <div class=" text-muted"><i class="text-color-warning-color-dark fas fa-percentage"></i> Đánh Giá</div>
                                    <div class=" rating">
                                        <span class="item-star fa fa-star text-color-warning"></span>
                                        <span class="item-star fa fa-star text-color-warning"></span>
                                        <span class="item-star fa fa-star text-color-warning"></span>
                                        <span class="item-star fa fa-star"></span>
                                        <span class="item-star fa fa-star"></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="card">
                            <div class="information__card-body">
                                <h5 class="information__title">
                                    <span class="text-capitalize d-inline-block">Hình ảnh đăng tải</span>
                                    <a href="{{ Route('USER_INFORMATION') }}" class="btn btn-edit text-blue">
                                        <i class="fad fa-camera-retro"></i>
                                    </a>
                                </h5>
                                <!-- above 757px default href/data-src will be used -->  
                                <div class="information__photo">
                                    <div id="photos__responsive-images" class="information__photo-group">
                                        <a class="information__photo-item" href="{{ asset('/images/productions/multipurpose.jpeg') }}"
                                            data-responsive="
                                                {{ asset('/images/productions/multipurpose.jpeg') }} 375, 
                                                {{ asset('/images/productions/multipurpose.jpeg') }} 480, 
                                                {{ asset('/images/productions/multipurpose.jpeg') }} 757">
                                            <img 
                                                src="{{ asset('/images/productions/multipurpose.jpeg') }}"
                                                onerror="this.onerror=null;this.src=`{{ asset(Config::get('app.image_error')) }}`;" />
                                        </a>
                                        <a class="information__photo-item" href="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05621_zgtcco.jpg"
                                            data-responsive="
                                                {{ asset('/images/productions/multipurpose.jpeg') }} 375, 
                                                {{ asset('/images/productions/multipurpose.jpeg') }} 480, 
                                                {{ asset('/images/productions/multipurpose.jpeg') }} 757">
                                            <img 
                                                src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05621_zgtcco.jpg"
                                                onerror="this.onerror=null;this.src=`{{ asset(Config::get('app.image_error')) }}`;" />
                                        </a>
                                        <a class="information__photo-item" href="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05513_gfbiwi.jpg"
                                            data-responsive="
                                                {{ asset('/images/productions/multipurpose.jpeg') }} 375, 
                                                {{ asset('/images/productions/multipurpose.jpeg') }} 480, 
                                                {{ asset('/images/productions/multipurpose.jpeg') }} 757">
                                            <img 
                                                src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05513_gfbiwi.jpg"
                                                onerror="this.onerror=null;this.src=`{{ asset(Config::get('app.image_error')) }}`;" />
                                        </a>
                                        <!--  Adding an empty <li> here so the final photo doesn't stretch like crazy. Try removing it and see what happens!  -->
                                        {{-- <li></li> --}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-reset-px-0-sm col-lg-6 gedf-main">
                        
                        <!-- Post /////-->
                        @if ($products && !$products->isEmpty())
                            @foreach ($products as $product)
                            <div class="card social-timeline-card">
                                <div class="card-header">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="mr-2">
                                                <img class="rounded-circle" width="45" src="{{ $profile->avatar }}" alt="">
                                            </div>
                                            <div class="ml-2">
                                                <div class="h5 m-0 text-blue">{{ $profile->getNameTagLimited() }}</div>
                                                <div class="h7 text-muted">
                                                    <i class="fal fa-clock"></i>
                                                    <small class="">{{ Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $product->updated_at)->diffForHumans() }}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="dropdown">
                                                <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="fa fa-ellipsis-h"></i>
                                                </button>
                                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop2">
                                                    <div class="h6 dropdown-header">Configuration</div>
                                                    <a class="dropdown-item" href="#">Save</a>
                                                    <a class="dropdown-item" href="#">Hide</a>
                                                    <a class="dropdown-item" href="#">Report</a>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div class="card-body">
                                    <a class="card-link" href="{{ Route('USER_POST') }}/edit/{{ $product->id }}">
                                        <h5 class="card-title">{{ $product->title }}</h5>
                                    </a>
                                    <div class="card-text collapse-group ">
                                        {!! $product->content !!}
                                        <div class="collapse" id="viewdetails3">{!! $product->content !!}</div>
                                        <a class="btn float-right" data-toggle="collapse" data-target="#viewdetails3">More... &raquo;</a>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
                                    <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
                                    <a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Share</a>
                                </div>
                            </div>
                            @endforeach
                        @endif
                    </div>
                    <div class="col-reset-px-0-sm col-lg-3">
                        <div class="card">
                            <div class="information__card-body">
                                <h5 class="information__title">
                                    <span class="text-capitalize d-inline-block">Tin Nhắn</span>
                                    <a href="{{ Route('USER_INFORMATION') }}" class="btn btn-edit text-blue">
                                        <i class="fal fa-comment-alt-plus"></i>
                                    </a>
                                </h5>
                                <ul class="friend-list">
                                    @if(!$friends->isEmpty())
                                    @foreach ($friends as $key => $friend)
                                    <li class="friend-item">
                                        <div class="avatar">
                                            <img class="avatar__img" src="{{ asset($friend->avatar) }}" alt="{{ $friend->name }}">
                                        </div>
                                        <div class="friend-infor">
                                            <div class="name">{{ $friend->name. $friend->name }}</div>
                                            <p>10 Friends</p>
                                        </div>
                                    </li>
                                    @endforeach
                                    @endif
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
@endsection