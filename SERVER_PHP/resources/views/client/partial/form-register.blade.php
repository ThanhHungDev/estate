<form action="{{ 1 }}" class="page__register__form form">
    {!! csrf_field() !!}
    @if (Session::has(Config::get('constant.REGISTER_ERROR')))
    <div class="alert alert-warning">
        {{ Session::get(Config::get('constant.REGISTER_ERROR')) }}
    </div>
    @endif
    @if($errors->any())
    <div class="alert alert-danger">
        đã có lỗi, vui lòng kiểm tra lại
    </div>
    @endif
    <h2 class="form__title">đăng ký</h2>
    
    <div class="form-group">

        <div class="input-group">
            <i class="icon fad fa-envelope"></i>
            <input name="email" ref="email" type="text" autoCorrect="off" autoCapitalize="none" class="input-control" placeholder="Địa chỉ email" />
        </div>
        @if($errors->has('email'))
            <div class="text-color-danger text-left">{{ $errors->first('email') }}</div>
        @endif
        <div class="input-group">
            <i class="icon fad fa-lock-open-alt"></i>
            <input name="password" type="password" autoCorrect="off" autoCapitalize="none" class="input-control" placeholder="Mật khẩu" />
        </div>
        @if($errors->has('password'))
            <div class="text-color-danger text-left">{{ $errors->first('password') }}</div>
        @endif

        <div class="input-group">
            <i class="icon fad fa-retweet"></i>
            <input name="confirm_password" type="password" autoCorrect="off" autoCapitalize="none" class="input-control" placeholder="Nhập lại mật khẩu" />
        </div>
        @if($errors->has('confirm_password'))
            <div class="text-color-danger text-left">{{ $errors->first('confirm_password') }}</div>
        @endif
        
        <div class="user-type position-relative">
            <h5 class="user-type__title">bạn là đăng kí để: </h5>
            <i class="user-type__icon far fa-question-square"></i>
            @if(Config::get('constant.ROLE'))
            <label class="container__radio">Đăng bán
                <input type="radio" name="type" value="{{ Config::get('constant.ROLE.SALER') }}" name="role_id" checked="checked" />
                <span class="checkmark"></span>
            </label>
            <label class="container__radio">Tìm mua
                <input type="radio" name="type" value="{{ Config::get('constant.ROLE.CUSTOMMER') }}" name="role_id" />
                <span class="checkmark"></span>
            </label>
            @endif
        </div>


        <button type="submit" class="btn btn-register aqua-gradient-rgba">
            Đăng ký
        </button>
    </div>
    <h4 class="description">
        Bạn đã có tài khoản? Bạn muốn
        <a href="{{ Route('LOGIN') }}" class="login-inline">
            đăng nhập
        </a>
    </h4>
</form>