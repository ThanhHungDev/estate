@extends('client.layout.index')

@section('title', Config::get("app.name"))
@section('description', Config::get("app.description"))
@section('keywords', Config::get("app.keywords"))

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
    <script src="{{ asset('js/library/jquery.min.js' . Config::get('app.version')) }}"></script>
    <script src="{{ asset('js/client/app.min.js' . Config::get('app.version')) }}"></script>
@endsection
@section('content')
    <div class="content">

        <div class="intro__dev">
            <svg class="hero-triangles" viewBox="0 0 263.07 394.61" preserveAspectRatio="xMinYMax meet">
                <polygon class="primary-triangle" points="0 394.61 0 0 263.07 263.07 131.53 394.61 0 394.61"></polygon>
                <polygon class="gray-triangle" points="0 394.61 0 263.07 131.53 394.61 0 394.61"></polygon>
                <polygon class="gray-triangle" points="131.53 394.61 197.3 328.84 263.07 394.61 131.53 394.61"></polygon>
            </svg>
            <h1 class="dev__name">Trương Thanh Hùng <span>Web developer</span></h1>
            <img class="intro__dev__img mobile" src="{{ asset('images/background/bg-developer.jpg') }}" alt="HUNGTT">
            <img class="intro__dev__img pc" src="{{ asset('images/background/bg-developer-pc.jpg') }}" alt="HUNGTT-PC">
        </div>
        <div class="information_dev">
            <div class="avatar">
                <img src="{{ asset('images/background/avatar-developer.jpg') }}" alt="avatar">
            </div>
            <div class="infor">
                <p class="title">THÔNG TIN CƠ BẢN</p>
                <h3 class="infor_row">
                    <span class="infor__title">tên đầy đủ</span>
                    <span class="infor__content">{{ Config::get("app.founder") }}</span>
                </h3>
                <h3 class="infor_row">
                    <span class="infor__title">địa chỉ</span>
                    <span class="infor__content">
                        {{ implode(',', [ Config::get("app.company_address_street"), Config::get("app.company_address_locality"), Config::get("app.company_address_region"), Config::get("app.company_address_country")]) }}
                    </span>
                </h3>
                <h3 class="infor_row"> 
                    <span class="infor__title">Số Điện Thoại</span>
                    <span class="infor__content">{{ Config::get('app.phone_one') }}</span>
                </h3>
                <h3 class="infor_row">
                    <span class="infor__title">Email</span>
                    <span class="infor__content">{{ Config::get("app.company_mail") }}</span>
                </h3>
            </div>
        </div>
        <div class="skill_dev">
            <div class="skill">
                <h2 class="title">Kỹ Năng</h2>
                <div class="skill__list">
                    <div class="skill__list-max">
                        <h4>HTML, CSS, SASS, ...</h4>
                        <div class="progress progress-primary-color-dark bg-color-indeterminate">
                            <div class="progress-bar w-80"></div>
                        </div>
                        <h4>PHP</h4>
                        <div class="progress progress-primary-color-dark bg-color-indeterminate">
                            <div class="progress-bar w-85"></div>
                        </div>
                        <h4>JAVASCRIPT</h4>
                        <div class="progress progress-primary-color-dark bg-color-indeterminate">
                            <div class="progress-bar w-75"></div>
                        </div>
                    </div>
                    <div class="skill__list-min">
                        <h4>SQL</h4>
                        <div class="progress progress-primary-color-dark bg-color-indeterminate">
                            <div class="progress-bar w-80"></div>
                        </div>
                        <h4>SERVER</h4>
                        <div class="progress progress-primary-color-dark bg-color-indeterminate">
                            <div class="progress-bar w-85"></div>
                        </div>
                        <h4>JAVA, C#</h4>
                        <div class="progress progress-primary-color-dark bg-color-indeterminate">
                            <div class="progress-bar w-65"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {{-- begin code lang --}}
        <div class="code_lang">
            <h2 class="title">ngôn ngữ</h2>
            <div class="language">
                <div class="language__item">
                    <i class="hero-icon hero-nodejs"></i>
                    <h6 class="platform">Express.js, Reactjs, Jquery</h6>
                    <h4 class="language__name">JAVASCRIPT</h4>
                    <p class="content-language">
                        Ứng dụng đang dùng được viết trên nền nodejs trên công nghệ reactjs và nodejs
                        express socket
                    </p>
                </div>
                <div class="language__item">
                    <i class="hero-icon hero-language-php"></i>
                    <h6 class="platform">PHP Core, Laravel,...</h6>
                    <h4 class="language__name">PHP</h4>
                    <p class="content-language">
                        Xây dựng các ứng dụng web động viết trên nền LAMP, LEMP. Có khả năng làm việc
                        ở tất cả các giai đoạn của quy trình phát triển phần mềm từ phân tích hệ thống đến xây dựng
                        website font-end lẫn back-end
                    </p>
                </div>
                <div class="language__item">
                    <i class="hero-icon hero-language-java"></i>
                    <h6 class="platform">Servlet, Java core, C#, Redit</h6>
                    <h4 class="language__name">JAVA &amp; C#</h4>
                    <p class="content-language">
                        Sử dụng Java, C#,... để built các web chuyên biệt hơn hoặc có yêu cầu phù hợp
                        với project cụ thể
                    </p>
                </div>
            </div>
        </div>
        {{-- end code lang --}}


        <div class="education">
            <h2 class="title">Học Vấn</h2>
            <div class="education__main">
                <div class="education__scholl">
                    <img src="{{ asset('/images/background/avatar-dh-saigon.jpg') }}" alt="">
                </div>
                
                <div class="education__content">
                    <h3 class="title">Đại Học Sài Gòn</h3>
                    <q class="description">
                        Đại Học Sài Gòn là 1 chuỗi hành trình học
                        tập và rèn luyện kĩ năng. Được trải qua đoạn đường sinh viên 
                        trong Đh Sài Gòn, nơi không chỉ vun đắp
                        ước mơ mà còn là nơi giúp bạn có những kỉ niệm không thể quên!
                    </q>
                </div>
            </div>
        </div>
    </div>
@endsection