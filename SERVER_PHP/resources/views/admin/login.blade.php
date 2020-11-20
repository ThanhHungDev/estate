<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> login blog Trương thanh hùng </title>
    {{-- <meta name="robots" content="index, follow" /> --}}
    <meta name="robots" content="noindex" />
    <meta name="googlebot" content="noindex" />

    <meta http-equiv="content-language" content="vi" />
    <meta property="og:title" content="@yield('title')" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{{ asset('/') }}" />
    <meta property="og:image" content="@yield('image_seo')" />
    <meta property="og:description" content="@yield('description')" />
    <meta name="description" content="@yield('description')">
    <meta name="keywords" content="@yield('keywords')">

    <link rel="icon" type="image/png" sizes="192x192"  href="{{ asset('android-icon-192x192.png' . Config::get('app.version')) }}"/>
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('favicon-32x32.png' . Config::get('app.version')) }}">
    <link rel="icon" type="image/png" sizes="96x96" href="{{ asset('favicon-96x96.png' . Config::get('app.version')) }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('favicon-16x16.png' . Config::get('app.version')) }}">
    <link rel="icon" type="image/png" href="{{ asset('favicon.ico' . Config::get('app.version')) }}">
    <link rel="stylesheet" href="{{ asset('css/animate.min.css' . Config::get('app.version'))}}">
    <link rel="stylesheet" href="{{ asset('css/awesome.min.css' . Config::get('app.version'))}}">
    <link rel="stylesheet" href="{{ asset('css/client.min.css' . Config::get('app.version'))}}">
    <link rel="stylesheet" href="{{ asset('css/library.min.css' . Config::get('app.version'))}}">
    <link rel="stylesheet" href="{{ asset('css/material.min.css' . Config::get('app.version'))}}">
    <link rel="stylesheet" href="{{ asset('css/admin.min.css' . Config::get('app.version'))}}">

    @yield('stylesheets')

    
</head>
<body>

    <div class="login-admin-page blue-gradient-rgba animated fast fadeIn">
        <div class="login-form-wrapper">
            <form class="login-form" action="{{ Route('ADMIN_POST_LOGIN') }}" method="POST" >
                {!! csrf_field() !!}
                @if (Session::has(Config::get('constant.LOGIN_ERROR')))
                <div class="alert alert-warning">
                    {{ Session::get(Config::get('constant.LOGIN_ERROR')) }}
                </div>
                @endif
                @if($errors->any())
                <div class="alert alert-danger">
                    đã có lỗi, vui lòng kiểm tra lại
                </div>
                @endif
                <h1 class="title"> Welcome Admin </h1>
                <div class="input-group">
                    <i class="hero-icon hero-email-check-outline"></i>
                    <input name="email" ref="email" type="text" autoCorrect="off" autoCapitalize="none" class="input-control" placeholder="Email Address" />
                </div>
                @if($errors->has('email'))
                    <div class="text-color-danger text-left">{{ $errors->first('email') }}</div>
                @endif
                <div class="input-group">
                    <i class="hero-icon hero-lock-outline"></i>
                    <input name="password" ref="password" type="password" autoCorrect="off" autoCapitalize="none" class="input-control" placeholder="Password" />
                </div>
                @if($errors->has('password'))
                    <div class="text-color-danger text-left">{{ $errors->first('password') }}</div>
                @endif
                <button type="submit" class="btn btn-login aqua-gradient-rgba">
                    Log In Admin
                </button>
            </form>
        </div>
    </div>
    <button onclick="getLocation()">Try It</button>

<p id="demo"></p>

<script>

var x=document.getElementById("demo");
function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition,showError);
    }
  else{x.innerHTML="Geolocation is not supported by this browser.";}
  }

function showPosition(position)
  {
  var lat=position.coords.latitude;
  var lon=position.coords.longitude;
  var latlon=new google.maps.LatLng(lat, lon)
  var mapholder=document.getElementById('mapholder')
  mapholder.style.height='250px';
  mapholder.style.width='100%';

  var myOptions={
  center:latlon,zoom:14,
  mapTypeId:google.maps.MapTypeId.ROADMAP,
  mapTypeControl:false,
  navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
  };
  var map=new google.maps.Map(document.getElementById("mapholder"),myOptions);
  var marker=new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
  }

function showError(error)
  {
  switch(error.code) 
    {
    case error.PERMISSION_DENIED:
      x.innerHTML="User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML="Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML="The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML="An unknown error occurred."
      break;
    }
  }
</script>
</body>
</html>

    