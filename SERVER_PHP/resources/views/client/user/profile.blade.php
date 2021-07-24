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
    <link type="text/css" rel="stylesheet" href="{{ asset('css/library/lightgallery.css' . Config::get('app.version')) }}" />
@endsection
@section('javascripts')
    
    <script type="text/javascript" src="{{ asset('js/library/lightgallery.min.js' . Config::get('app.version')) }}"></script>
    <script type="text/javascript">
        lightGallery(document.getElementById('photos__responsive-images')); 
    </script>
    <script>
        const jwt = "{{ Cookie::get(Config::get('constant.TOKEN_COOKIE_NAME')) }}";
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
                        <!--- \\\\\\\Post-->
                        <div class="card social-timeline-card">
                            <div class="card-header">
                                <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Share your insights</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="images-tab" data-toggle="tab" role="tab" aria-controls="images" aria-selected="false" href="#images">Share Images</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-body">
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade active show" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                                        <div class="form-group">
                                            <label class="sr-only" for="message">post</label>
                                            <textarea class="form-control" id="message" rows="3" placeholder="What are you thinking?"></textarea>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="images" role="tabpanel" aria-labelledby="images-tab">
                                        <div class="form-group">
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" id="customFile">
                                                <label class="custom-file-label" for="customFile">Upload image</label>
                                            </div>
                                        </div>
                                        <div class="py-4"></div>
                                    </div>
                                </div>
                                <div class="btn-toolbar justify-content-between">
                                    <div class="btn-group">
                                        <button type="submit" class="btn btn-theme-primary">share</button>
                                    </div>
                                    <div class="btn-group">
                                        <button id="btnGroupDrop1" type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fa fa-globe"></i>
                                        </button>
                                        <div class="dropdown-menu " aria-labelledby="btnGroupDrop1">
                                            <a class="dropdown-item" href="#"><i class="fa fa-globe"></i> Public</a>
                                            <a class="dropdown-item" href="#"><i class="fa fa-users"></i> Friends</a>
                                            <a class="dropdown-item" href="#"><i class="fa fa-user"></i> Just me</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Post /////-->
                        <!--- \\\\\\\Post-->
                        <div class="card social-timeline-card">
                            <div class="card-header">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="mr-2">
                                            <img class="rounded-circle" width="45" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="">
                                        </div>
                                        <div class="ml-2">
                                            <div class="h5 m-0 text-blue">@JaneSmith</div>
                                            <div class="h7 text-muted">Miracles Lee Cross</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="dropdown">
                                            <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop11" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="fa fa-ellipsis-h"></i>
                                            </button>
                                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop11">
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
                                <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>10 min ago</div>
                                <a class="card-link" href="#">
                                    <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adip.</h5>
                                </a>
                                <img src="img/gallery/1a.jpg" alt="" class="img-fluid">
        
                            </div>
                            <div class="card-footer">
                                <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
                                <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
                                <a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Share</a>
                            </div>
                        </div>
                        <!-- Post /////-->
                        <!--- \\\\\\\Post-->
                        <div class="card social-timeline-card">
                            <div class="card-header">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="mr-2">
                                            <img class="rounded-circle" width="45" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="">
                                        </div>
                                        <div class="ml-2">
                                            <div class="h5 m-0 text-blue">@JaneSmith</div>
                                            <div class="h7 text-muted">Miracles Lee Cross</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="dropdown">
                                            <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="fa fa-ellipsis-h"></i>
                                            </button>
                                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
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
                                <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i> 10 min ago</div>
                                <a class="card-link" href="#">
                                    <h5 class="card-title"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consectetur
                                                    deserunt illo esse distinctio.</h5>
                                </a>
                                <p class="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam omnis nihil, aliquam est, voluptates officiis iure soluta alias vel odit, placeat reiciendis ut libero! Quas aliquid natus cumque quae repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, excepturi. Doloremque, reprehenderit! Quos in maiores, soluta doloremque molestiae reiciendis libero expedita assumenda fuga quae. Consectetur id molestias itaque facere? Hic!
                                </p>
                                <div>
                                    <span class="badge badge-primary">JavaScript</span>
                                    <span class="badge badge-primary">Android</span>
                                    <span class="badge badge-primary">PHP</span>
                                    <span class="badge badge-primary">Node.js</span>
                                    <span class="badge badge-primary">Ruby</span>
                                    <span class="badge badge-primary">Paython</span>
                                </div>
                            </div>
                            <div class="card-footer">
                                <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
                                <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
                                <a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Share</a>
                            </div>
                        </div>
                        <!-- Post /////-->
                        <!--- \\\\\\\Post-->
                        <div class="card social-timeline-card">
                            <div class="card-header">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="mr-2">
                                            <img class="rounded-circle" width="45" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="">
                                        </div>
                                        <div class="ml-2">
                                            <div class="h5 m-0 text-blue">@JaneSmith</div>
                                            <div class="h7 text-muted">Miracles Lee Cross</div>
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
                                <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i> Hace 40 min</div>
                                <a class="card-link" href="#">
                                    <h5 class="card-title">Totam non adipisci hic! Possimus ducimus amet, dolores illo ipsum quos
                                                    cum.</h5>
                                </a>
                                <p class="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sunt fugit reprehenderit consectetur exercitationem odio, quam nobis? Officiis, similique, harum voluptate, facilis voluptas pariatur dolorum tempora sapiente eius maxime quaerat.
                                    <a href="https://mega.nz/#!1J01nRIb!lMZ4B_DR2UWi9SRQK5TTzU1PmQpDtbZkMZjAIbv97hU" target="_blank">https://mega.nz/#!1J01nRIb!lMZ4B_DR2UWi9SRQK5TTzU1PmQpDtbZkMZjAIbv97hU</a>
                                </p>
                            </div>
                            <div class="card-footer">
                                <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
                                <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
                                <a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Share</a>
                            </div>
                        </div>
                        <!-- Post /////-->
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