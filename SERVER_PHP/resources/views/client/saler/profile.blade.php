@extends('client.layout.index')

@section('title', "Hồ sơ cá nhân - " . $profile->name)
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

@section('content')
    <div class="content saler">
        <div class="timeline">
            <div class="timeline__wrapper">
                <div class="timeline__container">
                    <div class="timeline__background img" 
                    style="background-image: linear-gradient(150deg, rgba(63, 174, 255, .3)15%, rgba(63, 174, 255, .3)70%, rgba(63, 174, 255, .3)94%), 
                    url({{ $profile->background }});"></div>
                    <div class="timeline__head card">
                        <div class="timeline__head-content card-body">
                            <div class="timeline__head-infor">
                                <img src="{{ $profile->avatar }}" alt="" class="avatar">
                                <h3 class="name">{{ $profile->name }}</h3>
                                <p class="email">{{ $profile->email }}</p>
                            </div>
                            <div class="navi__page">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <ul class=" nav nav-tabs justify-content-center s-nav">
                                            <li><a class="active" href="#">Timeline</a></li>
                                            <li><a href="#">About</a></li>
                                            <li><a href="#">Friends</a></li>
                                            <li><a href="#">Photos</a></li>
                                            <li><a href="#">Videos</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
            
                <div class="row">
                    <div class="col-lg-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="h5 text-blue">@JaneSmith</div>
                                <div class="h7 "><strong>Name :</strong> Jane Smith</div>
                                <div class="h7"><strong>About :</strong> Developer of web applications, JavaScript, PHP, Java, Python, Ruby, Java, Node.js, etc.
                                </div>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <div class="h6 text-muted">Followers</div>
                                    <div class="h5">5.2342</div>
                                </li>
                                <li class="list-group-item">
                                    <div class="h6 text-muted">Following</div>
                                    <div class="h5">6758</div>
                                </li>
                                <li class="list-group-item">
                                    <div class="h6 text-muted">Themes</div>
                                    <div class="h5">6758</div>
                                </li>
                            </ul>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-title">Latest Photos</h3>
                                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class=""></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1" class=""></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2" class="active"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="carousel-item active">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="d-block w-100" alt="...">
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 gedf-main">
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
                    <div class="col-lg-3">
                        <div class="card social-timeline-card">
                            <div class="card-body">
                                <h5 class="card-title">People you may know</h5>
                                <ul class="friend-list">
                                    <li>
                                        <div class="left">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="">
                                        </div>
                                        <div class="right">
                                            <h3>John Doe</h3>
                                            <p>10 Friends</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="left">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="">
                                        </div>
                                        <div class="right">
                                            <h3>John Doe</h3>
                                            <p>10 Friends</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="left">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="">
                                        </div>
                                        <div class="right">
                                            <h3>John Doe</h3>
                                            <p>10 Friends</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="left">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="">
                                        </div>
                                        <div class="right">
                                            <h3>John Doe</h3>
                                            <p>10 Friends</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="left">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="">
                                        </div>
                                        <div class="right">
                                            <h3>John Doe</h3>
                                            <p>10 Friends</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="left">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="">
                                        </div>
                                        <div class="right">
                                            <h3>John Doe</h3>
                                            <p>10 Friends</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="left">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="">
                                        </div>
                                        <div class="right">
                                            <h3>John Doe</h3>
                                            <p>10 Friends</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="left">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="">
                                        </div>
                                        <div class="right">
                                            <h3>John Doe</h3>
                                            <p>10 Friends</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="left">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="">
                                        </div>
                                        <div class="right">
                                            <h3>John Doe</h3>
                                            <p>10 Friends</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection