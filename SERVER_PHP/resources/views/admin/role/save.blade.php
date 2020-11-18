@extends('admin._layout')

@section('title', 'Thêm role')

@section('javascripts')
    <script src="{{ asset('js/library/jquery.min.js') }}"></script>
    <script src="{{ asset('js/library/select2.min.js') }}"></script>
    <script src="{{ asset('js/admin/app.min.js') }}"></script>
    
@endsection


@section('page_title', $role->id ? 'chỉnh sửa role' : 'thêm mới role' )

@section('content_admin')
<div class="page__role admin-main-content">

    <div class="row">
        <div class="col-12">
            @if (Session::has(Config::get('constant.SAVE_ERROR')))
            <div class="alert alert-warning">
                {{ Session::get(Config::get('constant.SAVE_ERROR')) }}
            </div>
            @elseif (Session::has(Config::get('constant.SAVE_SUCCESS')))
            <div class="alert alert-success">
                lưu role thành công
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
    <form class="row js-validate-form" action="{{ Route('ADMIN_SAVE_ROLE', ['id' => $role->id]) }}" method="POST">
        {!! csrf_field() !!}
        <div class="col-md-8">
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <h2 class="title">tên role</h2>
                    <input name="name" type="text" value="{{ old('name', $role->name ) }}" onblur="isExistSlug(this.value)" />
                </div>
            </div>
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <h2 class="title">type</h2>
                    
                    <select name="type" class="js__single-select">
                        <option value="">chọn type</option>
                        <option @if(old('type', $role->type) == 'user') {{ 'selected' }} @endif value="user">
                            user
                        </option>
                        <option @if(old('type', $role->type) == 'admin') {{ 'selected' }} @endif value="admin">
                            admin
                        </option>
                    </select>
                    
                </div>
            </div>
        </div>
        <div class="col-md-4">

            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <section class="pb-4">
                        <h2 class="title text-center">bấm lưu mới topic</h2>
                        <div class="text-center">
                            <button type="submit" class="btn btn-save-data">
                                Lưu
                            </button>
                        </div>
                    </section>
                </div>
            </div>

        </div>
    </form>
</div>
@endsection