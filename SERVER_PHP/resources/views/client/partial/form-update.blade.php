<form action="{{ Route('STORE_UPDATE', ['id' => $auth->id ]) }}@if (Request::get('token')){{ '?token='.Request::get('token') }}@endif" method="POST" class="page__register__form form js-validate-form">
    {!! csrf_field() !!}
    @if (Session::has(Config::get('constant.UPDATE_USER_ERROR')))
    <div class="alert alert-warning">
        {{ Session::get(Config::get('constant.UPDATE_USER_ERROR')) }}
    </div>
    @endif
    @foreach ($errors->all() as $error)
    <div class="alert alert-warning">
        {{ $error }}
    </div>
    @endforeach
    <h2 class="form__title">Cập nhật Tài khoản</h2>
    
    <div class="form-group">

        <div class="input-group">
            <i class="icon fad fa-users"></i>
            <input name="name" type="text" autoCorrect="off" autoCapitalize="none" 
            class="input-control jquery__append-out" placeholder="Nhập tên của bạn" 
            value="{{ old('name', $auth->name) }}"/>
        </div>
        @if($errors->has('name'))
            <div class="for-name text-color-danger text-left">{{ $errors->first('name') }}</div>
        @endif
        <div class="input-group">
            <i class="icon fad fa-envelope"></i>
            <input name="email" type="text" autoCorrect="off" autoCapitalize="none" 
            class="input-control jquery__append-out" placeholder="Địa chỉ email." 
            value="{{ old('email') }}"/>
        </div>
        @if($errors->has('email'))
            <div class="for-email text-color-danger text-left">{{ $errors->first('email') }}</div>
        @endif
        @if (old('phone', $auth->phone))
        <div class="input-group opacity-medium">
            <i class="icon fad fa-phone"></i>
            <input name="phone" type="text" autoCorrect="off" autoCapitalize="none" 
            class="input-control" readonly="true"
            value="{{ old('phone', $auth->phone) }}"/>
        </div>
        @endif
        
        <div class="input-group">
            <i class="icon fad fa-lock-open-alt"></i>
            <input id="password" name="password" type="password" autoCorrect="off" autoCapitalize="none" 
            class="input-control jquery__append-out" placeholder="Mật khẩu" />
        </div>
        @if($errors->has('password'))
            <div class="for-password text-color-danger text-left">{{ $errors->first('password') }}</div>
        @endif

        <div class="input-group">
            <i class="icon fad fa-retweet"></i>
            <input name="confirm_password" type="password" autoCorrect="off" autoCapitalize="none" 
            class="input-control jquery__append-out" placeholder="Nhập lại mật khẩu" />
        </div>
        @if($errors->has('confirm_password'))
            <div class="for-confirm_password text-color-danger text-left">{{ $errors->first('confirm_password') }}</div>
        @endif
        <button type="submit" class="btn btn-register aqua-gradient-rgba">
            Cập Nhật
        </button>
    </div>
    <h4 class="description">
        Bạn muốn đăng nhập tài khoản khác?
        <a href="{{ Route('LOGOUT') }}" class="login-inline">
            đăng nhập
        </a>
    </h4>
</form>