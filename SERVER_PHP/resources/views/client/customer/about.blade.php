@extends('client.layout.index')

@section('title', "Thông tin cơ bản - " . $profile->name . " - đăng bài thông tin bất động sản")
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
    <div class="content custommer">
        @include('client.customer.header')
        <div class="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="card">
                            <div class="card-body info-card social-about">
                                <h2 class="text-blue">About</h2>
                                <h4><strong>About Me</strong></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <h4 class="mb-3"><strong>Personal Info</strong></h4>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="social-info">
                                            <i class="fas fa-birthday-cake mr-2"></i>
                                            <span>15/08/1991</span>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="social-info">
                                            <i class="fas fa-map-marker-alt mr-2"></i>
                                            <span> New York</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="social-info">
                                            <i class="fas fas fa-users mr-2"></i>
                                            <span>Female</span>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="social-info">
                                            <i class="fas fa-briefcase mr-2"></i>
                                            <span>UI/UX Designer</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="social-info">
                                            <i class="fas fas fa-mobile mr-2"></i>
                                            <span>8392832983</span>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="social-info">
                                            <i class="fas fas fa-envelope mr-2"></i>
                                            <span>like @example.com</span>
                                        </div>
                                    </div>
                                </div>
                
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card info-card">
                            <div class="card-body">
                                <h2 class="text-blue">Skills</h2>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <h4>HTML5</h4>
                                        <div class="mb-3">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <h4>Bootstrap Framework</h4>
                                        <div class="mb-3">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <h4>Vanilla Javascript</h4>
                                        <div class="mb-3">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <h4>Angular Js</h4>
                                        <div class="mb-3">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <h4>Adobe Photoshop</h4>
                                        <div class="mb-3">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <h4>Adobe Illustrator</h4>
                                        <div class="mb-3">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <h4>SASS/SCSS</h4>
                                        <div class="mb-3">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <h4>WORDPRESS
                                                        </h4>
                                        <div class="mb-3">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="card info-card">
                            <div class="card-body">
                                <h2 class="text-blue">Education</h2>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <h4><strong>Pune University </strong></h4>
                                        <p>May 2009 to June 2011 </p>
                                    </div>
                                    <div class="col-lg-6">
                                        <h4><strong>Course: Gamification</strong></h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                    <div class="col-lg-6">
                                        <h4><strong>St Xavier Highschool</strong></h4>
                                        <p>Aug 2004 to June 2009 </p>
                                    </div>
                                    <div class="col-lg-6">
                                        <h4><strong>Bachelor - Computer Science</strong></h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card info-card">
                            <div class="card-body">
                                <h2 class="text-blue">Work</h2>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <h4><strong>Creative Arts - 2016-19</strong></h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                    <div class="col-lg-6">
                                        <h4><strong>Web Media - 2014-16</strong></h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                    <div class="col-lg-6">
                                        <h4><strong>Global Infosoft - 2012-14</strong></h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                    <div class="col-lg-6">
                                        <h4><strong>Freelancer - 2011-12</strong></h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

