<form action="{{ 1 }}" class="page__login__form form">
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
            <input name="email" ref="email" type="text" autoCorrect="off" autoCapitalize="none" class="input-control" placeholder="Email Address" />
        </div>
        @if($errors->has('email'))
            <div class="text-color-danger text-left">{{ $errors->first('email') }}</div>
        @endif
        <div class="input-group">
            <i class="icon fad fa-lock-open-alt"></i>
            <input name="password" ref="password" type="password" autoCorrect="off" autoCapitalize="none" class="input-control" placeholder="Password" />
        </div>
        @if($errors->has('password'))
            <div class="text-color-danger text-left">{{ $errors->first('password') }}</div>
        @endif
        <div class="forgot-password">
            <a href="{{ Route('FORGOT') }}" class="forgot-link">Quên password <i class="fad fa-question-circle"></i> </a>
        </div>
        <label class="container-checkbox">
            ghi nhớ đăng nhập
            <input type="checkbox" checked="checked">
            <span class="checkmark"></span>
        </label>
        <button type="submit" class="btn btn-login aqua-gradient-rgba">
            Đăng nhập
        </button>
    </div>
    <h4 class="description">
        chưa có tài khoản? Bạn muốn
        <a href="{{ Route('REGISTER_SALER') }}" class="register-inline">
            đăng ký đăng bán
        </a>
        hoặc
        <a href="{{ Route('REGISTER_CUSTOMMER') }}" class="register-inline">
            đăng ký tìm mua
        </a>
    </h4>
</form>