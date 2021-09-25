@extends('admin._layout')

@section('title', 'Thêm review')

@section('javascripts')
    <script src="{{ asset('js/library/jquery.min.js') }}"></script>
    <script src="{{ asset('js/library/jquery.validate.min.js') }}"></script>
    <script src="{{ asset('js/library/select2.min.js') }}"></script>
    <script src="{{ asset('ckeditor/ckeditor.js') }}"></script>
    <script src="{{ asset('ckfinder/ckfinder.js') }}"></script>
    <script src="{{ asset('js/admin/app.js') }}"></script>
    
@endsection



@section('page_title', $review->id ? 'chỉnh sửa review' : 'thêm mới review' )

@section('content_admin')
<div class="page__review admin-main-content">

    <div class="row">
        <div class="col-12">
            @if (Session::has(Config::get('constant.SAVE_ERROR')))
            <div class="alert alert-warning">
                {{ Session::get(Config::get('constant.SAVE_ERROR')) }}
            </div>
            @elseif (Session::has(Config::get('constant.SAVE_SUCCESS')))
            <div class="alert alert-success">
                lưu review thành công
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
    <form class="row js-validate-form" action="{{ Route('ADMIN_SAVE_REVIEW', ['id' => $review->id]) }}" method="POST">
        {!! csrf_field() !!}
        <div class="col-md-8 pr-0">
            
            <div class="row block-content">
                <div class="js-parent__create-slug col-12 bg-color-white shadows-1 px-3 py-3">
                    <h2 class="title">tên topic</h2>
                    <div class="input-control-link">
                        <input name="topic" type="text" value="{{ old('topic', $review->topic ) }}" />
                    </div>
                </div>
            </div>
            
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <h2 class="title">excerpt -- đoạn trích</h2>
                    <textarea  class="min-height-150px" name="excerpt" cols="30">{{ old('excerpt', $review->excerpt) }}</textarea>
                </div>
            </div>

            <div class="row block-content">
                <div class="js-parent__create-slug col-12 bg-color-white shadows-1 px-3 py-3">
                    <h2 class="title">tên author</h2>
                    <div class="input-control-link">
                        <input name="author" type="text" value="{{ old('author', $review->author ) }}" />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <section class="pb-4">
                        <h2 class="title text-center">bấm lưu mới review</h2>
                        <div class="text-center">
                            <button type="submit" class="btn btn-save-data">
                                Lưu
                            </button>
                        </div>
                    </section>
                </div>
            </div>
            <div class="row block-content">
                <div class="js-parent__create-slug col-12 bg-color-white shadows-1 px-3 py-3">
                    <h2 class="title">topic</h2>
                    <div class="input-control-link">
                        <input name="topic" type="text" value="{{ old('topic', $review->topic ) }}" />
                    </div>
                </div>
            </div>
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <section class="pb-4 wrapper__selectImageWithCKFinder">
                        <h2 class="title text-center">setup avatar</h2>
                        <div class="text-center">
                            <button type="button" onclick="selectImageWithCKFinder(this)"
                                class="btn btn-select-thumb">
                                Select avatar
                            </button>
                        </div>
                        <div class="group-control-img-ckfinder">
                            <input name="avatar" class="img__outputCKFinder thumbnail-topic mb-2" 
                                onblur="showImage__InputCKFinder( this.value, this )"
                                onclick="this.setSelectionRange(0, this.value.length)"
                                type="text" value="{{ old('avatar', $review->avatar) }}" />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </form>
</div>
@endsection