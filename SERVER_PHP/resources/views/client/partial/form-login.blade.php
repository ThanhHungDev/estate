<form action="{{ Route('POST_LOGIN') }}" method="POST"  class="page__login__form form js-validate-form">
    {!! csrf_field() !!}
    @if (Session::has(Config::get('constant.LOGIN_ERROR')))
    <div class="alert alert-warning">
        {{ Session::get(Config::get('constant.LOGIN_ERROR')) }}
    </div>
    @endif
    @if (Session::has(Config::get('constant.REGISTER_SUCCESS')))
    <div class="alert alert-success">
        Đăng Ký Thành Công! Vui lòng đăng nhập để sử dụng dịch vụ
    </div>
    @endif
    @if($errors->any())
    {{-- <div class="alert alert-danger">
        đã có lỗi, vui lòng kiểm tra lại
    </div> --}}
    @foreach ($errors->all() as $error)
    <div class="alert alert-warning">
        {{ $error }}
    </div>
    @endforeach
    @endif
    
    <h2 class="form__title">đăng nhập</h2>
    
    <div class="form-group">

        <div class="input-group">
            <i class="icon fad fa-envelope"></i>
            <input name="email" ref="email" type="text" autoCorrect="off" autoCapitalize="none" 
                class="input-control jquery__append-out" placeholder="Địa chỉ email" 
                value="{{ old('email') }}"/>
        </div>
        @if($errors->has('email'))
            <div class="for-email text-color-danger text-left">{{ $errors->first('email') }}</div>
        @endif
        <div class="input-group">
            <i class="icon fad fa-lock-open-alt"></i>
            <input name="password" ref="password" type="password" 
                autoCorrect="off" autoCapitalize="none" placeholder="Mật khẩu"
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
            Ghi nhớ đăng nhập
            <input name="remember" type="checkbox" {{ old('remember') ? 'checked' : '' }} >
            <span class="checkmark"></span>
        </label>
        <button type="submit" class="btn btn-login aqua-gradient-rgba">
            Đăng nhập
        </button>
    </div>
    <div class="otherlogin">
        <p class="text-xs text-color-grey text-center py-2">Hoặc đăng nhập bằng: </p>
        <div class="otherlogin__btn">
            <a href="{{ 1 }}" class="otherlogin__btn--item otherlogin__btn--phone">
                <i class="fas fa-phone"></i>
            </a>
            <a href="{{ 1 }}" class="otherlogin__btn--item otherlogin__btn--google">
                <i class="fab fa-google"></i>
            </a>
            <a href="{{ 1 }}" class="otherlogin__btn--item otherlogin__btn--facebook">
                <i class="fab fa-facebook-f"></i>
            </a>
        </div>
    </div>
    <h4 class="description">
        Chưa có tài khoản? Bạn muốn
        <a href="{{ Route('REGISTER') }}" class="register-inline">
            đăng ký
        </a>
    </h4>
</form>