<form action="{{ Route('POST_LOGIN') }}" method="POST"  class="page__login__form form js-validate-form">
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
    <h2 class="form__title">đăng nhập</h2>
    
    <div class="form-group">

        <div class="input-group">
            <i class="icon fad fa-envelope"></i>
            <input name="email" ref="email" type="text" autoCorrect="off" autoCapitalize="none" 
                class="input-control jquery__append-out" placeholder="Email Address" 
                value="{{ old('email') }}"/>
        </div>
        @if($errors->has('email'))
            <div class="for-email text-color-danger text-left">{{ $errors->first('email') }}</div>
        @endif
        <div class="input-group">
            <i class="icon fad fa-lock-open-alt"></i>
            <input name="password" ref="password" type="password" 
                autoCorrect="off" autoCapitalize="none" placeholder="Password"
                class="input-control jquery__append-out" 
                value="{{ old('password') }}"/>
        </div>
        @if($errors->has('password'))
            <div class="for-password text-color-danger text-left">{{ $errors->first('password') }}</div>
        @endif
        <div class="forgot-password">
            <a href="{{ Route('FORGOT') }}" class="forgot-link">Quên password <i class="fad fa-question-circle"></i> </a>
        </div>
        <label class="container-checkbox">
            ghi nhớ đăng nhập
            <input name="remember" type="checkbox" {{ old('remember') ? 'checked' : '' }} >
            <span class="checkmark"></span>
        </label>
        <button type="submit" class="btn btn-login aqua-gradient-rgba">
            Đăng nhập
        </button>
    </div>
    <h4 class="description">
        chưa có tài khoản? Bạn muốn
        <a href="{{ Route('REGISTER') }}" class="register-inline">
            đăng ký
        </a>
    </h4>
</form>