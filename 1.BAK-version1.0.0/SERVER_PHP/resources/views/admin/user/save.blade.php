@extends('admin._layout')

@section('title', 'Thêm user')

@section('javascripts')
    <script src="{{ asset('js/library/jquery.min.js') }}"></script>
    <script src="{{ asset('js/library/jquery.validate.min.js') }}"></script>
    <script src="{{ asset('js/library/select2.min.js') }}"></script>
    <script src="{{ asset('js/admin/validate.user.min.js') }}"></script>
    <script src="{{ asset('ckfinder/ckfinder.js') }}"></script>
    <script src="{{ asset('js/admin/app.js') }}"></script>
    
@endsection


@section('page_title', $user->id ? 'chỉnh sửa user' : 'thêm mới user' )

@section('content_admin')
<div class="page__user admin-main-content">

    <div class="row">
        <div class="col-12">
            @if (Session::has(Config::get('constant.SAVE_ERROR')))
            <div class="alert alert-warning">
                {{ Session::get(Config::get('constant.SAVE_ERROR')) }}
            </div>
            @elseif (Session::has(Config::get('constant.SAVE_SUCCESS')))
            <div class="alert alert-success">
                lưu user thành công
            </div>
            @endif
            @if(!empty($errors->all()))
                @foreach ($errors->all() as $error)
                <div class="alert alert-warning">
                    {{ $error }}
                </div>
                @endforeach
            @endif
        </div>
    </div>
    <form class="row js-validate-form" action="{{ Route('ADMIN_SAVE_USER', ['id' => $user->id]) }}" method="POST">
        {!! csrf_field() !!}
        <div class="col-md-8">
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <h2 class="title">tên user</h2>
                    <input name="name" type="text" value="{{ old('name', $user->name ) }}" />
                </div>
            </div>
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <h2 class="title">email</h2>
                    <input name="email" type="text" value="{{ old('email', $user->email) }}" />
                </div>
            </div>
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <h2 class="title">avatar</h2>
                    <div class="position-relative wrapper__selectImageWithCKFinder type-select-ckfinder__inline">
                        <input name="avatar" class="img__outputCKFinder jquery__append-out" type="text" 
                            onblur="showImage__InputCKFinder( this.value, this )"
                            onclick="this.setSelectionRange(0, this.value.length)"
                            value="{{ old('avatar', $user->avatar) }}" />
                        <button class="btn bg-cyan bd-cyan text-white btn-input-append" 
                        type="button" onclick="selectImageWithCKFinder(this)">chọn ảnh</button>
                    </div>
                </div>
            </div>
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <h2 class="title">email bạn nhận tin nhắn khi đăng bài</h2>
                    <input name="contact" type="text" value="{{ old('contact', $user->contact) }}" />
                </div>
            </div>
            @if(!$user->id)
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <h2 class="title">password</h2>
                    <input name="password" type="text" />
                </div>
            </div>
            @endif
        </div>
        <div class="col-md-4">
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <section class="pb-4">
                        <h2 class="title text-center">bấm lưu mới user</h2>
                        <div class="text-center">
                            <button type="submit" class="btn btn-save-data">
                                Lưu
                            </button>
                        </div>
                    </section>
                </div>
            </div>
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <section class="pb-4">
                        <h2 class="title text-center">chọn role</h2>
                        @if($roles)
                        <select name="role_id" class="js__single-select">
                            <option value="">chọn roles</option>
                            @foreach($roles as $role)
                            <option @if(old('role_id', $user->role_id) == $role->id) {{ 'selected' }} @endif
                            value="{{ $role->id }}">{{ $role->name }}</option>
                            @endforeach
                        </select>
                        @endif
                    </section>
                </div>
            </div>
            
        </div>
    </form>
</div>
@endsection