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


@section('javascripts')



<!-- The core Firebase JS SDK is always required and must be listed first -->
<!-- <script src="https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js"></script> -->
<!-- <script src="https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js"></script> -->
<!-- TODO: Add SDKs for Firebase products that you want to use
    https://firebase.google.com/docs/web/setup#available-libraries -->
<!-- <script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-analytics.js"></script> -->

<script src="https://www.gstatic.com/firebasejs/6.0.2/firebase.js"></script>
<!-- The core Firebase JS SDK is always required and must be listed first -->
<!-- <script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js"></script> -->
<!-- TODO: Add SDKs for Firebase products that you want to use
    https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-analytics.js"></script>

<script>
    var firebaseConfig = {
        apiKey: "AIzaSyApTTbYMGOTC5YYN81Uq0e9rg6dU3fmeig",
        authDomain: "topbds-viet-nam.firebaseapp.com",
        projectId: "topbds-viet-nam",
        storageBucket: "topbds-viet-nam.appspot.com",
        messagingSenderId: "1045237151017",
        appId: "1:1045237151017:web:a7169269e90da60c41b338",
        measurementId: "G-789NTGKZNW"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
</script>

<script type="text/javascript">
    window.onload = function () {
        render();
    };

    function render() {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container");
        recaptchaVerifier.render();
    }

    function phoneSendAuth() {
        var number = $("#number").val();

        firebase
            .auth()
            .signInWithPhoneNumber(number, window.recaptchaVerifier)
            .then(function (confirmationResult) {
                window.confirmationResult = confirmationResult;
                coderesult = confirmationResult;
                console.log(coderesult);
                $("#sentSuccess").text("Message Sent Successfully.");
                $("#sentSuccess").show();
            })
            .catch(function (error) {
                $("#error").text(error.message);
                $("#error").show();
            });
    }

    function codeverify() {
        var code = $("#verificationCode").val();
        window
            .confirmationResult
            .confirm(code)
            .then(function (result) {
                var user = result.user;
                console.log(user);
                $("#successRegsiter").text("you are register Successfully.");
                $("#successRegsiter").show();
            })
            .catch(function (error) {
                $("#error").text(error.message);
                $("#error").show();
            });
    }
</script>
@endsection




@section('content')
    <div class="content custommer">
        @include('client.customer.header')
        
        
        <div>
            <h1>Laravel Phone Number Authentication using Firebase - ItSolutionStuff.com</h1>
            <div class="alert alert-danger" id="error" style="display: none;"></div>
            <div class="card">
                <div class="card-header">
                    Enter Phone Number
                </div>
                <div class="card-body">
                    <div class="alert alert-success" id="sentSuccess" style="display: none;"></div>
                    <form>
                        <label>Phone Number:</label>
                        <input type="text" id="number" class="form-control" placeholder="+91********" />
                        <div id="recaptcha-container"></div>
                        <button type="button" class="btn btn-success" onclick="phoneSendAuth();">SendCode</button>
                    </form>
                </div>
            </div>
            <div class="card" style="margin-top: 10px;">
                <div class="card-header">
                    Enter Verification code
                </div>
                <div class="card-body">
                    <div class="alert alert-success" id="successRegsiter" style="display: none;"></div>
                    <form>
                        <input type="text" id="verificationCode" class="form-control" placeholder="Enter verification code" />
                        <button type="button" class="btn btn-success" onclick="codeverify();">Verify code</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

