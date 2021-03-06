@extends('admin._layout')

@section('title', 'Thêm tag')

@section('javascripts')
    <script src="{{ asset('js/library/jquery.min.js') }}"></script>
    <script src="{{ asset('js/library/jquery.validate.min.js') }}"></script>
    <script src="{{ asset('js/library/select2.min.js') }}"></script>
    <script src="{{ asset('js/library/wanakana.min.js') }}"></script>
    <script src="{{ asset('ckeditor/ckeditor.js') }}"></script>
    <script src="{{ asset('ckfinder/ckfinder.js') }}"></script>
    <script src="{{ asset('js/admin/validate.tag.min.js') }}"></script>
    <script src="{{ asset('js/admin/app.min.js') }}"></script>
    
@endsection



@section('page_title', $tag->id ? 'chỉnh sửa Tag' : 'thêm mới Tag' )

@section('content_admin')
<div class="page__tag admin-main-content">

    <div class="row">
        <div class="col-12">
            @if (Session::has(Config::get('constant.SAVE_ERROR')))
            <div class="alert alert-warning">
                {{ Session::get(Config::get('constant.SAVE_ERROR')) }}
            </div>
            @elseif (Session::has(Config::get('constant.SAVE_SUCCESS')))
            <div class="alert alert-success">
                lưu tag thành công
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
    <form class="row js-validate-form" action="{{ Route('ADMIN_SAVE_TAG', ['id' => $tag->id]) }}" method="POST">
        {!! csrf_field() !!}
        <input type="hidden" name="_slug_old" value="{{ $tag->slug }}">
        <div class="col-md-8">
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <h2 class="title">tên tag</h2>
                    <input name="name" type="text" value="{{ old('name', $tag->name ) }}" onblur="isExistSlug(this.value)" />
                    <input class="mt-2" name="slug" type="text" value="{{ old('slug', $tag->slug ) }}" onblur="isExistSlug(this.value)"/>
                </div>
            </div>
            
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <h2 class="title">excerpt -- đoạn trích</h2>
                    <textarea  class="height-80px" name="excerpt" cols="30" rows="10">{{ old('excerpt', $tag->excerpt) }}</textarea>
                </div>
            </div>
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <h2 class="title">content</h2>
                    <textarea name="content" id="editor1" class="h-100">{{ old('content', $tag->content) }}</textarea>
                </div>
            </div>
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <h2 class="title">site name SEO</h2>
                    <input name="site_name" type="text" value="{{ old('site_name', $tag->site_name) }}" />
                </div>
            </div>
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <h2 class="title">hình ảnh SEO</h2>
                    <div class="position-relative wrapper__selectImageWithCKFinder type-select-ckfinder__inline">
                        <input name="image_seo" class="img__outputCKFinder" type="text" value="{{ old('image_seo', $tag->image_seo) }}" />
                        <button class="btn bg-cyan bd-cyan text-white btn-input-append" 
                        type="button" onclick="selectImageWithCKFinder(this)">chọn ảnh</button>
                    </div>
                </div>
            </div>
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <h2 class="title">meta description</h2>
                    <textarea class="height-80px" name="description_seo" cols="30" rows="10">{{ old('description_seo', $tag->description_seo) }}</textarea>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <section class="pb-4">
                        <h2 class="title text-center">bấm lưu mới tag</h2>
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
                    <section class="pb-4 wrapper__selectImageWithCKFinder">
                        <h2 class="title text-center">thiết lập background</h2>
                        <div class="text-center">
                            <button type="button" onclick="selectImageWithCKFinder(this)"
                                class="btn btn-select-thumb">
                                Select background
                            </button>
                        </div>
                        <div class="group-control-img-ckfinder">
                            <input name="background" class="img__outputCKFinder thumbnail-topic pb-2" 
                                type="text" value="{{ old('background', $tag->background) }}" />
                        </div>
                    </section>
                </div>
            </div>
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <section class="pb-4 wrapper__selectImageWithCKFinder">
                        <h2 class="title text-center">setup thumbnail</h2>
                        <div class="text-center">
                            <button type="button" onclick="selectImageWithCKFinder(this)"
                                class="btn btn-select-thumb">
                                Select Thumbnail
                            </button>
                        </div>
                        <div class="group-control-img-ckfinder">
                            <input name="thumbnail" class="img__outputCKFinder thumbnail-topic pb-2" 
                                type="text" value="{{ old('thumbnail', $tag->thumbnail) }}" />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </form>
</div>
@endsection